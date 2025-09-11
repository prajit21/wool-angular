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

import { bookmark } from '../../../../shared/data/data/bookmark';

// define Bookmark type properly
export interface BookmarkItem {
  id: number;
  image: string;
  url: string;
  title: string;
  desc: string;
  group: string;
  collection: string;
}

@Component({
  selector: 'app-add-bookmark-modal',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-bookmark-modal.html',
  styleUrl: './add-bookmark-modal.scss',
})
export class AddBookmarkModal {
  private modal = inject(NgbActiveModal);

  public validate = false;
  public bookmark = bookmark;
  public ids: number[] = [];
  public maxId = 0;

  public myForm = new FormGroup({
    id: new FormControl<number>(0, { nonNullable: true }),
    image: new FormControl<string>('assets/images/lightgallry/01.jpg', { nonNullable: true }),
    url: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    title: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    desc: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    group: new FormControl<string>('bookmark', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    collection: new FormControl<string>('general', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor() {
    this.bookmark.filter(data => {
      if (data.value === 'created_by_me') {
        data.data.forEach(subData => {
          this.ids.push(subData.id);
          this.maxId = Math.max(...this.ids);
        });
      }
    });

    this.myForm.setValue({
      id: this.maxId + 1,
      image: 'assets/images/lightgallry/01.jpg',
      url: '',
      title: '',
      desc: '',
      group: 'bookmark',
      collection: 'general',
    });
  }

  submit() {
    this.validate = true;
    if (this.myForm.valid) {
      const newBookmark: BookmarkItem = this.myForm.getRawValue(); // strongly typed
      this.bookmark.forEach(data => {
        if (data.value === 'created_by_me') {
          data.data.push(newBookmark);
          this.modal.close();
        }
      });
    }
  }

  closeModal() {
    this.modal.close();
  }

  get url() {
    return this.myForm.get('url');
  }
  get title() {
    return this.myForm.get('title');
  }
  get description() {
    return this.myForm.get('description');
  }
  get group() {
    return this.myForm.get('group');
  }
  get collection() {
    return this.myForm.get('collection');
  }
}
