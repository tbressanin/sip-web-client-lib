
import 'reflect-metadata';
import { ISipService, SipOptions } from './interfaces/sip.interface';
import { SipService } from './services/sip.service';
import { container } from './boot/inversify.config';
import { CallOptions, CallType, ICallService } from './interfaces/call-service.interface';
import { CallService } from './services/call.service';
import { DTFMOptions, RTCSession } from 'jssip/lib/RTCSession';

export default class Index {
    private readonly sipService: ISipService
    private readonly callService: ICallService
    private callSession?: RTCSession;

    constructor() {
        this.sipService = container.get(SipService);
        this.callService = container.get(CallService);
    }

    public init(options: SipOptions) {
        try {
            this.sipService.init(options);
        } catch (err) {
            this.handleError(err);
        };
    }

    public call(options: CallOptions, handlers?: {}) {
        try {
            return this.callService.initCall({ ...options, handlers: handlers ?? this.handlers });
        } catch (err) {
            this.handleError(err);
        };
    }

    public hangup(cause?: string) {
        try {
            this.callSession?.terminate({ cause: cause ?? 'Hangup' });
        } catch (err) {
            this.handleError(err);
        };
    }

    public hold() {
        try {
            if (!this.callSession?.hold()) {
                this.handleError('Error on holding the current call');
            };
        } catch (err) {
            this.handleError(err);
        };
    }

    public reject(cause?: string) {
        try {
            this.callSession?.terminate({ cause: cause ?? 'CallRejected' });
        } catch (err) {
            this.handleError(err);
        };
    }

    public resume() {
        try {
            if (this.callSession?.isOnHold) {
                this.callSession.unhold();
            }
        } catch (err) {
            this.handleError(err);
        };
    }

    public changeAudioDevice(deviceId: string) {
        try {

        } catch (err) {
            this.handleError(err);
        };
    }

    public changeVideoDevice(deviceId: string) {
        try {


        } catch (err) {
            this.handleError(err);
        };
    }

    public enableVideo() {
        try {
            if (this.callSession?.isOnHold) {
                this.callSession.unhold();
            }
        } catch (err) {
            this.handleError(err);
        };
    }

    public disableVideo() {
        try {
            this.callSession?.sendDTMF
        } catch (err) {
            this.handleError(err);
        };
    }

    public sendDTMF(tones: string | number, options?: DTFMOptions) {
        try {
            this.callSession?.sendDTMF(tones, options)
        } catch (err) {
            this.handleError(err);
        };
    }

    public handlers = {
        'progress': (e: any) => {
            console.log('call is in progress', e);
        },

        'peerconnection': (e: any) => {
            console.log('call ended with cause: ' + JSON.stringify(e));
        },

        'connecting': (e: any) => {
            console.log('call ended with cause: ' + JSON.stringify(e));
        },

        'sending': (e: any) => {
            console.log('call ended with cause: ' + JSON.stringify(e));
        },

        'accepted': (e: any) => {
            console.log('accepted: ' + JSON.stringify(e));
        },

        'confirmed': (e: any) => {
            console.log('confirmed: ' + JSON.stringify(e));
        },

        'ended': (e: any) => {
            console.log('ended: ' + JSON.stringify(e));
        },

        'failed': (e: any) => {
            console.log('failed: ' + JSON.stringify(e));
        },

        'newDTMF': (e: any) => {
            console.log('newDTMF: ' + JSON.stringify(e));
        },

        'newInfo': (e: any) => {
            console.log('newInfo: ' + JSON.stringify(e));
        },

        'hold': (e: any) => {
            console.log('hold: ' + JSON.stringify(e));
        },

        'unhold': (e: any) => {
            console.log('unhold: ' + JSON.stringify(e));
        },

        'muted': (e: any) => {
            console.log('muted: ' + JSON.stringify(e));
        },

        'unmuted': (e: any) => {
            console.log('unmuted: ' + JSON.stringify(e));
        },

        'reinvite': (e: any) => {
            console.log('reinvite: ' + JSON.stringify(e));
        },

        'update': (e: any) => {
            console.log('update: ' + JSON.stringify(e));
        },

        'refer': (e: any) => {
            console.log('refer: ' + JSON.stringify(e));
        },

        'replaces': (e: any) => {
            console.log('replaces: ' + JSON.stringify(e));
        },

        'sdp': (e: any) => {
            console.log('sdp: ' + JSON.stringify(e));
        },

        'icecandidate': (e: any) => {
            console.log('icecandidate: ' + JSON.stringify(e));
        },

        'getusermediafailed': (e: any) => {
            console.log('getusermediafailed: ' + JSON.stringify(e));
        },

        'peerconnection:createofferfailed': (e: any) => {
            console.log('peerconnection:createofferfailed: ' + JSON.stringify(e));
        },

        'peerconnection:createanswerfailed': (e: any) => {
            console.log('peerconnection:createanswerfailed: ' + JSON.stringify(e));
        },

        'peerconnection:setlocaldescriptionfailed': (e: any) => {
            console.log('peerconnection:setlocaldescriptionfailed: ' + JSON.stringify(e));
        },

        'peerconnection:setremotedescriptionfailed': (e: any) => {
            console.log('peerconnection:setremotedescriptionfailed: ' + JSON.stringify(e));
        },

    }

    private handleError = (err: any) => {
        console.log('Internal coresip lib error', err);
    }
};


    // let svc = new Sip()

    // svc.init(
    //     {
    //         label: '100049',
    //         realm: 'siphomologa.55pbx.com',
    //         user: '100049',
    //         password: 'LxF93IpPkySeFeN2',
    //         wsuri: 'wss://siphomologa.55pbx.com:8089/ws',
    //     }
    // )

    // const call = svc.call({ target: '5511949904889', callType: 'audio' });



// console.log(service);
// console.log(service);

// process.stdin.resume