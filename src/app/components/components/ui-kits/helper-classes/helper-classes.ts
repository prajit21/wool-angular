import { Component } from '@angular/core';

import { BackgroundColors } from './background-colors/background-colors';
import { BorderColor } from './border-color/border-color';
import { BorderDisplay } from './border-display/border-display';
import { FontSize } from './font-size/font-size';
import { FontStyle } from './font-style/font-style';
import { FontWeight } from './font-weight/font-weight';
import { ImageSize } from './image-size/image-size';
import { StyleBorder } from './style-border/style-border';
import { TextColor } from './text-color/text-color';

@Component({
  selector: 'app-helper-classes',
  imports: [
    BackgroundColors,
    BorderColor,
    BorderDisplay,
    FontSize,
    FontStyle,
    FontWeight,
    ImageSize,
    StyleBorder,
    TextColor,
  ],
  templateUrl: './helper-classes.html',
  styleUrl: './helper-classes.scss',
})
export class HelperClasses {}
