import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
