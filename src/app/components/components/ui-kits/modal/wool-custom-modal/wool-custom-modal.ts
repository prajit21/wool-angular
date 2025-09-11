import { Component } from '@angular/core';

import { CustomModal1 } from './custom-modal-1/custom-modal-1';
import { CustomModal2 } from './custom-modal-2/custom-modal-2';
import { CustomModal3 } from './custom-modal-3/custom-modal-3';

@Component({
  selector: 'app-wool-custom-modal',
  imports: [CustomModal1, CustomModal2, CustomModal3],
  templateUrl: './wool-custom-modal.html',
  styleUrl: './wool-custom-modal.scss',
})
export class WoolCustomModal {}
