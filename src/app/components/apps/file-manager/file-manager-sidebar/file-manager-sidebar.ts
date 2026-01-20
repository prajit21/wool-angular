import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { sidebar } from '../../../../shared/data/data/file-manager';

@Component({
  selector: 'app-file-manager-sidebar',
  imports: [FeatherIcons, NgClass],
  templateUrl: './file-manager-sidebar.html',
  styleUrl: './file-manager-sidebar.scss',
})
export class FileManagerSidebar {
  public sidebar = sidebar;
  public isOpen: boolean = false;

  openFilter() {
    this.isOpen = !this.isOpen;
  }
}
