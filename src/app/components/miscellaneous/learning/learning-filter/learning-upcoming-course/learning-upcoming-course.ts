import { Component, inject } from '@angular/core';

import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { upcomingCourse } from '../../../../../shared/data/data/learning';

@Component({
  selector: 'app-learning-upcoming-course',
  imports: [NgbModule],
  templateUrl: './learning-upcoming-course.html',
  styleUrl: './learning-upcoming-course.scss',
})
export class LearningUpcomingCourse {
  private config = inject(NgbRatingConfig);

  public upcomingCourse = upcomingCourse;
  public isCollapse: boolean = true;

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }

  collapse() {
    this.isCollapse = !this.isCollapse;
  }
}
