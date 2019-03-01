import * as React from "react";
import { Menu } from "./Menu";
import { ButtonWithProgress } from "../../../common/components/ButtonWithProgress";

interface IMenuButtonState {
  isOpen?: boolean;
}

export class MenuButton extends React.Component<{}, IMenuButtonState> {
  public constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <Menu
          isOpen={!!this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        >
          {this.props.children}
        </Menu>
        <ButtonWithProgress
          onClick={() => this.onOpenMenuButtonClick()}
          text="Open menu"
          firstIcon="menu"
        />
      </div>
    );
  }

  private onOpenMenuButtonClick = () => {
    this.setState({ isOpen: true });
  };
}
