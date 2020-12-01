import { injectable } from 'inversify';
import { ISipService, SipOptions } from '../interfaces/sip.interface';
import * as JsSIP from 'jssip';

@injectable()
export class SipService implements ISipService {

    public sipSession?: JsSIP.UA;
    public sipOptions?: SipOptions;

    public init(options: SipOptions): void {

        this.sipOptions = options;

        this.sipSession = new JsSIP.UA({
            sockets: [new JsSIP.WebSocketInterface(options.wsuri)],
            uri: `sip:${options.user}@${options.realm}`,
            password: options.password,
            realm: options.realm
        });
    }

    public getOptions = () => { return this.sipOptions! }

    public getSipSession(): JsSIP.UA { return this.sipSession! }
}