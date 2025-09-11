import { Component, inject } from '@angular/core';

import { LayoutService } from '../../../../services/layout.service';
import { FeatherIcons } from '../../../ui/feather-icons/feather-icons';

@Component({
  selector: 'app-header-theme-mode',
  templateUrl: './header-theme-mode.html',
  styleUrl: './header-theme-mode.scss',
  imports: [FeatherIcons],
})
export class HeaderThemeMode {
  private layout = inject(LayoutService);

  public dark: boolean = this.layout.config.settings.layout_version == 'dark-only' ? true : false;

  toggle() {
    this.dark = !this.dark;
    if (this.dark) {
      document.body.classList.add('dark-only');
      this.layout.config.settings.layout_version = 'dark-only';
    } else {
      document.body.classList.remove('dark-only');
      this.layout.config.settings.layout_version = 'light-only';
    }
  }
}
