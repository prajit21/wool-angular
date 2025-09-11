import { Component } from '@angular/core';

import { TaskDetails } from './task-details/task-details';
import { TaskSideMenu } from './task-side-menu/task-side-menu';

@Component({
  selector: 'app-tasks',
  imports: [TaskSideMenu, TaskDetails],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  public activeTab: string;

  getTabValue(value: string) {
    this.activeTab = value;
  }
}
