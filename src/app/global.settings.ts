import { Injectable } from '@angular/core';

@Injectable()
export class GlobalSettings {
    urlRegister: string = 'https://staging-api.lejour.com.br/portal/api/v2/nps/';

    constructor() {}
}

