import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { comments } from '../../../../../shared/interface/blog';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './comments.scss',
})
export class Comments {
  readonly comment = input<comments[]>();
}
