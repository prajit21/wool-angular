import { Component } from '@angular/core';

import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

import { galleryItems } from '../../../../shared/data/data/gallery';

@Component({
  selector: 'app-gallery-grid',
  imports: [LightboxModule, GalleryModule],
  templateUrl: './gallery-grid.html',
  styleUrl: './gallery-grid.scss',
})
export class GalleryGrid {
  public galleryItems = galleryItems;
}
