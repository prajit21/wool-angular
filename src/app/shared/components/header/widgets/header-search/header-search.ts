import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchItems } from './search-items/search-items';
import { OutsideDirective } from '../../../../directive/outside.directive';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-header-search',
  imports: [FormsModule, SearchItems, OutsideDirective],
  templateUrl: './header-search.html',
  styleUrl: './header-search.scss',
})
export class HeaderSearch {
  search = inject(SearchService);
}
