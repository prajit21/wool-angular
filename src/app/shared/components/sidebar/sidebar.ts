import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { LayoutService } from '../../services/layout.service';
import { Menu, NavService } from '../../services/nav.service';
import { FeatherIcons } from '../ui/feather-icons/feather-icons';
import { SvgIcon } from '../ui/svg-icon/svg-icon';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FeatherIcons, SvgIcon, TranslateModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private navService = inject(NavService);
  private router = inject(Router);
  layout = inject(LayoutService);

  public menu: Menu[] = [];
  public menuItems: Menu[];
  public pinList: Menu[] = [];

  public margin: number = 0;
  public leftArrow: boolean = false;
  public rightArrow: boolean = true;

  constructor() {
    if (window.innerWidth < 1185) {
      this.navService.closeSidebar = true;
    }
    this.menu = this.navService.menuItems;

    this.navService.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.menuItems.filter((items: Menu) => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) {
              return false;
            }
            items.children.filter((subItems: Menu) => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                return false;
              }
              subItems.children.filter((subSubItems: Menu) => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
              return;
            });
            return;
          });
        }
      });
    });
  }

  setNavActive(items: Menu) {
    this.menuItems.filter(menuItem => {
      if (menuItem !== items) {
        menuItem.active = false;
      }
      if (menuItem.children && menuItem.children.includes(items)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(items)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }

  toggleMenu(item: Menu) {
    if (!item.active) {
      this.menuItems.forEach((a: Menu) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: Menu) => {
          if (a.children?.includes(item)) {
            b.active = false;
          }
        });
        return;
      });
    }
    item.active = !item.active;
  }

  closeSidebar() {
    this.navService.closeSidebar = true;
  }

  scrollLeft() {
    this.rightArrow = true;
    if (this.layout.margin != 0) {
      this.layout.margin = this.layout.margin + 500;
    }

    if (this.layout.margin == 0) {
      this.leftArrow = false;
    }
  }
  scrollRight() {
    this.leftArrow = true;
    if (this.layout.margin != -3500) {
      this.layout.margin = this.layout.margin - 500;
    }
    if (this.layout.margin == -3500) {
      this.rightArrow = false;
    }
  }

  pined(item: Menu) {
    if (!item.pined) {
      this.menu.filter(data => {
        if (data.title) {
          if (this.menu.includes(item)) {
            item.pined = true;
            if (!this.pinList.includes(item)) {
              this.pinList.push(item);
            }
          }
        }
      });
    } else {
      item.pined = false;
      this.pinList.splice(this.pinList.indexOf(item), 1);
    }
  }

  ngOnChanges() {
    if (this.layout.config.settings.sidebar_type == 'compact-wrapper modern-type') {
      this.margin = 0;
    }
  }
}
