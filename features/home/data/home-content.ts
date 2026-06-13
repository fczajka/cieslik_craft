const ASSET_BASE = '/cieslik-craft';

export type ImageLink = {
  label: string;
  href: string;
  image: string;
  alt: string;
  isExternal?: boolean;
};

export type CarouselSlide = {
  src: string;
  alt: string;
  objectPosition: string;
  href?: string;
};

export type BoatSummary = {
  name: string;
  href: string;
  ariaLabel: string;
  mutedImage: string;
  colorImage: string;
  description: [string, string];
};

export const siteAssets = {
  logo: `${ASSET_BASE}/cieslikcraft-logo.webp`,
  icon: `${ASSET_BASE}/cieslikcraft-icon.png`,
  video: `${ASSET_BASE}/CieslikCraft.mp4`,
  close: `${ASSET_BASE}/x.png`,
  previous: `${ASSET_BASE}/left.png`,
  next: `${ASSET_BASE}/right.png`,
  firstParallax: `${ASSET_BASE}/parallax-1.webp`,
  secondParallax: `${ASSET_BASE}/parallax-2.webp`,
  galleryBlock: `${ASSET_BASE}/gallery.webp`,
  articleBlock: `${ASSET_BASE}/article.webp`,
  notFound: `${ASSET_BASE}/404.jpg`,
};

export const headerSocialLinks: ImageLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cieslikcraft/',
    image: `${ASSET_BASE}/instagram.webp`,
    alt: 'CieslikCraft - Instagram',
    isExternal: true,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/cieslikcraft/',
    image: `${ASSET_BASE}/facebook.webp`,
    alt: 'CieslikCraft - Facebook',
    isExternal: true,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/user/MaestroWojciech/featured',
    image: `${ASSET_BASE}/youtube.webp`,
    alt: 'CieslikCraft - Youtube',
    isExternal: true,
  },
  {
    label: 'Mail',
    href: 'mailto:',
    image: `${ASSET_BASE}/mail.webp`,
    alt: 'CieslikCraft - Mail',
  },
];

export const bottomSocialLinks: ImageLink[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/cieslikcraft/',
    image: `${ASSET_BASE}/facebook.webp`,
    alt: 'CieslikCraft - Facebook',
    isExternal: true,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/user/MaestroWojciech/featured',
    image: `${ASSET_BASE}/youtube.webp`,
    alt: 'CieslikCraft - Youtube',
    isExternal: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cieslikcraft/',
    image: `${ASSET_BASE}/instagram.webp`,
    alt: 'CieslikCraft - Instagram',
    isExternal: true,
  },
  {
    label: 'Mail',
    href: 'mailto:cieslikcraft@gmail.com',
    image: `${ASSET_BASE}/mail.webp`,
    alt: 'CieslikCraft - Mail',
  },
];

export const sidebarSocialLinks: ImageLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cieslikcraft/',
    image: `${ASSET_BASE}/instagram-icon.webp`,
    alt: 'CieslikCraft - Instagram',
    isExternal: true,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/cieslikcraft/',
    image: `${ASSET_BASE}/facebook-icon.webp`,
    alt: 'CieslikCraft - Facebook',
    isExternal: true,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/user/MaestroWojciech/featured',
    image: `${ASSET_BASE}/youtube-icon.webp`,
    alt: 'CieslikCraft - Youtube',
    isExternal: true,
  },
  {
    label: 'Mail',
    href: 'mailto:',
    image: `${ASSET_BASE}/mail-icon.webp`,
    alt: 'CieslikCraft - Mail',
  },
];

export const mediaLinks = [
  {
    label: 'Biuletyn Techniki Jachtowej',
    href: 'https://btj.com.pl/2021/06/21/samodzielna-budowa-drewnianej-motorowki-czesc-i-poradnik-konstruowania-kadluba-na-przykladzie-nowej-lodzi-dolce-vita-z-domowej-stoczni-cieslik-craft/?fbclid=IwAR35I-nN-4V1Ffo2n0MtWgs-w5BSCWguvuOI-m_q2j17B0lYjQovBZPB8s4',
  },
  {
    label: 'WatchThisCar',
    href: 'https://www.youtube.com/watch?v=qj1gQIuYPa4',
  },
  {
    label: 'Dłuta.pl',
    href: 'https://blog.dluta.pl/zbuduj-samodzielnie-motorowke-z-cieslik-craft/',
  },
  {
    label: 'Miler Menswear',
    href: 'https://tomaszmiler.com/aktywny-weekend-marynarka-casualowa-krate-chino-lodce.html?fbclid=IwAR13s7_VgpfIpbIP5i9laZGy1X0dVGi_DLrDqJVDepWbvOuBZKSp-S_JRpg',
  },
  {
    label: 'Jachting Motorowy',
    href: 'https://www.motorowy.com/artykul/21-12-2018/disco-volante-cieslik-craft?fbclid=IwAR1SLLIGAkAXK-2OV_o-qG8Z519A6UTPNdR9dg390Sr1H3PCVIPpCMFxT60',
  },
  {
    label: 'Sea-line',
    href: 'http://www.sea-line.eu/pl/disco-volante/?fbclid=IwAR2weFH-8gXCd5Ik8kkD3RbxHqMujbeta-BI8s_BnieuAQiL8FaHil5s3wE',
  },
  {
    label: 'Jachtowe.com.pl',
    href: 'http://www.jachtowe.com.pl/disco-volante.html?fbclid=IwAR1SLLIGAkAXK-2OV_o-qG8Z519A6UTPNdR9dg390Sr1H3PCVIPpCMFxT60',
  },
];

export const carouselSlides: CarouselSlide[] = [
  {
    src: `${ASSET_BASE}/slider/slide1.webp`,
    alt: 'CieslikCraft - Gallery - zdj1',
    objectPosition: '50% 50%',
  },
  {
    src: `${ASSET_BASE}/slider/slide2.webp`,
    alt: 'CieslikCraft - Gallery - zdj2',
    objectPosition: '50% 50%',
  },
  {
    src: `${ASSET_BASE}/slider/slide3.webp`,
    alt: 'CieslikCraft - Gallery - zdj3',
    objectPosition: '50% 50%',
    href: 'http://tomaszmiler.com/aktywny-weekend-marynarka-casualowa-krate-chino-lodce.html',
  },
  {
    src: `${ASSET_BASE}/slider/slide4.webp`,
    alt: 'CieslikCraft - Gallery - zdj4',
    objectPosition: '50% 70%',
  },
  {
    src: `${ASSET_BASE}/slider/slide5.webp`,
    alt: 'CieslikCraft - Gallery - zdj5',
    objectPosition: '50% 70%',
  },
  {
    src: `${ASSET_BASE}/slider/slide6.webp`,
    alt: 'CieslikCraft - Gallery - zdj6',
    objectPosition: '50% 70%',
  },
  {
    src: `${ASSET_BASE}/slider/slide7.webp`,
    alt: 'CieslikCraft - Gallery - zdj7',
    objectPosition: '50% 50%',
  },
  {
    src: `${ASSET_BASE}/slider/slide8.webp`,
    alt: 'CieslikCraft - Gallery - zdj8',
    objectPosition: '50% 50%',
  },
];

export const boatSummaries: BoatSummary[] = [
  {
    name: 'Disco Volante',
    href: 'https://www.instagram.com/explore/tags/cieslikcraftdiscovolante',
    ariaLabel: 'instagram Disco Volante',
    mutedImage: `${ASSET_BASE}/boat-no-color-1.webp`,
    colorImage: `${ASSET_BASE}/boat-color-1.webp`,
    description: [
      'Classic Outboard Runabout Boat',
      'Based on plans Glen-L Marine Design',
    ],
  },
  {
    name: 'Dolce Vita',
    href: 'https://www.instagram.com/explore/tags/cieslikcraftdolcevita',
    ariaLabel: 'instagram Dolce Vita',
    mutedImage: `${ASSET_BASE}/boat-no-color-2.webp`,
    colorImage: `${ASSET_BASE}/boat-color-2.webp`,
    description: [
      'High Speed Deluxe Classic Sport Runabout',
      'Based on plans Glen-L Marine Design',
    ],
  },
];
