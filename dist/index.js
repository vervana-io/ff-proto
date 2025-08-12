"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proto = void 0;
const path = require("path");
const proto = (name) => {
    const protoPath = path.resolve(__dirname, '..', 'proto', name, `${name}.proto`);
    return protoPath;
};
exports.proto = proto;
//# sourceMappingURL=index.js.map