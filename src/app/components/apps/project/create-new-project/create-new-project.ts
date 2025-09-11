import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FileUpload } from './file-upload/file-upload';

@Component({
  selector: 'app-create-new-project',
  imports: [FileUpload, NgbModule],
  templateUrl: './create-new-project.html',
  styleUrl: './create-new-project.scss',
})
export class CreateNewProject {}
