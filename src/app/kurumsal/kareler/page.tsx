import PageLayout from '@/components/PageLayout';
import { getSectionChildren } from '@/lib/nav-config';

export default function KarelerPage() {
  return (
    <PageLayout title="Aile Sağlığı Merkezimizden Kareler" section="Kurumsal" sidebarLinks={getSectionChildren('Kurumsal')}>
      <p className="text-gray-600 leading-relaxed">
        Aile Sağlığı Merkezimizden fotoğraflar yakında eklenecektir.
      </p>
    </PageLayout>
  );
}
