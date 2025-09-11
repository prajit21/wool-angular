import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { ColorVariant } from './color-variant/color-variant';
import { FullColorVariant } from './full-color-variant/full-color-variant';

@Component({
  selector: 'app-select2',
  imports: [ColorVariant, FullColorVariant, NgSelectModule, FormsModule],
  templateUrl: './select2.html',
  styleUrl: './select2.scss',
})
export class Select2 {
  public selectedCity: string;
  public selectedCityIds: string[] = [];
  public selectedCityIds2: string[] = [];
  public selectedCityIds3: string[] = [];
  public selectedCityIds4: string[] = [];
  public selectedCityIds5: string[] = [];
  public selectedCityIds6: string[] = [];
  public selectedCityName = 'Vilnius';
  public selectedCityId: number = 0;
  public selectedUserIds: number[] = [];

  public store: boolean = true;

  public defaultPlaceHolder = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Wyoming' },
    { id: 3, name: 'Coming' },
    { id: 4, name: 'Hanry Die' },
    { id: 4, name: 'John Deo' },
  ];

  public cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' },
  ];

  Enable(val: boolean) {
    this.store = val;
  }
}
