import PageLayout from '@/components/PageLayout';
import { getSectionChildren } from '@/lib/nav-config';

export default function HastaHaklariPage() {
  return (
    <PageLayout title="Hasta Hakları" section="Kurumsal" sidebarLinks={getSectionChildren('Kurumsal')}>
      <p className="text-gray-600 leading-relaxed mb-4">
        Sağlık hizmeti alan herkes aşağıdaki haklara sahiptir:
      </p>
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Hizmetten genel eşitlik ilkesi çerçevesinde yararlanma</li>
        <li>Bilgilendirilme ve danışma hakkı</li>
        <li>Sağlık kuruluşunu ve personelini seçme ve değiştirme</li>
        <li>Mahremiyet ve gizlilik</li>
        <li>Reddetme, durdurma ve rıza hakkı</li>
        <li>Güvenli ortam hakkı</li>
        <li>Dini vecibelerini yerine getirebilme</li>
        <li>İnsani değerlere saygı görme</li>
        <li>Ziyaret ve refakatçi kabul etme</li>
        <li>Şikâyet ve dava hakkı</li>
      </ul>
    </PageLayout>
  );
}
