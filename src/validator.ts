import { VerbType } from './authorization';

export interface Validator {
    /**
     * returns a resolved Promise if the resource is valid. Otherwise throws an error
     * @throws InvalidResourceError
     */
    validate(resource: any, params: { enableMultiTenancy?: string; httpVerb?: VerbType }): Promise<void>;
}
