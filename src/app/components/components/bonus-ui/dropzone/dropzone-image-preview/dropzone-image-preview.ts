import { Component } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-dropzone-image-preview',
  imports: [DropzoneModule],
  templateUrl: './dropzone-image-preview.html',
  styleUrl: './dropzone-image-preview.scss',
})
export class DropzoneImagePreview {
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
  };
}
