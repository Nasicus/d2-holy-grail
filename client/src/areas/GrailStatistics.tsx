import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect, useState } from "react";
import { Api } from "../common/utils/Api";

export const GrailStatistics: React.FunctionComponent<{}> = () => {
  const [hasError, setHasError] = useState<boolean>();
  const [stats, setStats] = useState<any>();

  useEffect(() => {
    const sub = Api.getStatistics().subscribe({
      next: (d) => setStats(d?.data ?? null),
      error: () => setHasError(true),
    });
    return () => sub.unsubscribe();
  }, []);

  if (hasError) {
    return <div>Error when trying to get statistics!</div>;
  }

  if (stats === undefined) {
    return <CircularProgress size={100} />;
  }

  const aDayAgo = new Date();
  aDayAgo.setDate(aDayAgo.getDate() - 1);

  return (
    <div>
      <div>Total Grails: {stats.totalGrails}</div>
      <div>Grail Updates in the last 7 days: {stats.modifiedStats.length}</div>
      <div>
        Grail Updates today:{" "}
        {
          stats.modifiedStats.filter((s) => new Date(s.modified) >= aDayAgo)
            .length
        }
      </div>
    </div>
  );
};
