import { Component } from '@angular/core';

@Component({
  selector: 'app-job-personal-details',
  imports: [],
  templateUrl: './job-personal-details.html',
  styleUrl: './job-personal-details.scss',
})
export class JobPersonalDetails {
  public date = new Array();
  public year = new Array();

  constructor() {
    for (let i = 1; i <= 31; i++) {
      this.date.push(i);
    }

    for (let i = 1985; i <= 2023; i++) {
      this.year.push(i);
    }
  }
}
