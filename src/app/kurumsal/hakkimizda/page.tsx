import PageLayout from '@/components/PageLayout';
import { getSectionChildren } from '@/lib/nav-config';

export default function HakkimizdaPage() {
  return (
    <PageLayout title="Hakkımızda" section="Kurumsal" sidebarLinks={getSectionChildren('Kurumsal')}>
      <p className="text-gray-600 leading-relaxed">
        Aile Sağlığı Merkezimizde 2 aile hekimi, 3 aile sağlığı çalışanı çalışanı ve 1  personel ile hizmet verilmektedir.
     
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        Çekmeköy Efsun Aile Sağlığı Merkezi olarak birinci basamak sağlık hizmetlerini
        vatandaşlarımıza sunmaktayız. Poliklinik muayenesi, aile planlaması, gebe-bebek-çocuk izlemleri,
        bağışıklama hizmetleri ve halk eğitimleri başlıca hizmetlerimiz arasındadır.
      </p>
    </PageLayout>
  );
}
