"use client";

import React, { useState } from 'react';

const months = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

export default function ChildBMI() {
  const [gender, setGender] = useState<string>("Erkek");
  const [month, setMonth] = useState<string>("Ocak");
  const [year, setYear] = useState<string>("2013");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);
  const [bmiValue, setBmiValue] = useState<number | null>(null);

  const calculateBMI = () => {
    if (!weight || !height || !year) return;

    const w = parseFloat(weight);
    const h = parseFloat(height);
    
    if (isNaN(w) || isNaN(h)) return;

    // BMI Calculation: Weight (kg) / (Height (m) * Height (m))
    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);
    
    // Round to 2 decimal places
    const roundedBMI = parseFloat(bmi.toFixed(2));
    setBmiValue(roundedBMI);

    // Note: Child BMI evaluation (percentiles) is complex and requires WHO growth charts.
    // For this demo, we will calculate the BMI value and show a general note.
    // In a real medical app, you would look up the BMI in age/gender specific percentile tables.
    setResult(`Çocuğunuzun Beden Kitle İndeksi (BKİ): ${roundedBMI}`);
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 sm:py-10 md:py-12">
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 leading-snug">Çocuk Beden Kitle İndeksi</h1>
      </div>

      <div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-sm shadow-sm">
        
        {/* Gender */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center mb-4">
          <label className="text-gray-600 font-light">Cinsiyet :</label>
          <select 
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-40 rounded-sm focus:outline-none focus:border-bordo bg-white"
          >
            <option value="Erkek">Erkek</option>
            <option value="Kız">Kız</option>
          </select>
        </div>

        {/* Birth Date */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center mb-4">
          <label className="text-gray-600 font-light">Doğum Tarihi :</label>
          <div className="flex gap-2">
            <select 
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="border border-gray-300 px-3 py-2 w-32 rounded-sm focus:outline-none focus:border-bordo bg-white"
            >
                {months.map((m) => (
                <option key={m} value={m}>{m}</option>
                ))}
            </select>
            <input 
                type="number" 
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Yıl"
                className="border border-gray-300 px-3 py-2 w-24 rounded-sm focus:outline-none focus:border-bordo"
            />
          </div>
        </div>

        {/* Weight */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center mb-4">
          <label className="text-gray-600 font-light">Vücut Ağırlığı (kg) :</label>
          <div className="flex items-center gap-2">
            <input 
              type="number" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border border-gray-300 px-3 py-2 w-40 rounded-sm focus:outline-none focus:border-bordo"
            />
            <span className="text-gray-400 text-sm italic font-light">Örnek :30</span>
          </div>
        </div>

        {/* Height */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center mb-8">
          <label className="text-gray-600 font-light">Boy Uzunluğu (cm) :</label>
          <div className="flex items-center gap-2">
            <input 
              type="number" 
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border border-gray-300 px-3 py-2 w-40 rounded-sm focus:outline-none focus:border-bordo"
            />
            <span className="text-gray-400 text-sm italic font-light">Örnek :120</span>
          </div>
        </div>

        {/* Calculate Button */}
        <div className="flex justify-end md:pr-[calc(100%-200px-10rem)]">
            <div className="w-full md:w-40 flex justify-end">
                <button 
                    onClick={calculateBMI}
                    className="bg-bordo hover:bg-bordo-dark text-white font-bold py-2 px-6 rounded-sm border border-gray-300 transition-colors shadow-sm"
                >
                    Hesapla
                </button>
            </div>
        </div>

        {/* Result */}
        {result !== null && (
          <div className="mt-8 p-4 bg-bordo-light border border-bordo/20 text-center">
            <p className="text-gray-700 text-lg font-medium">
              {result} kg/m²
            </p>
            <p className="text-sm text-gray-500 mt-2">
              *Çocuklarda BKİ değerlendirmesi yaşa ve cinsiyete göre persentil eğrileri üzerinden yapılmalıdır.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

