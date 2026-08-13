import { Component, ChangeDetectionStrategy } from '@angular/core';

import { category } from '../../../../../shared/data/data/learning';

@Component({
  selector: 'app-learning-category',
  templateUrl: './learning-category.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './learning-category.scss',
})
export class LearningCategory {
  public category = category;
  public isCollapse: boolean = true;

  collapse() {
    this.isCollapse = !this.isCollapse;
  }
}
