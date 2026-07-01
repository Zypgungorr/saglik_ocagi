import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { getSectionChildren } from '@/lib/nav-config';

export default function SaglikHesaplamalariPage() {
  const links = getSectionChildren('Sağlık Hesaplamaları');

  return (
    <PageLayout title="Sağlık Hesaplamaları" section="Sağlık Hesaplamaları" sidebarLinks={links}>
      <p className="text-gray-600 leading-relaxed mb-6">
        Aşağıdaki hesaplama araçlarını kullanarak sağlık bilgilerinizi öğrenebilirsiniz.
      </p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-bordo hover:underline">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
