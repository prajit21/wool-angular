import { variationRadio } from '../../interface/mega-options';

export const variationRadioDetails: variationRadio[] = [
  {
    id: 1,
    title: 'Select your payment method',
    radioName: 'radio1',
    details: [
      {
        id: 1,
        option: 'BOB',
        radioId: 'ptm11',
        image: 'assets/images/ecommerce/card.png',
        checked: false,
      },
      {
        id: 2,
        option: 'MasterCard',
        radioId: 'ptm22',
        image: 'assets/images/ecommerce/mastercard.png',
        checked: true,
      },
      {
        id: 3,
        option: 'Paypal',
        radioId: 'ptm33',
        image: 'assets/images/ecommerce/paypal.png',
        checked: false,
      },
      {
        id: 4,
        option: 'VISA',
        radioId: 'ptm44',
        image: 'assets/images/ecommerce/visa.png',
        checked: false,
      },
    ],
  },
  {
    id: 2,
    title: 'What are the most important things to learn about web design?',
    radioName: 'radio2',
    details: [
      {
        id: 1,
        option: 'A. HTML',
        radioId: 'ptm101',
        checked: false,
      },
      {
        id: 2,
        option: 'B. CSS',
        radioId: 'ptm201',
        checked: false,
      },
      {
        id: 3,
        option: 'C. Javascript',
        radioId: 'ptm301',
        checked: true,
      },
      {
        id: 4,
        option: 'D. Above the all',
        radioId: 'ptm401',
        checked: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Radios With Creative Options & SVG Icons',
    radioName: 'radio3',
    details: [
      {
        id: 1,
        option: 'The notification icon displayed new messages.',
        radioId: 'ptm100',
        icon: 'notification',
        iconClass: 'stroke-danger',
        checked: false,
      },
      {
        id: 2,
        option: 'The download icon indicated completion.',
        radioId: 'ptm200',
        icon: 'calendar',
        iconClass: 'stroke-success',
        checked: false,
      },
      {
        id: 3,
        option: 'The tag icon allowed easy categorization.',
        radioId: 'ptm300',
        icon: 'tag',
        iconClass: 'stroke-dark',
        checked: true,
      },
      {
        id: 4,
        option: 'The email icon was inaccessibly located.',
        radioId: 'ptm400',
        icon: 'email',
        iconClass: 'stroke-primary',
        checked: false,
      },
    ],
  },
];

export const variationCheckbox = [
  {
    id: 'check-a',
    text: 'Reading',
    color: 'success',
    checked: false,
  },
  {
    id: 'check-b',
    text: 'Watching TV',
    color: 'success',
    checked: true,
  },
  {
    id: 'check-c',
    text: 'Listening to music',
    color: 'danger',
    checked: false,
  },
  {
    id: 'check-d',
    text: 'Playing video games',
    color: 'danger',
    checked: false,
  },
  {
    id: 'check-e',
    text: 'Painting/Drawing',
    color: 'success',
    checked: false,
  },
];

export const themeSale = [
  {
    id: 'feature1',
    text: 'Tivo',
    sale: '60',
    price: 18,
    checked: false,
  },
  {
    id: 'feature2',
    text: 'wool',
    sale: '4.6K',
    price: 16,
    checked: false,
  },
  {
    id: 'feature3',
    text: 'Multikart',
    sale: '2.5k',
    price: 24,
    checked: false,
  },
  {
    id: 'feature4',
    text: 'Viho',
    sale: '2k',
    price: 29,
    checked: true,
  },
];

export const defaultStyle = [
  {
    title: 'COD',
    text: 'Estimated 2 Day Shipping ( Duties end tax may be due delivery )',
    price: 50,
    color: 'primary',
    id: 'radio14',
    checked: false,
  },
  {
    title: 'Fast',
    text: 'Estimated 1 Day Shipping ( Duties end tax may be due delivery )',
    price: 100,
    color: 'secondary',
    id: 'radio13',
    checked: false,
  },
];

export const withoutBorder = [
  {
    price: '39',
    text: 'Plans for 2/4/6 months are offered to new clients.',
    tag: '100 MBPS',
    color: 'warning',
    checked: true,
    id: 'checkbox11',
  },
  {
    price: '50',
    text: 'Plans for 2 years projects offered to new clients.',
    tag: 'HIRED',
    color: 'info',
    checked: false,
    id: 'checkbox22',
  },
];

export const solidBorderStyle = [
  {
    id: 'radio15',
    image: 'assets/images/blog/img.png',
    description:
      'We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration.',
    checked: false,
  },
  {
    id: 'radio16',
    image: 'assets/images/blog/blog.jpg',
    description:
      'When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors.',
    checked: false,
  },
];

export const offerStyleBorder = [
  {
    id: 'checkbox50',
    image: 'assets/images/email-template/11.jpg',
    description:
      "Fruits are an essential part of a healthy diet, and offer many health benefits. They're packed with vitamins, minerals, and fiber, which can help improve digestion.",
    color: 'success',
    checked: false,
  },
  {
    id: 'checkbox101',
    image: 'assets/images/email-template/10.jpg',
    description:
      'Flowers have long been used to express feelings and sentiments, and each bloom has its own distinct significance. For instance, while daisies signify innocence and purity.',
    color: 'warning',
    checked: true,
  },
];

export const inlineStyle = [
  {
    id: 'radio19',
    title: 'COD',
    description: 'Estimated 14-20 Day Shipping ( Duties end taxes may be due upon delivery )',
    tag: '50 INR',
    color: 'warning',
  },
  {
    id: 'radio20',
    title: 'FAST',
    description: 'Estimated 1 Day Shipping ( Duties end taxes may be due upon delivery )',
    tag: '100 INR',
    color: 'secondary',
  },
  {
    id: 'radio21',
    title: 'STANDARD',
    description: 'Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )',
    tag: '80 INR',
    color: 'secondary',
  },
  {
    id: 'radio22',
    title: 'LOCAL',
    description: 'Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )',
    tag: 'FREE',
    color: 'warning',
  },
];

export const verticalStyle = [
  {
    title: 'COD',
    tag: '50 INR',
    tagColor: 'primary',
    text: 'Estimated 10 to 15 Day Shipping ( Duties end tax may be due delivery )',
    checked: false,
    id: 'radio23',
  },
  {
    title: 'FAST',
    tag: '100 INR',
    tagColor: 'secondary',
    text: 'Estimated 10 to 12 Day Shipping ( Duties end tax may be due delivery )',
    checked: false,
    id: 'radio24',
  },
  {
    title: 'STANDARD',
    tag: '80 INR',
    tagColor: 'success',
    text: 'Estimated 3 to 5 Day Shipping ( Duties end tax may be due delivery )',
    checked: false,
    id: 'radio25',
  },
  {
    title: 'LOCAL',
    tag: 'FREE',
    tagColor: 'info',
    text: 'Estimated 3 to 5 Day Shipping ( Duties end taxes may be due upon delivery )',
    checked: true,
    id: 'radio5',
  },
];
