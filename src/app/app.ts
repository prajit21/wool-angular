import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Loader } from './shared/components/ui/loader/loader';
import { TapToTop } from './shared/components/ui/tap-to-top/tap-to-top';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loader, TapToTop],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
