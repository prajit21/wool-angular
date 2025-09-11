import { Component } from '@angular/core';

import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-kolkov-editor',
  imports: [AngularEditorModule],
  templateUrl: './kolkov-editor.html',
  styleUrl: './kolkov-editor.scss',
})
export class KolkovEditor {}
