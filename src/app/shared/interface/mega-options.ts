export interface variationRadio {
  id: number;
  title: string;
  radioName: string;
  details: radioDetails[];
}

export interface radioDetails {
  id: number;
  option: string;
  radioId: string;
  image?: string;
  icon?: string;
  iconClass?: string;
  checked: boolean;
}
