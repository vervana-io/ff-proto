import { Observable } from "rxjs";
import { GetRequest, IdRequest, Response } from "../common/common";
import { HealthCheckRequest, HealthCheckResponse } from "../healthcheck/healthcheck";
import { Address, ChangePasswordRequest, Device, LoginRequest, OTPType, ResetPasswordRequest, UpdateSettingsRequest, VerifyRequest } from "../users/user";
export declare const protobufPackage = "customers";
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
export interface CheckCustomerRequest {
    with: string;
    customer: string;
}
export interface SendTokenRequest {
    id?: string | undefined;
    with: string;
    customer: string;
    type: OTPType;
}
export interface VerifyCustomerRequest {
    with: string;
    customer: string;
    token: string;
}
export interface CustomerResponse {
    status: number;
    success: boolean;
    message: string;
    error?: string | undefined;
    data: CustomerResponse_Data | undefined;
}
export interface CustomerResponse_Data {
    Customer: Customer | undefined;
    settings: {
        [key: string]: string;
    };
    address: Address | undefined;
}
export interface CustomerResponse_Data_SettingsEntry {
    key: string;
    value: string;
}
export interface Customer {
    id: string;
    firstname: string;
    lastname: string;
    phones: {
        [key: string]: string;
    };
    referralCode: string;
    avatar: string;
    devices: Device[];
}
export interface Customer_PhonesEntry {
    key: string;
    value: string;
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
export declare const CUSTOMERS_PACKAGE_NAME = "customers";
export interface CustomerServiceClient {
    healthCheck(request: HealthCheckRequest): Observable<HealthCheckResponse>;
    createCustomer(request: SaveCustomerRequest): Observable<Response>;
    login(request: LoginRequest): Observable<CustomerResponse>;
    checkCustomerExists(request: CheckCustomerRequest): Observable<Response>;
    verifyCustomer(request: VerifyRequest): Observable<Response>;
    sendTokenVerification(request: SendTokenRequest): Observable<Response>;
    getCustomer(request: GetRequest): Observable<CustomerResponse>;
    getCustomers(request: GetRequest): Observable<CustomerResponse>;
    customerOAuthProvider(request: CustomerOAuthProviderRequest): Observable<CustomerResponse>;
    getCustomerAddress(request: GetRequest): Observable<CustomerResponse>;
    changePassword(request: ChangePasswordRequest): Observable<Response>;
    resetPasswordVerification(request: ResetPasswordRequest): Observable<Response>;
    delete(request: IdRequest): Observable<Response>;
    approve(request: IdRequest): Observable<Response>;
    reject(request: IdRequest): Observable<Response>;
    activate(request: IdRequest): Observable<Response>;
    deactivate(request: IdRequest): Observable<Response>;
    updateSettings(request: UpdateSettingsRequest): Observable<Response>;
}
export interface CustomerServiceController {
    healthCheck(request: HealthCheckRequest): Promise<HealthCheckResponse> | Observable<HealthCheckResponse> | HealthCheckResponse;
    createCustomer(request: SaveCustomerRequest): Promise<Response> | Observable<Response> | Response;
    login(request: LoginRequest): Promise<CustomerResponse> | Observable<CustomerResponse> | CustomerResponse;
    checkCustomerExists(request: CheckCustomerRequest): Promise<Response> | Observable<Response> | Response;
    verifyCustomer(request: VerifyRequest): Promise<Response> | Observable<Response> | Response;
    sendTokenVerification(request: SendTokenRequest): Promise<Response> | Observable<Response> | Response;
    getCustomer(request: GetRequest): Promise<CustomerResponse> | Observable<CustomerResponse> | CustomerResponse;
    getCustomers(request: GetRequest): Promise<CustomerResponse> | Observable<CustomerResponse> | CustomerResponse;
    customerOAuthProvider(request: CustomerOAuthProviderRequest): Promise<CustomerResponse> | Observable<CustomerResponse> | CustomerResponse;
    getCustomerAddress(request: GetRequest): Promise<CustomerResponse> | Observable<CustomerResponse> | CustomerResponse;
    changePassword(request: ChangePasswordRequest): Promise<Response> | Observable<Response> | Response;
    resetPasswordVerification(request: ResetPasswordRequest): Promise<Response> | Observable<Response> | Response;
    delete(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    approve(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    reject(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    activate(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    deactivate(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    updateSettings(request: UpdateSettingsRequest): Promise<Response> | Observable<Response> | Response;
}
export declare function CustomerServiceControllerMethods(): (constructor: Function) => void;
export declare const CUSTOMER_SERVICE_NAME = "CustomerService";
