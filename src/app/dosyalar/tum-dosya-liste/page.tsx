import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { getSectionChildren } from '@/lib/nav-config';

const files = [
  { title: 'ASM Talimatları', href: '/dosyalar/asm-talimatlari' },
  { title: 'Yararlı Dosyalar', href: '/dosyalar/yararli-dosyalar' },
  { title: 'İlk Yardım', href: '/dosyalar/ilk-yardim' },
  { title: 'Sigaranın Zararları', href: '/dosyalar/sigaranin-zararlari' },
];

export default function TumDosyaListePage() {
  return (
    <PageLayout title="Tüm Dosya Liste" section="Dosyalar" sidebarLinks={getSectionChildren('Dosyalar')}>
      <ul className="space-y-3">
        {files.map((file) => (
          <li key={file.href}>
            <Link href={file.href} className="text-bordo hover:underline">
              {file.title}
            </Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
