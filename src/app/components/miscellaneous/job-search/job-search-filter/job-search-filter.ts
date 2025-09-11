import { Component, viewChildren, AfterViewInit } from '@angular/core';

import { NgbAccordionItem, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { sidebars } from '../../../../shared/data/data/job-search';
import { jobFilter } from '../../../../shared/interface/job-search';

@Component({
  selector: 'app-job-search-filter',
  imports: [NgbModule, FeatherIcons],
  templateUrl: './job-search-filter.html',
  styleUrl: './job-search-filter.scss',
})
export class JobSearchFilter implements AfterViewInit {
  readonly accordionItems = viewChildren(NgbAccordionItem);
  public sidebars: jobFilter[] = sidebars;
  public isOpen: boolean = false;

  openSidebar() {
    this.isOpen = !this.isOpen;
  }

  ngAfterViewInit() {
    this.expandAll();
  }

  expandAll() {
    // unwrap the signal value with `.()`
    this.accordionItems().forEach(item => {
      item.expand();
    });
  }
}
