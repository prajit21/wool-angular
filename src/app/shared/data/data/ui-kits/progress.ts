import { progress } from '../../../interface/ui-kits';

export const basicProgressBar: progress = {
  header: 'Basic Progress Bars',
  desc: 'Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We use the <code>.progress </code>as a wrapper to indicate the max value of the progress bar. The <code>.progress-bar </code>requires an inline style, utility class, or custom CSS to set their width.',
  class: 'progress-bar bg',
  showWidth: true,
  data: [
    {
      colorClass: '',
    },
    {
      colorClass: 'primary',
      width: 25,
    },
    {
      colorClass: 'secondary',
      width: 50,
    },
    {
      colorClass: 'success',
      width: 75,
    },
    {
      colorClass: 'info',
      width: 100,
    },
  ],
};

export const stripedProgress: progress = {
  header: 'Progress Bars Striped',
  desc: "Add <code>.progress-bar-striped</code> to any <code>.progress-bar </code> to apply a stripe via CSS gradient over the progress bar's background color Using CSS Effects.",
  class: 'progress-bar progress-bar-striped bg',
  data: [
    {
      colorClass: 'primary',
      width: 10,
    },
    {
      colorClass: 'warning',
      width: 25,
    },
    {
      colorClass: 'danger',
      width: 50,
    },
    {
      colorClass: 'success',
      width: 75,
    },
  ],
};

export const animatedProgress: progress = {
  header: 'Progress Bars animated',
  desc: 'The striped gradient can also be animated. Add <code>.progress-bar-animated</code> to<code>.progress-bar</code> to animate the stripes right to left via CSS3 animations.',
  class: 'progress-bar-animated progress-bar-striped bg',
  data: [
    {
      colorClass: 'primary',
      width: 10,
    },
    {
      colorClass: 'warning',
      width: 25,
    },
    {
      colorClass: 'danger',
      width: 50,
    },
    {
      colorClass: 'success',
      width: 75,
    },
  ],
};

export const multipleProgress = [
  {
    details: [
      {
        colorClass: 'primary',
        width: 30,
      },
      {
        colorClass: 'secondary',
        width: 20,
      },
      {
        colorClass: 'success',
        width: 15,
      },
    ],
  },
  {
    details: [
      {
        colorClass: 'primary',
        width: 10,
      },
      {
        colorClass: 'secondary',
        width: 10,
      },
      {
        colorClass: 'success',
        width: 10,
      },
      {
        colorClass: 'info',
        width: 10,
      },
      {
        colorClass: 'warning',
        width: 10,
      },
      {
        colorClass: 'danger',
        width: 10,
      },
      {
        colorClass: 'primary',
        width: 10,
      },
      {
        colorClass: 'light',
        width: 10,
      },
    ],
  },
];

export const customProgressBar = [
  {
    label: '0% Getting Started',
    colorClass: '',
  },
  {
    label: '30% Getting Uploading...',
    colorClass: 'primary',
    width: 30,
  },
  {
    label: '60% Getting Pause...',
    colorClass: 'secondary',
    width: 60,
  },
  {
    label: '70% Getting Uploading...',
    colorClass: 'success',
    width: 70,
  },
  {
    label: '100% Completed',
    colorClass: 'dark',
    width: 100,
  },
];

export const smallProgressBar = [30, 50, 75, 90];

export const customHeightProgressBar = [
  {
    colorClass: 'primary',
    width: '25%',
    height: '1px',
  },
  {
    colorClass: 'warning',
    width: '50%',
    height: '5px',
  },
  {
    colorClass: 'danger',
    width: '75%',
    height: '11px',
  },
  {
    colorClass: 'info',
    width: '100%',
    height: '19px',
  },
];
