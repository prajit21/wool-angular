import { Component, input } from '@angular/core';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { tasks } from '../../../../shared/data/data/task';
import { task, taskDetails } from '../../../../shared/interface/task';

@Component({
  selector: 'app-task-details',
  imports: [FeatherIcons],
  templateUrl: './task-details.html',
  styleUrl: './task-details.scss',
})
export class TaskDetails {
  readonly activeTab = input<string>();

  public tasks = tasks;
  public taskDetails: taskDetails[];
  public taskData: task;

  ngOnChanges() {
    this.tasks.filter(data => {
      if (data.value == this.activeTab()) {
        this.taskDetails = data.data;
        this.taskData = data;
      }
    });
  }
}
