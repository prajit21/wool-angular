import { Component, HostListener, inject } from '@angular/core';

import { NavService } from '../../../../shared/services/nav.service';

@Component({
  selector: 'app-hide-nav-scroll',
  imports: [],
  templateUrl: './hide-nav-scroll.html',
  styleUrl: './hide-nav-scroll.scss',
})
export class HideNavScroll {
  private navService = inject(NavService);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 400) {
      this.navService.hideNav = true;
    } else {
      this.navService.hideNav = false;
    }
  }
}
