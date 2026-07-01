export type NavChild = {
  name: string;
  href: string;
  external?: boolean;
};

export type NavItem = {
  name: string;
  href?: string;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  { name: 'Ana Sayfa', href: '/' },
  {
    name: 'Kurumsal',
    children: [
      { name: 'Hakkımızda', href: '/kurumsal/hakkimizda' },
      { name: 'Aile Sağlığı Merkezimizden kareler', href: '/kurumsal/kareler' },
      { name: 'Öncelikli Hastalar', href: '/kurumsal/oncelikli-hastalar' },
      { name: 'Hasta Hakları', href: '/kurumsal/hasta-haklari' },
    ],
  },
  {
    name: 'Kadromuz',
    children: [
      { name: 'Aile Hekimlerimiz', href: '/kadromuz/aile-hekimlerimiz' },
      { name: 'Aile Sağlığı Çalışanlarımız', href: '/kadromuz/aile-sagligi-elemanlarimiz' },
      { name: 'Yardımcı Personellerimiz', href: '/kadromuz/yardimci-personellerimiz' },
    ],
  },
  {
    name: 'Dosyalar',
    children: [
      { name: 'ASM Talimatları', href: '/dosyalar/asm-talimatlari' },
      { name: 'Yararlı Dosyalar', href: '/dosyalar/yararli-dosyalar' },
      { name: 'İlk Yardım', href: '/dosyalar/ilk-yardim' },
      { name: 'Sigaranın Zararları', href: '/dosyalar/sigaranin-zararlari' },
      { name: 'Tüm Dosya Liste', href: '/dosyalar/tum-dosya-liste' },
    ],
  },
  {
    name: 'Sağlık Hesaplamaları',
    children: [
      { name: 'Bebeğinizin Aşı Takvimi', href: '/saglik-hesaplamalari/asi-takvimi' },
      { name: 'Aktiviteye Göre Harcanan Kalori', href: '/saglik-hesaplamalari/aktiviteye-gore-harcanan-kalori' },
      { name: 'Yetişkin Bel Çevresi Hesaplama', href: '/saglik-hesaplamalari/yetiskin-bel-cevresi' },
      { name: 'Çocuk Beden Kitle İndeksi', href: '/saglik-hesaplamalari/cocuk-beden-kitle-indeksi' },
      { name: 'Yetişkin Beden Kitle İndeksi', href: '/saglik-hesaplamalari/yetiskin-beden-kitle-indeksi' },
      { name: 'Persentil Eğrisi', href: '/saglik-hesaplamalari/persentil-egrisi' },
      { name: 'Kız Çocuklar İçin Persentil Tablosu', href: '/saglik-hesaplamalari/kiz-cocuk-persentil' },
      { name: 'Erkek Çocuklar İçin Persentil Tablosu', href: '/saglik-hesaplamalari/erkek-cocuk-persentil' },
    ],
  },
  {
    name: 'Bağlantılar',
    children: [
      { name: 'T.C. Sağlık Bakanlığı', href: 'https://www.saglik.gov.tr/', external: true },
      { name: 'Türkiye Halk Sağlığı Kurumu', href: 'https://hsgm.saglik.gov.tr/', external: true },
      { name: 'İstanbul Valiliği', href: 'https://www.istanbul.gov.tr/', external: true },
      { name: 'İstanbul İl Sağlık Müdürlüğü', href: 'https://istanbulism.saglik.gov.tr/', external: true },
    ],
  },
  { name: 'İletişim', href: '/iletisim' },
];

export function getSectionChildren(sectionName: string): NavChild[] {
  const item = navItems.find((nav) => nav.name === sectionName);
  return item?.children ?? [];
}
