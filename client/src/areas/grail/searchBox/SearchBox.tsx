import * as React from "react";
import { Input, createStyles, WithStyles, withStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon/Icon";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { ChangeEvent } from "react";
import { IHolyGrailData } from "../../../common/definitions/union/IHolyGrailData";
import { Util } from "../../../common/utils/Util";
import { Item } from "../../../common/definitions/union/Item";
import * as Mousetrap from "mousetrap";
import { AllBusinessGrailsType } from "../../../common/definitions/business/AllBusinessGrailsType";
import { Runeword } from "../../../common/definitions/business/Runeword";
require("mousetrap-global-bind");

export interface ISearchBoxProps {
  data: AllBusinessGrailsType;
  onSearchResult: (result: Partial<IHolyGrailData>) => any;
}

export interface ISearchBoxState {
  searchValue: string;
}

const styles = () =>
  createStyles({
    searchBox: {
      width: 300
    },
    icon: {
      cursor: "pointer",
      verticalAlign: "middle"
    }
  });

type Props = ISearchBoxProps & WithStyles<typeof styles>;

class SearchBox extends React.Component<Props, ISearchBoxState> {
  private onSearch$ = new Subject<string>();
  private searchBoxRef: HTMLInputElement;

  public constructor(props: Props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  public componentDidMount() {
    this.onSearch$.pipe(debounceTime(300)).subscribe(this.onSearch);
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
      <div>
        <Input
          inputRef={e => (this.searchBoxRef = e)}
          className={this.props.classes.searchBox}
          onChange={this.onInputChange}
          value={this.state.searchValue}
        />
        <Icon className={this.props.classes.icon}>search</Icon>
      </div>
    );
  }

  private onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    this.setState({ searchValue });
    this.onSearch$.next(searchValue);
  };

  private onSearch = (value: string) => {
    const data = this.props.data;
    if (!value) {
      this.props.onSearchResult(null);
      return;
    }

    const result = Util.findData((k: string, i: Item) => this.isMatch(k, i, value.toLowerCase()), data);
    this.props.onSearchResult(result);
  };

  private isMatch = (name: string, item: Item | Runeword, searchValue: string): boolean => {
    let isMatch =
      name.toLowerCase().indexOf(searchValue) > -1 || (item.note && item.note.toLowerCase().indexOf(searchValue) > -1);

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

    const splitWords = searchValue.split(" ");
    return splitWords.every(rune => runeword.runes.some(r => r.toLowerCase() === rune));
  };
}

export default withStyles(styles)(SearchBox);
