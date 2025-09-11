import { Component } from '@angular/core';

import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

import { galleryItems } from '../../../../shared/data/data/gallery';

@Component({
  selector: 'app-gallery-grid-desc',
  imports: [LightboxModule, GalleryModule],
  templateUrl: './gallery-grid-desc.html',
  styleUrl: './gallery-grid-desc.scss',
})
export class GalleryGridDesc {
  public galleryItems = galleryItems;
}
