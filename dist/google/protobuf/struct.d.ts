export declare const protobufPackage = "google.protobuf";
export declare enum NullValue {
    NULL_VALUE = 0,
    UNRECOGNIZED = -1
}
export interface Struct {
    fields: {
        [key: string]: any | undefined;
    };
}
export interface Struct_FieldsEntry {
    key: string;
    value: any | undefined;
}
export interface Value {
    nullValue?: NullValue | undefined;
    numberValue?: number | undefined;
    stringValue?: string | undefined;
    boolValue?: boolean | undefined;
    structValue?: {
        [key: string]: any;
    } | undefined;
    listValue?: Array<any> | undefined;
}
export interface ListValue {
    values: any[];
}
export declare const GOOGLE_PROTOBUF_PACKAGE_NAME = "google.protobuf";
export declare const Struct: MessageFns<Struct> & StructWrapperFns;
export declare const Value: MessageFns<Value> & AnyValueWrapperFns;
export declare const ListValue: MessageFns<ListValue> & ListValueWrapperFns;
export interface MessageFns<T> {
}
export interface StructWrapperFns {
    wrap(object: {
        [key: string]: any;
    } | undefined): Struct;
    unwrap(message: Struct): {
        [key: string]: any;
    };
}
export interface AnyValueWrapperFns {
    wrap(value: any): Value;
    unwrap(message: any): string | number | boolean | Object | null | Array<any> | undefined;
}
export interface ListValueWrapperFns {
    wrap(array: Array<any> | undefined): ListValue;
    unwrap(message: ListValue): Array<any>;
}
