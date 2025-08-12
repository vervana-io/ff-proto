"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proto = void 0;
const app_root_path_1 = require("app-root-path");
const proto = (name) => {
    const path = (0, app_root_path_1.resolve)(`/proto/${name}/${name}.proto`);
    return path;
};
exports.proto = proto;
console.log((0, exports.proto)("users"));
//# sourceMappingURL=index.js.map