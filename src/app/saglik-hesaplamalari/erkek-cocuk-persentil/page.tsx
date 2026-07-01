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

// Data based on provided images for Boys
const boyData: AgeGroup[] = [
  {
    age: "DOĞUM",
    rows: [
      { label: "Tartı kg", values: ["2,6", "2,9", "3,1", "3,4", "3,8", "4,1", "4,6"] },
      { label: "Boy cm", values: ["46,3", "48,1", "49,3", "50,6", "52,0", "53,3", "54,6"] },
      { label: "Baş Çevresi-cm", values: ["33,0", "33,5", "34,4", "35,3", "36,2", "37,0", "37,5"] },
    ]
  },
  {
    age: "3 AY",
    rows: [
      { label: "Tartı kg", values: ["4,1", "4,7", "5,3", "5,9", "6,4", "6,9", "7,5"] },
      { label: "Boy cm", values: ["54,5", "56,0", "58,0", "60,5", "61,5", "63,0", "66,0"] },
      { label: "Baş Çevresi-cm", values: ["38,7", "39,2", "40,0", "40,9", "41,5", "42,1", "43,2"] },
    ]
  },
  {
    age: "6 AY",
    rows: [
      { label: "Tartı kg", values: ["5,6", "6,5", "7,1", "7,8", "8,5", "9,1", "9,7"] },
      { label: "Boy cm", values: ["59,5", "61,5", "64,0", "66,5", "67,5", "69,0", "72,5"] },
      { label: "Baş Çevresi-cm", values: ["42,1", "42,7", "43,3", "43,9", "44,8", "45,0", "45,0"] },
    ]
  },
  {
    age: "9 AY",
    rows: [
      { label: "Tartı kg", values: ["6,5", "7,5", "8,2", "9,0", "9,8", "10,6", "11,3"] },
      { label: "Boy cm", values: ["64,0", "66,0", "68,5", "71,0", "72,5", "74,3", "77,5"] },
      { label: "Baş Çevresi-cm", values: ["43,8", "44,5", "45,1", "46,0", "46,5", "47,1", "47,8"] },
    ]
  },
  {
    age: "12 AY",
    rows: [
      { label: "Tartı kg", values: ["7,4", "8,4", "9,0", "10,0", "10,8", "11,7", "12,5"] },
      { label: "Boy cm", values: ["68,0", "70,4", "72,5", "74,7", "76,5", "78,5", "82,5"] },
      { label: "Baş Çevresi-cm", values: ["44,9", "45,5", "46,5", "47,3", "47,8", "48,4", "48,9"] },
    ]
  },
  {
    age: "15 AY",
    rows: [
      { label: "Tartı kg", values: ["8,1", "9,1", "9,9", "10,8", "11,7", "12,5", "13,5"] },
      { label: "Boy cm", values: ["71,5", "73,7", "76,0", "78,0", "80,5", "82,5", "86,5"] },
      { label: "Baş Çevresi-cm", values: ["45,6", "46,3", "47,1", "48,0", "48,5", "49,2", "49,8"] },
    ]
  },
  {
    age: "18 AY",
    rows: [
      { label: "Tartı kg", values: ["8,7", "9,7", "10,5", "11,5", "12,5", "13,3", "13,3"] },
      { label: "Boy cm", values: ["75,0", "77,0", "79,5", "81,5", "84,0", "86,5", "89,5"] },
      { label: "Baş Çevresi-cm", values: ["46,2", "47,0", "47,7", "48,7", "49,2", "49,9", "50,6"] },
    ]
  },
  {
    age: "2 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["9,1", "10,2", "11,0", "12,1", "13,2", "14,1", "15,0"] },
      { label: "Boy cm", values: ["77,0", "80,0", "82,0", "84,0", "86,5", "88,7", "92,5"] },
      { label: "Baş Çevresi-cm", values: ["47,0", "48,0", "48,2", "49,7", "50,2", "51,0", "51,7"] },
    ]
  },
  {
    age: "2,5 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["10,3", "11,5", "12,5", "13,6", "14,8", "15,9", "17,0"] },
      { label: "Boy cm", values: ["83,5", "86,2", "89,0", "91,0", "94,0", "96,4", "100,0"] },
      { label: "Baş Çevresi-cm", values: ["47,5", "48,5", "49,2", "50,2", "50,9", "51,6", "52,3"] },
    ]
  },
  {
    age: "3 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["11,1", "12,3", "13,3", "14,6", "15,8", "17,1", "18,3"] },
      { label: "Boy cm", values: ["86,7", "90,0", "92,5", "95,3", "98,5", "100,5", "105,0"] },
      { label: "Baş Çevresi-cm", values: ["47,9", "48,9", "49,6", "50,4", "51,3", "51,9", "52,7"] },
    ]
  },
  {
    age: "3,5 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["11,7", "12,9", "14,2", "15,6", "17,0", "18,2", "19,6"] },
      { label: "Boy cm", values: ["89,7", "93,5", "96,5", "99,0", "102,0", "105,0", "109,5"] },
    ]
  },
  {
    age: "4 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["12,3", "13,6", "15,1", "16,7", "18,4", "19,5", "21,1"] },
      { label: "Boy cm", values: ["92,5", "96,5", "99,5", "102,5", "106,0", "109,0", "114,0"] },
    ]
  },
  {
    age: "4,5 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["12,7", "14,3", "16,1", "17,7", "19,5", "20,8", "22,6"] },
      { label: "Boy cm", values: ["95,5", "99,5", "103,0", "106,4", "110,0", "112,5", "118,0"] },
    ]
  },
  {
    age: "5 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["13,4", "15,0", "17,0", "18,7", "20,7", "22,5", "24,0"] },
      { label: "Boy cm", values: ["98,0", "102,5", "106,0", "109,5", "113,0", "116,0", "121,5"] },
    ]
  },
  {
    age: "5,5 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["14,1", "16,0", "17,9", "19,7", "22,0", "23,6", "25,5"] },
      { label: "Boy cm", values: ["101,3", "105,6", "109,0", "113,0", "116,5", "119,0", "125,0"] },
    ]
  },
  {
    age: "6 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["14,8", "17,0", "18,8", "20,8", "23,0", "24,9", "26,8"] },
      { label: "Boy cm", values: ["104,0", "108,5", "112,0", "116,0", "119,0", "122,5", "127,5"] },
    ]
  },
  {
    age: "6,5 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["15,6", "18,0", "19,7", "22,0", "24,3", "26,3", "28,4"] },
      { label: "Boy cm", values: ["106,7", "111,7", "115,0", "119,0", "122,0", "125,0", "130,5"] },
    ]
  },
  {
    age: "7 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["16,4", "19,1", "20,8", "23,2", "25,6", "27,8", "30,1"] },
      { label: "Boy cm", values: ["109,5", "114,7", "118,0", "121,5", "125,0", "128,0", "133,5"] },
    ]
  },
  {
    age: "10 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["22,0", "25,9", "29,5", "33,7", "37,4", "42,0", "45,7"] },
      { label: "Boy cm", values: ["125,0", "130,0", "133,5", "137,5", "142,0", "146,0", "151,5"] },
    ]
  },
  {
    age: "14 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["34,2", "40,0", "45,6", "52,8", "59,8", "66,4", "72,8"] },
      { label: "Boy cm", values: ["146,5", "152,0", "156,0", "162,0", "167,5", "172,5", "178,5"] },
    ]
  },
  {
    age: "17 YAŞ",
    rows: [
      { label: "Tartı kg", values: ["49,4", "54,7", "59,9", "66,2", "72,7", "77,5", "82,7"] },
      { label: "Boy cm", values: ["162,0", "166,0", "169,5", "173,5", "178,0", "182,0", "185,5"] },
    ]
  },
];

export default function BoyPercentileTable() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-6 sm:py-10 md:py-12">
      <div className="mb-6 sm:mb-8 md:mb-12 border-b border-gray-200 pb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 leading-snug">Erkek Çocuklar İçin Persentil Tablosu</h1>
      </div>

      <div className="flex justify-center mb-12">
        <div className="w-64 h-48 bg-sky-100 rounded-lg flex items-center justify-center shadow-sm overflow-hidden relative border border-sky-200">
           <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-sky-200/60"></div>
           <Baby size={100} className="text-sky-400 relative z-10" />
        </div>
      </div>

      <div className="overflow-x-auto shadow-sm border border-lacivert/20 rounded-lg">
        <table className="w-full text-sm text-center">
          <tbody className="divide-y divide-lacivert/10">
            {boyData.map((group, groupIdx) => (
              <React.Fragment key={groupIdx}>
                {/* Header Row for Age Group */}
                <tr className="bg-lacivert/10 text-lacivert font-medium">
                  <td className="py-3 px-4 text-left w-48 uppercase text-xs tracking-wider font-bold">{group.age}</td>
                  {percentileHeaders.map((header) => (
                    <td key={header} className="py-3 px-2 w-16">{header}</td>
                  ))}
                </tr>
                {/* Data Rows */}
                {group.rows.map((row, rowIdx) => (
                  <tr key={`${groupIdx}-${rowIdx}`} className="bg-white hover:bg-lacivert/5/30 transition-colors">
                    <td className="py-3 px-4 text-left text-gray-600 font-light border-r border-lacivert/10">{row.label}</td>
                    {row.values.map((val, valIdx) => (
                      <td key={valIdx} className="py-3 px-2 text-gray-700 border-r border-lacivert/10 last:border-r-0">
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
        *Tablo verileri temsili büyüme eğrilerine dayanmaktadır.
      </div>
    </div>
  );
}
