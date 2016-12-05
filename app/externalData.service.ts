import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ExternalDataService {
    baseUrl: string;
    extractData;
    handleError;
    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3004';
    }

    fetchStories(): Observable<any> {
        return this.http.get(`${this.baseUrl}/posts`)
            .map(response => response.json());
    }

    setData(data): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3004/posts', data , options);
    }


}