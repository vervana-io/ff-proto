import { Observable } from "rxjs";
import { GetRequest, IdRequest, Response } from "../common/common";
export declare const protobufPackage = "locations";
export interface Owner {
    id: string;
    type: string;
}
export interface Address {
    owner?: Owner | undefined;
    location: Location | undefined;
    street?: string | undefined;
    nearestBusStop?: string | undefined;
    id: string;
    city?: string | undefined;
    state?: string | undefined;
    country?: string | undefined;
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
    latitude?: number | undefined;
    longitude?: number | undefined;
    formatedAddress?: string | undefined;
    coordinates: number[];
}
export interface SaveAddressRequest {
    location: Location | undefined;
    houseNumber?: string | undefined;
    street?: string | undefined;
    nearestBusStop?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    country?: string | undefined;
    customerAddress?: SaveCustomerAddressRequest | undefined;
    vendorAddress?: SaveVendorAddressRequest | undefined;
    riderAddress?: SaveRiderAddressRequest | undefined;
    id?: string | undefined;
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
    location?: Location | undefined;
    addressLabel: string;
    address?: Address | undefined;
    gridId?: string | undefined;
    id: string;
    distance?: number | undefined;
}
export interface GetVendorLocationResponse {
    status: number;
    message: string;
    error?: string | undefined;
    vendors: VendorLocation[];
    vendor?: VendorLocation | undefined;
}
export interface CustomerLocation {
    customerId: string;
    location?: Location | undefined;
    address?: Address | undefined;
    isPrimary: boolean;
    addressLabel?: string | undefined;
    gridId?: string | undefined;
    id: string;
}
export interface GetCustomerLocationResponse {
    status: number;
    message: string;
    error?: string | undefined;
    customers: CustomerLocation[];
    customer?: CustomerLocation | undefined;
}
export interface RiderLocation {
    riderId: string;
    location?: Location | undefined;
    available: boolean;
    gridId?: string | undefined;
    formatedAddress?: string | undefined;
    id: string;
    distance?: number | undefined;
}
export interface GetRiderLocationResponse {
    status: number;
    message: string;
    error?: string | undefined;
    riders: RiderLocation[];
    rider?: RiderLocation | undefined;
}
export declare const LOCATIONS_PACKAGE_NAME = "locations";
export interface LocationServiceClient {
    saveAddress(request: SaveAddressRequest): Observable<Response>;
    deleteAddress(request: IdRequest): Observable<Response>;
    updateRiderLocation(request: UpdateRiderLocationRequest): Observable<Response>;
    getAvailableRiders(request: GetAvailableRidersRequest): Observable<GetRiderLocationResponse>;
    getCustomerLocation(request: GetRequest): Observable<GetCustomerLocationResponse>;
    getCustomerLocations(request: GetRequest): Observable<GetCustomerLocationResponse>;
    getVendorLocations(request: GetRequest): Observable<GetCustomerLocationResponse>;
    getVendorsLocations(request: GetRequest): Observable<GetCustomerLocationResponse>;
    getVendorsByLocation(request: Location): Observable<GetVendorLocationResponse>;
    getVendorLocation(request: GetRequest): Observable<GetVendorLocationResponse>;
}
export interface LocationServiceController {
    saveAddress(request: SaveAddressRequest): Promise<Response> | Observable<Response> | Response;
    deleteAddress(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    updateRiderLocation(request: UpdateRiderLocationRequest): Promise<Response> | Observable<Response> | Response;
    getAvailableRiders(request: GetAvailableRidersRequest): Promise<GetRiderLocationResponse> | Observable<GetRiderLocationResponse> | GetRiderLocationResponse;
    getCustomerLocation(request: GetRequest): Promise<GetCustomerLocationResponse> | Observable<GetCustomerLocationResponse> | GetCustomerLocationResponse;
    getCustomerLocations(request: GetRequest): Promise<GetCustomerLocationResponse> | Observable<GetCustomerLocationResponse> | GetCustomerLocationResponse;
    getVendorLocations(request: GetRequest): Promise<GetCustomerLocationResponse> | Observable<GetCustomerLocationResponse> | GetCustomerLocationResponse;
    getVendorsLocations(request: GetRequest): Promise<GetCustomerLocationResponse> | Observable<GetCustomerLocationResponse> | GetCustomerLocationResponse;
    getVendorsByLocation(request: Location): Promise<GetVendorLocationResponse> | Observable<GetVendorLocationResponse> | GetVendorLocationResponse;
    getVendorLocation(request: GetRequest): Promise<GetVendorLocationResponse> | Observable<GetVendorLocationResponse> | GetVendorLocationResponse;
}
export declare function LocationServiceControllerMethods(): (constructor: Function) => void;
export declare const LOCATION_SERVICE_NAME = "LocationService";
