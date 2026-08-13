import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table-ui-components',
  imports: [NgbModule],
  templateUrl: './table-ui-components.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './table-ui-components.scss',
})
export class TableUiComponents {}
