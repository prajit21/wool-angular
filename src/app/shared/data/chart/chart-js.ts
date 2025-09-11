import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

let primary = localStorage.getItem('--theme-deafult') || '#7366ff';
let secondary = localStorage.getItem('--theme-secondary') || '#FF8575';

// Bar Chart
export const barChart = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  responsive: true,
  datasets: [
    {
      label: 'My First dataset',
      borderColor: primary,
      backgroundColor: 'rgba(115, 102 ,255, 0.4)',
      borderWidth: 2,
      data: [35, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'My Second dataset',
      borderColor: secondary,
      backgroundColor: 'rgba(247, 49, 100, 0.4)',
      borderWidth: 2,
      data: [28, 48, 40, 19, 86, 27, 90],
    },
  ],
  barOptions: [
    {
      scaleBeginAtZero: true,
      scaleShowGridLines: true,
      scaleGridLineColor: 'rgba(0,0,0,0.1)',
      scaleGridLineWidth: 1,
      scaleShowHorizontalLines: true,
      scaleShowVerticalLines: true,
      barShowStroke: true,
      barStrokeWidth: 2,
      barValueSpacing: 5,
      barDatasetSpacing: 1,
    },
  ],
};

// Line Graph Data
export var lineGraphLabels: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];
export var lineGraphType: ChartType = 'line';
export var lineGraphLegend = false;
export var lineGraphData: ChartDataset<'line'>[] = [
  {
    label: 'My First dataset',
    fill: true,
    backgroundColor: 'rgba(115, 102 ,255, 0.3)',
    borderColor: primary,
    pointBackgroundColor: primary,
    borderWidth: 2,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#000',
    data: [10, 59, 80, 81, 56, 55, 40],
  },
  {
    label: 'My Second dataset',
    fill: true,
    backgroundColor: 'rgba(247, 49, 100, 0.3)',
    borderColor: secondary,
    pointBackgroundColor: secondary,
    pointBorderColor: '#fff',
    borderWidth: 2,
    pointHoverBorderColor: '#000',
    pointHoverBackgroundColor: secondary,
    data: [28, 48, 40, 19, 86, 27, 90],
  },
];
export var lineGraphOptions: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: 'rgba(0,0,0,.05)',
      },
    },
    y: {
      grid: {
        display: true,
        color: 'rgba(0,0,0,.05)',
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
      fill: true,
    },
    point: {
      radius: 4,
      borderWidth: 1,
      hitRadius: 20,
    },
  },
};

// Radar Graph
export var radarGraphOptions: ChartOptions<'radar'> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    r: {
      grid: {
        color: 'rgba(0,0,0,.2)',
        lineWidth: 1,
      },
      angleLines: {
        display: true,
        color: 'rgba(0,0,0,.2)',
        lineWidth: 1,
      },
      pointLabels: {
        font: {
          size: 12,
        },
      },
    },
  },
  elements: {
    line: {
      borderWidth: 2,
      fill: true,
    },
    point: {
      radius: 3,
      borderWidth: 1,
      hitRadius: 20,
    },
  },
};
export var radarGraphLabels: string[] = ['Ford', 'Chevy', 'Toyota', 'Honda', 'Mazda'];
export var radarGraphType: ChartType = 'radar';
export var radarGraphLegend = false;
export var radarGraphData: ChartDataset<'radar'>[] = [
  {
    label: 'My First dataset',
    backgroundColor: 'rgba(115, 102 ,255, 0.4)',
    borderColor: primary,
    pointBackgroundColor: primary,
    pointBorderColor: primary,
    pointHoverBackgroundColor: primary,
    pointHoverBorderColor: 'rgba(115, 102 ,255, 0.4)',
    data: [12, 3, 5, 18, 7],
  },
];

//  Line Chart
export var barChartOptions: ChartOptions<'line'> = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
    },
  },
  responsive: true,
};
export var barChartLabels: string[] = ['', '10', '20', '30', '40', '50', '60', '70', '80'];
export var barChartType: ChartType = 'line';
export var barChartLegend = false;
export var barChartData: ChartDataset<'line'>[] = [
  {
    backgroundColor: 'rgba(81, 187, 37, 0.2)',
    fill: true,
    borderColor: '#51bb25',
    pointBorderColor: '#51bb25',
    pointBackgroundColor: '#51bb25',
    pointBorderWidth: 2,
    borderWidth: 2,
    data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
  },
  {
    backgroundColor: 'rgba(247, 49, 100, 0.2)',
    fill: true,
    borderColor: secondary,
    pointBorderColor: secondary,
    pointBackgroundColor: secondary,
    pointBorderWidth: 2,
    borderWidth: 2,
    data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
  },
  {
    backgroundColor: 'rgba(115, 102 ,255, 0.2)',
    fill: true,
    borderColor: primary,
    pointBorderColor: primary,
    pointBackgroundColor: primary,
    pointBorderWidth: 2,
    borderWidth: 2,
    data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
  },
];

// Donut Chart

export var doughnutChartLegend = false;
export var doughnutChartLabels: string[] = ['Red', 'Blue', 'Yellow', 'Green', 'Purple'];
export var doughnutChartData: ChartDataset<'doughnut'>[] = [
  {
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [primary, secondary, '#51bb25'],
  },
];
export var doughnutChartColors = [{ backgroundColor: [primary, secondary, '#51bb25'] }];
export var doughnutChartType: ChartType = 'doughnut';
export var doughnutChartOptions: ChartOptions<'doughnut'> = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false,
};

// Polar Chart
export var polarChartLabels: string[] = ['Yellow', 'Sky', 'Black', 'Grey', 'Dark Grey'];
export var polarChartType: ChartType = 'polarArea';
export var polarChartLegend = false;
export var polarChartOptions: ChartOptions<'polarArea'> = {
  responsive: true,
  scales: {
    r: {
      beginAtZero: true,
      grid: {
        circular: true,
      },
      angleLines: {
        display: true,
      },
      pointLabels: {
        display: true,
      },
    },
  },
  animation: {
    animateRotate: true,
    animateScale: false,
  },
  plugins: {
    legend: {
      display: polarChartLegend,
    },
  },
};
export var polarChartColors = [{ backgroundColor: [primary, secondary] }];
export var polarChartData: ChartDataset<'polarArea'>[] = [
  {
    data: [300, 50, 100, 40, 120],
    backgroundColor: [primary, '#f8d62b', '#51bb25', '#a927f9', secondary],
    borderColor: '#fff',
  },
];
