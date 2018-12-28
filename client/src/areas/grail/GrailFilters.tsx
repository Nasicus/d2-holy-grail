import * as React from "react";
import { ChangeEvent } from "react";
import { Checkbox, Input } from "@material-ui/core";
import Icon, { IconProps } from "@material-ui/core/Icon/Icon";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Util } from "../../common/utils/Util";
import { Item } from "../../common/definitions/union/Item";
import * as Mousetrap from "mousetrap";
import { AllBusinessGrailsType } from "../../common/definitions/business/AllBusinessGrailsType";
import { Runeword } from "../../common/definitions/business/Runeword";
import styled from "src/TypedStyledComponents";
import { CheckboxProps } from "@material-ui/core/Checkbox";
import { InputProps } from "@material-ui/core/Input";
import { IGrailFilterProps } from "./GrailFilters";

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

export class GrailFilters extends React.Component<IGrailFilterProps, IGrailFilterState> {
  private onSearch$ = new Subject<string>();
  private searchBoxRef: HTMLInputElement;

  public constructor(props: IGrailFilterProps) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  public componentDidMount() {
    this.onSearch$.pipe(debounceTime(300)).subscribe(() => this.handleFilterChanged());
    Mousetrap.bindGlobal(["command+f", "ctrl+f"], () => {
      this.searchBoxRef.focus();
      this.searchBoxRef.select();
      return false;
    });
  }

  public componentWillMount(): void {
    Mousetrap.unbind(["command+f", "ctrl+f"]);
  }

  public render() {
    return (
      <FilterContainer>
        <div>
          <div>
            <SearchBox
              inputRef={e => (this.searchBoxRef = e)}
              onChange={this.onInputChange}
              value={this.state.searchValue}
            />
            <SearchIcon>search</SearchIcon>
          </div>
          <div>
            <MissingItemsCheckbox onChange={this.onMissingItemsOnlyChange} />
            <MissingItemsCheckboxLabel>Missing items only</MissingItemsCheckboxLabel>
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

    if (!searchValue && !missingItemsOnly) {
      this.props.onFilterResult(null);
      return;
    }

    let result = this.props.data as any;
    if (searchValue) {
      result = Util.findData((k: string, i: any) => this.isSearchMatch(k, i, searchValue), result);
    }

    // we execute the find a second time, reason is that it's not really possible to do in one turn
    // because when we search for "normal" we want all normal items AND also all items which are not found
    // performance wise it shouldn't matter at all
    if (missingItemsOnly) {
      result = Util.findData((k: string, i: any) => Util.isItem(i) && !i.wasFound, result);
    }

    this.props.onFilterResult({
      data: result,
      renderMode: searchValue ? FilterRenderMode.Search : FilterRenderMode.Normal
    } as IFilterResult);
  };

  private isSearchMatch = (name: string, item: Item | Runeword, searchValue: string): boolean => {
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

    return searchValue.split(" ").every(rune => runeword.runes.some(r => r.toLowerCase() === rune));
  };
}

const MissingItemsCheckbox: React.ComponentType<CheckboxProps> = styled(Checkbox)`
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

const SearchBox: React.ComponentType<InputProps> = styled(Input)`
  && {
    width: 300px;
  }
`;

const SearchIcon: React.ComponentType<IconProps> = styled(Icon)`
  && {
    cursor: pointer;
    vertical-align: middle;
  }
`;
