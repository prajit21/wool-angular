import { Component } from '@angular/core';

import { comment } from '../../../../shared/data/data/learning';
import { Comments } from '../../blog/blog-single/comments/comments';
import { LearningFilter } from '../learning-filter/learning-filter';

@Component({
  selector: 'app-detailed-course',
  imports: [Comments, LearningFilter],
  templateUrl: './detailed-course.html',
  styleUrl: './detailed-course.scss',
})
export class DetailedCourse {
  public comment = comment;
}
