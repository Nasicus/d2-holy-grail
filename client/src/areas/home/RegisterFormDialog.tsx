import * as React from "react";
import { ILoginInfo } from "./LoginForm";
import { Api } from "../../common/utils/Api";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText, {
  DialogContentTextProps
} from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Icon, { IconProps } from "@material-ui/core/Icon/Icon";
import TextField, {
  TextFieldProps
} from "@material-ui/core/TextField/TextField";
import { ButtonWithProgress } from "../../common/components/ButtonWithProgress";
import { IRegisterFormDialogProps } from "./RegisterFormDialog";
import styled from "styled-components";
import { GrailManager } from "../grail/GrailManager";
import { IHolyGrailApiModel } from "../../common/definitions/api/IHolyGrailApiModel";

export interface IRegisterFormDialogProps {
  onDialogClosed: (loginInfo?: ILoginInfo) => any;
  templateData?: IHolyGrailApiModel;
}

interface IRegisterFormDialogState {
  address?: string;
  password?: string;
  error?: string;
  isLoading?: boolean;
}

export class RegisterFormDialog extends React.Component<
  IRegisterFormDialogProps,
  IRegisterFormDialogState
> {
  public constructor(props: IRegisterFormDialogProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <Dialog open={true} onClose={() => this.props.onDialogClosed()}>
        <DialogTitle id="form-dialog-title">
          Create your own Holy Grail
        </DialogTitle>
        <DialogContent>
          <div>
            <CloseIcon onClick={() => this.props.onDialogClosed()}>
              close
            </CloseIcon>
            {this.state.error && <ErrorText>{this.state.error}</ErrorText>}
            {this.props.templateData && (
              <div>
                <DialogContentText>
                  Your new grail will be created with the exact same data as the
                  grail <strong>{this.props.templateData.address}</strong>!
                </DialogContentText>
              </div>
            )}
            <div>
              <StyledTextField
                label="Holy Grail address"
                onChange={e => this.setState({ address: e.target.value })}
              />
            </div>
            <div>
              <StyledTextField
                label="Password"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <SecurityInfoContainer>
                <InfoIconContainer>
                  <DialogContentText>
                    <Icon>info</Icon>
                  </DialogContentText>
                </InfoIconContainer>
                <div>
                  <DialogContentText>
                    Please do not choose a sensitive password, since we're not
                    really paying attention to data security ;)
                  </DialogContentText>
                </div>
              </SecurityInfoContainer>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <ButtonWithProgress
            isLoading={this.state.isLoading}
            onClick={() => this.register()}
            text="Register"
            isDisabled={!this.state.address || !this.state.password}
          />
        </DialogActions>
      </Dialog>
    );
  }

  private register = () => {
    this.setState({ isLoading: true });

    Api.createGrail(
      this.state.address,
      this.state.password,
      this.getTemplateData() || GrailManager.currentVersion
    ).subscribe(
      () => {
        this.setState({ isLoading: false });
        this.props.onDialogClosed({
          address: this.state.address,
          password: this.state.password,
          keepLoggedIn: false
        });
      },
      err =>
        this.setState({
          isLoading: false,
          error:
            err.data && err.data.type === "duplicateKey"
              ? "There is already a Holy Grail for this address! Please choose another one!"
              : "There was an unknown error when trying to create your Holy Grail!"
        })
    );
  };

  private getTemplateData() {
    if (!this.props.templateData) {
      return null;
    }

    const templateData = { ...this.props.templateData } as IHolyGrailApiModel;

    delete templateData.address;
    delete templateData.password;
    delete templateData.token;

    return templateData;
  }
}

const CloseIcon: React.ComponentType<IconProps> = styled(Icon)`
  && {
    position: absolute;
    top: ${p => p.theme.spacing(1)}px;
    right: ${p => p.theme.spacing(1)}px;
    cursor: pointer;
  }
`;

const StyledTextField: React.ComponentType<TextFieldProps> = styled(TextField)`
  && {
    width: 300px;
    margin-top: ${p => p.theme.spacing(1) * 2}px;
  }
` as any;

const ErrorText: React.ComponentType<DialogContentTextProps> = styled(
  DialogContentText
)`
  && {
    color: ${p => p.theme.palette.error.main};
  }
`;

const SecurityInfoContainer = styled.div`
  font-style: italic;
  padding-top: ${p => p.theme.spacing(1) * 4}px;
  display: flex;
`;

const InfoIconContainer = styled.div`
  align-self: center;
  padding-right: ${p => p.theme.spacing(1)}px;
`;
