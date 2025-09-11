import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { ProjectList, projectList, projectTab } from '../../../../shared/data/data/project';

@Component({
  selector: 'app-project-list',
  imports: [FeatherIcons, CommonModule, RouterModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss',
})
export class ProjectLists {
  public active = 1;
  public openTab: string = 'All';
  public projectTab = projectTab;
  public ProjectLists = ProjectList;
  public listUser: projectList[] = [];
  public filterData: projectList[] = this.ProjectLists;

  public tabbed(val: string) {
    this.openTab = val;
    this.filterData =
      val !== 'All'
        ? this.ProjectLists.filter((data: projectList) => {
            return data.badge == this.openTab ? true : false;
          })
        : this.ProjectLists;
  }
}
