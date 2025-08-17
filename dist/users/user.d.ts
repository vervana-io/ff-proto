import { Observable } from "rxjs";
import { Empty, IdRequest, ListResponse, Response } from "../common/common";
import { HealthCheckResponse } from "../healthcheck/healthcheck";
export declare const protobufPackage = "users";
export declare enum OTPType {
    OTP_TYPE_UNSPECIFIED = 0,
    RESET_PASSWORD = 1,
    CONFIRM_NEW_DEVICE = 2,
    EMAIL_VERIFICATION = 3,
    TRANSACTION_PIN = 4,
    PHONE_VERIFICATION = 7,
    EMAIL_CONFIRMATION = 6,
    UNRECOGNIZED = -1
}
export declare enum UserType {
    USER_TYPE_UNSPECIFIED = 0,
    USER_TYPE_CUSTOMER = 1,
    USER_TYPE_RIDER = 2,
    USER_TYPE_VENDOR = 3,
    USER_TYPE_ADMIN = 4,
    UNRECOGNIZED = -1
}
export interface AddressList {
    data: Address[];
    status: number;
    success: boolean;
    message: string;
}
export interface GetListRequest {
    query: string;
    filters: {
        [key: string]: string;
    };
    page: number;
    size: number;
    userId?: string | undefined;
}
export interface GetListRequest_FiltersEntry {
    key: string;
    value: string;
}
export interface SaveCategoryRequest {
    id?: string | undefined;
    userId: string;
    name: string;
    metadata: {
        [key: string]: string;
    };
}
export interface SaveCategoryRequest_MetadataEntry {
    key: string;
    value: string;
}
export interface ResetPasswordRequest {
    user: string;
    otp: string;
    password: string;
}
export interface CustomerOAuthProviderRequest {
    provider: string;
    token: string;
    deviceToken: string;
    medium: string;
    latitude: number;
    longitude: number;
    address: {
        [key: string]: string;
    };
}
export interface CustomerOAuthProviderRequest_AddressEntry {
    key: string;
    value: string;
}
export interface CheckUserRequest {
    with: string;
    user: string;
}
export interface SendTokenRequest {
    id?: string | undefined;
    with: string;
    user: string;
    userType: UserType;
    type: OTPType;
}
export interface VerifyRequest {
    with: string;
    user: string;
    token: string;
}
export interface UpdateSettingsRequest {
    userId: string;
    settings: {
        [key: string]: string;
    };
}
export interface UpdateSettingsRequest_SettingsEntry {
    key: string;
    value: string;
}
export interface ChangePasswordRequest {
    userId: string;
    oldPassword: string;
    newPassword: string;
    email?: string | undefined;
}
export interface SaveBankAccountRequest {
    userId: string;
    accountName: string;
    accountNumber: string;
    bankName: string;
    bankCode: string;
    isMain: boolean;
    status?: boolean | undefined;
    id?: string | undefined;
}
export interface UserResponse {
    status: number;
    success: boolean;
    message: string;
    error?: string | undefined;
    data: UserResponse_Data | undefined;
}
export interface UserResponse_Data {
    user: User | undefined;
    customer?: Customer | undefined;
    wallet: Wallet | undefined;
    settings: {
        [key: string]: string;
    };
    rider?: Rider | undefined;
    seller?: Seller | undefined;
    personnel?: Personnel | undefined;
    address: Address | undefined;
}
export interface UserResponse_Data_SettingsEntry {
    key: string;
    value: string;
}
export interface BankAccount {
    userId: string;
    accountName: string;
    accountNumner: string;
    isMain: boolean;
    bankName: string;
    bankCode: string;
    status: boolean;
}
export interface User {
    id: string;
    latitude: string;
    longitude: string;
    deviceVersion: string;
    complianceStatus: string;
}
export interface Wallet {
    id: string;
    accountName: string;
    accountNumber: string;
    balance: number;
}
export interface UserRequest {
    name: string;
    email: string;
    password: string;
    phone: string;
}
export interface Address {
    id?: string | undefined;
    latitude: number;
    longitude: number;
    formatedAddress: string;
}
export interface SaveCustomerRequest {
    id?: string | undefined;
    email: string;
    password: string;
    phone: string;
    firstname: string;
    lastname: string;
    address: Address | undefined;
    deviceToken: string;
    deviceVersion: string;
    referral: string;
}
export interface GetRequest {
    id: string;
}
export interface LoginRequest {
    username: string;
    password: string;
    deviceVersion: string;
    deviceToken: string;
    deviceType: string;
}
export interface Device {
    device: string;
    type: string;
}
export interface Customer {
    id: string;
    username: string;
    email: string;
    phone: string;
    firstname: string;
    lastname: string;
    phones: {
        [key: string]: string;
    };
    referralCode: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
    devices: Device[];
}
export interface Customer_PhonesEntry {
    key: string;
    value: string;
}
export interface Rider {
    id: string;
    phones: {
        [key: string]: string;
    };
    firstname: string;
    lastname: string;
    address?: Address | undefined;
    devices: Device[];
    contractType: number;
    shiftData: number[];
    nextOfKin?: string | undefined;
    nextOfKinPhoneNumber?: string | undefined;
    driversLicense?: string | undefined;
    vehicleType?: number | undefined;
    vehicleBrand?: string | undefined;
    vehiclePlateNumber?: string | undefined;
    vehiclePicture?: string | undefined;
    firstGuarantorName?: string | undefined;
    firstGuarantorPhoneNumber?: string | undefined;
    secondGuarantorName?: string | undefined;
    secondGuarantorPhoneNumber?: string | undefined;
    previousPlaceOfWork?: string | undefined;
    previousPlaceOfWorkDuration?: string | undefined;
    bankName?: string | undefined;
    bankCode?: string | undefined;
    accountNumber?: string | undefined;
    accountName?: string | undefined;
    selfie?: string | undefined;
    createdAt: string;
    updatedAt: string;
}
export interface Rider_PhonesEntry {
    key: string;
    value: string;
}
export interface Seller {
    id: string;
    status: string;
    plan?: string | undefined;
    tier?: number | undefined;
    email: string;
    phones: string[];
    userId: string;
    address: Address | undefined;
    categoryId: string;
    businessName: string;
    individualFullName?: string | undefined;
    individualAddress: string;
    individualSelfie?: string | undefined;
    individualIdentityCard?: string | undefined;
    businessEmail?: string | undefined;
    licenseNumber: string;
    openingHours: string;
    closingHours: string;
    businessLogo?: string | undefined;
    businessThumbnail?: string | undefined;
    businessCertificate?: string | undefined;
    businessMemorandum?: string | undefined;
    businessUtilityBill?: string | undefined;
    businessBuilding?: string | undefined;
    devices: Device[];
    createdAt: string;
    updatedAt: string;
}
export interface Personnel {
    id: string;
    firstname: string;
    lastname: string;
    othername: string;
    userId: string;
    businessId: string;
    avatar: string;
    compliance: string;
    status: string;
    createdAt: string;
    devices: Device[];
}
export declare const USERS_PACKAGE_NAME = "users";
export interface UserServiceClient {
    healthCheck(request: Empty): Observable<HealthCheckResponse>;
    createUser(request: UserRequest): Observable<Response>;
    checkUserExists(request: CheckUserRequest): Observable<Response>;
    verifyUser(request: VerifyRequest): Observable<Response>;
    sendTokenVerification(request: SendTokenRequest): Observable<Response>;
    login(request: LoginRequest): Observable<UserResponse>;
    getUser(request: GetRequest): Observable<UserResponse>;
    getUsers(request: GetRequest): Observable<UserResponse>;
    userOAuthProvider(request: CustomerOAuthProviderRequest): Observable<UserResponse>;
    changePassword(request: ChangePasswordRequest): Observable<Response>;
    updateSettings(request: UpdateSettingsRequest): Observable<Response>;
    saveBankAccount(request: SaveBankAccountRequest): Observable<Response>;
    getBankAccounts(request: GetRequest): Observable<ListResponse>;
    getBankAccount(request: GetRequest): Observable<Response>;
    resetPasswordVerification(request: ResetPasswordRequest): Observable<Response>;
    deleteUser(request: IdRequest): Observable<Response>;
    approveUser(request: IdRequest): Observable<Response>;
    rejectUser(request: IdRequest): Observable<Response>;
    activateUser(request: IdRequest): Observable<Response>;
    deactivateUser(request: IdRequest): Observable<Response>;
    saveCategory(request: SaveCategoryRequest): Observable<Response>;
    getCategory(request: GetRequest): Observable<Response>;
    getCategories(request: GetRequest): Observable<ListResponse>;
    deleteCategory(request: GetRequest): Observable<Response>;
}
export interface UserServiceController {
    healthCheck(request: Empty): Promise<HealthCheckResponse> | Observable<HealthCheckResponse> | HealthCheckResponse;
    createUser(request: UserRequest): Promise<Response> | Observable<Response> | Response;
    checkUserExists(request: CheckUserRequest): Promise<Response> | Observable<Response> | Response;
    verifyUser(request: VerifyRequest): Promise<Response> | Observable<Response> | Response;
    sendTokenVerification(request: SendTokenRequest): Promise<Response> | Observable<Response> | Response;
    login(request: LoginRequest): Promise<UserResponse> | Observable<UserResponse> | UserResponse;
    getUser(request: GetRequest): Promise<UserResponse> | Observable<UserResponse> | UserResponse;
    getUsers(request: GetRequest): Promise<UserResponse> | Observable<UserResponse> | UserResponse;
    userOAuthProvider(request: CustomerOAuthProviderRequest): Promise<UserResponse> | Observable<UserResponse> | UserResponse;
    changePassword(request: ChangePasswordRequest): Promise<Response> | Observable<Response> | Response;
    updateSettings(request: UpdateSettingsRequest): Promise<Response> | Observable<Response> | Response;
    saveBankAccount(request: SaveBankAccountRequest): Promise<Response> | Observable<Response> | Response;
    getBankAccounts(request: GetRequest): Promise<ListResponse> | Observable<ListResponse> | ListResponse;
    getBankAccount(request: GetRequest): Promise<Response> | Observable<Response> | Response;
    resetPasswordVerification(request: ResetPasswordRequest): Promise<Response> | Observable<Response> | Response;
    deleteUser(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    approveUser(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    rejectUser(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    activateUser(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    deactivateUser(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    saveCategory(request: SaveCategoryRequest): Promise<Response> | Observable<Response> | Response;
    getCategory(request: GetRequest): Promise<Response> | Observable<Response> | Response;
    getCategories(request: GetRequest): Promise<ListResponse> | Observable<ListResponse> | ListResponse;
    deleteCategory(request: GetRequest): Promise<Response> | Observable<Response> | Response;
}
export declare function UserServiceControllerMethods(): (constructor: Function) => void;
export declare const USER_SERVICE_NAME = "UserService";
