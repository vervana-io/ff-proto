"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.notifications = exports.healthcheck = exports.proto = void 0;
const path = require("path");
const proto = (name) => {
    const protoPath = path.resolve(__dirname, '..', 'proto', name);
    return protoPath;
};
exports.proto = proto;
exports.healthcheck = require("./healthcheck/healthcheck");
exports.notifications = require("./notifications/notification");
exports.users = require("./users/user");
//# sourceMappingURL=index.js.map