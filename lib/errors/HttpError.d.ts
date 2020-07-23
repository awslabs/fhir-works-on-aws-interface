export default class HttpError extends Error {
    readonly statusCode: number;
    readonly errorDetail: any;
    constructor(message: string, statusCode: number, errorDetail: any);
}
