import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nesting-button-groups',
  imports: [NgbModule],
  templateUrl: './nesting-button-groups.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './nesting-button-groups.scss',
})
export class NestingButtonGroups {}
