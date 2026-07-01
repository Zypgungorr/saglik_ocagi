"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const YOUTUBE_VIDEOS = [
  '7lypV97ovyc',
  'aG6uUhiWAPA',
  'zgrwh9S2oz0',
  'd-1kyKSVmvw',
  'lQYug_yWHC8',
];

const services = [
  {
    title: 'Poliklinik Muayenesi',
    content: "ASM' mizde birinci basamak muayene hizmetleri verilmektedir."
  },
  {
    title: 'Aile Planlaması',
    content: 'Aile planlaması danışmanlığı ve hizmetleri sunulmaktadır.'
  },
  {
    title: 'İzlemler',
    content: 'Gebe, bebek, çocuk ve obezite izlemleri düzenli olarak yapılmaktadır.'
  },
  {
    title: 'Laboratuvar Tetkikleri',
    content: 'Hekiminizin uygun gördüğü tahliller laboratuvarımızda yapılmaktadır.'
  },
  {
    title: 'Bağışıklama Hizmetleri',
    content: 'Bebek, çocuk ve erişkin aşılama hizmetleri aşı takvimine uygun olarak verilmektedir.'
  },
  {
    title: 'Halk Eğitimleri',
    content: 'AÇS-AP, gebelik, hijyen vb. konularında eğitim verilmektedir.'
  }
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [videoId] = useState(
    () => YOUTUBE_VIDEOS[Math.floor(Math.random() * YOUTUBE_VIDEOS.length)]
  );

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-bordo mb-2 tracking-wide uppercase">
            HİZMETLER
          </h2>
          <p className="text-gray-500 font-light text-sm sm:text-base px-2">
            Aile Sağlığı Merkezimizde verilen başlıca hizmetler
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <ScrollReveal variant="left" delay={100} className="border-t border-gray-200 order-2 md:order-1">
            {services.map((service, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => toggleService(index)}
                  className="w-full py-4 px-1 flex justify-between items-center text-left focus:outline-none group min-h-[48px] gap-3"
                >
                  <span className={`text-base sm:text-lg font-light transition-colors ${openIndex === index ? 'text-lacivert' : 'text-lacivert-light group-hover:text-bordo'}`}>
                    {service.title}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-gray-400 shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 shrink-0" size={20} />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-500 font-light text-sm leading-relaxed px-1">
                    {service.content}
                  </p>
                </div>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal variant="right" delay={200} className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md order-1 md:order-2">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Sağlık kamu spotu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
