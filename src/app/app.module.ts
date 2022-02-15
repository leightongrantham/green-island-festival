import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiModule, Configuration, ConfigurationParameters } from 'flotiq';
import { ProjectModule } from './project/project.module';
import { AppRoutingModule } from './app-routing.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export function apiConfigFactory(): Configuration {
    const params: ConfigurationParameters = {
        apiKeys: {'X-AUTH-TOKEN': environment.flotiqApiKey}
    };
    return new Configuration(params);
}

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ImageCarouselComponent,
        SubscribeFormComponent,
    ],
    imports: [
        BrowserModule,
        ApiModule.forRoot(apiConfigFactory),
        ProjectModule,
        AppRoutingModule,
        ScullyLibModule,
        RouterModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        HttpClientModule
    ],
    providers: [
        HttpClient
    ],
    exports: [
        AppComponent,
        ImageCarouselComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
