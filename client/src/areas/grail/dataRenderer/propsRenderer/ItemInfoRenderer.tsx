import * as React from "react";
import { Api } from "../../../../common/utils/Api";
import Typography from "@material-ui/core/Typography";
import { IItemInfo } from "../../../../common/definitions/api/IItemInfo";
import {
  ItemInfosContainer,
  ItemInfosDetails,
  NoMarginList
} from "./CommonStyles";

export interface IItemInfoRendererProps {
  itemName: string;
}

interface IItemInfoRendererState {
  itemInfos?: IItemInfo;
}

export class ItemInfoRenderer extends React.PureComponent<
  IItemInfoRendererProps,
  IItemInfoRendererState
> {
  public constructor(props: IItemInfoRendererProps) {
    super(props);
    this.state = {};
  }

  public componentDidMount(): void {
    Api.getItem(this.props.itemName).subscribe(res =>
      this.setState({ itemInfos: res.data })
    );
  }

  public render() {
    const itemInfos = this.state.itemInfos;

    if (!itemInfos) {
      return null;
    }

    return (
      <ItemInfosContainer>
        <Typography variant="h6">Item Info</Typography>
        <ItemInfosDetails>
          <div>
            {itemInfos.image && (
              <img
                src={`${process.env.PUBLIC_URL}/images/${itemInfos.image}`}
                alt={this.props.itemName}
              />
            )}
            <div>{itemInfos.type}</div>
          </div>
          <div>
            <NoMarginList>
              {itemInfos.props.map(p => (
                <li key={p}>{p}</li>
              ))}
            </NoMarginList>
          </div>
        </ItemInfosDetails>
      </ItemInfosContainer>
    );
  }
}
