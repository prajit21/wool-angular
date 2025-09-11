import { Component, inject, output } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { bookmark } from '../../../../shared/data/data/bookmark';
import { AddBookmarkModal } from '../add-bookmark-modal/add-bookmark-modal';
import { BookmarkTagModal } from '../bookmark-tag-modal/bookmark-tag-modal';

@Component({
  selector: 'app-bookmark-sidemenu',
  imports: [FeatherIcons],
  templateUrl: './bookmark-sidemenu.html',
  styleUrl: './bookmark-sidemenu.scss',
})
export class BookmarkSidemenu {
  private modal = inject(NgbModal);

  readonly activeTabValue = output<string>();

  public bookmark = bookmark;

  public activeTab: string = 'created_by_me';
  public isOpen: boolean = false;

  ngOnInit() {
    this.activeTabValue.emit(this.activeTab);
  }

  changeTab(value: string) {
    this.activeTab = value;
    this.activeTabValue.emit(this.activeTab);
  }

  openModal(value: string) {
    if (value == 'add_bookmark') {
      this.modal.open(AddBookmarkModal, { size: 'lg', windowClass: 'modal-bookmark' });
    } else if (value == 'add_tag') {
      this.modal.open(BookmarkTagModal, { size: 'lg', windowClass: 'modal-bookmark' });
    }
  }

  openFilter() {
    this.isOpen = !this.isOpen;
  }
}
