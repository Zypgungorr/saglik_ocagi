import PageLayout from '@/components/PageLayout';
import { getSectionChildren } from '@/lib/nav-config';

export default function YardimciPersonellerimizPage() {
  return (
    <PageLayout title="Yardımcı Personellerimiz" section="Kadromuz" sidebarLinks={getSectionChildren('Kadromuz')}>
      <p className="text-gray-600 leading-relaxed">
        Yardımcı personel bilgileri yakında eklenecektir.
      </p>
    </PageLayout>
  );
}
