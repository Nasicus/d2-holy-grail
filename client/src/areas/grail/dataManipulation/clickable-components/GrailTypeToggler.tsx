import * as React from "react";
import { GrailManager } from "../../GrailManager";
import { LocationDescriptorObject } from "history";
import { Redirect } from "react-router-dom";
import { GrailMode } from "../../GrailMode";
import { ButtonWithProgress } from "../../../../common/components/ButtonWithProgress";
import { ListItemWithProgress } from "../../../../common/components/ListItemWithProgress";

export interface IGrailTypeTogglerProps {
  renderAsListItem?: boolean;
  grailMode: GrailMode;
}

interface IGrailTypeTogglerState {
  nextMode?: GrailMode;
  grailMode: GrailMode;
}

export class GrailTypeToggler extends React.Component<IGrailTypeTogglerProps, IGrailTypeTogglerState> {
  public constructor(props: IGrailTypeTogglerProps) {
    super(props);
    this.state = { grailMode: props.grailMode };
  }

  public static getDerivedStateFromProps(props: IGrailTypeTogglerProps, state: IGrailTypeTogglerState) {
    if (props.grailMode !== state.grailMode) {
      state.grailMode = props.grailMode;
      state.nextMode = undefined;
    }

    return state;
  }

  public render() {
    if (this.state.nextMode) {
      const to: LocationDescriptorObject = {
        pathname: `/${GrailManager.current.address}/${this.state.nextMode}`
      };
      return <Redirect to={to} push={true} />;
    }

    if (this.props.renderAsListItem) {
      return (
        <>
          {this.renderToggleButton(GrailMode.Holy, true)}
          {this.renderToggleButton(GrailMode.Eth, true)}
          {this.renderToggleButton(GrailMode.Runeword, true)}
        </>
      );
    }

    return (
      <div>
        {this.renderToggleButton(GrailMode.Holy)}
        {this.renderToggleButton(GrailMode.Eth)}
        {this.renderToggleButton(GrailMode.Runeword)}
      </div>
    );
  }

  private onTogglerClick = (newMode: GrailMode) => {
    this.setState({ nextMode: newMode });
  };

  private renderToggleButton(mode: GrailMode, renderAsListItem?: boolean) {
    const isDisabled = this.state.grailMode === mode;
    let text: string;
    let icon: string;
    switch (mode) {
      case GrailMode.Eth:
        text = "Eth Grail";
        icon = "broken_image";
        break;
      case GrailMode.Runeword:
        text = "Runeword Grail";
        icon = "ac_unit";
        break;
      default:
        text = "Holy Grail";
        icon = "local_bar";
        break;
    }

    if (renderAsListItem) {
      return (
        <ListItemWithProgress
          onClick={() => this.onTogglerClick(mode)}
          firstIcon={icon}
          primaryText={text}
          isDisabled={isDisabled}
        />
      );
    }

    return (
      <ButtonWithProgress
        onClick={() => this.onTogglerClick(mode)}
        text={text}
        firstIcon={icon}
        isDisabled={isDisabled}
      />
    );
  }
}
