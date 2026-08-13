import { Component, ChangeDetectionStrategy } from '@angular/core';

import { InputWrapping } from '../input-wrapping/input-wrapping';

@Component({
  selector: 'app-input-basic-input-group',
  imports: [InputWrapping],
  templateUrl: './input-basic-input-group.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './input-basic-input-group.scss',
})
export class InputBasicInputGroup {}
