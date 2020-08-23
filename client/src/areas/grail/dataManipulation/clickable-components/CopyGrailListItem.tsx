import { ListItemWithProgress } from "../../../../common/components/ListItemWithProgress";
import * as React from "react";
import { FC, useState } from "react";
import { RegisterFormDialog } from "../../../home/RegisterFormDialog";
import { ILoginInfo } from "../../../home/LoginForm";
import { GrailManager } from "../../GrailManager";
import { useHistory } from "react-router-dom";
import { LocationDescriptorObject } from "history";

export const CopyGrailListItem: FC = () => {
  const history = useHistory();
  const [renderRegisterDialog, setRenderRegisterDialog] = useState(false);

  return (
    <div>
      {renderRegisterDialog && (
        <RegisterFormDialog
          templateData={GrailManager.current.allApiData}
          onDialogClosed={loginInfo => handleRegisterDialogClosed(loginInfo)}
        />
      )}
      <ListItemWithProgress
        onClick={handleClick}
        primaryText="Duplicate"
        firstIcon="file_copy"
      />
    </div>
  );

  function handleClick() {
    setRenderRegisterDialog(true);
  }

  function handleRegisterDialogClosed(loginInfo: ILoginInfo) {
    setRenderRegisterDialog(false);
    const to: LocationDescriptorObject = {
      pathname: `/${loginInfo.address}`,
      state: loginInfo as ILoginInfo
    };
    history.push(to);
  }
};
