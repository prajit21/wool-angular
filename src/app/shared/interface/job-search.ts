export interface jobFilter {
  id: number;
  title: string;
  button: string;
  class?: string;
  search?: boolean;
  location?: boolean;
  details: filterDetails[];
}

export interface filterDetails {
  id: number;
  title: string;
  checkId: string;
  badge: boolean;
  badgeText?: number;
  countryCode?: string;
}
