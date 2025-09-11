export interface mutualFriends {
  id: number;
  img: string;
  name: string;
  email: string;
  status: string;
}

export interface activityFeed {
  img: string;
  name: string;
  time: string;
  feed: string;
}

export interface followers {
  id: number;
  profile: string;
  name: string;
}

export interface photos {
  image: string;
}

export interface hobbiesEduction {
  heading: string;
  data: details[];
}

export interface details {
  details: hobbiesData[];
}

export interface hobbiesData {
  id: number;
  title: string;
  year?: string;
  desc: string;
}

export interface activityLog {
  title: string;
  data: activityLogData[];
}

export interface activityLogData {
  icon: string;
  data: string;
}

export interface socialAppPhotos {
  srcUrl: string;
  previewUrl: string;
  name: string;
  description: string;
}
