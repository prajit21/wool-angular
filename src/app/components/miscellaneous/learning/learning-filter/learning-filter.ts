import { Component } from '@angular/core';

import { LearningCategory } from './learning-category/learning-category';
import { LearningFindCourse } from './learning-find-course/learning-find-course';
import { LearningUpcomingCourse } from './learning-upcoming-course/learning-upcoming-course';

@Component({
  selector: 'app-learning-filter',
  imports: [LearningFindCourse, LearningCategory, LearningUpcomingCourse],
  templateUrl: './learning-filter.html',
  styleUrl: './learning-filter.scss',
})
export class LearningFilter {
  public isOpen: boolean = false;

  openFilter() {
    this.isOpen = !this.isOpen;
  }
}
