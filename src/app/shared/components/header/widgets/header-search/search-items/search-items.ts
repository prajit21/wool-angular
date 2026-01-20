import { SlicePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchService } from '../../../../../services/search.service';
import { SvgIcon } from '../../../../ui/svg-icon/svg-icon';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.html',
  styleUrl: './search-items.scss',
  imports: [SvgIcon, RouterModule, SlicePipe],
})
export class SearchItems {
  search = inject(SearchService);
}
