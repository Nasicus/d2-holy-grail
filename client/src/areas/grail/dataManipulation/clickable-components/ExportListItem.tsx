import * as React from "react";
import { HolyGrailDataManager } from "../../HolyGrailDataManager";
import ListItemWithProgress from "../../../../common/components/ListItemWithProgress";

export interface IExportListItemState {
  isExporting?: boolean;
  showSecondIcon?: boolean;
}

export interface IExportListItemProps {
  data?: any;
  text?: string;
  fileName?: string;
}

class ExportListItem extends React.Component<IExportListItemProps, IExportListItemState> {
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
          primaryText={
            this.props.text || `Export ${HolyGrailDataManager.current.isEthMode ? "Eth" : "Holy"} Grail data`
          }
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
        `${HolyGrailDataManager.current.isEthMode ? "Eth" : "Holy"}Grail_${HolyGrailDataManager.current.address}`) +
      ".json";
    const file = new Blob([JSON.stringify(this.props.data || HolyGrailDataManager.current.grail, null, 2)], {
      type: "text/json"
    });
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

export default ExportListItem;
