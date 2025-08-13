"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOTIFICATION_SERVICE_NAME = exports.NOTIFICATIONS_PACKAGE_NAME = exports.NotificationType = exports.protobufPackage = void 0;
exports.NotificationServiceControllerMethods = NotificationServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "notifications";
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["NOTIFICATION_TYPE_UNSPECIFIED"] = 0] = "NOTIFICATION_TYPE_UNSPECIFIED";
    NotificationType[NotificationType["NOTIFICATION_TYPE_SMS"] = 1] = "NOTIFICATION_TYPE_SMS";
    NotificationType[NotificationType["NOTIFICATION_TYPE_EMAIL"] = 2] = "NOTIFICATION_TYPE_EMAIL";
    NotificationType[NotificationType["NOTIFICATION_TYPE_PUSH"] = 3] = "NOTIFICATION_TYPE_PUSH";
    NotificationType[NotificationType["NOTIFICATION_TYPE_SOCKET"] = 4] = "NOTIFICATION_TYPE_SOCKET";
    NotificationType[NotificationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
exports.NOTIFICATIONS_PACKAGE_NAME = "notifications";
function NotificationServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["health", "sendMessage"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("NotificationService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("NotificationService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.NOTIFICATION_SERVICE_NAME = "NotificationService";
//# sourceMappingURL=notification.js.map