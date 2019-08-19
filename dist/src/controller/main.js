"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const http_ts_1 = require("http.ts");
const inject_ts_1 = require("inject.ts");
const swagger_ts_1 = require("swagger.ts");
const logger_1 = require("@util/logger");
const enum_1 = require("@util/enum");
const midware_1 = require("../entity/midware");
let MainController = class MainController extends http_ts_1.Server.Controller {
    get() {
        this.logger.log(`${this.param.name} is a good dog`);
        return this.status(200).json({ dog: `good ${this.param.name}` });
    }
};
__decorate([
    inject_ts_1.Inject(logger_1.default),
    __metadata("design:type", logger_1.default)
], MainController.prototype, "logger", void 0);
__decorate([
    http_ts_1.Get(':name'),
    http_ts_1.Midware(midware_1.default.validate),
    swagger_ts_1.Meta.param.path('name', 'Name for the good dog', enum_1.DOG.NAME),
    swagger_ts_1.Meta.responses(200, 'good'),
    swagger_ts_1.Meta.responses(500, 'bad'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MainController.prototype, "get", null);
MainController = __decorate([
    http_ts_1.Controller('/api/v1')
], MainController);
exports.default = MainController;
//# sourceMappingURL=main.js.map