"use client";

import React, { useState } from 'react';

type Activity = {
  name: string;
  met: number;
};

type ActivityGroup = {
  group: string;
  items: Activity[];
};

// MET values (approximate)
const activityData: ActivityGroup[] = [
  {
    group: "Genel",
    items: [
      { name: "Ayakta durmak", met: 1.2 },
      { name: "Uyumak", met: 0.95 },
      { name: "Okumak", met: 1.3 },
      { name: "Yazı yazmak ( elle)", met: 1.3 },
      { name: "Yazı yazmak (bilgisayarda)", met: 1.5 },
      { name: "Telefonda konuşmak", met: 1.5 },
      { name: "Televizyon izlemek", met: 1.0 },
      { name: "Araba kullanmak", met: 1.5 },
      { name: "Araba tamir etmek", met: 3.0 },
      { name: "Bahçe işleri", met: 4.0 },
      { name: "Ağaç dikmek", met: 4.5 },
      { name: "Marangoz işleri (hafif)", met: 2.5 },
      { name: "Gıda alışverişi yapmak", met: 2.3 },
      { name: "Gıda dışı alışveriş yapmak (gezerek)", met: 2.3 },
      { name: "Merdiven inip-çıkmak", met: 8.0 },
    ]
  },
  {
    group: "Ev içi aktiviteler",
    items: [
      { name: "Yemek pişirmek", met: 2.0 },
      { name: "Yemek yemek (oturarak)", met: 1.5 },
      { name: "Bulaşık yıkamak", met: 2.2 },
      { name: "Badana yapmak", met: 4.5 },
      { name: "Temizlik yapmak", met: 3.5 },
      { name: "Yer silmek (elle, diz üstünde)", met: 3.8 },
      { name: "Cam silmek", met: 3.2 },
    ]
  }
];

export default function CalorieCalculation() {
  const [selectedActivityMet, setSelectedActivityMet] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const calculateCalories = () => {
    if (!selectedActivityMet || !duration || !weight) return;

    const met = parseFloat(selectedActivityMet);
    const dur = parseFloat(duration);
    const w = parseFloat(weight);

    if (isNaN(met) || isNaN(dur) || isNaN(w)) return;

    // Formula: Calories = MET * Weight(kg) * Duration(hours)
    // Duration is in minutes, so divide by 60.
    const calories = (met / 60) * w * dur;
    setResult(parseFloat(calories.toFixed(2)));
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 sm:py-10 md:py-12">
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 leading-snug">Aktiviteye Göre Harcanan Kalori</h1>
      </div>

      <div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-sm shadow-sm">
        
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center mb-4">
          <label className="text-gray-600 font-light">Aktivite Türü :</label>
          <select 
            value={selectedActivityMet}
            onChange={(e) => setSelectedActivityMet(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full md:w-64 rounded-sm focus:outline-none focus:border-bordo bg-white"
          >
            <option value="">...seçiniz</option>
            {activityData.map((group, idx) => (
              <optgroup key={idx} label={group.group}>
                {group.items.map((item, itemIdx) => (
                  <option key={itemIdx} value={item.met}>
                    {item.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center mb-4">
          <label className="text-gray-600 font-light">Aktivite Süresi (dk) :</label>
          <input 
            type="number" 
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full md:w-64 rounded-sm focus:outline-none focus:border-bordo"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center mb-8">
          <label className="text-gray-600 font-light">Vücut Ağırlığı (kg) :</label>
          <input 
            type="number" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full md:w-64 rounded-sm focus:outline-none focus:border-bordo"
          />
        </div>

        <div className="flex justify-end md:pr-[calc(100%-200px-16rem)]"> {/* Align with inputs */}
            <div className="w-full md:w-64 flex justify-end">
                <button 
                    onClick={calculateCalories}
                    className="bg-bordo hover:bg-bordo-dark text-white font-bold py-2 px-6 rounded-sm border border-gray-300 transition-colors shadow-sm"
                >
                    Hesapla
                </button>
            </div>
        </div>

        {result !== null && (
          <div className="mt-8 p-4 bg-bordo-light border border-bordo/20 text-center">
            <p className="text-gray-700 text-lg">
              Bu sürede <span className="font-bold text-bordo">{result} Kal</span> enerjiye harcanmıştır.
            </p>
          </div>
        )}

        <div className="mt-12 pt-4 border-t border-gray-100 text-xs text-gray-500 leading-relaxed">
            *Not: Enerji harcaması için bulunan değer ortalama bir değer olup, bireyin vücut tipi, yaptığı aktivitenin şiddeti, yaşı vb. bireysel faktörlere göre değişiklik gösterebilir. Kaynak: Maughan R, Nutrition in Sport, 2001, Blackwell Science Ltd.
        </div>

      </div>
    </div>
  );
}

