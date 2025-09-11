import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { LayoutService } from '../../../../services/layout.service';

@Component({
  selector: 'app-sidebar-type',
  templateUrl: './sidebar-type.html',
  styleUrl: './sidebar-type.scss',
  imports: [CommonModule],
})
export class SidebarType {
  private layout = inject(LayoutService);

  public sidebarType = localStorage.getItem('sidebar_type');
  public icon: string = 'stroke';

  constructor() {
    if (this.sidebarType != null) {
      this.layout.config.settings.sidebar_type = this.sidebarType;
    }
  }

  changeSidebar(value: string) {
    if (value == 'horizontal') {
      this.sidebarType = 'horizontal-wrapper';
      if (window.innerWidth <= 992) {
        this.layout.config.settings.sidebar_type = 'compact-wrapper modern-type';
        localStorage.setItem('sidebar_type', 'compact-wrapper modern-type');
      } else {
        this.layout.config.settings.sidebar_type = 'horizontal-wrapper';
        localStorage.setItem('sidebar_type', 'horizontal-wrapper');
      }
    } else if (value == 'vertical') {
      this.layout.margin = 0;
      this.sidebarType = 'compact-wrapper modern-type';
      this.layout.config.settings.sidebar_type = 'compact-wrapper modern-type';
      localStorage.setItem('sidebar_type', 'compact-wrapper modern-type');
    }

    window.location.reload();
  }

  changeIcon(value: string) {
    this.icon = value;
    this.layout.config.settings.icon = value;
    if (value == 'stroke-svg') {
      document.getElementsByTagName('page-sub-header')[0]?.setAttribute('icon', value);
    } else {
      document.getElementsByTagName('page-sub-header')[0]?.setAttribute('icon', value);
    }
  }
}
