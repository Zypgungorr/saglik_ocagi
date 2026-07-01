import PageLayout from '@/components/PageLayout';

const serviceStandards = [
  { service: 'Hekim Seçme (İlk Kayıt)', documents: 'T.C. Kimlik No / Nüfus Cüzdanı', duration: '1 Hafta' },
  { service: 'Hekim Seçme (Hekim Değiştirme)', documents: 'T.C. Kimlik No / Nüfus Cüzdanı', duration: '1 Hafta' },
  { service: 'Poliklinik Muayene', documents: 'T.C. Kimlik No / Nüfus Cüzdanı', duration: '20 Dakika' },
  { service: 'Misafir Hasta Muayenesi', documents: 'T.C. Kimlik No / Nüfus Cüzdanı', duration: '20 Dakika' },
  { service: 'Sağlık Kurumuna Sevk', documents: 'T.C. Kimlik No / Nüfus Cüzdanı', duration: '10 Dakika' },
  { service: 'Küçük Cerrahi Müdahale', documents: 'T.C. Kimlik No / Nüfus Cüzdanı', duration: '30 Dakika' },
  { service: 'Tek Hekim Raporu', documents: 'T.C. Kimlik No / Nüfus Cüzdanı', duration: '10 Dakika' },
  { service: 'Basit Laboratuvar Tetkikleri', documents: 'T.C. Kimlik No / Nüfus Cüzdanı', duration: '15 Dakika' },
  { service: 'İzlemler (Bebek, Çocuk, Kadın)', documents: 'T.C. Kimlik No / Nüfus Cüzdanı', duration: '20 Dakika' },
  { service: 'Bağışıklama Faaliyetleri', documents: 'T.C. Kimlik No / Nüfus Cüzdanı', duration: '15 Dakika' },
  { service: 'Aile Planlaması Hizmetleri', documents: 'T.C. Kimlik No / Nüfus Cüzdanı', duration: '20 Dakika' },
  { service: 'Ev Ziyareti / Evde Bakım Hizmetleri', documents: 'T.C. Kimlik No / Nüfus Cüzdanı', duration: '2 Saat' },
];

export default function HizmetStandartlariPage() {
  return (
    <PageLayout title="Hizmet Standartlarımız">
      <p className="text-lacivert-light mb-6 leading-relaxed">
        Aile Sağlığı Merkezimizde sunulan hizmetlerin tamamlanma süreleri aşağıdaki tabloda yer almaktadır.
      </p>

      <div className="overflow-x-auto not-prose">
        <table className="w-full text-sm border border-lacivert/10 rounded-sm overflow-hidden min-w-[600px]">
          <thead>
            <tr className="bg-lacivert text-white">
              <th className="py-3 px-4 text-left font-medium">Hizmetin Adı</th>
              <th className="py-3 px-4 text-left font-medium">Başvuruda İstenen Belgeler</th>
              <th className="py-3 px-4 text-left font-medium whitespace-nowrap">Tamamlanma Süresi (En Geç)</th>
            </tr>
          </thead>
          <tbody>
            {serviceStandards.map((row, index) => (
              <tr
                key={row.service}
                className={`border-t border-lacivert/10 text-lacivert ${index % 2 === 0 ? 'bg-white' : 'bg-bordo-light/30'}`}
              >
                <td className="py-3 px-4 font-medium">{row.service}</td>
                <td className="py-3 px-4">{row.documents}</td>
                <td className="py-3 px-4 whitespace-nowrap">{row.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-lacivert-light mt-6 leading-relaxed">
        Başvuru esnasında yukarıda belirtilen belgelerin dışında belge istenmesi, eksiksiz belge ile başvuru
        yapılmasına rağmen hizmetin belirtilen sürede tamamlanamaması veya yukarıdaki tabloda bazı hizmetlerin
        bulunmadığının tespiti durumunda ilk müracaat yerine ya da ikinci müracaat yerine başvurunuz.
      </p>
    </PageLayout>
  );
}
