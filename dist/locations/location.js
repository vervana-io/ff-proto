"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCATION_SERVICE_NAME = exports.LOCATIONS_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.LocationServiceControllerMethods = LocationServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "locations";
exports.LOCATIONS_PACKAGE_NAME = "locations";
function LocationServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "saveAddress",
            "updateRiderLocation",
            "getAvailableRiders",
            "getCustomerAddress",
            "getVendorsByLocation",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("LocationService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("LocationService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.LOCATION_SERVICE_NAME = "LocationService";
//# sourceMappingURL=location.js.map