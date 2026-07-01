import PageLayout from '@/components/PageLayout';
import StaffCard from '@/components/StaffCard';
import { nurses } from '@/data/staff';
import { getSectionChildren } from '@/lib/nav-config';

export default function AileSagligiElemanlarimizPage() {
  return (
    <PageLayout title="Aile Sağlığı Çalışanlarımız" section="Kadromuz" sidebarLinks={getSectionChildren('Kadromuz')}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
        {nurses.map((member, index) => (
          <StaffCard key={index} member={member} />
        ))}
      </div>
    </PageLayout>
  );
}
