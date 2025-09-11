import { Component } from '@angular/core';

import { ColoredBreadcrumb } from './colored-breadcrumb/colored-breadcrumb';
import { DefaultBreadcrumb } from './default-breadcrumb/default-breadcrumb';
import { DividerBreadcrumb } from './divider-breadcrumb/divider-breadcrumb';
import { IconBreadcrumb } from './icon-breadcrumb/icon-breadcrumb';
import { VariationBreadcrumb } from './variation-breadcrumb/variation-breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  imports: [
    VariationBreadcrumb,
    IconBreadcrumb,
    DividerBreadcrumb,
    DefaultBreadcrumb,
    ColoredBreadcrumb,
  ],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {}
