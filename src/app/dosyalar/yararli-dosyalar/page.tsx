import PageLayout from '@/components/PageLayout';
import { getSectionChildren } from '@/lib/nav-config';

export default function YararliDosyalarPage() {
  return (
    <PageLayout title="Yararlı Dosyalar" section="Dosyalar" sidebarLinks={getSectionChildren('Dosyalar')}>
      <p className="text-gray-600 leading-relaxed">
        Yararlı dosyalar ve broşürler yakında eklenecektir.
      </p>
    </PageLayout>
  );
}
