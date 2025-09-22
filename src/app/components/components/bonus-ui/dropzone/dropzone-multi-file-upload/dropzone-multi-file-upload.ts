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

  public text =
    ' <div class="dz-message needsclick"><i class="icon-cloud-up"></i><p>Drop files here or click to upload.</p></div>';
}
