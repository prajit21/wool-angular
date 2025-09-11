export interface activeOrders {
  id: number;
  date: string;
  time: string;
  type: string;
  price: string;
  usd: string;
  status: string;
  customers: customers[];
  totalImages: string;
}

export interface customers {
  image: string;
}

export interface tradingActivityInterface {
  id: number;
  name: string;
  type: string;
  icon: string;
  date: string;
  time: string;
  total: string;
  status: string;
  progressBG: string;
  volume: string;
  margin: string;
}
