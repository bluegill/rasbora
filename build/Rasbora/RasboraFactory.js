"use strict";
exports.__esModule = true;
var net = require("net");
var Server_1 = require("./Server");
var Client_1 = require("./Client");
var RasboraFactory = (function () {
    function RasboraFactory(options) {
        var _this = this;
        this.handleServerConnection = function (connection) {
            connection.setEncoding('utf8');
            _this.client = new Client_1.Client(_this, connection);
            if (_this.clients.length > _this.maxClients) {
                _this.client.sendError(103, true);
            }
            _this.clients.push(_this.client);
            var remoteAddress = connection.remoteAddress + ':' + connection.remotePort;
            console.log("New client connected from: " + remoteAddress);
        };
        this.handleServerData = function (data, client) {
            data = data.toString().split('\0')[0];
            var isXML = (data.charAt(0) == '<');
            if (isXML) {
                if (data.indexOf('policy-file-request') > -1) {
                    return client.send("<cross-domain-policy><allow-access-from domain='*' to-ports='*' /></cross-domain-policy>");
                }
                var action = data.split('action=\'')[1].split('\' r=')[0];
            }
        };
        this.handleServerClose = function () {
            console.log('Client has disconnected');
        };
        this.handleServerError = function (error) {
            if (error.code === 'EADDRINUSE') {
                console.log("Port " + _this.port + " is in use; retrying connection...");
                return setTimeout(function () {
                    _this.createListener();
                }, 5000);
            }
            console.log(error.message);
        };
        if (!options)
            process.exit(1);
        this.port = (!options.port ? 9875 : options.port);
        this.id = (!options.id ? 100 : options.id);
        this.type = (options.server.toLowerCase() !== 'login' ? 'world' : options.server);
    }
    RasboraFactory.prototype.start = function () {
        console.log('[FACTORY] Starting...');
        this.server = net.createServer();
        this.emitter = new Server_1.Server();
        this.bindEvents(this.server);
    };
    RasboraFactory.prototype.bindEvents = function (server) {
        server.on('connection', this.handleServerConnection);
        server.on('data', this.handleServerData);
        server.on('close', this.handleServerClose);
        server.on('error', this.handleServerError);
        this.createListener();
    };
    RasboraFactory.prototype.createListener = function () {
        var _this = this;
        this.server.getConnections(function (error, count) {
            if (count > 0)
                _this.server.close();
            _this.server.listen(_this.port, function () {
                console.log("Server now listening on port " + _this.port);
            });
        });
    };
    return RasboraFactory;
}());
exports.RasboraFactory = RasboraFactory;
//# sourceMappingURL=RasboraFactory.js.map