import { Component } from '@angular/core';

import { ListingTypography } from './listing-typography/listing-typography';
import { TypographyBlockQuotes } from './typography-block-quotes/typography-block-quotes';
import { TypographyColorHeading } from './typography-color-heading/typography-color-heading';
import { TypographyDisplayHeading } from './typography-display-heading/typography-display-heading';
import { TypographyFontWeight } from './typography-font-weight/typography-font-weight';
import { TypographyHeading } from './typography-heading/typography-heading';
import { TypographyInlineTextElement } from './typography-inline-text-element/typography-inline-text-element';
import { TypographyTextColor } from './typography-text-color/typography-text-color';

@Component({
  selector: 'app-typography',
  imports: [
    ListingTypography,
    TypographyBlockQuotes,
    TypographyColorHeading,
    TypographyDisplayHeading,
    TypographyFontWeight,
    TypographyHeading,
    TypographyInlineTextElement,
    TypographyTextColor,
  ],
  templateUrl: './typography.html',
  styleUrl: './typography.scss',
})
export class Typography {}
