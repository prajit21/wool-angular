import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-browser-default-validation',
  imports: [NgbModule],
  templateUrl: './browser-default-validation.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './browser-default-validation.scss',
})
export class BrowserDefaultValidation {}
