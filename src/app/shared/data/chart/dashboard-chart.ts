import {
  CoinChartOptions,
  LiveMarketCap,
  MarketOverviewChartOptions,
  PriceChartOptions,
} from '../../interface/dashboard/chart';

let primary = localStorage.getItem('--theme-deafult') || '#7366ff';
let secondary = localStorage.getItem('--theme-secondary') || '#FF8575';

export const bitcoinChart: CoinChartOptions = {
  series: [
    {
      name: 'series2',
      data: [
        15, 30, 40, 30, 20, 15, 25, 35, 25, 30, 55, 50, 45, 40, 25, 15, 30, 40, 30, 40, 55, 45, 15,
        25, 15, 30, 40, 30, 25, 15, 35, 40,
      ],
    },
  ],
  colors: [
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    primary,
    primary,
    primary,
    primary,
    primary,
    primary,
    primary,
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
    'rgba(98, 113, 235, 0.2)',
  ],
  chart: {
    height: 95,
    type: 'bar',
    offsetY: 3,
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  plotOptions: {
    bar: {
      borderRadius: 3,
      distributed: true,
      columnWidth: '40%',
      barHeight: '38%',
      dataLabels: {
        position: 'top',
      },
    },
  },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  price: '$20.790',
  totalMargin: '- 36.28%',
  time: 'Since last month',
  textColor: 'secondary',
  marginType: 'arrow-down',
  icon: 'bit-icon',
  iconClass: 'bit-icon',
};

export const ethereumChart: CoinChartOptions = {
  series: [
    {
      name: 'series2',
      data: [
        15, 30, 40, 30, 20, 15, 25, 35, 25, 30, 55, 50, 45, 40, 25, 15, 30, 40, 30, 40, 55, 45, 15,
        25, 15, 30, 40, 30, 25, 15, 35, 40,
      ],
    },
  ],
  colors: [
    'rgba(255, 133, 117, 0.2)',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    secondary,
    secondary,
    secondary,
    secondary,
    secondary,
    secondary,
    secondary,
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
    'rgba(255, 133, 117, 0.2) ',
  ],
  chart: {
    height: 95,
    type: 'bar',
    offsetY: 3,
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  plotOptions: {
    bar: {
      borderRadius: 3,
      distributed: true,
      columnWidth: '40%',
      barHeight: '38%',
      dataLabels: {
        position: 'top',
      },
    },
  },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },

  price: '$22.890',
  totalMargin: '+ 23.28%',
  time: 'Since last month',
  textColor: 'success',
  marginType: 'arrow-up',
  icon: 'ethereum',
  iconClass: 'ethereum-icon',
};

export const liteCoinChart: CoinChartOptions = {
  series: [
    {
      name: 'series2',
      data: [
        15, 30, 40, 30, 20, 15, 25, 35, 25, 30, 55, 50, 45, 40, 25, 15, 30, 40, 30, 40, 55, 45, 15,
        25, 15, 30, 40, 30, 25, 15, 35, 40,
      ],
    },
  ],
  colors: [
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
    '#4FA7F4',
    '#4FA7F4',
    '#4FA7F4',
    '#4FA7F4',
    '#4FA7F4',
    '#4FA7F4',
    '#4FA7F4',
    '#4FA7F4',
    'rgba(79, 167, 244, 0.2)',
    'rgba(79, 167, 244, 0.2)',
  ],
  chart: {
    height: 95,
    type: 'bar',
    offsetY: 3,
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  plotOptions: {
    bar: {
      borderRadius: 3,
      distributed: true,
      columnWidth: '40%',
      barHeight: '38%',
      dataLabels: {
        position: 'top',
      },
    },
  },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },

  price: '$12.180',
  totalMargin: '- 36.28%',
  time: 'Since last month',
  textColor: 'secondary',
  marginType: 'arrow-down',
  icon: 'litecoin',
  iconClass: 'litecoin-icon',
};

interface PriceChartData {
  data: number[];
  color: string;
  currencyName: string;
  currencySymbol: string;
  icon: string;
  price: string;
  margin: string;
}

function priceChartOptions(data: PriceChartData): PriceChartOptions {
  return {
    series: [
      {
        data: data.data,
      },
    ],
    chart: {
      type: 'line',
      width: '80',
      height: 15,
      sparkline: {
        enabled: true,
      },
    },
    fill: {
      opacity: 1,
    },
    colors: [data.color],
    stroke: {
      curve: 'smooth',
      width: 3,
    },

    tooltip: {
      enabled: false,
    },
    currencyName: data.currencyName,
    currencySymbol: data.currencySymbol,
    icon: data.icon,
    price: data.price,
    margin: data.margin,
  };
}

const livePriceChart1Data: PriceChartData = {
  data: [1, 20, 10, 30, 10, 55, 20, 30],
  color: primary,
  currencyName: 'Bitcoin',
  currencySymbol: 'BTC',
  icon: 'bit-icon',
  price: '20,512',
  margin: '+0,20%',
};

export const livePriceChart1: PriceChartOptions = priceChartOptions(livePriceChart1Data);

const livePriceChart2Data: PriceChartData = {
  data: [1, 25, 10, 25, 25, 18, 25, 10, 30],
  color: secondary,
  currencyName: 'Ethereum',
  currencySymbol: 'ETH',
  icon: 'ethereum',
  price: '26,838',
  margin: '-0,16%',
};

export const livePriceChart2: PriceChartOptions = priceChartOptions(livePriceChart2Data);

const livePriceChart3Data: PriceChartData = {
  data: [1, 25, 10, 25, 25, 10, 25, 18, 30],
  color: '#4FA7F4',
  currencyName: 'Monero',
  currencySymbol: 'XMR',
  icon: 'monero',
  price: '28,738',
  margin: '+0,23%',
};

export const livePriceChart3: PriceChartOptions = priceChartOptions(livePriceChart3Data);

const livePriceChart4Data: PriceChartData = {
  data: [1, 25, 10, 25, 25, 18, 25, 10, 30],
  color: primary,
  currencyName: 'Litecoin',
  currencySymbol: 'LTC',
  icon: 'litecoin',
  price: '22,222',
  margin: '-0,12%',
};

export const livePriceChart4: PriceChartOptions = priceChartOptions(livePriceChart4Data);

const livePriceChart5Data = {
  data: [1, 55, 10, 30, 10, 55, 20, 30],
  color: secondary,
  currencyName: 'Bitcoin',
  currencySymbol: 'BTC',
  icon: 'bit-icon',
  price: '22,512',
  margin: '+0,20%',
};

export const livePriceChart5 = priceChartOptions(livePriceChart5Data);

export const livePrice = [
  {
    data: livePriceChart1,
  },
  {
    data: livePriceChart2,
  },
  {
    data: livePriceChart3,
  },
  {
    data: livePriceChart4,
  },
  {
    data: livePriceChart5,
  },
];

export const marketOverview: MarketOverviewChartOptions = {
  series: [
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4],
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81],
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578],
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579],
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92],
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22],
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08],
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25],
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97],
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602],
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95],
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02],
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591],
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592],
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34],
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86],
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01],
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25],
        },
      ],
    },
  ],
  chart: {
    type: 'candlestick',
    height: 340,
  },
  title: {
    text: 'CandleStick Chart',
    align: 'left',
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: primary,
        downward: secondary,
      },
      wick: {
        useFillColor: true,
      },
    },
  },
};

export const liveMarketCap: LiveMarketCap = {
  series: [
    {
      type: 'boxPlot',
      data: [
        {
          x: 'Jan',
          y: [23, 30, 33, 36, 43],
        },
        {
          x: 'Feb',
          y: [13, 24, 29, 33, 37],
        },
        {
          x: 'Mar',
          y: [28, 33, 37, 42, 46],
        },
        {
          x: 'Apr',
          y: [12, 15, 20, 25, 30],
        },
        {
          x: 'May',
          y: [24, 32, 38, 42, 48],
        },
        {
          x: 'Jun',
          y: [13, 17, 22, 25, 31],
        },
        {
          x: 'Jul',
          y: [35, 37, 40, 42, 45],
        },
        {
          x: 'Aug',
          y: [19, 24, 28, 34, 38],
        },
      ],
    },
  ],
  chart: {
    type: 'boxPlot',
    height: 360,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    boxPlot: {
      colors: {
        upper: primary,
        lower: secondary,
      },
    },
  },
  xaxis: {
    labels: {
      style: {
        colors: '$black',
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val + 'k';
      },
      style: {
        colors: '$black',
      },
    },
  },
};
