import 'reflect-metadata'
import { inject } from 'inversify';
import * as tsConfig from "../tsconfig.json";

const tsConfigPaths = require("tsconfig-paths");
tsConfigPaths.register({
    baseUrl: "./dist/src",
    paths: tsConfig.compilerOptions.paths
});

require('dotenv').config({
    path: process.env.NODE_ENV === "dev" ?
        "./src/env/.env.development" :
        ".env"
});

import { SipService } from 'services';
import { ISipService } from 'interfaces';
import { container } from './boot/inversify.config';

export class Boot {
    constructor(@inject(SipService) private readonly coreService: ISipService) {
        this.coreService.init();
    }
}

new Boot(container.get(SipService));
