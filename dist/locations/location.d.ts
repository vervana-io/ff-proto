import { Observable } from "rxjs";
import { GetRequest, Response } from "../common/common";
export declare const protobufPackage = "locations";
export interface Owner {
    id: string;
    type: string;
}
export interface Address {
    owner: Owner | undefined;
    location: Location | undefined;
    street: string;
    nearestBusStop: string;
    city: string;
    state: string;
    country: string;
    isPrimary: boolean;
    metadata: {
        [key: string]: string;
    };
}
export interface Address_MetadataEntry {
    key: string;
    value: string;
}
export interface UpdateRiderLocationRequest {
    riderId: string;
    lat: number;
    long: number;
}
export interface GetAvailableRidersRequest {
    lat: number;
    long: number;
    excludes: string[];
}
export interface Location {
    latitude: number;
    longitude: number;
    formatedAddress: string;
}
export interface SaveAddressRequest {
    location: Location | undefined;
    houseNumber: string;
    street: string;
    nearestBusStop: string;
    city: string;
    state: string;
    country: string;
    customerAddress?: SaveCustomerAddressRequest | undefined;
    vendorAddress?: SaveVendorAddressRequest | undefined;
    riderAddress?: SaveRiderAddressRequest | undefined;
}
export interface SaveCustomerAddressRequest {
    customerId: string;
    label?: string | undefined;
    isPrimary: boolean;
}
export interface SaveRiderAddressRequest {
    riderId: string;
}
export interface SaveVendorAddressRequest {
    vendorId: string;
    label?: string | undefined;
    contactPhone?: string | undefined;
    contactEmail?: string | undefined;
    deliveryRadius?: number | undefined;
    averagePrepTime?: number | undefined;
    metadata: {
        [key: string]: string;
    };
}
export interface SaveVendorAddressRequest_MetadataEntry {
    key: string;
    value: string;
}
export interface GetUserAddressRequest {
    user: string;
    userType: string;
}
export interface VendorLocation {
    vendorId: string;
    location: Location | undefined;
    addressLabel: string;
    address: Address | undefined;
    gridId: string;
}
export interface GetVendorLocationResponse {
    status: number;
    message: string;
    error?: string | undefined;
    vendors: VendorLocation[];
    vendor: VendorLocation | undefined;
}
export interface CustomerLocation {
    customerId: string;
    location: Location | undefined;
    address: Address | undefined;
    isPrimary: boolean;
    addressLabel: string;
    gridId: string;
}
export interface GetCustomerLocationResponse {
    status: number;
    message: string;
    error?: string | undefined;
    customers: CustomerLocation[];
    customer: CustomerLocation | undefined;
}
export interface RiderLocation {
    riderId: string;
    location: Location | undefined;
    available: boolean;
    gridId: string;
    formatedAddress: string;
}
export interface GetRiderLocationResponse {
    status: number;
    message: string;
    error?: string | undefined;
    riders: RiderLocation[];
    rider: RiderLocation | undefined;
}
export declare const LOCATIONS_PACKAGE_NAME = "locations";
export interface LocationServiceClient {
    saveAddress(request: SaveAddressRequest): Observable<Response>;
    updateRiderLocation(request: UpdateRiderLocationRequest): Observable<Response>;
    getAvailableRiders(request: GetAvailableRidersRequest): Observable<GetRiderLocationResponse>;
    getCustomerAddress(request: GetRequest): Observable<GetCustomerLocationResponse>;
    getVendorsByLocation(request: Location): Observable<GetVendorLocationResponse>;
}
export interface LocationServiceController {
    saveAddress(request: SaveAddressRequest): Promise<Response> | Observable<Response> | Response;
    updateRiderLocation(request: UpdateRiderLocationRequest): Promise<Response> | Observable<Response> | Response;
    getAvailableRiders(request: GetAvailableRidersRequest): Promise<GetRiderLocationResponse> | Observable<GetRiderLocationResponse> | GetRiderLocationResponse;
    getCustomerAddress(request: GetRequest): Promise<GetCustomerLocationResponse> | Observable<GetCustomerLocationResponse> | GetCustomerLocationResponse;
    getVendorsByLocation(request: Location): Promise<GetVendorLocationResponse> | Observable<GetVendorLocationResponse> | GetVendorLocationResponse;
}
export declare function LocationServiceControllerMethods(): (constructor: Function) => void;
export declare const LOCATION_SERVICE_NAME = "LocationService";
