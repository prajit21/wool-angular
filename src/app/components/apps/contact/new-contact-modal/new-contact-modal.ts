import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { contact } from '../../../../shared/data/data/contact';
import { Contact, ContactDetails } from '../../../../shared/interface/contact';

@Component({
  selector: 'app-new-contact-modal',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './new-contact-modal.html',
  styleUrls: ['./new-contact-modal.scss'],
})
export class NewContactModal {
  private modal = inject(NgbActiveModal);

  public validate = false;
  public contact: Contact[] = contact;
  public ids: number[] = [];
  public maxId = 0;

  public myForm: FormGroup;

  constructor() {
    // Collect all IDs for "personal" contacts
    this.contact.forEach(group => {
      group.data?.forEach((subData: ContactDetails) => {
        if (group.value === 'personal') {
          this.ids.push(subData.id);
        }
      });
    });
    this.maxId = this.ids.length ? Math.max(...this.ids) : 0;

    // Initialize form with maxId + 1
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      type: new FormControl('mobile', Validators.required),
      img: new FormControl('assets/images/user/user.png'),
      gender: new FormControl('male'),
      dob: new FormControl('5 Jan 2000'),
      personality: new FormControl('Cool'),
      city: new FormControl('Delhi'),
      website: new FormControl('www.abc.com'),
      interest: new FormControl('sports'),
      id: new FormControl(this.maxId + 1),
    });
  }

  addContact() {
    this.validate = true;
    if (this.myForm.valid) {
      const contactData: ContactDetails = {
        ...this.myForm.value,
        active: this.contact.find(c => c.value === 'personal')?.data?.length === 0,
      };

      this.contact
        .filter(group => group.value === 'personal')
        .forEach(group => group.data?.push(contactData));

      this.modal.close();
    }
  }

  closeModal() {
    this.modal.close();
  }

  get firstName() {
    return this.myForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.myForm.get('lastName') as FormControl;
  }

  get email() {
    return this.myForm.get('email') as FormControl;
  }

  get mobile() {
    return this.myForm.get('mobile') as FormControl;
  }

  get type() {
    return this.myForm.get('type') as FormControl;
  }
}
