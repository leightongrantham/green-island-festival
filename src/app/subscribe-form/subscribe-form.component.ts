import { Component, OnInit } from '@angular/core';
import { MailchimpService } from '../services/mailchimp.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContentfulService } from '../services/contentful.service';

@Component({
    selector: 'app-subscribe-form',
    templateUrl: './subscribe-form.component.html',
    styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {
    formData: FormGroup;

    constructor(private api: ContentfulService,
                private builder: FormBuilder) {
    }

    ngOnInit(): void {
        this.formData = this.builder.group({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
        });
    }

    public async onSubmit(formData) {
        await this.api.subscribeUser(formData.name, formData.email);
    }
}
