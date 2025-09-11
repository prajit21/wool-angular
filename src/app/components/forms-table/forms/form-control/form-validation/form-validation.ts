import { Component } from '@angular/core';

import { BrowserDefaultValidation } from './browser-default-validation/browser-default-validation';
import { TooltipFormValidation } from './tooltip-form-validation/tooltip-form-validation';
import { ValidationForm } from './validation-form/validation-form';

@Component({
  selector: 'app-form-validation',
  imports: [TooltipFormValidation, BrowserDefaultValidation, ValidationForm],
  templateUrl: './form-validation.html',
  styleUrl: './form-validation.scss',
})
export class FormValidation {}
