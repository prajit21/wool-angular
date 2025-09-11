export interface avatar {
  title: string;
  desc: string;
  class: string;
  colClass: string;
  data: avatarData[];
}

export interface avatarData {
  img: string;
  imgClass: string;
  status?: string;
}

export interface tagPill {
  id: number;
  header: string;
  desc: string;
  data: tagPillData[];
}

export interface tagPillData {
  class: string;
  text?: string;
  number?: number;
  icon?: string;
}

export interface progress {
  header: string;
  desc: string;
  class: string;
  showWidth?: boolean;
  data: progressData[];
}

export interface progressData {
  colorClass: string;
  width?: number;
}
