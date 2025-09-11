import { Component, inject } from '@angular/core';

import {
  Gallery,
  GalleryItem,
  GalleryModule,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';

import { socialAppPhoto } from '../../../../shared/data/data/social-apps';

@Component({
  selector: 'app-social-app-photos',
  imports: [GalleryModule, LightboxModule],
  templateUrl: './social-app-photos.html',
  styleUrl: './social-app-photos.scss',
})
export class SocialAppPhotos {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);

  public socialAppPhoto = socialAppPhoto;
  public items: GalleryItem[];

  ngOnInit() {
    this.items = this.socialAppPhoto.map(
      item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }),
    );

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    lightboxRef.load(this.items);
  }
}
