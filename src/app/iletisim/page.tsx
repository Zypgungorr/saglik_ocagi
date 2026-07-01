import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const contactItems = [
  {
    icon: MapPin,
    title: 'Adres',
    content: (
      <>
        Kirazlıdere, Efsun Sk.<br />
        34788 Çekmeköy/İSTANBUL
      </>
    ),
    href: 'https://maps.google.com/?q=Kirazlıdere+Saksı+Sk+Çekmeköy+İstanbul',
    linkLabel: 'Haritada aç',
  },
  {
    icon: Phone,
    title: 'Telefon',
    content: '0 216 312 41 76',
    href: 'tel:02163124176',
    linkLabel: 'Hemen ara',
  },
  {
    icon: Mail,
    title: 'E-posta',
    content: 'info@cekmekoy14noluasm.org',
    href: 'mailto:info@cekmekoy14noluasm.org',
    linkLabel: 'E-posta gönder',
  },
];

export default function IletisimPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-6 sm:py-10 md:py-12">
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-light text-lacivert mb-2">İletişim</h1>
        <p className="text-lacivert-light text-sm sm:text-base max-w-2xl">
          Sorularınız, bildirimleriniz ve randevu talepleriniz için aşağıdaki kanallardan bize ulaşabilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
        {contactItems.map((item) => (
          <div
            key={item.title}
            className="group bg-white border border-lacivert/10 rounded-sm p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-bordo/30 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-bordo-light flex items-center justify-center mb-4 group-hover:bg-bordo/10 transition-colors">
              <item.icon className="text-bordo" size={22} />
            </div>
            <h2 className="text-sm font-semibold text-bordo uppercase tracking-wide mb-2">{item.title}</h2>
            <p className="text-lacivert text-sm sm:text-base leading-relaxed mb-3">{item.content}</p>
            <a
              href={item.href}
              target={item.title === 'Adres' ? '_blank' : undefined}
              rel={item.title === 'Adres' ? 'noopener noreferrer' : undefined}
              className="text-sm text-bordo hover:text-bordo-dark font-medium hover:underline"
            >
              {item.linkLabel} →
            </a>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2 rounded-sm overflow-hidden border border-lacivert/10 shadow-sm min-h-[280px] sm:min-h-[360px]">
          <iframe
            title="Çekmeköy Efsun ASM Konum"
            className="w-full h-full min-h-[280px] sm:min-h-[360px]"
            src="https://maps.google.com/maps?q=Kirazlıdere+Saksı+Sk+Çekmeköy+İstanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-lacivert text-white rounded-sm p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Clock size={22} className="text-bordo-light shrink-0" />
              <h2 className="text-lg font-medium">Çalışma Saatleri</h2>
            </div>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span>Hafta içi</span>
                <span className="font-medium text-white">08:00 – 17:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Cumartesi & Pazar</span>
                <span className="text-white/70">Kapalı</span>
              </li>
            </ul>
            <Link
              href="/calisma-saatlerimiz"
              className="inline-block mt-4 text-sm text-bordo-light hover:text-white transition-colors"
            >
              Detaylı tablo →
            </Link>
          </div>

          <div className="bg-bordo-light/40 border border-bordo/20 rounded-sm p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <MessageCircle size={22} className="text-bordo shrink-0" />
              <h2 className="text-base font-semibold text-lacivert">Bildirimler</h2>
            </div>
            <p className="text-sm text-lacivert-light leading-relaxed mb-4">
              Gebe, bebek-çocuk, engelli ve obezite bildirimlerinizi mesai saatleri içinde iletebilirsiniz.
            </p>
            <Link
              href="/bildirimler"
              className="text-sm text-bordo hover:text-bordo-dark font-medium hover:underline"
            >
              Bildirim türlerini gör →
            </Link>
          </div>

          <div className="bg-white border border-lacivert/10 rounded-sm p-5 sm:p-6 text-sm text-lacivert-light leading-relaxed">
            <strong className="text-lacivert block mb-1">Çekmeköy Efsun Aile Sağlığı Merkezi</strong>
            Birinci basamak sağlık hizmetleri kapsamında poliklinik muayenesi, izlemler, aşı ve halk eğitimleri sunulmaktadır.
          </div>
        </div>
      </div>
    </div>
  );
}
