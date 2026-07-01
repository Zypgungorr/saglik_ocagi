import PageLayout from '@/components/PageLayout';
import { getSectionChildren } from '@/lib/nav-config';

export default function AsmTalimatlariPage() {
  return (
    <PageLayout title="ASM Talimatları" section="Dosyalar" sidebarLinks={getSectionChildren('Dosyalar')}>
      <p className="text-gray-600 leading-relaxed">
        Aile Sağlığı Merkezi talimat ve yönergeleri yakında eklenecektir.
      </p>
    </PageLayout>
  );
}
