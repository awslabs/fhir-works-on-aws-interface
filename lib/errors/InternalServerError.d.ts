import HttpError from './HttpError';
export default class InternalServerError extends HttpError {
    constructor(errorDetail: any);
}
