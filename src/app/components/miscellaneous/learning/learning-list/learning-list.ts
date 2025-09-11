import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { learningDetails } from '../../../../shared/data/data/learning';
import { LearningFilter } from '../learning-filter/learning-filter';

@Component({
  selector: 'app-learning-list',
  imports: [LearningFilter, CommonModule],
  templateUrl: './learning-list.html',
  styleUrl: './learning-list.scss',
})
export class LearningList {
  public learningDetails = learningDetails;
}
