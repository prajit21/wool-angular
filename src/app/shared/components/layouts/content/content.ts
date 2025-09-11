import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutService } from '../../../services/layout.service';
import { NavService } from '../../../services/nav.service';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';
import { Sidebar } from '../../sidebar/sidebar';
import { Breadcrumb } from '../../ui/breadcrumb/breadcrumb';
import { Customizer } from '../../ui/customizer/customizer';
import { TapToTop } from '../../ui/tap-to-top/tap-to-top';

@Component({
  selector: 'app-content',
  imports: [Header, Breadcrumb, Footer, Customizer, TapToTop, Sidebar, RouterOutlet, CommonModule],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
  navService = inject(NavService);
  layout = inject(LayoutService);

  public footerLight = false;
  public footerDark = false;
  public footerFix = false;

  constructor() {
    const navService = this.navService;

    if (window.innerWidth < 1185) {
      navService.closeSidebar = true;
    }

    if (window.innerWidth <= 992) {
      this.layout.config.settings.sidebar_type = 'compact-wrapper modern-type';
    } else {
      this.layout.config.settings.sidebar_type = this.layout.config.settings.sidebar_type;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 1185) {
      this.navService.closeSidebar = true;
    } else {
      this.navService.closeSidebar = false;
    }

    if (window.innerWidth <= 992) {
      this.layout.config.settings.sidebar_type = 'compact-wrapper modern-type';
    } else {
      this.layout.config.settings.sidebar_type = this.layout.config.settings.sidebar_type;
    }
  }

  ngDoCheck() {
    if (window.location.pathname.includes('/page-layout/footer-dark')) {
      this.footerDark = true;
      this.footerLight = false;
      this.footerFix = false;
    } else if (window.location.pathname.includes('/page-layout/footer-light')) {
      this.footerLight = true;
      this.footerDark = false;
      this.footerFix = false;
    } else if (window.location.pathname.includes('/page-layout/footer-fixed')) {
      this.footerFix = true;
      this.footerLight = false;
      this.footerDark = false;
    }
  }
}
