import PageLayout from '@/components/PageLayout';
import { getSectionChildren } from '@/lib/nav-config';

export default function OncelikliHastalarPage() {
  return (
    <PageLayout title="Öncelikli Hastalar" section="Kurumsal" sidebarLinks={getSectionChildren('Kurumsal')}>
      <p className="text-gray-600 leading-relaxed mb-4">
        Aşağıdaki hasta gruplarına öncelik tanınmaktadır:
      </p>
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Acil vakalar (ani gelişen hastalık, kaza, yaralanma vb.)</li>
        <li>Engelli hastalar</li>
        <li>Hamileler</li>
        <li>65 yaş ve üzeri hastalar</li>
        <li>7 yaş ve altı çocuklar</li>
        <li>Şehit aileleri, gaziler ve aileleri</li>
      </ul>
    </PageLayout>
  );
}
