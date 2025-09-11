import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-js-behavior-list',
  imports: [NgbModule],
  templateUrl: './js-behavior-list.html',
  styleUrl: './js-behavior-list.scss',
})
export class JsBehaviorList {
  public active = 'home';
}
