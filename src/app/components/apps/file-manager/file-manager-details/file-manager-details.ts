import { Component, ChangeDetectionStrategy } from '@angular/core';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { filesData, folderData, quickAccessData } from '../../../../shared/data/data/file-manager';

@Component({
  selector: 'app-file-manager-details',
  imports: [FeatherIcons],
  templateUrl: './file-manager-details.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './file-manager-details.scss',
})
export class FileManagerDetails {
  public quickAccessData = quickAccessData;
  public folderData = folderData;
  public filesData = filesData;
}
