export interface Coding {
    system?: string;
    version?: string;
    code?: string;
    display?: string;
    userSelected?: boolean;
}
export interface Meta {
    versionId: string;
    lastUpdated: string;
    source?: string;
    profile?: Coding;
    tag?: Coding;
}
export declare function generateMeta(vid: string, lastUpdatedDate?: Date): Meta;
