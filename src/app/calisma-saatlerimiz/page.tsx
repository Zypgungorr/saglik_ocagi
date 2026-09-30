import PageLayout from '@/components/PageLayout';

interface DoctorSchedule {
  name: string;
  days: {
    pazartesi: string;
    sali: string;
    carsamba: string;
    persembe: string;
    cuma: string;
  };
  totalHours: number;
  rows: {
    label: string;
    pazartesi: string;
    sali: string;
    carsamba: string;
    persembe: string;
    cuma: string;
  }[];
  dailyHours: number[];
}

const workingHours = [
  { day: 'Pazartesi', hours: '08:00 - 17:00' },
  { day: 'Salı', hours: '08:00 - 17:00' },
  { day: 'Çarşamba', hours: '08:00 - 17:00' },
  { day: 'Perşembe', hours: '08:00 - 17:00' },
  { day: 'Cuma', hours: '08:00 - 17:00' },
  { day: 'Cumartesi', hours: 'Kapalı' },
  { day: 'Pazar', hours: 'Kapalı' },
];

const doctorSchedules: DoctorSchedule[] = [
  {
    name: 'DR. İSMAİL EMRE KOÇ',
    days: {
      pazartesi: '08.00-17.00',
      sali: '08.00-17.00',
      carsamba: '08.00-17.00',
      persembe: '08.00-17.00',
      cuma: '08.00-17.00',
    },
    totalHours: 40,
    rows: [
      {
        label: 'KURUM DIŞI MESAİ',
        pazartesi: '',
        sali: '',
        carsamba: '',
        persembe: '',
        cuma: '',
      },
      {
        label: 'KURUM İÇİ MESAİ',
        pazartesi: '08.00-12.00',
        sali: '08.00-12.00',
        carsamba: '08.00-12.00',
        persembe: '08.00-12.00',
        cuma: '08.00-12.00',
      },
      {
        label: 'ÖĞLE ARASI',
        pazartesi: '12.00-13.00',
        sali: '12.00-13.00',
        carsamba: '12.00-13.00',
        persembe: '12.00-13.00',
        cuma: '12.00-13.00',
      },
      {
        label: 'KURUM İÇİ MESAİ',
        pazartesi: '13.00-17.00',
        sali: '',
        carsamba: '13.00-17.00',
        persembe: '13.00-17.00',
        cuma: '13.00-17.00',
      },
      {
        label: 'KURUM DIŞI MESAİ',
        pazartesi: '',
        sali: '13.00-17.00',
        carsamba: '',
        persembe: '',
        cuma: '',
      },
    ],
    dailyHours: [8, 8, 8, 8, 8],
  },
  {
    name: 'DR. ALPEREN GÜNGÖR',
    days: {
      pazartesi: '08.00-17.00',
      sali: '08.00-17.00',
      carsamba: '08.00-17.00',
      persembe: '08.00-17.00',
      cuma: '08.00-17.00',
    },
    totalHours: 40,
    rows: [
      {
        label: 'KURUM DIŞI MESAİ',
        pazartesi: '',
        sali: '',
        carsamba: '',
        persembe: '',
        cuma: '',
      },
      {
        label: 'KURUM İÇİ MESAİ',
        pazartesi: '08.00-12.00',
        sali: '08.00-12.00',
        carsamba: '08.00-12.00',
        persembe: '08.00-12.00',
        cuma: '08.00-12.00',
      },
      {
        label: 'ÖĞLE ARASI',
        pazartesi: '12.00-13.00',
        sali: '12.00-13.00',
        carsamba: '12.00-13.00',
        persembe: '12.00-13.00',
        cuma: '12.00-13.00',
      },
      {
        label: 'KURUM İÇİ MESAİ',
        pazartesi: '13.00-17.00',
        sali: '13.00-17.00',
        carsamba: '',
        persembe: '13.00-17.00',
        cuma: '13.00-17.00',
      },
      {
        label: 'KURUM DIŞI MESAİ',
        pazartesi: '',
        sali: '',
        carsamba: '13.00-17.00',
        persembe: '',
        cuma: '',
      },
    ],
    dailyHours: [8, 8, 8, 8, 8],
  },
];

export default function CalismaSaatlerimizPage() {
  return (
    <PageLayout title="Çalışma Saatlerimiz">
      <p className="text-lacivert-light mb-6 leading-relaxed">
        Aile Sağlığı Merkezimiz hafta içi mesai saatlerinde hizmet vermektedir.
      </p>

      {/* ASM Genel Çalışma Saatleri */}
      <div className="overflow-x-auto not-prose mb-10">
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
                className={`border-t border-lacivert/10 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-bordo-light/30'
                } ${row.hours === 'Kapalı' ? 'text-lacivert-light' : 'text-lacivert'}`}
              >
                <td className="py-3 px-4 font-medium">{row.day}</td>
                <td className="py-3 px-4">{row.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Doktor Çalışma Saatleri */}
      <h2 className="text-xl font-semibold text-lacivert mb-4">
        Doktor Çalışma Saatlerimiz
      </h2>
      <p className="text-sm text-lacivert-light mb-6">
        Hekimlerimizin haftalık normal mesai, poliklinik ve kurum dışı (saha/mobil) çalışma çizelgeleri aşağıda yer almaktadır.
      </p>

      <div className="space-y-8 not-prose">
        {doctorSchedules.map((doc) => (
          <div key={doc.name} className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm border border-lacivert/20 text-center border-collapse">
              <caption className="text-left font-semibold text-lacivert mb-2 text-sm">
                HAFTALIK NORMAL MESAİ ÇİZELGESİ — {doc.name}
              </caption>
              <thead>
                <tr className="bg-lacivert text-white font-medium">
                  <th className="py-2.5 px-3 border border-lacivert/30 text-left">
                    AİLE HEKİMİ ADI
                  </th>
                  <th className="py-2.5 px-3 border border-lacivert/30">PAZARTESİ</th>
                  <th className="py-2.5 px-3 border border-lacivert/30">SALI</th>
                  <th className="py-2.5 px-3 border border-lacivert/30">ÇARŞAMBA</th>
                  <th className="py-2.5 px-3 border border-lacivert/30">PERŞEMBE</th>
                  <th className="py-2.5 px-3 border border-lacivert/30">CUMA</th>
                  <th className="py-2.5 px-3 border border-lacivert/30 font-semibold">
                    TOPLAM MESAİ SAATİ
                  </th>
                </tr>
              </thead>
              <tbody className="text-lacivert">
                {/* Hekim Adı & Günlük Genel Saatler */}
                <tr className="bg-slate-50 font-medium">
                  <td className="py-2 px-3 border border-lacivert/20 text-left font-semibold">
                    {doc.name}
                  </td>
                  <td className="py-2 px-3 border border-lacivert/20">{doc.days.pazartesi}</td>
                  <td className="py-2 px-3 border border-lacivert/20">{doc.days.sali}</td>
                  <td className="py-2 px-3 border border-lacivert/20">{doc.days.carsamba}</td>
                  <td className="py-2 px-3 border border-lacivert/20">{doc.days.persembe}</td>
                  <td className="py-2 px-3 border border-lacivert/20">{doc.days.cuma}</td>
                  <td className="py-2 px-3 border border-lacivert/20 font-bold">
                    {doc.totalHours}
                  </td>
                </tr>

                {/* Detay Satırları */}
                {doc.rows.map((r, idx) => (
                  <tr
                    key={idx}
                    className={r.label === 'ÖĞLE ARASI' ? 'bg-slate-100/70' : 'bg-white'}
                  >
                    <td className="py-2 px-3 border border-lacivert/20 text-left font-medium">
                      {r.label}
                    </td>
                    <td className="py-2 px-3 border border-lacivert/20">{r.pazartesi}</td>
                    <td className="py-2 px-3 border border-lacivert/20">{r.sali}</td>
                    <td className="py-2 px-3 border border-lacivert/20">{r.carsamba}</td>
                    <td className="py-2 px-3 border border-lacivert/20">{r.persembe}</td>
                    <td className="py-2 px-3 border border-lacivert/20">{r.cuma}</td>
                    <td className="py-2 px-3 border border-lacivert/20"></td>
                  </tr>
                ))}

                {/* Günlük Toplam Mesai */}
                <tr className="bg-slate-50 font-semibold">
                  <td className="py-2 px-3 border border-lacivert/20 text-left">
                    MESAİ SAATİ
                  </td>
                  {doc.dailyHours.map((h, i) => (
                    <td key={i} className="py-2 px-3 border border-lacivert/20">
                      {h}
                    </td>
                  ))}
                  <td className="py-2 px-3 border border-lacivert/20 font-bold">
                    {doc.totalHours}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <p className="text-sm text-lacivert-light mt-8">
        <strong className="text-bordo">Not:</strong> Resmî tatil günlerinde merkezimiz kapalıdır.
      </p>
    </PageLayout>
  );
}