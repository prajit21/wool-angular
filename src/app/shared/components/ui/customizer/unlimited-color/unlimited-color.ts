import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LayoutService } from '../../../../services/layout.service';

@Component({
  selector: 'app-unlimited-color',
  templateUrl: './unlimited-color.html',
  styleUrl: './unlimited-color.scss',
  imports: [FormsModule],
})
export class UnlimitedColor {
  layout = inject(LayoutService);

  public primary: string = localStorage.getItem('--theme-deafult') || '#7366ff';
  public secondary: string = localStorage.getItem('--theme-secondary') || '#FF8575';

  public layoutVersion = localStorage.getItem('layout_version');
  constructor() {
    const layout = this.layout;

    if (this.layoutVersion != null) {
      this.layout.config.settings.layout_version = this.layoutVersion;
    }

    if (this.layoutVersion == 'light-only') {
      document.body?.classList.add('light-only');
      localStorage.setItem('layout_version', 'light-only');
    } else if (this.layoutVersion == 'dark-sidebar') {
      document.body?.classList.add('dark-sidebar');
      localStorage.setItem('layout_version', 'dark-sidebar');
    } else if (this.layoutVersion == 'dark-only') {
      document.body?.classList.add('dark-only');
      localStorage.setItem('layout_version', 'dark-only');
    }

    layout.config.color.primary = this.primary;
    layout.config.color.secondary = this.secondary || 'FF6150';

    document.documentElement.style.setProperty('--theme-deafult', this.primary);
    document.documentElement.style.setProperty('--theme-secondary', this.secondary);
  }

  changeLayout(value: string) {
    this.layout.config.settings.layout_version = value;
    document.body?.classList.remove('light-only', 'dark-sidebar', 'dark-only');
    if (value == 'light-only') {
      document.body?.classList.add('light-only');
      localStorage.setItem('layout_version', 'light-only');
    } else if (value == 'dark-sidebar') {
      document.body?.classList.add('dark-sidebar');
      localStorage.setItem('layout_version', 'dark-sidebar');
    } else if (value == 'dark-only') {
      document.body?.classList.add('dark-only');
      localStorage.setItem('layout_version', 'dark-only');
    }
  }

  applyColor() {
    document.documentElement.style.setProperty('--theme-deafult', this.primary);
    document.documentElement.style.setProperty('--theme-secondary', this.secondary);
    localStorage.setItem('--theme-deafult', this.primary);
    localStorage.setItem('--theme-secondary', this.secondary);
    this.layout.config.color.primary = this.primary;
    this.layout.config.color.secondary = this.secondary;

    window.location.reload();
  }
}
