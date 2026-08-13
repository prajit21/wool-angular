import { SlicePipe } from '@angular/common';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchService } from '../../../../../services/search.service';
import { SvgIcon } from '../../../../ui/svg-icon/svg-icon';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.html',
  styleUrl: './search-items.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [SvgIcon, RouterModule, SlicePipe],
})
export class SearchItems {
  search = inject(SearchService);
}
