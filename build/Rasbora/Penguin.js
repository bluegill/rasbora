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
var Client_1 = require("./Client");
var Penguin = (function (_super) {
    __extends(Penguin, _super);
    function Penguin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Penguin.prototype.setClient = function (object) {
        this.id = object.id;
        this.username = object.username;
        this.nickname = object.nickname;
        this.coins = object.coins;
        this.head = object.head;
        this.neck = object.neck;
        this.face = object.face;
    };
    return Penguin;
}(Client_1.Client));
exports.Penguin = Penguin;
//# sourceMappingURL=Penguin.js.map