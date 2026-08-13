import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ContactDetail } from './contact-details/contact-details';
import { ContactSideMenu } from './contact-side-menu/contact-side-menu';

@Component({
  selector: 'app-contact',
  imports: [ContactSideMenu, ContactDetail],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact.scss',
})
export class Contact {
  public activeTab: string;

  tabValue(value: string) {
    this.activeTab = value;
  }
}
