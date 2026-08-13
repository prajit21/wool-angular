import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-floating-input-control',
  imports: [NgbModule],
  templateUrl: './basic-floating-input-control.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './basic-floating-input-control.scss',
})
export class BasicFloatingInputControl {}
