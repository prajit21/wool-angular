import { Component } from '@angular/core';

import { Comments } from './comments/comments';
import { commentDetails } from '../../../../shared/data/data/blog';

@Component({
  selector: 'app-blog-single',
  imports: [Comments],
  templateUrl: './blog-single.html',
  styleUrl: './blog-single.scss',
})
export class BlogSingle {
  public commentDetails = commentDetails;
}
