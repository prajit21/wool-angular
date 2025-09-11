import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-blog-add-post',
  imports: [DropzoneModule, AngularEditorModule, NgSelectModule, FormsModule],
  templateUrl: './blog-add-post.html',
  styleUrl: './blog-add-post.scss',
})
export class BlogAddPost {
  public selectedCityIds: string[] = [];
  public category = [
    { id: 1, name: 'LifeStyle' },
    { id: 2, name: 'Travel' },
  ];

  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
  };
}
