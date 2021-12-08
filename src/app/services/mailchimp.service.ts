import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailchimpService {

  constructor(private http: HttpClient) { }

  public subscribeUser(name: string, email: string): void {
    // configuration details
    const API_KEY = '2c4ae0b704ef0c9d008be069002d945e-us20';
    const AUDIENCE_ID = 'd06ee96348';
    const SEND_WELCOME = true;

    // subscriber details from form
    const SUBSCRIBER_EMAIL = 'leightongrantham2@gmail.com';
    const NAME = 'Leighton Grantham';

    const URL = 'https://outlook.us20.list-manage.com/subscribe/post?u='
        + API_KEY
        + '&id='
        + AUDIENCE_ID
        + '&email[email]='
        + email
        + '&name=[name]='
        + name
        + '&double_optin=false&send_welcome='
        + SEND_WELCOME;

    // call HTTP get request
    this.http.get(URL).subscribe((success) => {
      console.log('success', success);
    }, (error) => {
      console.log('error', error);
    });
  }
}
