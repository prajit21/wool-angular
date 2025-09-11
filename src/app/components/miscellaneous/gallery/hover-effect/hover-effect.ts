import { Component } from '@angular/core';

import { LightboxModule } from 'ng-gallery/lightbox';

import { hoverDetails, images } from '../../../../shared/data/data/gallery';

@Component({
  selector: 'app-hover-effect',
  imports: [LightboxModule],
  templateUrl: './hover-effect.html',
  styleUrl: './hover-effect.scss',
})
export class HoverEffect {
  public images = images;
  public hoverEffect = hoverDetails;
}
