import { Component } from '@angular/core';

import { InputBasicInputGroup } from './input-basic-input-group/input-basic-input-group';
import { InputButtonAddons } from './input-button-addons/input-button-addons';
import { InputButtonDropdown } from './input-button-dropdown/input-button-dropdown';
import { InputCheckboxRadio } from './input-checkbox-radio/input-checkbox-radio';
import { InputCustomFileInput } from './input-custom-file-input/input-custom-file-input';
import { InputCustomForms } from './input-custom-forms/input-custom-forms';
import { InputMultipleInput } from './input-multiple-input/input-multiple-input';
import { InputSegmentedButton } from './input-segmented-button/input-segmented-button';
import { InputSizing } from './input-sizing/input-sizing';
import { InputVariationAddons } from './input-variation-addons/input-variation-addons';

@Component({
  selector: 'app-input-groups',
  imports: [
    InputBasicInputGroup,
    InputButtonAddons,
    InputCustomFileInput,
    InputCustomForms,
    InputButtonDropdown,
    InputCheckboxRadio,
    InputCheckboxRadio,
    InputMultipleInput,
    InputSegmentedButton,
    InputSizing,
    InputVariationAddons,
  ],
  templateUrl: './input-groups.html',
  styleUrl: './input-groups.scss',
})
export class InputGroups {}
