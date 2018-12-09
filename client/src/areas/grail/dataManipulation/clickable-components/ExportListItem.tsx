import * as React from "react";
import { GrailManager } from "../../GrailManager";
import { Util } from "../../../../common/utils/Util";
import { ListItemWithProgress } from "../../../../common/components/ListItemWithProgress";

export interface IExportListItemProps {
  data?: any;
  text?: string;
  fileName?: string;
}

interface IExportListItemState {
  isExporting?: boolean;
  showSecondIcon?: boolean;
}

export class ExportListItem extends React.Component<IExportListItemProps, IExportListItemState> {
  private secondIconTimeoutHandler: any;

  public constructor(props: IExportListItemProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <ListItemWithProgress
          onClick={() => this.onExportButtonClick()}
          isLoading={this.state.isExporting}
          showSecondIcon={this.state.showSecondIcon}
          primaryText={this.props.text || `Export ${Util.capitalize(GrailManager.current.grailMode)} Grail data`}
          firstIcon="get_app"
          secondIcon="check"
        />
      </div>
    );
  }

  private onExportButtonClick = () => {
    clearTimeout(this.secondIconTimeoutHandler);
    this.setState({ showSecondIcon: false, isExporting: true });
    this.download();
  };

  private download() {
    const fileName =
      (this.props.fileName ||
        `${Util.capitalize(GrailManager.current.grailMode)}Grail_${GrailManager.current.address}`) + ".json";
    const data = JSON.stringify(this.props.data || GrailManager.current.grailData, null, 2);
    const file = new Blob([data], { type: "text/json" });
    const isIE = !!(document as any).documentMode;

    if (isIE) {
      window.navigator.msSaveOrOpenBlob(file, fileName);
    } else {
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    }

    this.setState({ showSecondIcon: true, isExporting: false });

    // reset to the default icon (this should go together with the dismissing of a success message, once we have any)
    clearTimeout(this.secondIconTimeoutHandler);
    this.secondIconTimeoutHandler = setTimeout(() => this.setState({ showSecondIcon: false }), 5000);
  }
}
