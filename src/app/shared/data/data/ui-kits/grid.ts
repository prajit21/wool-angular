export const gridOptions = [
  {
    heading: 'Grid behavior',
    data: [
      {
        details: 'Horizontal at all times',
      },
      {
        details: 'Collapsed to start, horizontal above breakpoints',
        colSpan: 5,
      },
    ],
  },
  {
    heading: 'Max container width',
    data: [
      {
        details: 'None (auto)',
      },
      {
        details: '540px',
      },
      {
        details: '720px',
      },
      {
        details: '960px',
      },
      {
        details: '1140px',
      },
      {
        details: '1320px',
      },
    ],
  },
  {
    heading: 'Class prefix',
    data: [
      {
        details: '<code>.col-</code>',
      },
      {
        details: '<code>.col-sm-</code>',
      },
      {
        details: '<code>.col-md-</code>',
      },
      {
        details: '<code>.col-lg-</code>',
      },
      {
        details: '<code>.col-xl-</code>',
      },
      {
        details: '<code>.col-xxl-</code>',
      },
    ],
  },
  {
    heading: '# of columns',
    data: [
      {
        details: '12',
        colSpan: 6,
      },
    ],
  },
  {
    heading: 'Gutter width',
    data: [
      {
        details: '1.5rem (.75rem on left and right)',
        colSpan: 6,
      },
    ],
  },
  {
    heading: 'Nestable',
    data: [
      {
        details: 'Yes',
        colSpan: 6,
      },
    ],
  },
  {
    heading: 'Offsets',
    data: [
      {
        details: 'Yes',
        colSpan: 6,
      },
    ],
  },
  {
    heading: 'Column ordering',
    data: [
      {
        details: 'Yes',
        colSpan: 6,
      },
    ],
  },
];

export const gridColumn = [1, 2, 2, 3, 4, 5, 7, 6, 6, 8, 4, 9, 3, 10, 2, 12];

export const alignmentDetails = ['start', 'center', 'end'];

export const gridOrder = [
  { class: 'col-3 order-3', text: 'First Item (order-3)' },
  { class: 'col-5 order-first', text: 'Second Item (order-first)' },
  { class: 'col-4 order-last', text: 'Third Item (order-last)' },
  { class: 'col-3 order-2', text: 'Fourth Item (order-2)' },
  { class: 'col-sm-2 col-4 order-5', text: 'fifth Item (order-5)' },
  { class: 'col-sm-6 col-4 order-4', text: 'sixth Item (order-4)' },
];

export const gridOffset = [
  { class: 'col-sm-5 col-4 offset-sm-3 offset-2', text: 'col-5 offset-3' },
  { class: 'col-sm-2 col-4 offset-sm-2 offset-1', text: 'col-2 offset-2' },
  { class: 'col-sm-4 col-5 offset-2', text: 'col-4 offset-2' },
  { class: 'col-sm-3 col-4 offset-sm-2 offset-1', text: 'col-3 offset-2' },
];
