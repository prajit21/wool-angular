export interface faq {
  title: string;
  colClass: string;
  description: string;
  icon: string;
}

export interface tutorials {
  id: number;
  rating: number;
  img: string;
  title: string;
  description: string;
  date: string;
}

export interface articleVideos {
  divClass: string;
  data: articleVideoData[];
}

export interface articleVideoData {
  id: number;
  icon: string;
  title: string;
  description: string;
  colClass: string;
}
