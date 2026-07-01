import React from 'react';
import { Baby } from 'lucide-react';

// Data Structure for the Table
type PercentileRow = {
  label: string;
  values: string[]; // 3, 10, 25, 50, 75, 90, 97
};

type AgeGroup = {
  age: string;
  rows: PercentileRow[];
};

const percentileHeaders = ["3", "10", "25", "50", "75", "90", "97"];

const girlData: AgeGroup[] = [
  {
    age: "DOĞUM",
    rows: [
      { label: "Tartı kg", values: ["2,6", "2,8", "3,1", "3,4", "3,7", "3,9", "4,3"] },
      { label: "Boy cm", values: ["47,1", "47,8", "49,0", "50,2", "51,0", "51,9", "53,6"] },
      { label: "Baş Çevresi-cm", values: ["32,5", "33,4", "33,9", "34,7", "35,4", "36,0", "36,6"] },
    ]
  },
  {
    age: "3 AY",
    rows: [
      { label: "Tartı kg", values: ["4", "4,4", "4,8", "5,4", "6,0", "6,4", "7,0"] },
      { label: "Boy cm", values: ["54,0", "55,5", "57,5", "58,5", "60,0", "62,5", "64,5"] },
      { label: "Baş Çevresi-cm", values: ["37,9", "38,5", "39,2", "40,0", "40,8", "41,7", "42,3"] },
    ]
  },
  {
    age: "6 AY",
    rows: [
      { label: "Tartı kg", values: ["5,4", "6,1", "6,8", "7,4", "8,0", "8,6", "9,2"] },
      { label: "Boy cm", values: ["58,0", "60,0", "62,0", "64,5", "66,5", "68,5", "70,5"] },
      { label: "Baş Çevresi-cm", values: ["40,9", "41,4", "42,0", "42,8", "43,6", "44,5", "45,4"] },
    ]
  },
  {
    age: "9 AY",
    rows: [
      { label: "Tartı kg", values: ["6,4", "7,3", "8,0", "8,6", "9,5", "10,0", "10,8"] },
      { label: "Boy cm", values: ["61,5", "64,5", "66,5", "69,5", "71,0", "73,0", "75,5"] },
      { label: "Baş Çevresi-cm", values: ["42,6", "43,2", "43,8", "44,6", "45,4", "46,3", "47,2"] },
    ]
  },
  {
    age: "12 AY",
    rows: [
      { label: "Tartı kg", values: ["7,1", "8,1", "8,9", "9,6", "10,6", "11,0", "12,1"] },
      { label: "Boy cm", values: ["64,5", "68,0", "70,0", "73,0", "75,0", "77,0", "80,0"] },
      { label: "Baş Çevresi-cm", values: ["43,6", "44,3", "45,0", "45,8", "46,7", "47,7", "48,7"] },
    ]
  },
  {
    age: "15 AY",
    rows: [
      { label: "Tartı kg", values: ["7,7", "8,7", "9,6", "10,4", "11,4", "11,9", "13,0"] },
      { label: "Boy cm", values: ["68,0", "71,5", "73,5", "76,5", "78,5", "81,0", "84,5"] },
      { label: "Baş Çevresi-cm", values: ["44,3", "44,9", "45,6", "46,5", "47,4", "48,4", "49,7"] },
    ]
  },
  {
    age: "18 AY",
    rows: [
      { label: "Tartı kg", values: ["8,3", "9,3", "10,2", "11,0", "12,0", "12,6", "13,7"] },
      { label: "Boy cm", values: ["71,0", "75,0", "76,5", "79,5", "82,0", "84,5", "88,5"] },
      { label: "Baş Çevresi-cm", values: ["44,9", "45,5", "46,2", "47,1", "48,0", "49,0", "49,8"] },
    ]
  },
  {
    age: "2 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["9,2", "10,4", "11,3", "12,2", "13,1", "13,8", "15,1"] },
      { label: "Boy cm", values: ["76,5", "80,0", "83,5", "85,5", "88,5", "91,0", "95,0"] },
      { label: "Baş Çevresi-cm", values: ["45,8", "46,4", "47,2", "48,1", "49,1", "50,1", "50,9"] },
    ]
  },
  // ... more data points can be added as needed, sticking to the main ones for now to keep file size reasonable
  {
    age: "3 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["10,6", "12,0", "13,0", "14,0", "15,0", "16,1", "17,5"] },
      { label: "Boy cm", values: ["85,5", "88,5", "92,0", "95,0", "98,5", "101,0", "104,5"] },
      { label: "Baş Çevresi-cm", values: ["46,8", "47,5", "48,4", "49,3", "50,3", "51,1", "52,0"] },
    ]
  },
  {
    age: "4 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["11,6", "13,2", "14,4", "16,0", "17,5", "18,9", "20,6"] },
      { label: "Boy cm", values: ["92,0", "95,5", "98,5", "102,0", "105,0", "108,0", "112,0"] },
    ]
  },
  {
    age: "5 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["12,6", "14,6", "16,3", "18,2", "20,0", "21,7", "23,8"] },
      { label: "Boy cm", values: ["97,5", "101,5", "104,0", "108,0", "111,0", "114,5", "118,5"] },
    ]
  },
  {
    age: "6 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["13,7", "16,0", "18,1", "20,2", "22,5", "24,6", "26,6"] },
      { label: "Boy cm", values: ["103,0", "107,0", "110,0", "114,0", "117,5", "121,0", "125,0"] },
    ]
  },
  {
    age: "7 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["15,3", "17,5", "20,1", "22,5", "25,2", "27,6", "30,0"] },
      { label: "Boy cm", values: ["108,0", "113,0", "116,0", "120,0", "123,5", "127,0", "131,0"] },
    ]
  },
   {
    age: "10 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["23,0", "26,6", "30,2", "34,0", "38,2", "41,5", "45,0"] },
      { label: "Boy cm", values: ["125,5", "130,0", "133,5", "137,0", "141,0", "144,5", "149,0"] },
    ]
  },
  {
    age: "14 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["38,0", "42,9", "47,4", "51,8", "56,3", "60,7", "66,3"] },
      { label: "Boy cm", values: ["147,5", "151,0", "154,0", "158,5", "162,0", "166,0", "170,4"] },
    ]
  },
  {
    age: "17 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["43,0", "47,6", "52,5", "56,0", "60,9", "65,0", "71,0"] },
      { label: "Boy cm", values: ["148,5", "152,5", "155,0", "160,0", "165,0", "169,5", "174,0"] },
    ]
  },
];

export default function GirlPercentileTable() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-6 sm:py-10 md:py-12">
      <div className="mb-6 sm:mb-8 md:mb-12 border-b border-gray-200 pb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 leading-snug">Kız Çocuklar İçin Persentil Tablosu</h1>
      </div>

      <div className="flex justify-center mb-12">
        <div className="w-64 h-48 bg-bordo-light rounded-lg flex items-center justify-center shadow-sm overflow-hidden relative">
           {/* Placeholder image area matching the design */}
           <div className="absolute inset-0 bg-linear-to-b from-transparent to-bordo-light opacity-30"></div>
           <Baby size={100} className="text-bordo/40" />
        </div>
      </div>

      <div className="overflow-x-auto shadow-sm border border-bordo/20 rounded-lg">
        <table className="w-full text-sm text-center">
          <tbody className="divide-y divide-bordo-light">
            {girlData.map((group, groupIdx) => (
              <React.Fragment key={groupIdx}>
                {/* Header Row for Age Group */}
                <tr className="bg-bordo-light text-bordo font-medium">
                  <td className="py-3 px-4 text-left w-48 uppercase text-xs tracking-wider font-bold">{group.age}</td>
                  {percentileHeaders.map((header) => (
                    <td key={header} className="py-3 px-2 w-16">{header}</td>
                  ))}
                </tr>
                {/* Data Rows */}
                {group.rows.map((row, rowIdx) => (
                  <tr key={`${groupIdx}-${rowIdx}`} className="bg-white hover:bg-bordo-light/30 transition-colors">
                    <td className="py-3 px-4 text-left text-gray-600 font-light border-r border-bordo-light">{row.label}</td>
                    {row.values.map((val, valIdx) => (
                      <td key={valIdx} className="py-3 px-2 text-gray-700 border-r border-bordo-light last:border-r-0">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 text-xs text-gray-400 text-center">
        *Tablo verileri standart büyüme eğrilerine dayanmaktadır.
      </div>
    </div>
  );
}

