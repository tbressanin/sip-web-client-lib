import { injectable } from 'inversify';
import { ISipService } from '../interfaces/sip.interface';

@injectable()
export class SipService implements ISipService {
    constructor() { }

    public init(): boolean {
        return true;
    }    
}