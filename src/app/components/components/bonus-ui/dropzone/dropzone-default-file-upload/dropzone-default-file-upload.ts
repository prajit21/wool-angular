import { Component } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-dropzone-default-file-upload',
  imports: [DropzoneModule],
  templateUrl: './dropzone-default-file-upload.html',
  styleUrl: './dropzone-default-file-upload.scss',
})
export class DropzoneDefaultFileUpload {
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
  };

  public text =
    ' <div class="dz-message needsclick"><i class="icon-cloud-up"></i><p>Drop files here or click to upload.</p></div>';
}
