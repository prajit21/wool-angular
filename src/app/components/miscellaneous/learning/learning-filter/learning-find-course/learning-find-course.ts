import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { findCourse } from '../../../../../shared/data/data/learning';

@Component({
  selector: 'app-learning-find-course',
  imports: [FeatherIcons],
  templateUrl: './learning-find-course.html',
  styleUrl: './learning-find-course.scss',
})
export class LearningFindCourse {
  public findCourse = findCourse;
  public isCollapse: boolean = true;

  collapse() {
    this.isCollapse = !this.isCollapse;
  }
}
