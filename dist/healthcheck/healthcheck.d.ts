import { Observable } from "rxjs";
export declare const protobufPackage = "grpc.health.v1";
export interface HealthCheckRequest {
    service: string;
}
export interface HealthCheckResponse {
    status: HealthCheckResponse_ServingStatus;
}
export declare enum HealthCheckResponse_ServingStatus {
    UNKNOWN = 0,
    SERVING = 1,
    NOT_SERVING = 2,
    SERVICE_UNKNOWN = 3,
    UNRECOGNIZED = -1
}
export declare const GRPC_HEALTH_V1_PACKAGE_NAME = "grpc.health.v1";
export interface HealthClient {
    check(request: HealthCheckRequest): Observable<HealthCheckResponse>;
    watch(request: HealthCheckRequest): Observable<HealthCheckResponse>;
}
export interface HealthController {
    check(request: HealthCheckRequest): Promise<HealthCheckResponse> | Observable<HealthCheckResponse> | HealthCheckResponse;
    watch(request: HealthCheckRequest): Observable<HealthCheckResponse>;
}
export declare function HealthControllerMethods(): (constructor: Function) => void;
export declare const HEALTH_SERVICE_NAME = "Health";
