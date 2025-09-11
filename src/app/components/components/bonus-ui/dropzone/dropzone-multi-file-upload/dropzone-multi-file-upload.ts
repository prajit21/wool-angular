import { Component } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-dropzone-multi-file-upload',
  imports: [DropzoneModule],
  templateUrl: './dropzone-multi-file-upload.html',
  styleUrl: './dropzone-multi-file-upload.scss',
})
export class DropzoneMultiFileUpload {
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
  };
}
