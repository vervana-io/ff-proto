"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HEALTH_SERVICE_NAME = exports.GRPC_HEALTH_V1_PACKAGE_NAME = exports.HealthCheckResponse_ServingStatus = exports.protobufPackage = void 0;
exports.HealthControllerMethods = HealthControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "grpc.health.v1";
var HealthCheckResponse_ServingStatus;
(function (HealthCheckResponse_ServingStatus) {
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["UNKNOWN"] = 0] = "UNKNOWN";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["SERVING"] = 1] = "SERVING";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["NOT_SERVING"] = 2] = "NOT_SERVING";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["SERVICE_UNKNOWN"] = 3] = "SERVICE_UNKNOWN";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HealthCheckResponse_ServingStatus || (exports.HealthCheckResponse_ServingStatus = HealthCheckResponse_ServingStatus = {}));
exports.GRPC_HEALTH_V1_PACKAGE_NAME = "grpc.health.v1";
function HealthControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["check", "watch"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("Health", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("Health", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.HEALTH_SERVICE_NAME = "Health";
//# sourceMappingURL=healthcheck.js.map