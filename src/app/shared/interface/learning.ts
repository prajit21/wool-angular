export interface course {
  id: number;
  title: string;
  type: string;
  checkId?: string;
  buttonType?: string;
  details: details[];
}

export interface details {
  checkId: string;
  checkTitle: string;
  name?: string;
  checked?: boolean;
}
