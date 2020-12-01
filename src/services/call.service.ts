import { inject, injectable } from 'inversify';
import { CallOptions, CallType, ICallService } from '../interfaces/call-service.interface';
import { ISipService } from '../interfaces/sip.interface';
import * as JsSIP from 'jssip';
import { SipService } from './sip.service';
import { RTCSession } from 'jssip/lib/RTCSession';

@injectable()
export class CallService implements ICallService {

    private sipSession: JsSIP.UA | null = null;

    constructor(@inject(SipService) private readonly sipService: ISipService) { }

    public initCall(options: CallOptions): RTCSession {
        this.sipSession = this.sipService.getSipSession();

        const sipOptions = this.sipService.getOptions();

        this.sipSession.start();

        this.sipSession.register();

        const target = options.target.indexOf('+') > -1 ? options.target : '+' + options.target;
        
        return this.sipSession.call(`sip:${target}@${sipOptions.realm}`,
            {
                eventHandlers: options.handlers,
                mediaConstraints: { audio: true, video: options.callType === CallType.Video },
                pcConfig: options.pcConfig,
            }
        );
    }
}