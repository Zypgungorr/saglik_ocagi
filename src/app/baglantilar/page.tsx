import PageLayout from '@/components/PageLayout';
import { getSectionChildren } from '@/lib/nav-config';

export default function BaglantilarPage() {
  const links = getSectionChildren('Bağlantılar');

  return (
    <PageLayout title="Bağlantılar" section="Bağlantılar" sidebarLinks={links}>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bordo hover:underline text-lg"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
