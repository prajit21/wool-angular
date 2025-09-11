import { Component } from '@angular/core';

import { FileManagerDetails } from './file-manager-details/file-manager-details';
import { FileManagerSidebar } from './file-manager-sidebar/file-manager-sidebar';

@Component({
  selector: 'app-file-manager',
  imports: [FileManagerDetails, FileManagerSidebar],
  templateUrl: './file-manager.html',
  styleUrl: './file-manager.scss',
})
export class FileManager {}
