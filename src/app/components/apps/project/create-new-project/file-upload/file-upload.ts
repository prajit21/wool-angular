import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-file-upload',
  imports: [DropzoneModule],
  templateUrl: './file-upload.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './file-upload.scss',
})
export class FileUpload {
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
  };
}
