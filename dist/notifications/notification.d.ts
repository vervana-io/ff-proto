import { Observable } from "rxjs";
export declare const protobufPackage = "notifications";
export declare enum NotificationType {
    NOTIFICATION_TYPE_UNSPECIFIED = 0,
    NOTIFICATION_TYPE_SMS = 1,
    NOTIFICATION_TYPE_EMAIL = 2,
    NOTIFICATION_TYPE_PUSH = 3,
    NOTIFICATION_TYPE_SOCKET = 4,
    UNRECOGNIZED = -1
}
export interface Empty {
}
export interface Response {
    status: number;
    success: boolean;
    message: string;
    data: {
        [key: string]: string;
    };
    error?: string | undefined;
}
export interface Response_DataEntry {
    key: string;
    value: string;
}
export interface SendMessageRequest {
    type: NotificationType;
    to: string;
    data: {
        [key: string]: string;
    };
}
export interface SendMessageRequest_DataEntry {
    key: string;
    value: string;
}
export declare const NOTIFICATIONS_PACKAGE_NAME = "notifications";
export interface NotificationServiceClient {
    health(request: Empty): Observable<Response>;
    sendMessage(request: SendMessageRequest): Observable<Response>;
}
export interface NotificationServiceController {
    health(request: Empty): Promise<Response> | Observable<Response> | Response;
    sendMessage(request: SendMessageRequest): Promise<Response> | Observable<Response> | Response;
}
export declare function NotificationServiceControllerMethods(): (constructor: Function) => void;
export declare const NOTIFICATION_SERVICE_NAME = "NotificationService";
