"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const http_ts_1 = require("http.ts");
class MidWare extends http_ts_1.Server.Controller {
    validate() {
        if (!this.param.name.match(/^[a-z]+$/)) {
            return this.status(400).send('bad name');
        }
    }
}
exports.default = new MidWare();
//# sourceMappingURL=midware.js.map