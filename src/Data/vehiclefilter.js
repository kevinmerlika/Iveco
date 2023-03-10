const Iveco = [
  {
    id: 1,
    model: 'Daily VAN',
    url: 'https://www.iveco.com/common/publishingimages/daily_my2022/banners/van-daily2022-iveco-menu.jpg',
    allvehicles: 1,
    longdistance: 0,
    regionaldelivery: 1,
    urbandelivery: 1,
    municipality: 1,
    construction: 0,
    offroad: 0,
    vehicleType: 'light',
    promotions: ['Regional Delivery', 'Urban Delivery', 'Municipality'],
    image: 'https://info.iveco.nl/hubfs/daily-electric.png',
  },
  {
    id: 2,
    model: 'Eurocargo',
    url: 'https://www.iveco.com/common/publishingimages/eurocargo/thumb/eurocargo.jpg',
    allvehicles: 1,
    longdistance: 1,
    regionaldelivery: 0,
    urbandelivery: 1,
    municipality: 0,
    construction: 0,
    offroad: 0,
    vehicleType: 'medium',
    promotions: ['Long Distance', 'Urban Delivery'],
    image:
      'https://www.iveco.com/netherlands/pers/persberichten/PublishingImages/header-persbericht-meulenberg-transport.jpg',
  },
  {
    id: 3,
    model: 'X-Way',
    url: 'https://www.iveco.com/common/publishingimages/2021_x-way/iveco_xway_thumb.jpg',
    allvehicles: 1,
    longdistance: 1,
    regionaldelivery: 1,
    urbandelivery: 0,
    municipality: 0,
    construction: 1,
    offroad: 1,
    vehicleType: 'heavy',
    promotions: ['Long Distance', 'Regional Delivery', 'Construction', 'Off Road'],
    image:
      'https://www.iveco-schouten.nl/wp-content/uploads/2021/01/Featured-afbeelding-c-van-heezik-website-iveco-schouten.jpg',
  },
  {
    id: 4,
    model: 'S-Way',
    url: 'https://www.iveco.com/uk/publishingimages/thumbs/iveco_s-way_my2022_diesel_thumb_new3.jpg',
    allvehicles: 1,
    longdistance: 1,
    regionaldelivery: 1,
    urbandelivery: 0,
    municipality: 0,
    construction: 1,
    offroad: 0,
    vehicleType: 'heavy',
    promotions: ['Long Distance', 'Regional Delivery', 'Construction', 'Off Road'],
    image:
      'https://www.iveco-schouten.nl/wp-content/uploads/2021/01/Featured-afbeelding-c-van-heezik-website-iveco-schouten.jpg',
  },
  {
    id: 5,
    model: 'Daily CAB',
    url: 'https://www.iveco.com/common/publishingimages/daily_my2022/banners/cab-daily2022-iveco-menu.jpg',
    allvehicles: 1,
    longdistance: 1,
    regionaldelivery: 1,
    urbandelivery: 1,
    municipality: 1,
    construction: 1,
    offroad: 1,
    vehicleType: 'light',
    promotions: [
      'Long Distance',
      'Regional Delivery',
      'Urban Delivery',
      'Municipality',
      'Construction',
      'Off Road',
    ],
    image: 'https://info.iveco.nl/hubfs/daily-electric.png',
  },
  {
    id: 6,
    model: 'Daily 4x4',
    url: 'https://www.iveco.com/publishingimages/daily_camper/thumb_dailyhi4x4.jpg',
    allvehicles: 1,
    longdistance: 0,
    regionaldelivery: 1,
    urbandelivery: 1,
    municipality: 1,
    construction: 1,
    offroad: 1,
    vehicleType: 'light',
    promotions: [
      'Regional Delivery',
      'Urban Delivery',
      'Municipality',
      'Construction',
      'Off Road',
    ],
    image: 'https://info.iveco.nl/hubfs/daily-electric.png',
  },
  {
    id: 7,
    model: 'T-Way',
    url: 'https://www.iveco.com/publishingimages/t-way/iveco_xway_thumb.png',
    allvehicles: 1,
    longdistance: 1,
    regionaldelivery: 1,
    urbandelivery: 1,
    municipality: 1,
    construction: 1,
    offroad: 1,
    vehicleType: 'heavy',
    promotions: [
      'Long Distance',
      'Regional Delivery',
      'Urban Delivery',
      'Municipality',
      'Construction',
      'Off Road',
    ],
    image:
      'https://www.iveco-schouten.nl/wp-content/uploads/2021/01/Featured-afbeelding-c-van-heezik-website-iveco-schouten.jpg',
  },
  {
    id: 8,
    model: 'Eurocargo 4x4',
    url: 'https://www.iveco.com/common/publishingimages/eurocargo/thumb/iveco_eurocargo4x4.jpg',
    allvehicles: 1,
    longdistance: 1,
    regionaldelivery: 1,
    urbandelivery: 1,
    municipality: 1,
    construction: 1,
    offroad: 1,
    vehicleType: 'medium',
    promotions: [
      'Long Distance',
      'Regional Delivery',
      'Urban Delivery',
      'Municipality',
      'Construction',
      'Off Road',
    ],
    image:
      'https://www.iveco.com/netherlands/pers/persberichten/PublishingImages/header-persbericht-meulenberg-transport.jpg',
  },
  {
    id: 9,
    model: 'Daily 7 Ton',
    url: 'https://www.iveco.com/common/publishingimages/daily_my2022/banners/van-daily2022-iveco-menu.jpg',
    allvehicles: 1,
    longdistance: 0,
    regionaldelivery: 0,
    urbandelivery: 1,
    municipality: 1,
    construction: 0,
    offroad: 0,
    vehicleType: 'light',
    promotions: ['Regional Delivery', 'Urban Delivery', 'Municipality'],
    image: 'https://info.iveco.nl/hubfs/daily-electric.png',
  },
  {
    id: 10,
    model: 'S-Way NP',
    url: 'https://www.iveco.com/uk/publishingimages/thumbs/iveco_s-way_my2022_gas_thumb.jpg',
    allvehicles: 1,
    longdistance: 1,
    regionaldelivery: 1,
    urbandelivery: 1,
    municipality: 0,
    construction: 1,
    offroad: 1,
    vehicleType: 'heavy',
    promotions: [
      'Long Distance',
      'Regional Delivery',
      'Urban Delivery',
      'Construction',
      'Off Road',
    ],
    image:
      'https://www.iveco-schouten.nl/wp-content/uploads/2021/01/Featured-afbeelding-c-van-heezik-website-iveco-schouten.jpg',
  },
  {
    id: 11,
    model: 'EuroCargo CNG',
    url: 'https://www.iveco.com/common/publishingimages/eurocargo/thumb/iveco_eurocargo4x4.jpg',
    allvehicles: 1,
    longdistance: 1,
    regionaldelivery: 1,
    urbandelivery: 1,
    municipality: 0,
    construction: 1,
    offroad: 0,
    vehicleType: 'medium',
    promotions: ['Long Distance', 'Regional Delivery', 'Urban Delivery', 'Construction'],
    image:
      'https://www.iveco-schouten.nl/wp-content/uploads/2021/01/Featured-afbeelding-c-van-heezik-website-iveco-schouten.jpg',
  },
];

export default Iveco;
