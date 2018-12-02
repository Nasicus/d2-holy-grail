import * as React from "react";
import { Input, createStyles, WithStyles, withStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon/Icon";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { ChangeEvent } from "react";
import { IHolyGrailData } from "../../../common/definitions/IHolyGrailData";
import { Util } from "../../../common/utils/Util";
import { IEthGrailData } from "../../../common/definitions/IEthGrailData";
import { Item } from "../../../common/definitions/IItems";
import * as Mousetrap from "mousetrap";
require("mousetrap-global-bind");

export interface ISearchBoxProps {
  data: IHolyGrailData | IEthGrailData;
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

    const result = Util.findData(
      (k: string, i: Item) =>
        k.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
        (i.note && i.note.toLowerCase().indexOf(value.toLowerCase()) > -1),
      data
    );
    this.props.onSearchResult(result);
  };
}

export default withStyles(styles)(SearchBox);
