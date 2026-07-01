import PageLayout from '@/components/PageLayout';
import StaffCard from '@/components/StaffCard';
import { doctors } from '@/data/staff';
import { getSectionChildren } from '@/lib/nav-config';

export default function AileHekimlerimizPage() {
  return (
    <PageLayout title="Aile Hekimlerimiz" section="Kadromuz" sidebarLinks={getSectionChildren('Kadromuz')}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
        {doctors.map((member, index) => (
          <StaffCard key={index} member={member} />
        ))}
      </div>
    </PageLayout>
  );
}
