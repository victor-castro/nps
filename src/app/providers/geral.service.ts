import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { GlobalSettings } from '../global.settings';
import 'rxjs/Rx';

@Injectable()
export class GeralService {
    http: any;

    constructor(http: Http, private settings: GlobalSettings) {
        this.http = http;
    }

    registerScore(score: any = '', comment: any = '') {
        let data: Object;

        if(score) {
            console.log('score')
            data = new Object({
                score: score
            })
        }

        if(comment) {
            console.log('comentario')
            data = new Object({
                id: comment.id,
                comment: comment.comment
            })
        }

        let params = JSON.stringify(data);

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({
          headers: headers
        });

        return this.http.post(this.settings.urlRegister, params, options).map(res => res.json())

    }

    getScore() {

        return this.http.get(this.settings.urlRegister).map(res => res.json())
    }
}