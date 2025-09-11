import { Component } from '@angular/core';

import { DropzoneDefaultFileUpload } from './dropzone-default-file-upload/dropzone-default-file-upload';
import { DropzoneImagePreview } from './dropzone-image-preview/dropzone-image-preview';
import { DropzoneMultiFileUpload } from './dropzone-multi-file-upload/dropzone-multi-file-upload';
import { DropzoneSingleFileUpload } from './dropzone-single-file-upload/dropzone-single-file-upload';

@Component({
  selector: 'app-dropzone',
  imports: [
    DropzoneDefaultFileUpload,
    DropzoneImagePreview,
    DropzoneMultiFileUpload,
    DropzoneSingleFileUpload,
  ],
  templateUrl: './dropzone.html',
  styleUrl: './dropzone.scss',
})
export class Dropzone {}
