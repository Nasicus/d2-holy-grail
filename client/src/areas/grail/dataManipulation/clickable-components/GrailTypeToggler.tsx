import * as React from "react";
import { HolyGrailDataManager } from "../../HolyGrailDataManager";
import ButtonWithProgress from "../../../../common/components/ButtonWithProgress";
import ListItemWithProgress from "../../../../common/components/ListItemWithProgress";
import { LocationDescriptorObject } from "history";
import { Redirect } from "react-router-dom";

export interface IGrailTypeTogglerState {
  doToggle?: boolean;
  isEthMode?: boolean;
}

export interface IGrailTypeTogglerProps {
  renderAsListItem?: boolean;
  isEthMode: boolean;
}

export class GrailTypeToggler extends React.Component<IGrailTypeTogglerProps, IGrailTypeTogglerState> {
  public constructor(props: IGrailTypeTogglerProps) {
    super(props);
    this.state = { isEthMode: props.isEthMode };
  }

  public static getDerivedStateFromProps(props: IGrailTypeTogglerProps, state: IGrailTypeTogglerState) {
    if (props.isEthMode !== state.isEthMode) {
      state.isEthMode = props.isEthMode;
      state.doToggle = false;
    }

    return state;
  }

  public render() {
    const { isEthMode } = this.state;

    if (this.state.doToggle) {
      const to: LocationDescriptorObject = {
        pathname: `/${HolyGrailDataManager.current.address}/${isEthMode ? "" : "eth"}`
      };
      return <Redirect to={to} push={true} />;
    }

    const buttonText = `Switch to ${isEthMode ? "Holy Grail" : "Eth Grail"}`;

    if (this.props.renderAsListItem) {
      return (
        <ListItemWithProgress onClick={() => this.onTogglerClick()} firstIcon="broken_image" primaryText={buttonText} />
      );
    }

    return (
      <div>
        <ButtonWithProgress onClick={() => this.onTogglerClick()} text={buttonText} firstIcon="broken_image" />
      </div>
    );
  }

  private onTogglerClick = () => {
    this.setState({ doToggle: true });
  };
}
