"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RIDER_SERVICE_NAME = exports.RIDERS_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.RiderServiceControllerMethods = RiderServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "riders";
exports.RIDERS_PACKAGE_NAME = "riders";
function RiderServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "healthCheck",
            "createRider",
            "login",
            "checkRiderExists",
            "verifyRider",
            "sendTokenVerification",
            "getRider",
            "getRiders",
            "getRiderAddress",
            "changePassword",
            "resetPasswordVerification",
            "delete",
            "approve",
            "reject",
            "activate",
            "deactivate",
            "updateSettings",
            "saveBankAccount",
            "getBankAccounts",
            "getBankAccount",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("RiderService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("RiderService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.RIDER_SERVICE_NAME = "RiderService";
//# sourceMappingURL=rider.js.map