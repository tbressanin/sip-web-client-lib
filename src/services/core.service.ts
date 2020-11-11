import { injectable } from 'inversify';
import { ICoreInterface } from './interfaces/core.interface';

@injectable()
export default class CoreService implements ICoreInterface { 
    constructor() {}

    public TestService(): boolean {
        return true;
    }
}