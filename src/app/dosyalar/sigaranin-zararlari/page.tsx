import PageLayout from '@/components/PageLayout';
import { getSectionChildren } from '@/lib/nav-config';

export default function SigaraninZararlariPage() {
  return (
    <PageLayout title="Sigaranın Zararları" section="Dosyalar" sidebarLinks={getSectionChildren('Dosyalar')}>
      <p className="text-gray-600 leading-relaxed">
        Sigaranın zararları hakkında bilgilendirme dokümanları yakında eklenecektir.
      </p>
    </PageLayout>
  );
}
