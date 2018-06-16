import app from "./App";
import { ConfigManager } from "./ConfigManager";

app.listen(ConfigManager.port, () => {
  console.log("Express server listening on port " + ConfigManager.port);
});
