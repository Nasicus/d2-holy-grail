interface IGrailModifiedStats {
  updateCount: string;
  modified: string;
}

export interface IGrailStatistics {
  totalGrails: string;
  modifiedStats: IGrailModifiedStats[];
}
