"use client";

import React, { useState } from 'react';

const months = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

type VaccineDate = {
  label: string;
  date: string;
};

export default function AsiTakvimi() {
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('Ocak');
  const [year, setYear] = useState<string>('');
  const [results, setResults] = useState<VaccineDate[]>([]);

  const calculateVaccines = () => {
    if (!day || !year) return;

    const monthIndex = months.indexOf(month);
    const birthDate = new Date(parseInt(year), monthIndex, parseInt(day));

    if (isNaN(birthDate.getTime())) return;

    const formatDate = (date: Date) => {
      const d = date.getDate();
      const m = months[date.getMonth()];
      const y = date.getFullYear();
      return `${d} ${m} ${y}`;
    };

    const addMonths = (date: Date, monthsToAdd: number) => {
      const newDate = new Date(date);
      newDate.setMonth(newDate.getMonth() + monthsToAdd);
      return newDate;
    };

    const calculatedDates: VaccineDate[] = [
      { label: '1.inci Hepatit Aşı Tarihi', date: formatDate(birthDate) },
      { label: '2.inci Hepatit Aşı Tarihi', date: formatDate(addMonths(birthDate, 1)) },
      { label: '1.inci Karma, Çocuk Felci ve Verem Aşı Tarihi Hib', date: formatDate(addMonths(birthDate, 2)) },
      { label: '2.inci Karma ve Çocuk Felci Aşı Tarihi Hib', date: formatDate(addMonths(birthDate, 4)) },
      { label: '3.üncü Karma ve Çocuk Felci Aşı Tarihi Hib', date: formatDate(addMonths(birthDate, 6)) },
      { label: 'Kızamık, Kızamıkçık, Kabakulak(KKK)', date: formatDate(addMonths(birthDate, 12)) },
      { label: 'Karma Aşı ve Çocuk Felci Rapel* Tarihi Hib', date: formatDate(addMonths(birthDate, 18)) },
      { label: 'Difteri - Tetanoz ( dT ) , Çocuk felci, Verem ve KKK Rapel Aşısı Tarihi', date: formatDate(addMonths(birthDate, 48)) }, // 4 Yaş
      { label: 'Difteri - Tetanoz ( dT ) Rapel* Aşısı Tarihi', date: formatDate(addMonths(birthDate, 156)) }, // 13 Yaş (8. Sınıf)
    ];

    setResults(calculatedDates);
  };

  const resetForm = () => {
    setDay('');
    setMonth('Ocak');
    setYear('');
    setResults([]);
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 sm:py-10 md:py-12">
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 leading-snug">Bebeğinizin Aşı Takvimi</h1>
      </div>

      <div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-sm shadow-sm">
        <p className="text-center text-gray-500 font-light mb-8">
          Bebeğinizin doğum gününü yazınız ve Hesapla butonuna basınız.
        </p>

        {/* Input Form */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8 border border-gray-200 p-6 bg-gray-50 rounded-sm">
          <div className="flex items-center gap-2">
            <label className="text-gray-600 font-light">Gün:</label>
            <input 
              type="number" 
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="border border-gray-300 px-3 py-2 w-20 rounded-sm focus:outline-none focus:border-bordo"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-gray-600 font-light">Ay:</label>
            <select 
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="border border-gray-300 px-3 py-2 w-40 rounded-sm focus:outline-none focus:border-bordo bg-white"
            >
              {months.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-gray-600 font-light">Yıl:</label>
            <input 
              type="number" 
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border border-gray-300 px-3 py-2 w-24 rounded-sm focus:outline-none focus:border-bordo"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-2 mb-12">
          <button 
            onClick={calculateVaccines}
            className="bg-bordo hover:bg-bordo-dark text-white font-bold py-2 px-6 rounded-sm transition-colors shadow-sm"
          >
            Hesapla
          </button>
          <button 
            onClick={resetForm}
            className="bg-bordo hover:bg-bordo-dark text-white font-bold py-2 px-6 rounded-sm transition-colors shadow-sm"
          >
            Sıfırla
          </button>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="border border-gray-200 p-4 sm:p-6 md:p-8 rounded-sm">
            <div className="flex flex-col gap-4">
              {results.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-end items-center gap-4">
                  <label className="text-gray-600 font-light text-right w-full md:w-2/3 text-sm md:text-base">
                    {item.label}
                  </label>
                  <input 
                    type="text" 
                    readOnly 
                    value={item.date}
                    className="border border-gray-300 px-4 py-2 w-full md:w-64 rounded-sm text-gray-700 bg-white"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {results.length > 0 && (
           <div className="text-right mt-4 text-gray-500 text-sm">
             (*)Rapel: Hatırlatma Aşısı
           </div>
        )}

      </div>
    </div>
  );
}

