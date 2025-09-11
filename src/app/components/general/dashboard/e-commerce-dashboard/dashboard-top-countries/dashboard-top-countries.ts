import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LeafletModule } from '@bluehalo/ngx-leaflet';
import * as L from 'leaflet';

import { SvgIcon } from '../../../../../shared/components/ui/svg-icon/svg-icon';
import { countries } from '../../../../../shared/data/data/e-commerce-dashboard';

@Component({
  selector: 'app-dashboard-top-countries',
  imports: [LeafletModule, SvgIcon, CommonModule],
  templateUrl: './dashboard-top-countries.html',
  styleUrl: './dashboard-top-countries.scss',
})
export class DashboardTopCountries {
  public countries = countries;

  // First map options
  options1 = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 4,
    center: L.latLng(20.5937, 78.9629),
  };
}
