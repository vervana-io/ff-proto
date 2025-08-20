"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VENDOR_SERVICE_NAME = exports.VENDORS_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.VendorServiceControllerMethods = VendorServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "vendors";
exports.VENDORS_PACKAGE_NAME = "vendors";
function VendorServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "healthCheck",
            "createVendor",
            "login",
            "checkVendorExists",
            "verifyVendor",
            "sendTokenVerification",
            "getVendor",
            "getVendors",
            "getVendorAddress",
            "changePassword",
            "resetPasswordVerification",
            "delete",
            "approve",
            "reject",
            "activate",
            "deactivate",
            "updateSettings",
            "saveFranchise",
            "savePersonnel",
            "saveFoodClass",
            "getFoodClass",
            "getFoodClasses",
            "deleteFoodClass",
            "saveCategory",
            "getCategory",
            "deleteCategory",
            "getCategories",
            "saveProduct",
            "getProduct",
            "deleteProduct",
            "getProducts",
            "getProductRecommendation",
            "saveCoupon",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("VendorService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("VendorService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.VENDOR_SERVICE_NAME = "VendorService";
//# sourceMappingURL=vendor.js.map