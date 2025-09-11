import { Component, inject } from '@angular/core';

import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';

import { socialAppPhoto } from '../../../../shared/data/data/social-apps';

@Component({
  selector: 'app-search-result-images',
  imports: [LightboxModule],
  templateUrl: './search-result-images.html',
  styleUrl: './search-result-images.scss',
})
export class SearchResultImages {
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
