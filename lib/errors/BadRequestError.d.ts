import HttpError from './HttpError';
export default class BadRequestError extends HttpError {
    constructor(errorDetail: any);
}
