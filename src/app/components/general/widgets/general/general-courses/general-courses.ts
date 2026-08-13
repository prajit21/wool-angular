import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SvgIcon } from '../../../../../shared/components/ui/svg-icon/svg-icon';
import { coursesData } from '../../../../../shared/data/data/widgets-general';

@Component({
  selector: 'app-general-courses',
  imports: [SvgIcon, RouterModule],
  templateUrl: './general-courses.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './general-courses.scss',
})
export class GeneralCourses {
  public coursesData = coursesData;
}
