import React from 'react';
import Link from 'next/link';
import { Clock, ClipboardList } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const cards = [
  {
    title: 'Çalışma Saatlerimiz',
    description: 'Buradan çalışma saatlerimiz ve esnek mesai tablomuz hakkında bilgi alabilirsiniz',
    icon: Clock,
    link: '/calisma-saatlerimiz',
  },
  {
    title: 'Hizmet Standartlarımız',
    description: 'Buradan aile sağlığı merkezimizde yapılan işlemlerimizin süreleri hakkında bilgi alabilirsiniz.',
    icon: ClipboardList,
    link: '/hizmet-standartlari',
  },
];

export default function InfoCards() {
  return (
    <div className="bg-white py-8 sm:py-12 border-b border-lacivert/10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <ScrollReveal key={index} delay={index * 120} variant="up">
              <Link
                href={card.link}
                className="flex gap-3 sm:gap-4 items-start group p-2 -m-2 rounded-sm h-full"
              >
                <div className="shrink-0 text-lacivert group-hover:text-bordo transition-colors">
                  <card.icon size={40} strokeWidth={1.5} className="sm:w-12 sm:h-12" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-medium text-bordo mb-1 sm:mb-2 group-hover:text-bordo-dark transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-lacivert-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
