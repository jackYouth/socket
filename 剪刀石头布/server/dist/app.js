"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./game/server");
const config_1 = require("./config");
var server = new server_1.Server();
server.init(config_1.config.rootPath);
server.start();
// # sourceMappingURL=app.js.map
