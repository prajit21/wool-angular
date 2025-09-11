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

@Component({
  selector: 'app-wool-modal',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './wool-modal.html',
  styleUrl: './wool-modal.scss',
})
export class WoolModal {
  private modal = inject(NgbActiveModal);

  public validate: boolean = false;
  public myForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    email: new FormControl('wooltheme@gmail.com', [Validators.required, Validators.email]),
    term: new FormControl(true, Validators.requiredTrue),
  });

  submit() {
    this.validate = true;
    if (this.myForm.valid) {
      this.modal.close();
    }
  }

  get fname() {
    return this.myForm.get('fname');
  }

  get lname() {
    return this.myForm.get('lname');
  }

  get email() {
    return this.myForm.get('email');
  }

  get term() {
    return this.myForm.get('term');
  }
}
