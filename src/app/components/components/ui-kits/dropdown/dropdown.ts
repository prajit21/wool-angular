import { Component } from '@angular/core';

import { AlignmentDropdown } from './alignment-dropdown/alignment-dropdown';
import { BasicDropdown } from './basic-dropdown/basic-dropdown';
import { DarkDropdown } from './dark-dropdown/dark-dropdown';
import { DividerDropdown } from './divider-dropdown/divider-dropdown';
import { HeadingDropdown } from './heading-dropdown/heading-dropdown';
import { HelperCardDropdown } from './helper-card-dropdown/helper-card-dropdown';
import { InputTypeDropdown } from './input-type-dropdown/input-type-dropdown';
import { JustifyContentDropdown } from './justify-content-dropdown/justify-content-dropdown';
import { RoundedDropdown } from './rounded-dropdown/rounded-dropdown';
import { SizingDropdown } from './sizing-dropdown/sizing-dropdown';
import { SplitDropdown } from './split-dropdown/split-dropdown';
import { UniqueDropdown } from './unique-dropdown/unique-dropdown';

@Component({
  selector: 'app-dropdown',
  imports: [
    AlignmentDropdown,
    BasicDropdown,
    DarkDropdown,
    DividerDropdown,
    HeadingDropdown,
    HelperCardDropdown,
    HeadingDropdown,
    InputTypeDropdown,
    JustifyContentDropdown,
    RoundedDropdown,
    SizingDropdown,
    SplitDropdown,
    UniqueDropdown,
  ],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss',
})
export class Dropdown {}
