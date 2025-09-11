import { Component } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-dropzone-single-file-upload',
  imports: [DropzoneModule],
  templateUrl: './dropzone-single-file-upload.html',
  styleUrl: './dropzone-single-file-upload.scss',
})
export class DropzoneSingleFileUpload {
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFiles: 1,
    uploadMultiple: false,
    addRemoveLinks: true,
  };
}
