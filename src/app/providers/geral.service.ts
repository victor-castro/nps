import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { GlobalSettings } from '../global.settings';
import 'rxjs/Rx';

@Injectable()
export class GeralService {
    http: any;
    headers: Headers;

    constructor(http: Http, private settings: GlobalSettings) {
        this.http = http;
        this.headers = new Headers();
    }

    auth() {
        let url = 'https://api.github.com/login/oauth/authorize';

        return this.http.get(url).map(res => res.json());
    }

    getIssue() {
        // let url = 'https://api.github.com/users/frontendbr/repos';
        let url = 'https://api.github.com/users/frontendbr/repos?page=1&per_page=20';

        return this.http.get(url).map(res => res.json());
    }
}