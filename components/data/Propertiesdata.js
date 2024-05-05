export const Properties = [
  {
    id: 1,
    price:"$4,000,000",
    rate:"",
    description:"3-Bedroom Townhouse",
    location:"Northridge Community",
    beds: 8,
    baths: 2,
    size: 1,
    parkingspots: 4,
    image: "/listing-1.jpg",
    type:"FOR SALE",
    category:"Loft",
    city:"Manhattan, NY",
  },
  {
    id: 2,
    price:"$10,000",
    rate:"/mo",
    description:"Charming Studio Apartment",
    location:"West City Corner",
    beds: 4,
    baths: 3,
    size: 450,
    parkingspots: 4,
    image: "/listing-2.jpg",
    type:"FOR RENT",
    category:"House",
    location:"Manhattan, NY",
  },
    {
      id: 3,
      price:"$450,000",
      rate:"",
      description:"Luxury Urban Loft",
      location:"8706 Herrick Ave",
      beds: 4,
      baths: 3,
      size: 450,
      parkingspots: 4,
      image: "/listing-3.jpg",
      type:"FOR SALE",
      category:"House",
      location:"London, UK",
    },
  {
    id: 4,
    price:"$4,000",
    rate:"/mo",
    description:"Elegant Suburban Family Home",
    location:"8706 Herrick Ave",
    beds: 2,
    baths: 1,
    size: 450,
    parkingspots: 4,
    image: "/listing-4.jpg",
    type:"FOR RENT",
    category:"House",
    location:"Miami, FL",
  },
  {
    id: 5,
    price:"$2,000",
    rate:"/mo",
    description:"Cozy Lakeside Cottage",
    location:"8706 Herrick Ave",
    beds: 2,
    baths: 1,
    size: 450,
    parkingspots: 4,
    image: "/listing-5.jpg",
    type:"FOR RENT",
    category:"Apartment",
    city:"Manhattan, NY",
  },
  {
    id: 6,
    price:"$700,000",
    rate:"",
    description:"Sunny 2-Bedroom in Downtown",
    location:"8706 Herrick Ave",
    beds: 4,
    baths: 2,
    size: 1240,
    parkingspots: 1,
    image: "/listing-6.jpg",
    type:"FOR SALE",
    category:"House",
    city:"London, UK",
  },
  
]

export const Categories = [
  {
    id: '1',
    title: 'house',
    to: 'House',
    image: '/icons/house-icon.png'
  },
  {
    id: '2',
    title: 'loft',
    to: 'Loft',
    image: '/icons/loft-icon.png'
  },
  {
    id: '3',
    title: 'apartment',
    to: 'Apartment',
    image: '/icons/apartment-icon.png'
  },
  {
    id: '4',
    title: 'office',
    to: 'Office',
    image: '/icons/office-icon.png'
  },
];

export const Locations = [
  {
    'id': 'abc123',
    'title': 'Manhattan, NY',
    'to': 'manhattan',
  },
  {
    'id': 'def456',
    'title': 'London, UK',
    'to': 'london',
  },
  {
    'id': 'ghi789',
    'title': 'Miami, FL', 
    'to': 'miami',
  },
];


export const SearchFilters = [
  {
    id: 1,
    type: 'Location',
    subTypes: Locations
    
  },
  {
    id: 2,
    type: 'Category',
    subTypes: Categories
  },
  {
    id: 3,
    type: 'Type',
    subTypes: [
      { title: 'for sale', to: 'Sale' },
      { title: 'for rent', to: 'Rent' },
    ]
  },
  
]

export const PropertiesHero = {
  title: 'Browse all properties',
  description: 'Discover more than 1,000+ property showcases.',
  image: 'categories',
  children: '',
  summaryText: "Explore all Properties"
}
