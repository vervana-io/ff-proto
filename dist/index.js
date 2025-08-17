"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = exports.users = exports.riders = exports.vendors = exports.customers = exports.notifications = exports.healthcheck = exports.protoRoot = exports.proto = void 0;
const path = require("path");
const proto = (name) => {
    const protoPath = path.resolve(__dirname, '..', 'proto', name);
    return protoPath;
};
exports.proto = proto;
const protoRoot = (dir = '') => {
    return path.resolve(__dirname, '..', 'proto', dir);
};
exports.protoRoot = protoRoot;
exports.healthcheck = require("./healthcheck/healthcheck");
exports.notifications = require("./notifications/notification");
exports.customers = require("./customers/customer");
exports.vendors = require("./vendors/vendor");
exports.riders = require("./riders/rider");
exports.users = require("./users/user");
exports.common = require("./common/common");
//# sourceMappingURL=index.js.map