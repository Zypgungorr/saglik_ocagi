"use client";

import React, { useState } from 'react';

export default function WaistCircumference() {
  const [waist, setWaist] = useState<string>("");
  const [gender, setGender] = useState<string>("Erkek");
  const [result, setResult] = useState<string | null>(null);
  const [riskColor, setRiskColor] = useState<string>("");

  const calculateRisk = () => {
    if (!waist) return;

    const w = parseFloat(waist);
    if (isNaN(w)) return;

    let message = "";
    let color = "";

    if (gender === "Erkek") {
      if (w < 94) {
        message = "Normal (Düşük Risk)";
        color = "text-lacivert";
      } else if (w >= 94 && w < 102) {
        message = "Riskli (Artmış Risk)";
        color = "text-bordo";
      } else {
        message = "Yüksek Riskli";
        color = "text-bordo-dark";
      }
    } else {
      // Kadın
      if (w < 80) {
        message = "Normal (Düşük Risk)";
        color = "text-lacivert";
      } else if (w >= 80 && w < 88) {
        message = "Riskli (Artmış Risk)";
        color = "text-bordo";
      } else {
        message = "Yüksek Riskli";
        color = "text-bordo-dark";
      }
    }

    setResult(message);
    setRiskColor(color);
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 sm:py-10 md:py-12">
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 leading-snug">Yetişkin Bel Çevresi Hesaplama</h1>
      </div>

      <div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-sm shadow-sm">
        
        {/* Waist Input */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center mb-4">
          <label className="text-gray-600 font-light">Bel Çevresi (cm) :</label>
          <div className="flex items-center gap-2">
            <input 
              type="number" 
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              className="border border-gray-300 px-3 py-2 w-40 rounded-sm focus:outline-none focus:border-bordo"
            />
            <span className="text-gray-400 text-sm italic font-light">Örnek: 90</span>
          </div>
        </div>

        {/* Gender Input */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center mb-8">
          <label className="text-gray-600 font-light">Cinsiyet :</label>
          <select 
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-40 rounded-sm focus:outline-none focus:border-bordo bg-white"
          >
            <option value="Erkek">Erkek</option>
            <option value="Kadın">Kadın</option>
          </select>
        </div>

        {/* Calculate Button */}
        <div className="flex justify-end md:pr-[calc(100%-200px-10rem)]">
            <div className="w-full md:w-40 flex justify-end">
                <button 
                    onClick={calculateRisk}
                    className="bg-bordo hover:bg-bordo-dark text-white font-bold py-2 px-6 rounded-sm border border-gray-300 transition-colors shadow-sm"
                >
                    Hesapla
                </button>
            </div>
        </div>

        {/* Result */}
        {result !== null && (
          <div className="mt-8 p-4 bg-gray-50 border border-gray-200 text-center">
            <p className="text-gray-700 text-lg">
              Değerlendirme Sonucu: <span className={`font-bold ${riskColor}`}>{result}</span>
            </p>
          </div>
        )}

        {/* Info Note */}
        <div className="mt-12 pt-4 border-t border-gray-100 text-sm text-gray-500 leading-relaxed">
           <p className="mb-2 font-medium">Dünya Sağlık Örgütü&apos;ne göre risk sınırları:</p>
           <ul className="list-disc pl-5 space-y-1">
             <li><strong>Erkekler için:</strong> 94 cm ve üzeri riskli, 102 cm ve üzeri yüksek riskli.</li>
             <li><strong>Kadınlar için:</strong> 80 cm ve üzeri riskli, 88 cm ve üzeri yüksek riskli kabul edilir.</li>
           </ul>
        </div>

      </div>
    </div>
  );
}

