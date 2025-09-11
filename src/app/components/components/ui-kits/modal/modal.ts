import { Component } from '@angular/core';

import { BasicModal } from './basic-modal/basic-modal';
import { CenteredModal } from './centered-modal/centered-modal';
import { FullScreenModal } from './full-screen-modal/full-screen-modal';
import { SizesModal } from './sizes-modal/sizes-modal';
import { StaticModal } from './static-modal/static-modal';
import { ToggleModal } from './toggle-modal/toggle-modal';
import { WoolCustomModal } from './wool-custom-modal/wool-custom-modal';

@Component({
  selector: 'app-modal',
  imports: [
    BasicModal,
    WoolCustomModal,
    ToggleModal,
    SizesModal,
    StaticModal,
    FullScreenModal,
    CenteredModal,
  ],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {}
