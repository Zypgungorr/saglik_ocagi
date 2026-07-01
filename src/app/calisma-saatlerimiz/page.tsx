import PageLayout from '@/components/PageLayout';

const workingHours = [
  { day: 'Pazartesi', hours: '08:00 - 17:00' },
  { day: 'Salı', hours: '08:00 - 17:00' },
  { day: 'Çarşamba', hours: '08:00 - 17:00' },
  { day: 'Perşembe', hours: '08:00 - 17:00' },
  { day: 'Cuma', hours: '08:00 - 17:00' },
  { day: 'Cumartesi', hours: 'Kapalı' },
  { day: 'Pazar', hours: 'Kapalı' },
];

export default function CalismaSaatlerimizPage() {
  return (
    <PageLayout title="Çalışma Saatlerimiz">
      <p className="text-lacivert-light mb-6 leading-relaxed">
        Aile Sağlığı Merkezimiz hafta içi mesai saatlerinde hizmet vermektedir.
      </p>

      <div className="overflow-x-auto not-prose">
        <table className="w-full text-sm border border-lacivert/10 rounded-sm overflow-hidden">
          <thead>
            <tr className="bg-lacivert text-white">
              <th className="py-3 px-4 text-left font-medium">Gün</th>
              <th className="py-3 px-4 text-left font-medium">Çalışma Saati</th>
            </tr>
          </thead>
          <tbody>
            {workingHours.map((row, index) => (
              <tr
                key={row.day}
                className={`border-t border-lacivert/10 ${index % 2 === 0 ? 'bg-white' : 'bg-bordo-light/30'} ${row.hours === 'Kapalı' ? 'text-lacivert-light' : 'text-lacivert'}`}
              >
                <td className="py-3 px-4 font-medium">{row.day}</td>
                <td className="py-3 px-4">{row.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-lacivert-light mt-6">
        <strong className="text-bordo">Not:</strong> Resmî tatil günlerinde merkezimiz kapalıdır.
      </p>
    </PageLayout>
  );
}
