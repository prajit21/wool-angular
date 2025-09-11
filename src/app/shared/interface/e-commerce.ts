export interface productSteps {
  id: number;
  title: string;
  subTitle: string;
  icon: string;
  value: string;
  active: boolean;
}

// Product Colors
export type ProductColor =
  | 'white'
  | 'black'
  | 'red'
  | 'green'
  | 'purple'
  | 'yellow'
  | 'blue'
  | 'gray'
  | 'orange'
  | 'pink';

// Product Size
export type ProductSize = 'M' | 'L' | 'XL';

// Product Tag
export type ProductTags = 'Spykar' | 'Lee' | 'Hudson' | 'Denizen' | 'Levis' | 'Diesel';

export interface product {
  product: Products[];
}
export interface Products {
  id: number;
  img: string;
  rating: number;
  productName: string;
  aboutProduct: string;
  description: string;
  discountPrice: number;
  price: number;
  status: string;
  availability: boolean;
  stock: string;
  review: string;
  category: string;
  colors: ProductColor[];
  size: ProductSize[];
  tags: ProductTags[];
  variants: { color: string; images: string };
}
// Color Filter
export interface ColorFilter {
  color?: ProductColor;
}

// Tag Filter
export interface TagFilter {
  tag?: ProductTags;
}

export interface productList {
  id: number;
  img: string;
  name: string;
  desc: string;
  amount: number;
  stock: string;
  date: string;
}

export interface order {
  id: number;
  img: string;
  name: string;
  price: string;
  stock: string;
  tag: string;
}

export interface productOrder {
  img: string;
  name: string;
  tag: string;
  size: string;
  color: string;
  article_number: string;
  units: string;
  price: string;
}
