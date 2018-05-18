"use strict";
exports.__esModule = true;
var Client = (function () {
    function Client(server, socket) {
        this.socket = socket;
        this.server = server;
        this.world = server.world;
        this.database = server.database;
        this.addr = socket.remoteAddress.split(':').pop();
    }
    Client.prototype.send = function (data) {
        if (this.socket) {
            this.socket.write(data + '\0');
            console.log(data);
        }
    };
    Client.prototype.sendError = function (error, fatal) {
        console.log("sendError(): " + error);
        if (fatal)
            process.exit(1);
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=Client.js.map