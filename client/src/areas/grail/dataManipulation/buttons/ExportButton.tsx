import * as React from "react";
import { HolyGrailDataManager } from "../../HolyGrailDataManager";
import ButtonWithProgress from "../../../../common/components/ButtonWithProgress";
import { first } from "rxjs/operators";

export interface IExportButtonState {
  isExporting?: boolean;
  showSecondIcon?: boolean;
}

class ExportButton extends React.Component<{}, IExportButtonState> {
  private secondIconTimeoutHandler: any;

  public constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <ButtonWithProgress
          onButtonClick={() => this.onExportButtonClick()}
          isLoading={this.state.isExporting}
          showSecondIcon={this.state.showSecondIcon}
          text="Export grail data as json"
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
    HolyGrailDataManager.current.data$.pipe(first()).subscribe(d => {
      const fileName = `HolyGrail_${HolyGrailDataManager.current.address}.json`;
      const file = new Blob([JSON.stringify(d.data, null, 2)], { type: "text/json" });
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
    });
  }
}

export default ExportButton;
