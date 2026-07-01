import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

const notificationTypes = [
  {
    title: 'Gebe Bildirimi',
    description: 'Gebelik takibinizin başlatılması veya güncellenmesi için aile hekiminize bildirimde bulunabilirsiniz.',
  },
  {
    title: 'Bebek / Çocuk Bildirimi',
    description: 'Yeni doğan bebek kaydı, aşı takibi ve çocuk izlemleri için bildirim yapabilirsiniz.',
  },
  {
    title: 'Engelli Bildirimi',
    description: 'Engelli sağlık raporu ve izlem süreçleri hakkında bilgi almak için başvurabilirsiniz.',
  },
  {
    title: 'Obezite Bildirimi',
    description: 'Obezite izlem ve danışmanlık hizmetleri için aile hekiminize başvurabilirsiniz.',
  },
  {
    title: 'Doktorunuza Soru',
    description: 'Sağlık durumunuzla ilgili sorularınızı mesai saatleri içinde aile hekiminize iletebilirsiniz.',
  },
];

export default function BildirimlerPage() {
  return (
    <PageLayout title="Bildirimler">
      <p className="text-lacivert-light mb-6 leading-relaxed">
        Aşağıdaki konularda aile hekiminize bildirimde bulunabilir veya soru sorabilirsiniz.
        Bildirimlerinizi mesai saatleri içinde merkezimize başvurarak, telefon veya e-posta yoluyla iletebilirsiniz.
      </p>

      <ul className="space-y-4 not-prose mb-8">
        {notificationTypes.map((item) => (
          <li
            key={item.title}
            className="border border-lacivert/10 rounded-sm p-4 bg-bordo-light/20"
          >
            <h2 className="text-base font-semibold text-bordo mb-1">{item.title}</h2>
            <p className="text-sm text-lacivert-light leading-relaxed">{item.description}</p>
          </li>
        ))}
      </ul>

      <div className="border-t border-lacivert/10 pt-6 space-y-4 not-prose">
        <h2 className="text-lg font-medium text-lacivert">İletişim</h2>
        <p className="text-lacivert-light text-sm leading-relaxed">
          Kirazlıdere, Efsun Sk., 34788 Çekmeköy/İSTANBUL
        </p>
        <p className="text-sm">
          <span className="text-lacivert-light">Telefon: </span>
          <a href="tel:02163124176" className="text-bordo hover:underline">0 216 312 41 76</a>
        </p>
        <p className="text-sm">
          <span className="text-lacivert-light">E-posta: </span>
          <a href="mailto:info@cekmekoy14noluasm.org" className="text-bordo hover:underline">
            info@cekmekoy14noluasm.org
          </a>
        </p>
        <Link
          href="/iletisim"
          className="inline-block mt-2 text-sm text-bordo hover:underline font-medium"
        >
          İletişim sayfasına git →
        </Link>
      </div>
    </PageLayout>
  );
}
