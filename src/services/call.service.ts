import { injectable } from 'inversify';
import { ICallService } from 'interfaces/call-service.interface';

@injectable()
export class CallService implements ICallService {
    constructor() { }

    public init(): boolean {
        return true;
    }
}