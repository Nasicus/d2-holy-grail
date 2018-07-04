import * as React from "react";
import { Input, StyleRulesCallback, WithStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon/Icon";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { ChangeEvent } from "react";
import { withStyles } from "@material-ui/core/styles";
import { IHolyGrailData } from "../../../common/IHolyGrailData";

export interface ISearchBoxProps {
  data: IHolyGrailData;
  onSearchResult: (result: Partial<IHolyGrailData>) => any;
}

export interface ISearchBoxState {
  searchValue: string;
}

type ClassesType = "searchBox" | "icon";
type Props = ISearchBoxProps & WithStyles<ClassesType>;

const styles: StyleRulesCallback<ClassesType> = () => ({
  searchBox: {
    width: 300
  },
  icon: {
    cursor: "pointer",
    verticalAlign: "middle"
  }
});

class SearchBox extends React.Component<Props, ISearchBoxState> {
  private onSearch$ = new Subject<string>();

  public constructor(props: Props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  public componentDidMount() {
    this.onSearch$.pipe(debounceTime(300)).subscribe(this.onSearch);
  }

  public render() {
    return (
      <div>
        <Input className={this.props.classes.searchBox} onChange={this.onInputChange} value={this.state.searchValue} />
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

    const dataResult = {};
    this.findData(value.toLowerCase(), data, () => dataResult);

    this.props.onSearchResult(dataResult);
  };

  private findData(searchValue: string, dataToSearch: any, dataResult: () => any) {
    if (!dataToSearch) {
      return;
    }

    Object.keys(dataToSearch).forEach(key => {
      if (key.toLowerCase().indexOf(searchValue) > -1) {
        dataResult()[key] = dataToSearch[key];
      } else {
        this.findData(searchValue, dataToSearch[key], () => {
          const parentObj = dataResult();
          return parentObj[key] || (parentObj[key] = {});
        });
      }
    });
  }
}

export default withStyles(styles)<ISearchBoxProps>(SearchBox);
