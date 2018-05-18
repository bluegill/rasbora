"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var events_1 = require("events");
var World_1 = require("./World");
var Server = (function (_super) {
    __extends(Server, _super);
    function Server() {
        var _this = _super.call(this) || this;
        _this.xtHandlers = {};
        _this.xmlHandlers = {};
        _this.world = new World_1.World(_this);
        _this.xmlHandlers = {};
        _this.xtHandlers['s'] = {
            'a#gt': { event: 'getTables' },
            'a#jt': { event: 'joinTable' },
            'a#lt': { event: 'leaveTable' },
            'b#gb': { event: 'getBuddies' },
            'b#br': { event: 'sendBuddyRequest' },
            'b#rb': { event: 'sendBuddyRemove' },
            'b#ba': { event: 'acceptBuddy' },
            'b#bf': { event: 'findBuddy' },
            'f#epfga': { event: 'getAgentStatus' },
            'f#epfsa': { event: 'setAgentStatus' },
            'f#epfgf': { event: 'getFieldStatus' },
            'f#epfsf': { event: 'setFieldStatus' },
            'f#epfgr': { event: 'getAgentRank' },
            'f#epfai': { event: 'purchaseSpyGear' },
            'g#gm': { event: 'getActiveIgloo' },
            'g#or': { event: 'openIgloo' },
            'g#cr': { event: 'closeIgloo' },
            'g#go': { event: 'getOwnedIgloos' },
            'g#gf': { event: 'getFurnitureList' },
            'g#ur': { event: 'saveIglooFurniture' },
            'g#um': { event: 'updateIglooMusic' },
            'g#gr': { event: 'sendServerIglooList' },
            'g#ag': { event: 'buyIglooFloor' },
            'g#au': { event: 'buyIglooType' },
            'g#af': { event: 'buyFurniture' },
            'g#ao': { event: 'updateIglooType' },
            'i#gi': { event: 'getInventory' },
            'i#ai': { event: 'buyInventory' },
            'i#qpp': { event: 'getPlayerPins' },
            'i#qpa': { event: 'getPlayerAwards' },
            'j#js': { event: 'joinServer' },
            'j#jr': { event: 'joinRoom' },
            'j#jp': { event: 'joinPlayer' },
            'l#mst': { event: 'startMail' },
            'l#mg': { event: 'getMail' },
            'l#mc': { event: 'mailChecked' },
            'l#ms': { event: 'sendMail' },
            'l#md': { event: 'deleteMail' },
            'l#mdp': { event: 'deleteMailPlayer' },
            'm#sm': { event: 'sendMessage' },
            'n#gn': { event: 'getIgnores' },
            'ni#gnr': { event: 'getNinjaRank' },
            'ni#gnl': { event: 'getNinjaLevel' },
            'ni#gwl': { event: 'getWaterLevel' },
            'ni#gfl': { event: 'getFireLevel' },
            'ni#gcd': { event: 'getCardData' },
            'o#k': { event: 'kickPlayer' },
            'o#m': { event: 'mutePlayer' },
            'p#pgu': { event: 'getPuffles' },
            'p#pg': { event: 'getPlayerPuffles' },
            'p#pn': { event: 'sendAdoptPuffle' },
            'p#pt': { event: 'sendPuffleTreat' },
            'p#pf': { event: 'sendPuffleFeed' },
            'p#pr': { event: 'sendPuffleRest' },
            'p#pp': { event: 'sendPufflePlay' },
            'p#pb': { event: 'sendPuffleBath' },
            'p#ps': { event: 'sendPuffleFrame' },
            'p#pw': { event: 'sendPuffleWalk' },
            'p#pm': { event: 'sendPuffleMove' },
            'p#pip': { event: 'sendPuffleInitInteractionPlay' },
            'p#pir': { event: 'sendPuffleInitInteractionRest' },
            'p#ir': { event: 'sendPuffleInteractionRest' },
            'p#ip': { event: 'sendPuffleInteractionPlay' },
            'r#cdu': { event: 'coinsDigUpdate' },
            's#upc': { event: 'updatePlayerClothing' },
            's#uph': { event: 'updatePlayerClothing' },
            's#upf': { event: 'updatePlayerClothing' },
            's#upn': { event: 'updatePlayerClothing' },
            's#upb': { event: 'updatePlayerClothing' },
            's#upa': { event: 'updatePlayerClothing' },
            's#upe': { event: 'updatePlayerClothing' },
            's#upp': { event: 'updatePlayerClothing' },
            's#upl': { event: 'updatePlayerClothing' },
            'st#gps': { event: 'getStamps' },
            'st#sse': { event: 'addStamp' },
            'st#gmres': { event: 'getRecentStamps' },
            'st#gsbcd': { event: 'getBookCover' },
            'st#ssbcd': { event: 'updateBookCover' },
            't#at': { event: 'openPlayerBook' },
            't#rt': { event: 'closePlayerBook' },
            'u#h': { event: 'sendHeartbeat' },
            'u#se': { event: 'sendEmote' },
            'u#ss': { event: 'sendSafeChat' },
            'u#sg': { event: 'sendTourMessage' },
            'u#sp': { event: 'sendPosition' },
            'u#sb': { event: 'sendSnowball' },
            'u#sf': { event: 'sendFrame' },
            'u#sa': { event: 'sendAction' },
            'u#sl': { event: 'sendLine' },
            'u#sj': { event: 'sendJoke' },
            'u#glr': { event: 'sendLastRevision' },
            'u#gp': { event: 'getPlayer' },
            'u#sma': { event: 'sendMascotMessage' },
            'w#jx': { event: 'joinWaddle' }
        };
        _this.xtHandlers['z'] = {};
        for (var packet in _this.xtHandlers['s']) {
            var handler = _this.xtHandlers['s'][packet];
            _this.addListener(handler.event, _this.world[handler.event]);
        }
        _this.emit('ready');
        return _this;
    }
    return Server;
}(events_1.EventEmitter));
exports.Server = Server;
//# sourceMappingURL=Server.js.map