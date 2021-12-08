import { Component, OnInit } from '@angular/core';
import { MailchimpService } from '../services/mailchimp.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-subscribe-form',
    templateUrl: './subscribe-form.component.html',
    styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {
    formData: FormGroup;

    constructor(private api: MailchimpService,
                private builder: FormBuilder) {
    }

    ngOnInit(): void {
        this.formData = this.builder.group({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
        });
    }

    public onSubmit(formData): void {
        this.api.subscribeUser(formData.name, formData.email);
    }
}
