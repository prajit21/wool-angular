export interface switches {
  id: number;
  title: string;
  description: string;
  class: string;
  switchTitle?: string;
  checked: boolean;
  details: switchDetails[];
  flexColumn?: boolean;
}

export interface switchDetails {
  color: string;
}
