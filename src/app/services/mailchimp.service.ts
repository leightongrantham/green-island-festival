import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailchimpService {

  constructor(private http: HttpClient) { }

  public subscribeUser(): void {
    // configuration details
    const API_KEY = 'f9237c57ec34da785ae4XXXXXXXXXX-us19';
    const AUDIENCE_ID = '46665XXXXX';
    const SEND_WELCOME = true;

    // subscriber details from form
    const SUBSCRIBER_EMAIL = 'ankit.codechintan@gmail.com';
    const FNAME = 'Ankit';
    const LNAME = 'Maheshwari';

    const URL = 'https://us19.api.mailchimp.com/2.0/lists/subscribe.json?apikey='
        + API_KEY
        + '&id='
        + AUDIENCE_ID
        + '&email[email]='
        + SUBSCRIBER_EMAIL
        + '&merge_vars[FNAME]='
        + FNAME
        + '&merge_vars[LNAME]='
        + LNAME
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
