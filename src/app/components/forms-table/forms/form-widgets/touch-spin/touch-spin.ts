import { Component } from '@angular/core';

import { ButtonPrefixPostfix } from './button-prefix-postfix/button-prefix-postfix';
import { DefaultTouchSpin } from './default-touch-spin/default-touch-spin';
import { IconPrefixPostfix } from './icon-prefix-postfix/icon-prefix-postfix';
import { OutlinedTouchSpin } from './outlined-touch-spin/outlined-touch-spin';
import { RoundedTouchSpin } from './rounded-touch-spin/rounded-touch-spin';

@Component({
  selector: 'app-touch-spin',
  imports: [
    ButtonPrefixPostfix,
    DefaultTouchSpin,
    IconPrefixPostfix,
    OutlinedTouchSpin,
    RoundedTouchSpin,
  ],
  templateUrl: './touch-spin.html',
  styleUrl: './touch-spin.scss',
})
export class TouchSpin {}
