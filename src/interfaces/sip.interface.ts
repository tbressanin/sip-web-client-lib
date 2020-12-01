import * as JsSIP from 'jssip';
export interface ISipService {
    init: (config: SipOptions) => void;
    getSipSession: () => JsSIP.UA;
    getOptions: () => SipOptions;
}

export interface SipOptions {
    label?: string;
    realm: string;
    user: string;
    password: string;
    wsuri: string;
}