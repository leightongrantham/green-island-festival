import { Injectable } from '@angular/core';
import { ContentfulConfig } from '../../../contentful-config';
// import { createClient } from 'contentful';

import { createClient } from 'contentful-management'

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: '',
    accessToken: ContentfulConfig.accessToken
  });

  constructor() { }

  public subscribeUser(name: string, email: string): Promise<void> {
    const fields = {
      'name': { 'en-US': name },
      'email': { 'en-US': email }
    }

    return this.cdaClient.getSpace(ContentfulConfig.space)
        .then((space) => space.getEnvironment('master'))
        .then((space) => space.createEntry(
            'user', { fields }))
        .then((entry) => console.log(entry))
        .catch(console.error);
  }
}
