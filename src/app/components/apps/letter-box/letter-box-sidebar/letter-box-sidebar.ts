import { Component, inject, output } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SvgIcon } from '../../../../shared/components/ui/svg-icon/svg-icon';
import { letterBoxDetails } from '../../../../shared/data/data/letter-box';
import { AddLabelModal } from '../add-label-modal/add-label-modal';
import { ComposeMailModal } from '../compose-mail-modal/compose-mail-modal';

@Component({
  selector: 'app-letter-box-sidebar',
  imports: [SvgIcon],
  templateUrl: './letter-box-sidebar.html',
  styleUrl: './letter-box-sidebar.scss',
})
export class LetterBoxSidebar {
  private modal = inject(NgbModal);

  readonly activeTabValue = output<string>();

  public letterBoxDetails = letterBoxDetails;
  public activeTab: string = 'inbox';
  public isOpen: boolean = false;

  constructor() {
    let badgeText: number;
    this.letterBoxDetails.filter(data => {
      if (data.value == 'inbox' || data.value == 'starred') {
        badgeText = data.details.length;
        if (badgeText != 0) {
          data.badge = true;
          data.badgeText = badgeText;
        } else {
          data.badge = false;
        }
      }
    });
  }

  ngOnInit() {
    this.activeTabValue.emit(this.activeTab);
  }

  openFilter() {
    this.isOpen = !this.isOpen;
  }

  changeTab(value: string) {
    this.activeTab = value;
    this.activeTabValue.emit(this.activeTab);
  }

  openModal(value: string) {
    if (value == 'compose') {
      this.modal.open(ComposeMailModal, { size: 'lg' });
    } else if (value == 'label') {
      this.modal.open(AddLabelModal, { size: 'lg' });
    }
  }
}
