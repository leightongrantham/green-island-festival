import { createClient } from 'contentful';
import { Injectable } from '@angular/core';
import { ContentfulConfig } from '../../../contentful-config';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: ContentfulConfig.space,
    accessToken: ContentfulConfig.accessToken
  });

  constructor() { }

  public subscribeUser(): void {
    // add user to contentful
  }
}
