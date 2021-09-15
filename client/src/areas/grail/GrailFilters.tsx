import * as React from "react";
import { ChangeEvent } from "react";
import { Checkbox, Input } from "@material-ui/core";
import Icon from "@material-ui/core/Icon/Icon";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Util } from "../../common/utils/Util";
import { Item } from "../../common/definitions/union/Item";
import * as Mousetrap from "mousetrap";
import { AllBusinessGrailsType } from "../../common/definitions/business/AllBusinessGrailsType";
import { Runeword } from "../../common/definitions/business/Runeword";
import styled from "styled-components";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { TabType } from "./TabType";
import { IGrailAreaRouterParams, RouteManager } from "../../RouteManager";
import { GrailManager } from "./GrailManager";

require("mousetrap-global-bind");

export enum FilterRenderMode {
  Normal,
  Search
}

export interface IFilterResult {
  data: Partial<AllBusinessGrailsType>;
  renderMode: FilterRenderMode;
}

export interface IGrailFilterProps {
  data: AllBusinessGrailsType;
  onFilterResult: (result: IFilterResult) => any;
}

interface IGrailFilterState {
  searchValue: string;
  missingItemsOnly?: boolean;
}

type Props = IGrailFilterProps & RouteComponentProps<IGrailAreaRouterParams>;

class GrailFiltersInternal extends React.Component<Props, IGrailFilterState> {
  private onSearch$ = new Subject<string>();
  private searchBoxRef: HTMLInputElement;

  private get useCustomSearchShortcut() {
    return (
      GrailManager.current.isReadOnly ||
      !GrailManager.current.settings.disableCustomSearchShortcut
    );
  }

  public constructor(props: Props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  public componentDidMount() {
    this.onSearch$
      .pipe(debounceTime(300))
      .subscribe(() => this.handleFilterChanged());
    this.useCustomSearchShortcut &&
      Mousetrap.bindGlobal(["command+f", "ctrl+f"], () => {
        this.searchBoxRef.focus();
        this.searchBoxRef.select();
        return false;
      });

    const query = RouteManager.getQuery(this.props);
    if (query.q || query.missingOnly) {
      this.setState(
        {
          missingItemsOnly: query.missingOnly === "true",
          searchValue: query.q || null
        },
        () => this.handleFilterChanged()
      );
    }
  }

  public componentWillMount(): void {
    this.useCustomSearchShortcut && Mousetrap.unbind(["command+f", "ctrl+f"]);
  }

  public render() {
    return (
      <FilterContainer>
        <div>
          <div>
            <SearchBox
              inputRef={e => (this.searchBoxRef = e)}
              onChange={this.onInputChange}
              value={this.state.searchValue || ""}
            />
            <SearchIcon>search</SearchIcon>
          </div>
          <div>
            <MissingItemsCheckbox
              checked={!!this.state.missingItemsOnly}
              onChange={this.onMissingItemsOnlyChange}
            />
            <MissingItemsCheckboxLabel>
              Missing items only
            </MissingItemsCheckboxLabel>
          </div>
        </div>
      </FilterContainer>
    );
  }

  private onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    this.setState({ searchValue });
    this.onSearch$.next(searchValue);
  };

  private onMissingItemsOnlyChange = (e: ChangeEvent<HTMLInputElement>) => {
    const missingItemsOnly = e.target.checked;
    this.setState({ missingItemsOnly }, this.handleFilterChanged);
  };

  private handleFilterChanged = () => {
    const { searchValue, missingItemsOnly } = this.state;

    this.pushRoute(searchValue, missingItemsOnly);

    if (!searchValue && !missingItemsOnly) {
      this.props.onFilterResult(null);
      return;
    }

    let result = this.props.data as any;
    if (searchValue) {
      result = Util.findData(
        (k: string, i: any) => this.isSearchMatch(k, i, searchValue),
        result
      );
    }

    // we execute the find a second time, reason is that it's not really possible to do in one turn
    // because when we search for "normal" we want all normal items AND also all items which are not found
    // performance wise it shouldn't matter at all
    if (missingItemsOnly) {
      result = Util.findData(
        (k: string, i: any) => Util.isItem(i) && !i.wasFound,
        result
      );
    }

    this.props.onFilterResult({
      data: result,
      renderMode: searchValue
        ? FilterRenderMode.Search
        : FilterRenderMode.Normal
    } as IFilterResult);
  };

  private pushRoute(searchValue: string, missingItemsOnly: boolean) {
    const query = RouteManager.getQuery(this.props);

    delete query.q;
    delete query.missingOnly;

    if (searchValue) {
      query.q = searchValue;
    }

    if (missingItemsOnly) {
      query.missingOnly = missingItemsOnly.toString();
    }

    RouteManager.updateTabType(
      this.props,
      searchValue
        ? TabType.SearchResults
        : this.props.match.params.tabType !== TabType.SearchResults
        ? this.props.match.params.tabType
        : null,
      query
    );
  }

  private isSearchMatch = (
    name: string,
    item: Item | Runeword,
    searchValue: string
  ): boolean => {
    searchValue = searchValue.toLowerCase();

    let isMatch =
      name.toLowerCase().indexOf(searchValue) > -1 ||
      (item.note && item.note.toLowerCase().indexOf(searchValue) > -1) ||
      (item.note && searchValue === "note") ||
      (item.isPerfect && searchValue === "perfect");

    if (isMatch || !(item instanceof Runeword)) {
      return isMatch;
    }

    const runeword = item as Runeword;
    isMatch =
      runeword.sockets.toString() === searchValue ||
      runeword.types.some(t => t.toLowerCase() === searchValue) ||
      runeword.detailTypes.some(t => t.toLowerCase() === searchValue);

    if (isMatch) {
      return true;
    }

    return searchValue
      .split(" ")
      .every(rune => runeword.runes.some(r => r.toLowerCase() === rune));
  };
}

export const GrailFilters = withRouter(GrailFiltersInternal);

const MissingItemsCheckbox = styled(Checkbox)`
  && {
    padding-left: 0;
  }
`;

const MissingItemsCheckboxLabel = styled.span`
  vertical-align: middle;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBox = styled(Input)`
  && {
    width: 300px;
  }
`;

const SearchIcon = styled(Icon)`
  && {
    cursor: pointer;
    vertical-align: middle;
  }
`;
