import { Observable } from "rxjs";
import { Empty, GetListRequest, GetRequest, IdRequest, Response } from "../common/common";
import { Timestamp } from "../google/protobuf/timestamp";
import { HealthCheckRequest, HealthCheckResponse } from "../healthcheck/healthcheck";
import { Address } from "../locations/location";
import { Address as Address1, ChangePasswordRequest, CheckUserRequest, LoginRequest, ResetPasswordRequest, SendTokenRequest, UpdateSettingsRequest, VerifyRequest } from "../users/user";
export declare const protobufPackage = "vendors";
export interface FoodClass {
    id: string;
    name?: string | undefined;
    description?: string | undefined;
    status?: number | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
    createdAt: Timestamp | undefined;
    updatedAt: Timestamp | undefined;
}
export interface SaveFoodClassRequest {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    status?: number | undefined;
}
export interface Category {
    id: string;
    name: string;
    description: string;
    vendorId: string;
    categoryId: string;
    foodClassId: string;
    foodClass?: FoodClass | undefined;
}
export interface SaveCategoryRequest {
    id?: string | undefined;
    name: string;
    description: string;
    vendorId: string;
    foodClassId: string;
    parentId?: string | undefined;
}
export interface ListResponse {
    status: number;
    message: string;
    error?: string | undefined;
    success: boolean;
    data: Array<any> | undefined;
    nextPageToken: number;
}
export interface Product {
    id: string;
    vendorId: string;
    categoryId?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    units: number;
    price: number;
    discount: number;
    prepTime: number;
    specialNote?: string | undefined;
    unitLowLevel: number;
    isAllergies: boolean;
    allergies?: string | undefined;
    status: number;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
    loveReactantId?: string | undefined;
    createdAt: Timestamp | undefined;
    updatedAt: Timestamp | undefined;
    category: Category | undefined;
    vendor?: Vendor | undefined;
    productAddonCategories: Product_ProductAddonCategory[];
}
export interface Product_ProductAddonCategory {
    id: string;
    name: string;
    description: string;
    status: string;
    required: boolean;
    productAddons: Product_ProductAddon[];
}
export interface Product_ProductAddon {
    id: string;
    productAddonCategoryId: string;
    name: string;
    price: number;
}
export interface SaveProductRequest {
    id?: string | undefined;
    vendorId: string;
    categoryId?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    units: number;
    price: number;
    discount: number;
    prepTime: number;
    specialNote?: string | undefined;
    unitLowLevel: number;
    isAllergies: boolean;
    allergies?: string | undefined;
    status: string;
    media: SaveProductRequest_Media[];
    addons: SaveProductRequest_Addon[];
}
export interface SaveProductRequest_Media {
    id?: string | undefined;
    media: string;
}
export interface SaveProductRequest_Addon {
    categoryName: string;
    description: string;
    required: boolean;
    productAddons: SaveProductRequest_Addon_ProductAddon[];
    id?: string | undefined;
}
export interface SaveProductRequest_Addon_ProductAddon {
    name: string;
    price: number;
    id?: string | undefined;
}
export interface DeleteProductRequest {
    id: string;
    delete: string;
}
export interface ProductResponse {
    status: number;
    message: string;
    error?: string | undefined;
    success: boolean;
    data: Product | undefined;
}
export interface ProductListResponse {
    status: number;
    message: string;
    error?: string | undefined;
    success: boolean;
    data: Product[];
    nextPageToken: number;
}
export interface ProductAddon {
    id: string;
    categoryId: string;
    name?: string | undefined;
    price: number;
    status: number;
    createdAt: Timestamp | undefined;
    updatedAt: Timestamp | undefined;
}
export interface SaveProductAddonRequest {
    id?: string | undefined;
    categoryId: string;
    name?: string | undefined;
    price: number;
    status: number;
}
export interface GetProductAddonResponse {
    status: number;
    message: string;
    error?: string | undefined;
    success: boolean;
    productAddon: ProductAddon | undefined;
}
export interface CouponRedemption {
    id: string;
    couponId: string;
    userId: string;
    redemptionDate: Timestamp | undefined;
    status: number;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
    createdAt: Timestamp | undefined;
    updatedAt: Timestamp | undefined;
}
export interface Coupon {
    id: string;
    code: string;
    description?: string | undefined;
    discountType: number;
    discountValue: number;
    validFrom: Timestamp | undefined;
    validTo: Timestamp | undefined;
    usageLimit: number;
    usedCount: number;
    status: number;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
    createdAt: Timestamp | undefined;
    updatedAt: Timestamp | undefined;
}
export interface SaveCouponRequest {
    id?: string | undefined;
    couponType: string;
    productVisibility: string;
    extras?: number | undefined;
    discountValue: number;
    maxRedemptions: number;
    startAt: string;
    endAt: string;
    products: string[];
}
export interface GetCouponResponse {
    status: number;
    message: string;
    error?: string | undefined;
    success: boolean;
    coupon: Coupon | undefined;
}
export interface SaveProductAddon {
    categoryId: string;
    name: string;
    price: number;
    id: string;
}
export interface SaveProductAddon_AddonCategory {
    productId: string;
    name: string;
    description: string;
    required: boolean;
    id?: string | undefined;
}
export interface Vendor {
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
}
export interface SaveVendorRequest {
    id?: string | undefined;
    phone: string;
    email: string;
    password: string;
    address: Address1 | undefined;
    categoryId: string;
    businessName: string;
    firstname?: string | undefined;
    othername?: string | undefined;
    lastname?: string | undefined;
    individualFullName?: string | undefined;
    individualAddress: string;
    individualSelfie: string;
    individualIdentityCard: string;
    businessPhoneNumber: string;
    businessEmail?: string | undefined;
    licenseNumber: string;
    openingHours: string;
    closingHours: string;
    businessStreet: string;
    businessHouseNumber: string;
    businessNearestBusStop: string;
    businessLogo: string;
    businessThumbnail: string;
    businessCertificate: string;
    businessMemorandum: string;
    businessUtilityBill: string;
    businessBuilding: string;
    deviceType: string;
    deviceToken: string;
    deviceVersion: string;
}
export interface SaveFranchiseRequest {
    sellerId: string;
    email: string;
    password: string;
    latitude?: string | undefined;
    longitude?: string | undefined;
    formattedAddress?: string | undefined;
    franchiseName: string;
    franchisePhoneNumber: string;
    openingHours: string;
    closingHours: string;
    individualFirstName?: string | undefined;
    individualOtherName?: string | undefined;
    individualLastName?: string | undefined;
    banner: string;
    sellerAllowWithdraw?: boolean | undefined;
}
export declare const VENDORS_PACKAGE_NAME = "vendors";
export interface VendorServiceClient {
    healthCheck(request: HealthCheckRequest): Observable<HealthCheckResponse>;
    createVendor(request: SaveVendorRequest): Observable<Response>;
    login(request: LoginRequest): Observable<Response>;
    checkVendorExists(request: CheckUserRequest): Observable<Response>;
    verifyVendor(request: VerifyRequest): Observable<Response>;
    sendTokenVerification(request: SendTokenRequest): Observable<Response>;
    getVendor(request: GetRequest): Observable<Response>;
    getVendors(request: GetRequest): Observable<Response>;
    getVendorAddress(request: GetRequest): Observable<Response>;
    changePassword(request: ChangePasswordRequest): Observable<Response>;
    resetPasswordVerification(request: ResetPasswordRequest): Observable<Response>;
    delete(request: IdRequest): Observable<Response>;
    approve(request: IdRequest): Observable<Response>;
    reject(request: IdRequest): Observable<Response>;
    activate(request: IdRequest): Observable<Response>;
    deactivate(request: IdRequest): Observable<Response>;
    updateSettings(request: UpdateSettingsRequest): Observable<Response>;
    saveFranchise(request: SaveFranchiseRequest): Observable<Response>;
    savePersonnel(request: Empty): Observable<Response>;
    saveFoodClass(request: SaveFoodClassRequest): Observable<Response>;
    getFoodClass(request: GetRequest): Observable<Response>;
    getFoodClasses(request: GetRequest): Observable<ListResponse>;
    deleteFoodClass(request: GetRequest): Observable<Response>;
    saveCategory(request: SaveCategoryRequest): Observable<Response>;
    getCategory(request: GetRequest): Observable<Response>;
    deleteCategory(request: GetRequest): Observable<Response>;
    getCategories(request: GetListRequest): Observable<ListResponse>;
    saveProduct(request: SaveProductRequest): Observable<Response>;
    getProduct(request: GetRequest): Observable<ProductResponse>;
    deleteProduct(request: GetRequest): Observable<Response>;
    getProducts(request: GetListRequest): Observable<ProductListResponse>;
    getProductRecommendation(request: GetListRequest): Observable<ProductListResponse>;
    saveCoupon(request: SaveCouponRequest): Observable<Response>;
}
export interface VendorServiceController {
    healthCheck(request: HealthCheckRequest): Promise<HealthCheckResponse> | Observable<HealthCheckResponse> | HealthCheckResponse;
    createVendor(request: SaveVendorRequest): Promise<Response> | Observable<Response> | Response;
    login(request: LoginRequest): Promise<Response> | Observable<Response> | Response;
    checkVendorExists(request: CheckUserRequest): Promise<Response> | Observable<Response> | Response;
    verifyVendor(request: VerifyRequest): Promise<Response> | Observable<Response> | Response;
    sendTokenVerification(request: SendTokenRequest): Promise<Response> | Observable<Response> | Response;
    getVendor(request: GetRequest): Promise<Response> | Observable<Response> | Response;
    getVendors(request: GetRequest): Promise<Response> | Observable<Response> | Response;
    getVendorAddress(request: GetRequest): Promise<Response> | Observable<Response> | Response;
    changePassword(request: ChangePasswordRequest): Promise<Response> | Observable<Response> | Response;
    resetPasswordVerification(request: ResetPasswordRequest): Promise<Response> | Observable<Response> | Response;
    delete(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    approve(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    reject(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    activate(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    deactivate(request: IdRequest): Promise<Response> | Observable<Response> | Response;
    updateSettings(request: UpdateSettingsRequest): Promise<Response> | Observable<Response> | Response;
    saveFranchise(request: SaveFranchiseRequest): Promise<Response> | Observable<Response> | Response;
    savePersonnel(request: Empty): Promise<Response> | Observable<Response> | Response;
    saveFoodClass(request: SaveFoodClassRequest): Promise<Response> | Observable<Response> | Response;
    getFoodClass(request: GetRequest): Promise<Response> | Observable<Response> | Response;
    getFoodClasses(request: GetRequest): Promise<ListResponse> | Observable<ListResponse> | ListResponse;
    deleteFoodClass(request: GetRequest): Promise<Response> | Observable<Response> | Response;
    saveCategory(request: SaveCategoryRequest): Promise<Response> | Observable<Response> | Response;
    getCategory(request: GetRequest): Promise<Response> | Observable<Response> | Response;
    deleteCategory(request: GetRequest): Promise<Response> | Observable<Response> | Response;
    getCategories(request: GetListRequest): Promise<ListResponse> | Observable<ListResponse> | ListResponse;
    saveProduct(request: SaveProductRequest): Promise<Response> | Observable<Response> | Response;
    getProduct(request: GetRequest): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse;
    deleteProduct(request: GetRequest): Promise<Response> | Observable<Response> | Response;
    getProducts(request: GetListRequest): Promise<ProductListResponse> | Observable<ProductListResponse> | ProductListResponse;
    getProductRecommendation(request: GetListRequest): Promise<ProductListResponse> | Observable<ProductListResponse> | ProductListResponse;
    saveCoupon(request: SaveCouponRequest): Promise<Response> | Observable<Response> | Response;
}
export declare function VendorServiceControllerMethods(): (constructor: Function) => void;
export declare const VENDOR_SERVICE_NAME = "VendorService";
