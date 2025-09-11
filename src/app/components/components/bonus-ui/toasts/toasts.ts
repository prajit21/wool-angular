import { Component } from '@angular/core';

import { ColorSchemesToast } from './color-schemes-toast/color-schemes-toast';
import { DefaultToast } from './default-toast/default-toast';
import { LiveToast } from './live-toast/live-toast';
import { StackingToast } from './stacking-toast/stacking-toast';
import { TranslucentToast } from './translucent-toast/translucent-toast';
import { UniqueToast } from './unique-toast/unique-toast';

@Component({
  selector: 'app-toasts',
  imports: [
    ColorSchemesToast,
    DefaultToast,
    LiveToast,
    StackingToast,
    TranslucentToast,
    UniqueToast,
  ],
  templateUrl: './toasts.html',
  styleUrl: './toasts.scss',
})
export class Toasts {}
