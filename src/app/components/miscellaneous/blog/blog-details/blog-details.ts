import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { blogDetails } from '../../../../shared/data/data/blog';

@Component({
  selector: 'app-blog-details',
  imports: [CommonModule],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.scss',
})
export class BlogDetails {
  public blogDetails = blogDetails;
}
