import {
  ApexAnnotations,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

export interface CommonLineCharts {
  id: number;
  title: string;
  value: string;
  description: string;
  increase_value: string;
  chart_details: ChartDetails;
}

export interface CommonLineChartInput {
  categories: string[];
  colors: string;
  series: number[];
}

export interface ChartDetails {
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  fill: ApexFill;
  colors: string[];
  series: ApexAxisChartSeries;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
}

export interface TotalSaleChartOption {
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  fill: ApexFill;
  colors: string[];
  series: ApexAxisChartSeries;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
  title: string;
  count: string;
  subTitle: string;
  growth: string;
  colorClass: string;
}

export interface TotalProductChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  markers: ApexMarkers;
}

export interface CreatedProjectChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  colors: string[];
  fill: ApexFill;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  tooltip: ApexTooltip;
}

export interface TotalProjectChart {
  series: ApexAxisChartSeries;
  colors: string[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
}

export interface MonthlyHistoryChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string[];
  fill: ApexFill;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
}

export interface SkillStatusChart {
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  series: number[];
  labels: string[];
  legend: ApexLegend;
  colors: string[];
  responsive: ApexResponsive[];
}

export interface OrderStatusChart {
  chart_details: OrderStatusChartDetails;
}

export interface OrderStatusChartDetails {
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  colors: string[];
  stroke: ApexStroke;
  fill: ApexFill;
  series: ApexAxisChartSeries;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  responsive: ApexResponsive[];
}

export interface OnlineOrderChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  colors: string[];
}

export interface OfflineOrderChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  grid: ApexGrid;
  dataLabels: ApexDataLabels;
  colors: string[];
  fill: ApexFill;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  markers: ApexMarkers;
  responsive: ApexResponsive[];
}

export interface CategoriesChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  colors: string[];
}

export interface EarnedChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}

export interface InvoicesChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  colors: string[];
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  markers: ApexMarkers;
  responsive: ApexResponsive[];
}

export interface BudgetChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  markers: ApexMarkers;
}

export interface OrderStatusChartOption {
  colors: string;
  series: number;
  categories: string;
}

export interface LiveProductChart {
  chart: ApexChart;
  stroke: ApexStroke;
  series: ApexAxisChartSeries;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  colors: string[];
  labels: string[];
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis[];
  tooltip: ApexTooltip;
}

export interface TurnOverCharts {
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  fill: ApexFill;
  colors: string[];
  series: ApexAxisChartSeries;
  tooltip: ApexTooltip;
}

export interface CryptoCurrencyPriceChart {
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  fill: ApexFill;
  colors: string[];
  series: ApexAxisChartSeries;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
}

export interface CryptoAnnotationChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  annotations: ApexAnnotations;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  grid: ApexGrid;
  title: ApexTitleSubtitle;
  colors: string[];
  labels: string[];
  xaxis: ApexXAxis;
  responsive: ApexResponsive[];
}

export interface StockMarketChart {
  series: ApexAxisChartSeries;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  fill: ApexFill;
  chart: ApexChart;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  responsive: ApexResponsive[];
}

export interface FinanceChart {
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  series: ApexAxisChartSeries;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  fill: ApexFill;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  responsive: ApexResponsive[];
}

export interface GeneralSalesStatsChart {
  series: number[];
  chart: ApexChart;
  stroke: ApexStroke;
  grid: ApexGrid;
  plotOptions: ApexPlotOptions;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  responsive: ApexResponsive[];
}

export interface OrderStatusChart2 {
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  grid: ApexGrid;
  fill: ApexFill;
  colors: string[];
  markers: ApexMarkers;
  series: ApexAxisChartSeries;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  responsive: ApexResponsive[];
}

export interface MonthlySalesChart {
  fill: ApexFill;
  colors: string[];
  chart: ApexChart;
  series: ApexAxisChartSeries;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  markers: ApexMarkers;
  labels: string[];
}

export interface UsersChart {
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  series: ApexAxisChartSeries;
  fill: ApexFill;
  colors: string[];
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}

export interface SaleOverviewChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  grid: ApexGrid;
  labels: string[];
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  colors: string[];
  fill: ApexFill;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}

export interface GeneralSalesOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  grid: ApexGrid;
  plotOptions: ApexPlotOptions;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  responsive: ApexResponsive[];
}

export interface MonthlyChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  grid: ApexGrid;
  colors: string[];
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  markers: ApexMarkers;
}

export interface TotalEarningChartOptions {
  series: ApexAxisChartSeries;
  colors: string[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
}

export interface TotalExpenseChartOptions {
  series: ApexAxisChartSeries;
  colors: string[];
  chart: ApexChart;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  markers: ApexMarkers;
}

export interface CardChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions?: ApexPlotOptions;
  dataLabels?: ApexDataLabels;
  grid?: ApexGrid;
  xaxis?: ApexXAxis;
  legend?: ApexLegend;
  yaxis?: ApexYAxis;
  colors?: string[];
  fill?: ApexFill;
  stroke?: ApexStroke;
  markers?: ApexMarkers;
  responsive?: ApexResponsive[];
}

export interface TotalChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  markers?: ApexMarkers;
  colors: string[];
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
  fill?: ApexFill;
  grid?: ApexGrid;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  tooltip?: ApexTooltip;
}

export interface OrderChartOptions {
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  colors: string[];
  stroke: ApexStroke;
  fill: ApexFill;
  series: ApexAxisChartSeries;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  responsive: ApexResponsive[];
  id: string;
}

export interface WidgetChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions?: ApexPlotOptions;
  colors: string[];
  dataLabels?: ApexDataLabels;
  stroke: ApexStroke;
  labels: string[];
  legend: ApexLegend;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  markers: ApexMarkers;
  responsive: ApexResponsive[];
  fill?: ApexFill;
  icon: string;
  coinName: string;
  tag: string;
  colorClass: string;
  price: string;
  parsonage: string;
}
