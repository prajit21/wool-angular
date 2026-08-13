import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-table-alert',
  imports: [],
  templateUrl: './table-alert.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './table-alert.scss',
})
export class TableAlert {
  public isShow: boolean[] = [true, true];

  closeAlert(i: number) {
    this.isShow[i] = false;
  }
}
