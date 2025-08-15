"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOMER_SERVICE_NAME = exports.CUSTOMERS_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.CustomerServiceControllerMethods = CustomerServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "customers";
exports.CUSTOMERS_PACKAGE_NAME = "customers";
function CustomerServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "healthCheck",
            "createCustomer",
            "login",
            "checkCustomerExists",
            "verifyCustomer",
            "sendTokenVerification",
            "getCustomer",
            "getCustomers",
            "customerOAuthProvider",
            "getCustomerAddress",
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
            (0, microservices_1.GrpcMethod)("CustomerService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("CustomerService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.CUSTOMER_SERVICE_NAME = "CustomerService";
//# sourceMappingURL=customer.js.map