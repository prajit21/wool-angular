import { Component, inject, output } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { tasks } from '../../../../shared/data/data/task';
import { AddTaskModal } from '../add-task-modal/add-task-modal';
import { AddTaskTagModal } from '../add-task-tag-modal/add-task-tag-modal';

@Component({
  selector: 'app-task-side-menu',
  imports: [FeatherIcons],
  templateUrl: './task-side-menu.html',
  styleUrl: './task-side-menu.scss',
})
export class TaskSideMenu {
  private modal = inject(NgbModal);

  readonly tabValue = output<string>();

  public tasks = tasks;
  public activeTab: string = 'created_by_me';
  public isOpen: boolean = false;

  ngOnInit() {
    this.tabValue.emit(this.activeTab);
  }

  openFilter() {
    this.isOpen = !this.isOpen;
  }

  changeTab(value: string) {
    this.activeTab = value;
    this.tabValue.emit(this.activeTab);
  }

  openModal(value: string) {
    if (value == 'task') {
      this.modal.open(AddTaskModal, { size: 'lg', windowClass: 'modal-bookmark' });
    } else if (value == 'tag') {
      this.modal.open(AddTaskTagModal);
    }
  }
}
