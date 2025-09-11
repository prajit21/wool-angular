import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { category } from '../../../../../shared/data/data/learning';

@Component({
  selector: 'app-learning-category',
  imports: [CommonModule],
  templateUrl: './learning-category.html',
  styleUrl: './learning-category.scss',
})
export class LearningCategory {
  public category = category;
  public isCollapse: boolean = true;

  collapse() {
    this.isCollapse = !this.isCollapse;
  }
}
