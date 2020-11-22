const products = [
  {
    id: 1,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Marble Cake',
    img: '/assets/img/marble-cake-thumb.jpg',
    category: 'starter',
    createDate: '02.04.2018',
    status: 'pending',
    statusColor: 'primary',
    description: 'Wedding cake with flowers Macarons and blueberries',
    sales: 1647,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 62,
  },
  {
    id: 2,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Fat Rascal',
    category: 'mains',
    img: '/assets/img/fat-rascal-thumb.jpg',
    createDate: '01.04.2018',
    status: 'pending',
    statusColor: 'secondary',
    description: 'Cheesecake with chocolate cookies and Cream biscuits',
    sales: 1240,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 48,
  },
  {
    id: 3,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Chocolate Cake',
    img: '/assets/img/chocolate-cake-thumb.jpg',
    category: 'starter',
    createDate: '25.03.2018',
    status: 'pending',
    statusColor: 'secondary',
    description: 'Homemade cheesecake with fresh berries and mint',
    sales: 1080,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 57,
  },
  {
    id: 4,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Goose Breast',
    img: '/assets/img/goose-breast-thumb.jpg',
    category: 'drinks',
    createDate: '21.03.2018',
    status: 'pending',
    statusColor: 'secondary',
    description: 'Chocolate cake with berries',
    sales: 1014,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 41,
  },
  {
    id: 5,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Petit Gâteau',
    category: 'mains',
    img: '/assets/img/petit-gateau-thumb.jpg',
    createDate: '02.06.2018',
    status: 'pending',
    statusColor: 'primary',
    description: 'Chocolate cake with mascarpone',
    sales: 985,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 23,
  },
  {
    id: 6,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Salzburger Nockerl',
    img: '/assets/img/salzburger-nockerl-thumb.jpg',
    category: 'desserts',
    createDate: '14.07.2018',
    status: 'stored',
    statusColor: 'secondary',
    description: 'Wedding cake decorated with donuts and wild berries',
    sales: 962,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 34,
  },
  {
    id: 7,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Napoleonshat',
    img: '/assets/img/napoleonshat-thumb.jpg',
    category: 'desserts',
    createDate: '05.02.2018',
    status: 'pending',
    statusColor: 'secondary',
    description: 'Cheesecake with fresh berries and mint for dessert',
    sales: 921,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 31,
  },
  {
    id: 8,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Cheesecake',
    img: '/assets/img/cheesecake-thumb.jpg',
    category: 'drinks',
    createDate: '18.08.2018',
    status: 'stored',
    statusColor: 'primary',
    description: 'Delicious vegan chocolate cake',
    sales: 887,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 21,
  },
  {
    id: 9,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Financier',
    img: '/assets/img/financier-thumb.jpg',
    category: 'drinks',
    createDate: '15.03.2018',
    status: 'active',
    statusColor: 'primary',
    description:
      'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
    sales: 865,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 53,
  },
  {
    id: 10,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Genoise',
    img: '/assets/img/genoise-thumb.jpg',
    category: 'mains',
    createDate: '11.06.2018',
    status: 'active',
    statusColor: 'secondary',
    description: 'Christmas fruit cake, pudding on top',
    sales: 824,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 55,
  },
  {
    id: 11,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Gingerbread',
    img: '/assets/img/gingerbread-thumb.jpg',
    category: 'drinks',
    createDate: '10.04.2018',
    status: 'pending',
    statusColor: 'primary',
    description: 'Wedding cake decorated with donuts and wild berries',
    sales: 714,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 12,
  },
  {
    id: 12,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Magdalena',
    img: '/assets/img/magdalena-thumb.jpg',
    category: 'drinks',
    createDate: '22.07.2018',
    status: 'active',
    statusColor: 'secondary',
    description: 'Christmas fruit cake, pudding on top',
    sales: 702,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 14,
  },
  {
    id: 13,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Parkin',
    img: '/assets/img/parkin-thumb.jpg',
    category: 'starter',
    createDate: '22.08.2018',
    status: 'stored',
    statusColor: 'primary',
    description:
      'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
    sales: 689,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 78,
  },
  {
    id: 14,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Streuselkuchen',
    img: '/assets/img/streuselkuchen-thumb.jpg',
    category: 'starter',
    createDate: '22.07.2018',
    status: 'active',
    statusColor: 'secondary',
    description: 'Delicious vegan chocolate cake',
    sales: 645,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 55,
  },
  {
    id: 15,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Tea loaf',
    img: '/assets/img/tea-loaf-thumb.jpg',
    category: 'starter',
    createDate: '10.09.2018',
    status: 'active',
    statusColor: 'primary',
    description: 'Cheesecake with fresh berries and mint for dessert',
    sales: 632,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 20,
  },
  {
    id: 16,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Merveilleux',
    img: '/assets/img/merveilleux-thumb.jpg',
    category: 'starter',
    createDate: '18.02.2018',
    status: 'active',
    statusColor: 'primary',
    description: 'Chocolate cake with mascarpone',
    sales: 621,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 6,
  },
  {
    id: 17,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Fruitcake',
    img: '/assets/img/fruitcake-thumb.jpg',
    category: 'starter',
    createDate: '12.01.2019',
    status: 'active',
    statusColor: 'secondary',
    description: 'Chocolate cake with berries',
    sales: 595,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 17,
  },
  {
    id: 18,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Bebinca',
    img: '/assets/img/bebinca-thumb.jpg',
    category: 'starter',
    createDate: '04.02.2019',
    status: 'active',
    statusColor: 'secondary',
    description: 'Homemade cheesecake with fresh berries and mint',
    sales: 574,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 16,
  },
  {
    id: 19,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Cremeschnitte',
    img: '/assets/img/cremeschnitte-thumb.jpg',
    category: 'desserts',
    createDate: '04.03.2018',
    status: 'active',
    statusColor: 'primary',
    description: 'Cheesecake with chocolate cookies and Cream biscuits',
    sales: 562,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 9,
  },
  {
    id: 20,
    customerName: 'Paul Molive',
    customerEmail: 'dummyemail@email.com',
    time: '12:02',
    telephone: '024322448',
    title: 'Soufflé',
    img: '/assets/img/souffle-thumb.jpg',
    category: 'mains',
    createDate: '16.01.2018',
    status: 'active',
    statusColor: 'primary',
    description: 'Wedding cake with flowers Macarons and blueberries',
    sales: 524,
    advertiseStart: new Date('02/11/2020'),
    advertiseEnd: new Date('12/11/2020'),
    price: 10,
    stock: 14,
  },
];

export default products;