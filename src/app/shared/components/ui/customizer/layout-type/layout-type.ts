import { Component, inject } from '@angular/core';

import { LayoutService } from '../../../../services/layout.service';

@Component({
  selector: 'app-layout-type',
  templateUrl: './layout-type.html',
  styleUrl: './layout-type.scss',
  imports: [],
})
export class LayoutType {
  private layout = inject(LayoutService);

  public layoutType: string = 'ltr';

  changeType(value: string) {
    this.layoutType = value;
    this.layout.config.settings.layout_type = value;

    if (value == 'ltr') {
      document.getElementsByTagName('html')[0].setAttribute('dir', value);
      document.body.className = 'ltr' + ' ' + this.layout.config.settings.layout_version;
    } else if (value == 'rtl') {
      document.getElementsByTagName('html')[0].setAttribute('dir', value);
      document.body.className = 'rtl' + ' ' + this.layout.config.settings.layout_version;
    } else if (value == 'box') {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
      document.body.className = 'box-layout' + ' ' + this.layout.config.settings.layout_version;
    } else {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
      document.body.className = '' + ' ' + this.layout.config.settings.layout_version;
    }
  }
}
