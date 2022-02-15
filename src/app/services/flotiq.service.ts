import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FlotiqService {
    private token = environment.flotiqApiKey;

    private httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': this.token
    });

    constructor(private httpClient: HttpClient) {
    }

    public subscribeUser(name: string, email: string): Promise<void> {
        const fields = {
            id: Date.now() + '_' + Math.random().toString().substring(2),
            name,
            email
        };

        return this.httpClient.post(`https://api.flotiq.com/api/v1/content/user`,
            fields, { headers: this.httpHeaders })
            .toPromise().then(response => {
                console.log(response);
        });
    }


    public getUser(): Observable<any> {
        return this.httpClient.get('https://api.flotiq.com/api/v1/content/user', {
            headers: this.httpHeaders
        });
    }
}
