import { Component } from '@angular/core';

import { BasicFloatingInputControl } from './basic-floating-input-control/basic-floating-input-control';
import { BasicForm } from './basic-form/basic-form';
import { BasicHtmlInputControl } from './basic-html-input-control/basic-html-input-control';
import { EdgeInputStyle } from './edge-input-style/edge-input-style';
import { FileInput } from './file-input/file-input';
import { FlatInputStyle } from './flat-input-style/flat-input-style';
import { FloatingForm } from './floating-form/floating-form';
import { FormControlSizing } from './form-control-sizing/form-control-sizing';
import { RaiseInputStyle } from './raise-input-style/raise-input-style';
import { SelectSizing } from './select-sizing/select-sizing';

@Component({
  selector: 'app-base-input',
  imports: [
    BasicFloatingInputControl,
    BasicForm,
    BasicHtmlInputControl,
    EdgeInputStyle,
    FileInput,
    FloatingForm,
    FormControlSizing,
    RaiseInputStyle,
    SelectSizing,
    FlatInputStyle,
  ],
  templateUrl: './base-input.html',
  styleUrl: './base-input.scss',
})
export class BaseInput {}
