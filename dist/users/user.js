"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_SERVICE_NAME = exports.USERS_PACKAGE_NAME = exports.HealthCheckResponse_ServingStatus = exports.UserType = exports.OTPType = exports.protobufPackage = void 0;
exports.UserServiceControllerMethods = UserServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "users";
var OTPType;
(function (OTPType) {
    OTPType[OTPType["OTP_TYPE_UNSPECIFIED"] = 0] = "OTP_TYPE_UNSPECIFIED";
    OTPType[OTPType["RESET_PASSWORD"] = 1] = "RESET_PASSWORD";
    OTPType[OTPType["CONFIRM_NEW_DEVICE"] = 2] = "CONFIRM_NEW_DEVICE";
    OTPType[OTPType["EMAIL_VERIFICATION"] = 3] = "EMAIL_VERIFICATION";
    OTPType[OTPType["TRANSACTION_PIN"] = 4] = "TRANSACTION_PIN";
    OTPType[OTPType["PHONE_VERIFICATION"] = 7] = "PHONE_VERIFICATION";
    OTPType[OTPType["EMAIL_CONFIRMATION"] = 6] = "EMAIL_CONFIRMATION";
    OTPType[OTPType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OTPType || (exports.OTPType = OTPType = {}));
var UserType;
(function (UserType) {
    UserType[UserType["USER_TYPE_UNSPECIFIED"] = 0] = "USER_TYPE_UNSPECIFIED";
    UserType[UserType["USER_TYPE_CUSTOMER"] = 1] = "USER_TYPE_CUSTOMER";
    UserType[UserType["USER_TYPE_RIDER"] = 2] = "USER_TYPE_RIDER";
    UserType[UserType["USER_TYPE_VENDOR"] = 3] = "USER_TYPE_VENDOR";
    UserType[UserType["USER_TYPE_ADMIN"] = 4] = "USER_TYPE_ADMIN";
    UserType[UserType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserType || (exports.UserType = UserType = {}));
var HealthCheckResponse_ServingStatus;
(function (HealthCheckResponse_ServingStatus) {
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["UNKNOWN"] = 0] = "UNKNOWN";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["SERVING"] = 1] = "SERVING";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["NOT_SERVING"] = 2] = "NOT_SERVING";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["SERVICE_UNKNOWN"] = 3] = "SERVICE_UNKNOWN";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HealthCheckResponse_ServingStatus || (exports.HealthCheckResponse_ServingStatus = HealthCheckResponse_ServingStatus = {}));
exports.USERS_PACKAGE_NAME = "users";
function UserServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "healthCheck",
            "createUser",
            "checkUserExists",
            "verifyUser",
            "sendTokenVerification",
            "login",
            "getUser",
            "getUsers",
            "userOAuthProvider",
            "changePassword",
            "updateSettings",
            "saveBankAccount",
            "getBankAccounts",
            "getBankAccount",
            "resetPasswordVerification",
            "deleteUser",
            "approveUser",
            "rejectUser",
            "activateUser",
            "deactivateUser",
            "saveCustomer",
            "saveSeller",
            "saveFranchise",
            "savePersonnel",
            "saveRider",
            "saveCategory",
            "getCategory",
            "getCategories",
            "deleteCategory",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.USER_SERVICE_NAME = "UserService";
//# sourceMappingURL=user.js.map