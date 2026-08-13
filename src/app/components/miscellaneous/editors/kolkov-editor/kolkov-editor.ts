import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-kolkov-editor',
  imports: [AngularEditorModule],
  templateUrl: './kolkov-editor.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './kolkov-editor.scss',
})
export class KolkovEditor {}
