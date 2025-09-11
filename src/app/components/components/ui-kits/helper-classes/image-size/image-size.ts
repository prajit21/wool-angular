import { Component } from '@angular/core';

import { imageSize } from '../../../../../shared/data/data/ui-kits/helper-classic';

@Component({
  selector: 'app-image-size',
  imports: [],
  templateUrl: './image-size.html',
  styleUrl: './image-size.scss',
})
export class ImageSize {
  public imageSize = imageSize;
}
