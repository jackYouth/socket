"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const http = require("http");
const SocketIO = require("socket.io");
const client_1 = require("./client");
const mainPath = path.dirname(require.main.filename);
const UTF8 = { encoding: 'utf-8' };
class Server {
    constructor() {
        /** Port that server listen on */
        this.port = null;
        /** HTTP Server instance for both express and socket io */
        this.http = null;
        /** Socket io instance */
        this.io = null;
    }
    init(path) {
        this.port = process.env.PORT;
        this.http = http.createServer();
        this.io = SocketIO(this.http, { path });
        this.io.on("connection", socket => {
            const client = new client_1.Client(socket);
            client.connect();
        });
    }
    start() {
        this.http.listen(this.port);
        console.log(`---- server started. listen : ${this.port} ----`);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map