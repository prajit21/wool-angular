import { Component } from '@angular/core';

import { latestPhotos } from '../../../../../../shared/data/data/social-apps';

@Component({
  selector: 'app-social-latest-photos',
  imports: [],
  templateUrl: './social-latest-photos.html',
  styleUrl: './social-latest-photos.scss',
})
export class SocialLatestPhotos {
  public latestPhotos = latestPhotos;
}
