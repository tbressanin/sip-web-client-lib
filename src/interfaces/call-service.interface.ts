import { RTCSession } from "jssip/lib/RTCSession";

export interface ICallService {
    initCall: (options: CallOptions) => RTCSession;
}

export interface CallOptions {
    callType: CallType;
    target: string;
    handlers?: {};
    pcConfig?: {
        iceServers: { urls: string[] }[]
    }
}

export enum CallType {
    Audio = "audio",
    Video = "video",
    Both = "both"
}