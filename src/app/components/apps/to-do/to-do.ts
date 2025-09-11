import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FeatherIcons } from '../../../shared/components/ui/feather-icons/feather-icons';
import { task } from '../../../shared/data/data/to-do';
import { Task } from '../../../shared/interface/to-do';

@Component({
  selector: 'app-to-do',
  imports: [CommonModule, FeatherIcons, FormsModule],
  templateUrl: './to-do.html',
  styleUrl: './to-do.scss',
})
export class ToDo {
  public task: Task[] = task;
  public deletedTask: string;
  public deletedTaskAlert: boolean = false;
  public addTaskDetail: string;
  public addTaskAlert: boolean = false;
  public completedTaskDetail: string;
  public completedTaskAlert: boolean = false;
  public inCompletedTaskAlert: boolean = false;
  public todayDate = new Date();

  public text: string = '';
  public isOpen: boolean = false;

  openFilter() {
    this.isOpen = !this.isOpen;
  }

  addTask(text: string) {
    if (text) {
      this.task.push({
        text: text,
        completed: false,
        priority: 'Pending',
        badgeClass: 'badge-light-danger',
        Date: this.todayDate,
      });
      this.addTaskDetail = text;
      this.addTaskAlert = true;
      setTimeout(() => {
        this.addTaskAlert = false;
      }, 3000);
    }
    this.text = '';
  }

  completedTask(details: Task) {
    details.completed = !details.completed;
    this.completedTaskDetail = details.text;

    if (details.completed) {
      details.priority = 'Done';
      details.badgeClass = 'badge-light-success';
      this.completedTaskAlert = true;
      setTimeout(() => {
        this.completedTaskAlert = false;
      }, 3000);
    } else if (!details.completed) {
      details.priority = 'Pending';
      details.badgeClass = 'badge-light-danger';
      this.inCompletedTaskAlert = true;
      setTimeout(() => {
        this.inCompletedTaskAlert = false;
      }, 3000);
    }
  }

  deleteTask(details: Task) {
    this.deletedTask = details.text;
    this.task.splice(this.task.indexOf(details), 1);
    this.deletedTaskAlert = true;
    setTimeout(() => {
      this.deletedTaskAlert = false;
    }, 3000);
  }
}
