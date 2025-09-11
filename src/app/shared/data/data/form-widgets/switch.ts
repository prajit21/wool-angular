export const defaultSwitch = [
  { color: 'primary' },
  { color: 'secondary' },
  { color: 'success' },
  { color: 'danger' },
  { color: 'warning' },
  { color: 'info' },
  { color: 'dark' },
];

export const customSwitches = [
  {
    id: 1,
    colClass: 'col-md-4 col-sm-6',
    mainDivClass: '',
    subClass: '',
    disabled: false,
    details: defaultSwitch,
  },
  {
    id: 2,
    colClass: 'col-md-4 col-sm-6',
    mainDivClass: 'radius-none',
    subClass: 'default-square',
    disabled: false,
    details: defaultSwitch,
  },
  {
    id: 3,
    colClass: 'col-md-4',
    mainDivClass: 'common-flex',
    subClass: '',
    disabled: true,
    details: defaultSwitch,
  },
];

export const iconSwitchButton = {
  id: 1,
  title: 'Icons Switch',
  description:
    'Use the <code>.switch-state </code>and <code>icon-state </code>through defined icons switches.',
  class: 'icon-state',
  switchTitle: ' ',
  checked: true,
  details: defaultSwitch,
};

export const uncheckedSwitch = {
  id: 1,
  title: 'Unchecked switch',
  description: 'Use the <code>.bg-*</code> class through created default switches.',
  class: '',
  switchTitle: 'Unchecked',
  checked: true,
  details: defaultSwitch,
};

export const borderWithIcon = {
  id: 1,
  title: 'Borders with icons',
  description:
    'Use the <code>.switch-outline </code>and <code>.icon-state</code> class through created outline and icons.',
  class: 'icon-state switch-outline',
  switchTitle: 'Bordered',
  checked: true,
  details: defaultSwitch,
};

export const disabledOutline = {
  id: 1,
  title: 'Disabled Outline Switch',
  description: 'Use the <code>.switch-outline </code> class through created outline.',
  class: 'icon-state switch-outline',
  checked: false,
  details: defaultSwitch,
  flexColumn: false,
};
