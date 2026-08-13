import { SlicePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { learningDetails } from '../../../../shared/data/data/learning';
import { LearningFilter } from '../learning-filter/learning-filter';

@Component({
  selector: 'app-learning-list',
  imports: [LearningFilter, SlicePipe],
  templateUrl: './learning-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './learning-list.scss',
})
export class LearningList {
  public learningDetails = learningDetails;
}
