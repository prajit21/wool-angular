import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfigurationModal } from './configuration-modal/configuration-modal';
import { LayoutType } from './layout-type/layout-type';
import { SidebarType } from './sidebar-type/sidebar-type';
import { UnlimitedColor } from './unlimited-color/unlimited-color';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-customizer',
  imports: [LayoutType, SidebarType, UnlimitedColor],
  templateUrl: './customizer.html',
  styleUrl: './customizer.scss',
})
export class Customizer {
  private modalService = inject(NgbModal);
  layoutService = inject(LayoutService);

  public isOpen: boolean = false;
  openCustomizer() {
    this.isOpen = true;
  }

  closeCustomizer() {
    this.isOpen = false;
  }

  openModal() {
    this.modalService.open(ConfigurationModal, {
      backdropClass: 'dark-modal',
      centered: true,
    });
  }
}
