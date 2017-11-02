import { Customer, MainFormModel } from './main-form.model';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-form',
    template: `
		<button (click)="openExisting()">Open Existing</button>
		<form [formGroup]="form" (ngSubmit)="onSubmit()">
			<div [formGroup]="form.get('additionalInfo')">
				<label>Special Instructions</label>
				<input type="text" formControlName="specialInstructions" />
			</div>
			<div [formGroup]="form.get('customerInfo')">
				<label>First Name</label>
				<input type="text" formControlName="firstName" />
				<label>Last Name</label>
				<input type="text" formControlName="lastName" />
			</div>
			<div [formGroup]="form.get('contactInfo')">
				<label>Email Address</label>
				<input type="text" formControlName="email" />
				<label>Phone Number</label>
				<input type="text" formControlName="phone" />
			</div>
			<button type="submit">Submit</button>
		</form>
	`,
    styles: []
})
export class MainFormComponent implements OnInit {
    form: FormGroup;

    constructor(private formBuilder: FormBuilder, private mainFormModel: MainFormModel) {
        this.form = this.mainFormModel.group;
    }

    ngOnInit() {
    }

    openExisting() {
        const customer: Customer = {
            firstName: 'dude',
            lastName: 'bruh',
            email: 'dude@gmail.com',
            phone: '8051234567',
            specialInstructions: 'Leave the package at the door, man.'
        };
        this.mainFormModel.initializeFormModel(customer);
    }

    onSubmit() {
        console.log(this.mainFormModel.getRequestModel());
    }

}
