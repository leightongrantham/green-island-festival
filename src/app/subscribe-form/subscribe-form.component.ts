import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FlotiqService } from '../services/flotiq.service';
import { MailchimpService } from '../services/mailchimp.service';

@Component({
    selector: 'app-subscribe-form',
    templateUrl: './subscribe-form.component.html',
    styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {
    formData: FormGroup;

    constructor(private api: FlotiqService,
                private builder: FormBuilder) {
    }

    ngOnInit(): void {
        this.formData = this.builder.group({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
        });
    }

    public async onSubmit(formData): Promise<void> {
        await this.api.subscribeUser(formData.name, formData.email);
        this.formData.reset();
    }
}
