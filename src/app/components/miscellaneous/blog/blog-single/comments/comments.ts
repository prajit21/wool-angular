import { Component, input } from '@angular/core';

import { comments } from '../../../../../shared/interface/blog';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
})
export class Comments {
  readonly comment = input<comments[]>();
}
