import React from 'react';
import { staff } from '@/data/staff';
import StaffCard from '@/components/StaffCard';
import ScrollReveal from '@/components/ScrollReveal';

export default function StaffSection() {
  return (
    <div className="bg-white py-8 sm:py-12 border-t border-gray-100">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-bordo mb-2">Kadromuz</h2>
          <p className="text-gray-500 font-light text-sm sm:text-base px-2">
            Aile Hekimlerimiz ve Aile Sağlığı Çalışanlarımız
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {staff.map((member, index) => (
            <ScrollReveal key={index} delay={(index % 4) * 100} variant="scale">
              <StaffCard member={member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
