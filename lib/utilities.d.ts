import { TypeOperation, SystemOperation } from './constants';
export declare function chunkArray(myArray: any[], chunkSize: number): any[][];
export declare function clone(item: any): any;
export declare function cleanAuthHeader(authorizationHeader?: string): string;
export declare function getRequestInformation(verb: string, urlPath: string): {
    operation: TypeOperation | SystemOperation;
    resourceType?: string;
    id?: string;
    vid?: string;
};
