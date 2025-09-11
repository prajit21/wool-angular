export interface searchTab {
  id: number;
  title: string;
  value: string;
  icon?: string;
  bgColor?: string;
}

export interface searchResultAll {
  url: string;
  title: string;
  desc: string;
  rating: number;
  votes: number;
  type: string;
  showRating?: boolean;
  contentSide: string;
}

export interface video {
  heading: string;
  data: videos[];
}

export interface videos {
  url: string;
  youtubeUrl: string;
  title: string;
  rating: number;
  votes: number;
  type: string;
}
