import 'reflect-metadata'
import { inject } from 'inversify';
import { container } from './boot/inversify.config';
import { ISipService } from './interfaces/sip.interface';
import { SipService } from './services/sip.service';

export class Boot {
    constructor(@inject(SipService) private readonly sipService: ISipService) {
        this.sipService.init();
    }
}

new Boot(container.get(SipService));
