export interface projectList {
  id: number;
  title: string;
  badge: string;
  badgeColor: string;
  img: string;
  sites: string;
  desc: string;
  issue: number;
  resolved: number;
  comment: number;
  like: number;
  progress: number;
  customers: customers[];
}

export interface customers {
  image: string;
}

export const projectTab = [
  {
    id: 1,
    title: 'All',
    value: 'All',
    icon: 'target',
  },
  {
    id: 2,
    title: 'Doing',
    value: 'Doing',
    icon: 'info',
  },
  {
    id: 3,
    title: 'Done',
    value: 'Done',
    icon: 'check-circle',
  },
];

export const ProjectList: projectList[] = [
  {
    id: 1,
    title: 'Endless admin Design',
    badge: 'Doing',
    badgeColor: 'primary',
    img: 'assets/images/user/3.jpg',
    sites: 'Themeforest, australia',
    desc: 'Endless Admin is a full featured, multipurpose, premium bootstrap admin template.',
    issue: 12,
    resolved: 5,
    comment: 7,
    like: 10,
    progress: 70,
    customers: [
      {
        image: 'assets/images/user/3.jpg',
      },
      {
        image: 'assets/images/user/5.jpg',
      },
      {
        image: 'assets/images/user/1.jpg',
      },
    ],
  },
  {
    id: 2,
    title: 'Universal admin Design',
    badge: 'Done',
    badgeColor: 'success',
    img: 'assets/images/user/3.jpg',
    sites: 'Envato, australia',
    desc: 'Universal Admin is a full featured, multipurpose, premium bootstrap admin template.',
    issue: 24,
    resolved: 24,
    comment: 40,
    like: 3,
    progress: 100,
    customers: [
      {
        image: 'assets/images/user/3.jpg',
      },
      {
        image: 'assets/images/user/5.jpg',
      },
      {
        image: 'assets/images/user/1.jpg',
      },
    ],
  },
  {
    id: 3,
    title: 'Poco admin Design',
    badge: 'Done',
    badgeColor: 'success',
    img: 'assets/images/user/3.jpg',
    sites: 'Envato, australia',
    desc: 'Poco Admin is a full featured, multipurpose, premium bootstrap admin template.',
    issue: 40,
    resolved: 40,
    comment: 20,
    like: 2,
    progress: 100,
    customers: [
      {
        image: 'assets/images/user/3.jpg',
      },
      {
        image: 'assets/images/user/5.jpg',
      },
      {
        image: 'assets/images/user/1.jpg',
      },
    ],
  },
  {
    id: 4,
    title: 'Universal admin Design',
    badge: 'Done',
    badgeColor: 'success',
    img: 'assets/images/user/3.jpg',
    sites: 'Envato, australia',
    desc: 'Universal Admin is a full featured, multipurpose, premium bootstrap admin template.',
    issue: 24,
    resolved: 24,
    comment: 40,
    like: 3,
    progress: 100,
    customers: [
      {
        image: 'assets/images/user/3.jpg',
      },
      {
        image: 'assets/images/user/5.jpg',
      },
      {
        image: 'assets/images/user/1.jpg',
      },
    ],
  },
  {
    id: 5,
    title: 'Endless admin Design',
    badge: 'Doing',
    badgeColor: 'primary',
    img: 'assets/images/user/3.jpg',
    sites: 'Themeforest, australia',
    desc: 'Endless Admin is a full featured, multipurpose, premium bootstrap admin template.',
    issue: 12,
    resolved: 5,
    comment: 7,
    like: 1,
    progress: 70,
    customers: [
      {
        image: 'assets/images/user/3.jpg',
      },
      {
        image: 'assets/images/user/5.jpg',
      },
      {
        image: 'assets/images/user/1.jpg',
      },
    ],
  },
  {
    id: 6,
    title: 'Poco admin Design',
    badge: 'Done',
    badgeColor: 'success',
    img: 'assets/images/user/6.jpg',
    sites: 'Envato, australia',
    desc: 'Poco Admin is a full featured, multipurpose, premium bootstrap admin template.',
    issue: 40,
    resolved: 40,
    comment: 20,
    like: 2,
    progress: 100,
    customers: [
      {
        image: 'assets/images/user/3.jpg',
      },
      {
        image: 'assets/images/user/5.jpg',
      },
      {
        image: 'assets/images/user/1.jpg',
      },
    ],
  },
];
