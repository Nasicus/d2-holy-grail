import { parse, stringify } from "query-string";
import { RouteComponentProps } from "react-router-dom";
import { TabType } from "./areas/grail/TabType";
import { PartyTabType } from "./areas/party/PartyTabType";
import { GrailMode } from "./areas/grail/GrailMode";

export interface IGrailAreaRouterParams {
  address: string;
  grailMode: string;
  tabType?: TabType;
}

export interface IPartyAreaRouterParams {
  address: string;
  tabType?: PartyTabType;
}

export interface IGrailAreaQueryObject {
  itemName?: string;
  missingOnly?: string;
  q?: string;
}

export class RouteManager {
  public static updateQuery(
    props: RouteComponentProps<IGrailAreaRouterParams>,
    newQuery: IGrailAreaQueryObject
  ) {
    props.history.push({
      search: stringify(newQuery)
    });
  }

  public static getQuery(
    props: RouteComponentProps<IGrailAreaRouterParams>
  ): IGrailAreaQueryObject {
    return parse(props.location.search) as IGrailAreaQueryObject;
  }

  public static updateTabType(
    props: RouteComponentProps<IGrailAreaRouterParams>,
    tabType: TabType,
    newQuery?: IGrailAreaQueryObject
  ) {
    const params = props.match.params;

    props.history.push({
      pathname: `/${params.address}/${params.grailMode ||
        GrailMode.Holy}/${tabType || TabType.Statistics}`,
      search: newQuery ? stringify(newQuery) : props.location.search
    });
  }

  public static updatePartyTabType(
    props: RouteComponentProps<IPartyAreaRouterParams>,
    tabType: PartyTabType
  ) {
    const params = props.match.params;

    props.history.push({
      pathname: `/party/${params.address}/${tabType ||
        PartyTabType.Leaderboard}`
    });
  }
}
