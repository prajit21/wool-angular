import { Component, output } from '@angular/core';

import { socialAppTab } from '../../../../shared/data/data/social-apps';

@Component({
  selector: 'app-social-app-profile',
  imports: [],
  templateUrl: './social-app-profile.html',
  styleUrl: './social-app-profile.scss',
})
export class SocialAppProfile {
  readonly activeTabValue = output<string>();

  public socialAppTab = socialAppTab;
  public activeTab?: string = 'timeline';

  ngOnInit() {
    this.activeTabValue.emit(this.activeTab);
  }

  changeTab(value?: string) {
    this.activeTab = value;
    this.activeTabValue.emit(this.activeTab);
  }
}
