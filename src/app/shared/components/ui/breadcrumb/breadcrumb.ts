import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';

import { filter, map } from 'rxjs';

import { FeatherIcons } from '../feather-icons/feather-icons';

@Component({
  selector: 'app-breadcrumb',
  imports: [FeatherIcons],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  public breadcrumbs: {
    main?: string;
    parentBreadcrumb?: string;
    childBreadcrumb?: string;
    subMain?: string;
  };
  public title: string = '';

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
      )
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {
        let title = route.snapshot.data['title'];
        let parent = route.parent?.snapshot.data['breadcrumb'];
        let main = route.parent?.snapshot.data['main'];
        let child = route.snapshot.data['breadcrumb'];
        let subMain = route.snapshot.data['subMain'];
        this.breadcrumbs = {};
        this.title = title;
        this.breadcrumbs = {
          main: main,
          parentBreadcrumb: parent,
          childBreadcrumb: child,
          subMain: subMain,
        };
      });
  }
}
