import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavService } from '../../services/nav.service';
import { SearchService } from '../../services/search.service';
import { HeaderBookmark } from './widgets/header-bookmark/header-bookmark';
import { HeaderCart } from './widgets/header-cart/header-cart';
import { HeaderLanguage } from './widgets/header-language/header-language';
import { HeaderMessage } from './widgets/header-message/header-message';
import { HeaderNotification } from './widgets/header-notification/header-notification';
import { HeaderSearch } from './widgets/header-search/header-search';
import { SearchItems } from './widgets/header-search/search-items/search-items';
import { HeaderThemeMode } from './widgets/header-theme-mode/header-theme-mode';
import { HeaderUserProfile } from './widgets/header-user-profile/header-user-profile';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    HeaderSearch,
    SearchItems,
    HeaderNotification,
    HeaderMessage,
    HeaderBookmark,
    HeaderCart,
    HeaderThemeMode,
    HeaderLanguage,
    HeaderUserProfile,
    FormsModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private navService = inject(NavService);
  search = inject(SearchService);

  public isSearchOpen: boolean = false;
  public notification: boolean = false;
  public bookmark: boolean = false;
  public message: boolean = false;
  public cart: boolean = false;
  public profile: boolean = false;

  closeSidebar() {
    this.navService.closeSidebar = !this.navService.closeSidebar;
  }

  openSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  languageToggle() {
    this.navService.language = !this.navService.language;
  }

  toggle(value: string) {
    if (value == 'notification') {
      this.notification = !this.notification;
    } else if (value == 'bookmark') {
      this.bookmark = !this.bookmark;
    } else if (value == 'message') {
      this.message = !this.message;
    } else if (value == 'cart') {
      this.cart = !this.cart;
    } else if (value == 'profile') {
      this.profile = !this.profile;
    }
  }
}
