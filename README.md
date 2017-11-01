# Building Nested Reactive Forms in Angular

`main-form.model.ts`:

```typescript
export interface Customer {
    specialInstructions: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export class MainFormModel {
    group: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.group = this.createGroup(formBuilder);
    }

    getRequestModel(): Customer {
        const form = this.group.value;

        return {
            specialInstructions: form.additionalInfo.specialInstructions,
            firstName: form.customerInfo.firstName,
            lastName: form.customerInfo.lastName,
            email: form.contactInfo.email,
            phone: form.contactInfo.phone
        };
    }

    patchValue(customer: Customer): void {
        this.group.get('additionalInfo').patchValue({
            specialInstructions: customer.specialInstructions
        });

        this.group.get('customerInfo').patchValue({
            firstName: customer.firstName,
            lastName: customer.lastName
        });

        this.group.get('contactInfo').patchValue({
            email: customer.email,
            phone: customer.phone
        });
    }

    private createGroup(formBuilder: FormBuilder): FormGroup {
        return this.formBuilder.group({
            additionalInfo: this.formBuilder.group({
                specialInstructions: ''
            }),
            customerInfo: this.formBuilder.group({
                firstName: '',
                lastName: ''
            }),
            contactInfo: this.formBuilder.group({
                email: '',
                phone: ''
            })
        });
    }
}
```