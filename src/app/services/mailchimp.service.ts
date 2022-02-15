import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as mailchimp from '@mailchimp/mailchimp_marketing';

@Injectable({
  providedIn: 'root'
})
export class MailchimpService {

  constructor(private http: HttpClient) { }

  public async subscribeUser(name: string, email: string): Promise<void> {
    // configuration details
    const apiKey = '44a5828e4c375bb30ebc17e61ba085df-us20';
    const audienceId = 'd06ee96348';
    const sendWelcome = true;
    const dataCenter = 'us20';
    const endpoint = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

    // subscriber details from form
    const SUBSCRIBER_EMAIL = 'leightongrantham2@gmail.com';
    const NAME = 'Leighton Grantham';

    // const URL = 'https://outlook.us20.list-manage.com/subscribe/post?u='
    //     + API_KEY
    //     + '&id='
    //     + AUDIENCE_ID
    //     + '&email[email]='
    //     + email
    //     + '&name=[name]='
    //     + name
    //     + '&double_optin=false&send_welcome='
    //     + SEND_WELCOME;

    const params = new HttpParams()
        .set('FNAME', name)
        .set('EMAIL', email)
        .set('group[24413][128]', 'true')
        .set('b_b736eb9e9077236cbd681a53b_4b66a82360', '');

    // // call HTTP get request
    // this.http.post(URL, ).subscribe((success) => {
    //   console.log('success', success);
    // }, (error) => {
    //   console.log('error', error);
    // });

    mailchimp.setConfig({
      apiKey: apiKey,
      server: dataCenter,
    });

    const response = await mailchimp.ping.get();
    console.log(response);
  }
}
