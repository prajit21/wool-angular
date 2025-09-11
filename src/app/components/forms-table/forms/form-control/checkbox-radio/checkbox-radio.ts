import { Component } from '@angular/core';

import { AnimatedButtons } from './animated-buttons/animated-buttons';
import { BasicRadioCheckbox } from './basic-radio-checkbox/basic-radio-checkbox';
import { CustomCheckbox } from './custom-checkbox/custom-checkbox';
import { CustomRadio } from './custom-radio/custom-radio';
import { DefaultCheckbox } from './default-checkbox/default-checkbox';
import { DefaultRadio } from './default-radio/default-radio';
import { DefaultSwitches } from './default-switches/default-switches';
import { ImageCheckbox } from './image-checkbox/image-checkbox';
import { ImageRadio } from './image-radio/image-radio';
import { InlineInputStyle } from './inline-input-style/inline-input-style';
import { OutlinedCheckboxStyle } from './outlined-checkbox-style/outlined-checkbox-style';
import { RadioToggleButton } from './radio-toggle-button/radio-toggle-button';

@Component({
  selector: 'app-checkbox-radio',
  imports: [
    AnimatedButtons,
    BasicRadioCheckbox,
    CustomCheckbox,
    CustomRadio,
    DefaultCheckbox,
    DefaultRadio,
    DefaultSwitches,
    ImageCheckbox,
    ImageRadio,
    InlineInputStyle,
    OutlinedCheckboxStyle,
    RadioToggleButton,
  ],
  templateUrl: './checkbox-radio.html',
  styleUrl: './checkbox-radio.scss',
})
export class CheckboxRadio {}
