import { Component, inject, output } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { contact } from '../../../../shared/data/data/contact';
import { ContactCategoryModal } from '../contact-category-modal/contact-category-modal';
import { NewContactModal } from '../new-contact-modal/new-contact-modal';

@Component({
  selector: 'app-contact-side-menu',
  imports: [FeatherIcons],
  templateUrl: './contact-side-menu.html',
  styleUrl: './contact-side-menu.scss',
})
export class ContactSideMenu {
  private modal = inject(NgbModal);

  readonly activeTabValue = output<string>();

  public contact = contact;
  public activeTab?: string = 'personal';
  public isOpen: boolean = false;

  ngOnInit() {
    this.activeTabValue.emit(this.activeTab);
  }

  openFilter() {
    this.isOpen = !this.isOpen;
  }

  changeTab(value?: string) {
    this.activeTab = value;
    this.activeTabValue.emit(this.activeTab);
  }

  openModal(value: string) {
    if (value == 'contact') {
      this.modal.open(NewContactModal, { size: 'lg', windowClass: 'modal-bookmark' });
    } else if (value == 'category') {
      this.modal.open(ContactCategoryModal);
    }
  }
}
