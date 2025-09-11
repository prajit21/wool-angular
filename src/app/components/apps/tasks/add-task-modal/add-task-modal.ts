import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-task-modal',
  imports: [FormsModule, ReactiveFormsModule, NgbModule, CommonModule],
  templateUrl: './add-task-modal.html',
  styleUrl: './add-task-modal.scss',
})
export class AddTaskModal {
  private modal = inject(NgbActiveModal);

  public validate: boolean = false;
  public todayDate = new Date().toLocaleDateString();

  public myForm = new FormGroup({
    taskTitle: new FormControl('', Validators.required),
    subTask: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('7:00', Validators.required),
    description: new FormControl('', Validators.required),
  });

  addTask() {
    this.validate = true;
    if (this.myForm.valid) {
      this.modal.close();
    }
  }
  closeModal() {
    this.modal.close();
  }

  get taskTitle() {
    return this.myForm.get('taskTitle');
  }

  get subTask() {
    return this.myForm.get('subTask');
  }

  get date() {
    return this.myForm.get('date');
  }

  get time() {
    return this.myForm.get('time');
  }

  get description() {
    return this.myForm.get('description');
  }
}
