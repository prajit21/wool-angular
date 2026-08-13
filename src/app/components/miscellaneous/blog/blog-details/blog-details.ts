import { SlicePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { blogDetails } from '../../../../shared/data/data/blog';

@Component({
  selector: 'app-blog-details',
  imports: [SlicePipe],
  templateUrl: './blog-details.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './blog-details.scss',
})
export class BlogDetails {
  public blogDetails = blogDetails;
}
