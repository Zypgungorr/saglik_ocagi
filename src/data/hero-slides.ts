export const heroImageVersion = '2';

export type HeroSlide = {
  id: number;
  image: string;
  alt: string;
  title: string;
  highlight: string;
  subtitle: string;
  note?: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: '/hero/slide-1.jpg',
    alt: 'Antibiyotik bilinci',
    title: 'Yanlış',
    highlight: 'ANTİBİYOTİK',
    subtitle: 'Kullanımı Sizi ve Çevrenizdekileri Riske Sokar.',
    note: 'Antibiyotik kullanmadan önce mutlaka doktorunuza danışınız.',
  },
  {
    id: 2,
    image: '/hero/slide-2.jpg',
    alt: 'Bağışıklama hizmetleri',
    title: 'Aşılarınızı',
    highlight: 'ZAMANINDA',
    subtitle: 'Yaptırarak Kendinizi ve Çocuklarınızı Koruyun.',
    note: 'Aşı takviminiz için aile hekiminize başvurun.',
  },
  {
    id: 3,
    image: '/hero/slide-3.jpg',
    alt: 'Aile sağlığı merkezi',
    title: 'Çekmeköy Efsun',
    highlight: 'AİLE SAĞLIĞI',
    subtitle: 'Merkezimizde Birinci Basamak Sağlık Hizmetleri.',
    note: 'Poliklinik, izlem, aşı ve halk eğitimleri.',
  },
  {
    id: 4,
    image: '/hero/slide-4.jpg',
    alt: 'Sağlıklı yaşam',
    title: 'Sağlıklı',
    highlight: 'YAŞAM',
    subtitle: 'İçin Düzenli Kontrollerinizi İhmal Etmeyin.',
    note: 'Hafta içi 08:00 – 17:00 arası hizmetinizdeyiz.',
  },
];
