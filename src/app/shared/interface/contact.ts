export interface ContactDetails {
  id: number;
  active: boolean;
  img: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob?: string;
  personality?: string;
  city?: string;
  mobile?: string;
  email: string;
  website?: string;
  interest?: string;
}

export interface Contact {
  id: number;
  title: string;
  value?: string;
  type: string;
  totalContact?: number;
  data?: ContactDetails[];
}
