import { Observable } from "rxjs";
import { GetRequest, IdRequest, ListResponse, Response } from "../common/common";
import { HealthCheckRequest, HealthCheckResponse } from "../healthcheck/healthcheck";
import { Address, ChangePasswordRequest, CheckUserRequest, LoginRequest, ResetPasswordRequest, SendTokenRequest, UpdateSettingsRequest, VerifyRequest } from "../users/user";
export declare const protobufPackage = "riders";
export interface SaveRiderRequest {
    id?: string | undefined;
    email?: string | undefined;
    phone: string;
    password: string;
    firstName: string;
    lastName: string;
    address: Address | undefined;
    contractType: number;
    shiftData: number[];
    nextOfKin?: string | undefined;
    nextOfKinPhoneNumber?: string | undefined;
    driversLicense: string;
    vehicleType?: number | undefined;
    vehicleBrand?: string | undefined;
    vehiclePlateNumber?: string | undefined;
    vehiclePicture: string;
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
    selfie: string;
    deviceType?: string | undefined;
    deviceToken?: string | undefined;
    deviceVersion?: string | undefined;
}
export interface SaveShiftRequest {
    id?: string | undefined;
    type: number;
    day: number;
    riderId: string;
}
export interface Shift {
    id: string;
    type: number;
    day: number;
    riderId: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}
export declare const RIDERS_PACKAGE_NAME = "riders";
export interface RiderServiceClient {
    healthCheck(request: HealthCheckRequest): Observable<HealthCheckResponse>;
    createRider(request: SaveRiderRequest): Observable<Response>;
    login(request: LoginRequest): Observable<Response>;
    checkRiderExists(request: CheckUserRequest): Observable<Response>;
    verifyRider(request: VerifyRequest): Observable<Response>;
    sendTokenVerification(request: SendTokenRequest): Observable<Response>;
    getRider(request: GetRequest): Observable<Response>;
    getRiders(request: GetRequest): Observable<Response>;
    getRiderAddress(request: GetRequest): Observable<Response>;
    changePassword(request: ChangePasswordRequest): Observable<Response>;
    resetPasswordVerification(request: ResetPasswordRequest): Observable<Response>;
    delete(request: IdRequest): Observable<Response>;
    approve(request: IdRequest): Observable<Response>;
    reject(request: IdRequest): Observable<Response>;
    activate(request: IdRequest): Observable<Response>;
    deactivate(request: IdRequest): Observable<Response>;
    updateSettings(request: UpdateSettingsRequest): Observable<Response>;
    saveShift(request: SaveShiftRequest): Observable<Response>;
    deleteShift(request: IdRequest): Observable<Response>;
    getShifts(request: IdRequest): Observable<ListResponse>;
}
export interface RiderServiceController {
    healthCheck(request: HealthCheckRequest): Promise<HealthCheckResponse> | Observable<HealthCheckResponse> | HealthCheckResponse;
    createRider(request: SaveRiderRequest): Promise<Response> | Observable<Response> | Response;
    login(request: LoginRequest): Promise<Response> | Observable<Response> | Response;
    checkRiderExists(request: CheckUserRequest): Promise<Response> | Observable<Response> | Response;
    verifyRider(request: VerifyRequest): Promise<Response> | Observable<Response> | Response;
    sendTokenVerification(request: SendTokenRequest): Promise<Response> | Observable<Response> | Response;
    getRider(request: GetRequest): Promise<Response> | Observable<Response> | Response;
    getRiders(request: GetRequest): Promise<Response> | Observable<Response> | Response;
    getRiderAddress(request: GetRequest): Promise<Response> | Observable<Response> | Response;
    changePassword(request: ChangePasswordRequest): Promise<Response> | Observable<Response> | Response;
    resetPasswordVerification(request: ResetPasswordRequest): Promise<Response> | Observable<Response> | Response;
    delete(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    approve(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    reject(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    activate(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    deactivate(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    updateSettings(request: UpdateSettingsRequest): Promise<Response> | Observable<Response> | Response;
    saveShift(request: SaveShiftRequest): Promise<Response> | Observable<Response> | Response;
    deleteShift(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    getShifts(request: IdRequest): Promise<ListResponse> | Observable<ListResponse> | ListResponse;
}
export declare function RiderServiceControllerMethods(): (constructor: Function) => void;
export declare const RIDER_SERVICE_NAME = "RiderService";
