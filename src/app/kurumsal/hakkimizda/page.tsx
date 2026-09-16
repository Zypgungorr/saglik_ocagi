import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import { getSectionChildren } from '@/lib/nav-config';

const galleryImages = [
  { src: '/images/galeri/asm-1.jpeg', alt: 'ASM Dış Görünüm' },
  { src: '/images/galeri/asm-2.jpeg', alt: 'ASM Dış Görünüm ' },
  { src: '/images/galeri/asm-3.jpeg', alt: 'Poliklinik Koridoru' },
  { src: '/images/galeri/asm-4.jpeg', alt: 'Poliklinik Koridoru' },
  { src: '/images/galeri/asm-5.jpeg', alt: 'Bekleme ve Danışma' },
  { src: '/images/galeri/asm-6.jpeg', alt: 'Hemşire Odası' },
];

export default function HakkimizdaPage() {
  return (
    <PageLayout title="Hakkımızda" section="Kurumsal" sidebarLinks={getSectionChildren('Kurumsal')}>
      <p className="text-gray-600 leading-relaxed">
        Aile Sağlığı Merkezimizde 2 aile hekimi, 3 aile sağlığı çalışanı ve 1 personel ile hizmet verilmektedir.
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        Çekmeköy Efsun Aile Sağlığı Merkezi olarak birinci basamak sağlık hizmetlerini
        vatandaşlarımıza sunmaktayız. Poliklinik muayenesi, aile planlaması, gebe-bebek-çocuk izlemleri,
        bağışıklama hizmetleri ve halk eğitimleri başlıca hizmetlerimiz arasındadır.
      </p>

      {/* Galeri Alanı */}
      <div className="mt-8 pt-6 border-t border-gray-100 not-prose">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Merkezimizden Kareler
          </span>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Yana kaydırarak inceleyebilirsiniz →
          </span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 pt-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-200">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="shrink-0 w-64 sm:w-72 aspect-[4/3] relative rounded-sm border border-gray-200 overflow-hidden bg-gray-50 snap-start group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 256px, 288px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2.5 pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-white truncate">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}