// import original module declarations
import "styled-components";
import { Theme } from "@material-ui/core/styles";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
