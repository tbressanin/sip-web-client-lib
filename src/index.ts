
import 'reflect-metadata'


import { inject } from 'inversify';
import CoreService from './services/core.service';
import { ICoreInterface } from './services/interfaces/core.interface';
import { container } from './boot/inversify.config';

export class Boot {
    constructor(@inject(CoreService) private readonly coreService: ICoreInterface) {
        const test = coreService.TestService();
        console.log('started!!!', this.coreService);
    }
}

new Boot(container.get(CoreService));