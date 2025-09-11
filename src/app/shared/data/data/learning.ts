import { comments } from '../../interface/blog';
import { course } from '../../interface/learning';

export const findCourse: course[] = [
  {
    id: 1,
    title: 'Categories',
    type: 'checkbox',
    details: [
      {
        checkId: 'chk-ani',
        checkTitle: 'Accounting',
      },
      {
        checkId: 'chk-ani0',
        checkTitle: 'Design',
      },
      {
        checkId: 'chk-ani1',
        checkTitle: 'Development',
      },
      {
        checkId: 'chk-ani2',
        checkTitle: 'Management',
      },
    ],
  },
  {
    id: 2,
    title: 'Duration',
    type: 'checkbox',
    checkId: 'chk-ani',
    details: [
      {
        checkId: 'chk-ani6',
        checkTitle: '0-50 hours',
      },
      {
        checkId: 'chk-ani7',
        checkTitle: '50-100 hours',
      },
      {
        checkId: 'chk-ani8',
        checkTitle: '100+ hours',
      },
    ],
  },
  {
    id: 3,
    title: 'Price',
    buttonType: 'checkbox',
    type: 'radio',
    details: [
      {
        checkId: 'edo-ani',
        checkTitle: 'All Courses',
        name: 'rdo - ani',
        checked: false,
      },
      {
        checkId: 'edo-ani14',
        checkTitle: 'Paid Courses',
        name: 'rdo - ani',
        checked: false,
      },
      {
        checkId: 'edo-ani2',
        checkTitle: 'Free Courses',
        name: 'rdo - ani',
        checked: true,
      },
    ],
  },
  {
    id: 4,
    title: 'Status',
    type: 'checkbox',
    checkId: 'chk-ani',
    details: [
      {
        checkId: 'chk-ani3',
        checkTitle: 'Registration',
      },
      {
        checkId: 'chk-ani4',
        checkTitle: 'Progress',
      },
      {
        checkId: 'chk-ani5',
        checkTitle: 'Completed',
      },
    ],
  },
];

export const category = [
  {
    title: 'Design',
    isCollapsed: false,
    designer: [
      {
        designerTitle: 'UI Design',
        count: '28',
      },
      {
        designerTitle: 'UX Design',
        count: '35',
      },
      {
        designerTitle: 'Interface Design',
        count: '26',
      },
      {
        designerTitle: 'User Experience',
        count: '36',
      },
    ],
  },
  {
    title: 'Development',
    padding: true,
    designer: [
      {
        designerTitle: 'Frontend Development',
        count: '48',
      },
      {
        designerTitle: 'Backend Development',
        count: '19',
      },
    ],
  },
];

export const upcomingCourse = [
  {
    title: 'UX Development',
    courseBy: 'Development Team',
    rating: 4.5,
    day: '18',
    month: 'Dec',
  },
  {
    title: 'Business Analyst',
    courseBy: 'Analyst Team.',
    rating: 5,
    day: '28',
    month: 'Dec',
  },
  {
    title: 'Web Development',
    courseBy: 'Designer',
    rating: 4,
    day: '5',
    month: 'Jan',
  },
];

export const learningDetails = [
  {
    id: 1,
    img: 'assets/images/faq/1.jpg',
    date: '05',
    month: 'January 2022',
    title: 'Java Language',
    by: 'Paige Turner',
    hits: 15,
    desc: 'inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.',
  },
  {
    id: 2,
    img: 'assets/images/faq/2.jpg',
    date: '10',
    month: 'March 2022',
    title: 'Web Development',
    by: 'Petey Cruiser',
    hits: 34,
    desc: 'inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.',
  },
  {
    id: 3,
    img: 'assets/images/faq/3.jpg',
    date: '9',
    month: 'April 2018',
    by: 'Admin',
    hits: 0,
    desc: 'Perspiciatis unde omnis iste natus error sit.Dummy text',
  },
  {
    id: 4,
    img: 'assets/images/faq/1.jpg',
    date: '9',
    month: 'April 2018',
    by: 'Admin',
    hits: 0,
    desc: 'Perspiciatis unde omnis iste natus error sit.Dummy text',
  },
  {
    id: 5,
    img: 'assets/images/faq/4.jpg',
    date: '9',
    month: 'April 2018',
    by: 'Admin',
    hits: 0,
    desc: 'Perspiciatis unde omnis iste natus error sit.Dummy text',
  },
  {
    id: 6,
    img: 'assets/images/faq/2.jpg',
    date: '9',
    month: 'April 2018',
    by: 'Admin',
    hits: 0,
    desc: 'Perspiciatis unde omnis iste natus error sit.Dummy text',
  },
  {
    id: 7,
    img: 'assets/images/faq/4.jpg',
    date: '9',
    month: 'April 2018',
    by: 'Admin',
    hits: 0,
    desc: 'Perspiciatis unde omnis iste natus error sit.Dummy text',
  },
  {
    id: 8,
    img: 'assets/images/faq/3.jpg',
    date: '9',
    month: 'April 2018',
    by: 'Admin',
    hits: 0,
    desc: 'Perspiciatis unde omnis iste natus error sit.Dummy text',
  },
];

export const comment: comments[] = [
  {
    img: 'assets/images/blog/comment.jpg',
    name: 'Jolio Mark',
    designation: 'Designer',
    hits: 2,
    comments: 598,
    desc: 'The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good & fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant.',
    reply: false,
  },
  {
    img: 'assets/images/blog/9.jpg',
    name: 'John deo',
    designation: 'Designer',
    hits: 22,
    comments: 398,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    reply: true,
  },
  {
    img: 'assets/images/blog/4.jpg',
    name: 'Mark Jolio',
    designation: 'Designer',
    hits: 2,
    comments: 598,
    desc: 'Clean resort with maintained garden but rooms are average Lack of communication between the staff members. Receptionsit full of attitude. Arrogant staff. Except good view there is nothing great in this property.Resort is 35 kms away from Ramnagar Town.',
    reply: false,
  },
];
