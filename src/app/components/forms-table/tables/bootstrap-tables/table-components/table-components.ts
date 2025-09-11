import { Component } from '@angular/core';

import { TableAlert } from './table-alert/table-alert';
import { TableBadge } from './table-badge/table-badge';
import { TableCheckBox } from './table-check-box/table-check-box';
import { TableInput } from './table-input/table-input';
import { TableProgressBar } from './table-progress-bar/table-progress-bar';
import { TableRadioButton } from './table-radio-button/table-radio-button';
import { TableSelect } from './table-select/table-select';
import { TableSwitch } from './table-switch/table-switch';
import { TableTooltipTrigger } from './table-tooltip-trigger/table-tooltip-trigger';
import { TableUiComponents } from './table-ui-components/table-ui-components';

@Component({
  selector: 'app-table-components',
  imports: [
    TableUiComponents,
    TableTooltipTrigger,
    TableSelect,
    TableSwitch,
    TableRadioButton,
    TableProgressBar,
    TableAlert,
    TableBadge,
    TableCheckBox,
    TableInput,
  ],
  templateUrl: './table-components.html',
  styleUrl: './table-components.scss',
})
export class TableComponents {}
