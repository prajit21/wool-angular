import { Component, output } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-add-product-gallery',
  imports: [DropzoneModule],
  templateUrl: './add-product-gallery.html',
  styleUrl: './add-product-gallery.scss',
})
export class AddProductGallery {
  readonly activeStep = output<string>();

  public validate: boolean = false;
  public file: File[] = [];

  next() {
    this.validate = true;
    this.activeStep.emit('category');
  }

  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*,gif',
    addRemoveLinks: true,
  };

  public config2: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
  };

  previous() {
    this.activeStep.emit('details');
  }
}
