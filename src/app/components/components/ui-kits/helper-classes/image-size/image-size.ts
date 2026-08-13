import { Component, ChangeDetectionStrategy } from '@angular/core';

import { imageSize } from '../../../../../shared/data/data/ui-kits/helper-classic';

@Component({
  selector: 'app-image-size',
  imports: [],
  templateUrl: './image-size.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './image-size.scss',
})
export class ImageSize {
  public imageSize = imageSize;
}
