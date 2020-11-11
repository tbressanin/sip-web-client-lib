
import 'reflect-metadata'
import { inject, injectable } from 'inversify';
import CoreService from './services/core.service';
import { ICoreInterface } from './services/interfaces/core.interface';
import { container } from './boot/inversify.config';

export class Boot {
    constructor(@inject(CoreService) coreService: ICoreInterface) {
        const test = coreService.TestService();
    }
}

new Boot(container.get(CoreService));

process.stdin.resume();
process.stdout.resume();
