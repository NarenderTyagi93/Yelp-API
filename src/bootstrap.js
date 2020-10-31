const config = require("./config");
const app = require("express")();
const logger = require("morgan");
const bodyParser = require("body-parser");
const appRoutes = require("./controller");

global.config = config;

module.exports = class Server {
  constructor() {}
  static init = () => {
    Server.initLogger();
    Server.initServer();
    Server.initRouting();
  };

  static initServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.listen(config.SERVER.PORT, () => {
      console.log(`Server started on port # ${config.SERVER.PORT}`);
    });
  };
  static initLogger = () => {
    app.use(
      logger(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms ":referrer" ":user-agent"'
      )
    );
  };
  static initRouting = () => {
    app.use("/api", appRoutes);

    app.use(function (req, res, next) {
      var err = new Error("Not Found");
      err.status = 404;
      next(err);
    });
  };
};
