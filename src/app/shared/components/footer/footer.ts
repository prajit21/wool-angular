import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class Footer {
  public currentYear = new Date().getFullYear();
}
