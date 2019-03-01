import * as React from "react";
import { useObservable } from "rxjs-hooks";
import { Api } from "../common/utils/Api";
import CircularProgress from "@material-ui/core/CircularProgress";

export const GrailStatistics: React.FunctionComponent<{}> = () => {
  const response = useObservable(() => Api.getStatistics());

  if (!response) {
    return <CircularProgress size={100} />;
  }

  if (response.status !== 200) {
    return <div>Error when trying to get statistics!</div>;
  }

  const stats = response.data;
  const aDayAgo = new Date();
  aDayAgo.setDate(aDayAgo.getDate() - 1);

  return (
    <div>
      <div>Total Grails: {stats.totalGrails}</div>
      <div>Grail Updates in the last 7 days: {stats.modifiedStats.length}</div>
      <div>Grail Updates today: {stats.modifiedStats.filter(s => new Date(s.modified) >= aDayAgo).length}</div>
    </div>
  );
};
