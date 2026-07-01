import PageLayout from '@/components/PageLayout';
import { getSectionChildren } from '@/lib/nav-config';

export default function IlkYardimPage() {
  return (
    <PageLayout title="İlk Yardım" section="Dosyalar" sidebarLinks={getSectionChildren('Dosyalar')}>
      <p className="text-gray-600 leading-relaxed">
        İlk yardım bilgi ve dokümanları yakında eklenecektir.
      </p>
    </PageLayout>
  );
}
