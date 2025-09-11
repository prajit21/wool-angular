export const basicDropdown = [
  {
    colorClass: 'primary',
    title: 'Dashboard',
    dropdownItem: [{ item: 'Project' }, { item: 'Ecommerce' }, { item: 'Crypto' }],
  },
  {
    colorClass: 'secondary',
    title: 'Ecommerce',
    dropdownItem: [{ item: 'Product' }, { item: 'Product details' }, { item: 'Cart' }],
  },
  {
    colorClass: 'warning',
    title: 'Ui kits',
    dropdownItem: [{ item: 'Typography' }, { item: 'Avatars' }, { item: 'Grid' }],
  },
  {
    colorClass: 'danger',
    title: 'Error page',
    dropdownItem: [{ item: 'Error 400' }, { item: 'Error 403' }, { item: 'Error 500' }],
  },
];

export const roundedDropdown = [
  {
    colorClass: 'primary',
    title: 'Primary',
    dropdownItem: [{ item: 'Dark' }, { item: 'Light' }, { item: 'Lighter' }],
  },
  {
    colorClass: 'success',
    title: 'Success',
    dropdownItem: [{ item: 'Dark' }, { item: 'Light' }, { item: 'Lighter' }],
  },
  {
    colorClass: 'info',
    title: 'Info',
    dropdownItem: [{ item: 'Dark' }, { item: 'Light' }, { item: 'Lighter' }],
  },
  {
    colorClass: 'warning',
    title: 'Warning',
    dropdownItem: [{ item: 'Dark' }, { item: 'Light' }, { item: 'Lighter' }],
  },
  {
    colorClass: 'danger',
    title: 'Danger',
    dropdownItem: [{ item: 'Dark' }, { item: 'Light' }, { item: 'Lighter' }],
  },
];

export const splitDropdown = [
  {
    colorClass: 'primary',
    title: 'Widgets',
    dropdownItem: [{ item: 'General' }, { item: 'Chart' }],
  },
  {
    colorClass: 'secondary',
    title: 'Animations',
    dropdownItem: [{ item: 'Animate' }, { item: 'AOS animations' }],
  },
  {
    colorClass: 'success',
    title: 'Charts',
    dropdownItem: [{ item: 'Echarts' }, { item: 'Apex chart' }],
  },
  {
    colorClass: 'info',
    title: 'Email',
    dropdownItem: [{ item: 'Email app' }, { item: 'Email compose' }],
  },
  {
    colorClass: 'warning',
    title: 'Icons',
    dropdownItem: [
      { item: 'Flag icons' },
      { item: 'Fontawesome icons' },
      { item: 'Ico icons' },
      { item: 'Feather icons' },
    ],
  },
  {
    colorClass: 'danger',
    title: 'Learning',
    dropdownItem: [{ item: 'Learning List' }, { item: 'Detailed Course' }],
  },
];

export const justifyContentDropdown = [
  {
    colorClass: 'primary',
    title: 'Text-left',
    class: 'start',
    dropdownItem: [{ item: 'Hello..' }, { item: 'How are you?' }, { item: 'What are you doing?' }],
  },
  {
    colorClass: 'info',
    title: 'Text-center',
    class: 'center',
    dropdownItem: [{ item: 'Chocolate' }, { item: 'Ice-cream' }, { item: 'Trophy' }],
  },
  {
    colorClass: 'primary',
    title: 'Text-right',
    class: 'end',
    dropdownItem: [{ item: "I'm fine." }, { item: 'ohh wow!!' }, { item: "That's the good news!" }],
  },
];

export const alignmentDropdown = [
  {
    colorClass: 'warning',
    title: 'Warning top',
    alignment: 'top-start',
    class: 'dropup',
    dropdownItem: [{ item: 'Be careful' }, { item: 'Notifications' }, { item: 'Beware' }],
  },
  {
    colorClass: 'success',
    title: 'Success right',
    alignment: 'right',
    class: 'dropend',
    dropdownItem: [{ item: 'Good luck ' }, { item: 'Good job' }, { item: 'Done!' }],
  },
  {
    colorClass: 'primary',
    title: 'Primary bottom',
    alignment: 'bottom',
    class: '',
    dropdownItem: [{ item: "It's important" }, { item: 'Happy life' }, { item: 'Another work' }],
  },
  {
    colorClass: 'danger',
    title: 'Danger left',
    alignment: 'left',
    class: 'dropstart',
    dropdownItem: [{ item: 'Threat' }, { item: 'Dangerous' }, { item: 'Alert' }],
  },
];

export const helperCardDropdown = [
  {
    colorClass: 'secondary',
    title: 'Helper Card',
    tagData: 'Learn More!',
    desc: 'There is a lot of information available here',
  },
  {
    colorClass: 'warning',
    title: 'Warning Card',
    tagData: 'Warning!',
    desc: 'Please! Check your notifications.',
  },
  {
    colorClass: 'info',
    title: 'Alert Card',
    tagData: 'Danger',
    desc: "It's a danger path.",
  },
];

export const dividerDropdown = [
  {
    colorClass: 'success',
    title: 'Wishlist',
    dropdownItem: [{ item: 'Shoes' }, { item: 'Bag' }, { item: 'Clothes' }],
    dividerItem: [{ item: 'Separated link' }],
  },
  {
    colorClass: 'primary',
    title: 'Sports',
    dropdownItem: [{ item: 'Badminton' }, { item: 'Tenis' }, { item: 'Kho-Kho' }],
    dividerItem: [{ item: 'Separated link' }],
  },
  {
    colorClass: 'secondary',
    title: 'Colors',
    dropdownItem: [{ item: 'Orange' }, { item: 'Yellow' }, { item: 'Red' }],
    dividerItem: [{ item: 'Separated link' }],
  },
];

export const sizingDropdown = [
  {
    class: 'btn-info btn-lg',
    title: 'Large button',
    dropdownItem: [{ item: 'Small button' }, { item: 'Medium button' }, { item: 'Large button' }],
    dividerItem: [{ item: 'Very large button' }],
  },
  {
    class: 'btn-dark btn-sm',
    title: 'Small button',
    dropdownItem: [
      { item: 'Small button' },
      { item: 'Very small button' },
      { item: 'Extra small button' },
    ],
    dividerItem: [{ item: 'Extra extra small' }],
  },
];

export const accordionWithIcon = [
  {
    title: 'Keep in touch',
    desc: ' <em class="txt-danger"> " This page might not behave as expected because Windows Internet Explorer isn`t configured to load unsigned ActiveX controls."</em> or "Allow this page to install an unsigned ActiveX Control? Doing so from untrusted sources may harm your computer." (Both phrased as conditions that may cause future problems.)',
    icon: 'bell',
  },
  {
    title: 'Chats with others',
    desc: "You get the same features in Chat and Chat in Gmail, but the integrated Gmail experience provides a central location to communicate with friends, family, or coworkers between emails.<br><strong> Chat:</strong> Use when you prefer a dedicated chat experience and don't mind switching between different apps.",
    icon: 'message-circle',
  },
  {
    title: 'Right way to code',
    desc: "1) Decide on the indentation and keep it that way.<br>2) Make comments.<br>3) Consistent name scheme.<br>4) Don't repeat code.<br>5) Avoid writing long code lines.<br>6) Break down a big task into smaller chunks.<br>7) Organize your program into smaller files.<br>8) Write clever code that is also readable.",
    icon: 'check-square',
  },
];
