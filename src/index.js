const express = require("express");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const CRON = require("./utils/common/cron-jobs");

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  CRON();
});
