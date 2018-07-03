import * as React from "react";
import ButtonWithProgress from "../../../common/components/ButtonWithProgress";
import Menu from "./Menu";

export interface IMenuButtonState {
  isOpen?: boolean;
}

class MenuButton extends React.Component<{}, IMenuButtonState> {
  public constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <Menu isOpen={this.state.isOpen} onClose={() => this.setState({ isOpen: false })}>
          {this.props.children}
        </Menu>
        <ButtonWithProgress onClick={() => this.onOpenMenuButtonClick()} text="Open menu" firstIcon="menu" />
      </div>
    );
  }

  private onOpenMenuButtonClick = () => {
    this.setState({ isOpen: true });
  };
}

export default MenuButton;
