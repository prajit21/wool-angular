import {
  ApexMarkers,
  ApexGrid,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexXAxis,
  ApexYAxis,
  ApexNonAxisChartSeries,
  ApexTooltip,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export interface ProfitChartOptions {
  series: ApexAxisChartSeries;
  colors: string[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  responsive: ApexResponsive[];
}

export interface SalesAnalyticsChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  grid: ApexGrid;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  colors: string[];
}

export interface ConversionRateChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  colors: string[];
  labels: string[];
  responsive: ApexResponsive[];
}

export interface SocialMediaChartOptions {
  series: number[];
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  colors: string[];
  stroke: ApexStroke;
  responsive: ApexResponsive[];

  averageTitle?: string;
  cardColor?: string;
  average?: string;
  parsonage?: string;
  desc?: string;
  name: string;
  image: string;
  pr: string;
  followers: string;
}

export interface SocialMediaInput {
  color: string[];
  dropshadowColor: string;
  radialYseries: number[];
  averageTitle?: string;
  cardColor?: string;
  average?: string;
  parsonage?: string;
  desc?: string;
  name: string;
  image: string;
  pr: string;
  followers: string;
}

export interface AverageSalesChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  colors: string[];
  stroke: ApexStroke;
  responsive: ApexResponsive[];
  title: string;
  details: string;
  percentage: string;
}

export interface RadialChartInput {
  color: string[];
  dropshadowColor: string;
  radialYseries: number[];
  averageTitle: string;
  average: string;
  parsonage: string;
  desc: string;
  cardColor: string;
}

export interface RadialChartOptions {
  series: number[];
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  colors: string[];
  stroke: ApexStroke;
  responsive: ApexResponsive[];
  dataLabels: ApexDataLabels;
  labels: string[];
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  grid: ApexGrid;
  fill: ApexFill;
  averageTitle: string;
  cardColor?: string;
  average: string;
  parsonage: string;
  desc: string;
}

export interface FollowersOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  grid: ApexGrid;
  colors: string[];
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  responsive: ApexResponsive[];
}

export interface VisitorChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  colors: string[];
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  responsive: ApexResponsive[];
}

export interface OrderChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  colors: string[];
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  responsive: ApexResponsive[];
}

export interface ProfitChartDataOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  responsive: ApexResponsive[];
}

export interface CoinChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;

  price: string;
  totalMargin: string;
  time: string;
  textColor: string;
  marginType: 'arrow-up' | 'arrow-down';
  icon: string;
  iconClass: string;
}

export interface PriceChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  colors: string[];
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  currencyName: string;
  currencySymbol: string;
  icon: string;
  price: string;
  margin: string;
}

export interface MarketOverviewChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions;
}

export interface LiveMarketCap {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}
