"use client";

import React, { useState } from 'react';

export default function AdultBMI() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<string | null>(null);
  const [classification, setClassification] = useState<string>("");
  const [resultColor, setResultColor] = useState<string>("");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h) || h === 0) return;

    // BMI Formula: Weight (kg) / (Height (m) * Height (m))
    const heightInMeters = h / 100;
    const bmiValue = w / (heightInMeters * heightInMeters);
    
    const roundedBMI = bmiValue.toFixed(2);
    setBmi(roundedBMI);

    // WHO Classification
    if (bmiValue < 18.5) {
      setClassification("Zayıf");
      setResultColor("text-lacivert-light");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setClassification("Normal");
      setResultColor("text-lacivert");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setClassification("Fazla Kilolu");
      setResultColor("text-bordo");
    } else {
      setClassification("Obez");
      setResultColor("text-bordo-dark");
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 sm:py-10 md:py-12">
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 leading-snug">Yetişkin Beden Kitle İndeksi</h1>
      </div>

      <div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-sm shadow-sm">
        
        {/* Weight Input */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center mb-4">
          <label className="text-gray-600 font-light">Vücut Ağırlığı (kg) :</label>
          <div className="flex items-center gap-2">
            <input 
              type="number" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border border-gray-300 px-3 py-2 w-40 rounded-sm focus:outline-none focus:border-bordo"
            />
            <span className="text-gray-400 text-sm italic font-light">Örnek: 50</span>
          </div>
        </div>

        {/* Height Input */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center mb-8">
          <label className="text-gray-600 font-light">Boy Uzunluğu (cm) :</label>
          <div className="flex items-center gap-2">
            <input 
              type="number" 
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border border-gray-300 px-3 py-2 w-40 rounded-sm focus:outline-none focus:border-bordo"
            />
            <span className="text-gray-400 text-sm italic font-light">Örnek :170</span>
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
        {bmi !== null && (
          <div className="mt-8 p-4 bg-bordo-light border border-bordo/20 text-center">
            <p className="text-gray-700 text-lg">
              Beden Kitle İndeksiniz: <span className="font-bold text-gray-900">{bmi} kg/m²</span>
            </p>
            <p className="text-gray-700 text-lg mt-2">
              Durumunuz: <span className={`font-bold ${resultColor}`}>{classification}</span>
            </p>
          </div>
        )}

        {/* Info Note */}
        <div className="mt-12 pt-4 border-t border-gray-100 text-sm text-gray-500 leading-relaxed">
           <p className="mb-2 font-medium">Sınıflandırma:</p>
           <ul className="list-disc pl-5 space-y-1">
             <li><strong>18.5 altı:</strong> Zayıf</li>
             <li><strong>18.5 - 24.9:</strong> Normal</li>
             <li><strong>25 - 29.9:</strong> Fazla Kilolu</li>
             <li><strong>30 ve üzeri:</strong> Obez</li>
           </ul>
        </div>

      </div>
    </div>
  );
}

