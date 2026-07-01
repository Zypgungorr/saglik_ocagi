import React from 'react';
import { User, Stethoscope } from 'lucide-react';
import { StaffMember } from '@/data/staff';

export default function StaffCard({ member }: { member: StaffMember }) {
  return (
    <div className="bg-white border border-lacivert/10 rounded-sm overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="p-3 sm:p-4 text-center bg-bordo-light/40 border-b border-lacivert/10 min-h-[100px] sm:h-32 flex flex-col justify-center items-center">
        <h3 className="text-base sm:text-lg font-semibold text-lacivert leading-tight">
          {[member.title, member.name].filter(Boolean).join(' ')}
        </h3>
        {member.unitOrDoctor && (
          <p className="text-[10px] sm:text-xs text-lacivert-light mt-1 sm:mt-2 uppercase leading-tight">{member.unitOrDoctor}</p>
        )}
      </div>
      <div className="relative h-48 sm:h-56 md:h-64 bg-lacivert/5 flex items-center justify-center border-b-4 border-bordo/40 group-hover:border-bordo transition-colors">
        {member.type === 'doctor' ? (
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-lacivert/15 flex items-center justify-center overflow-hidden relative border-4 border-white shadow-sm">
            <User size={56} className="text-lacivert/50 sm:w-20 sm:h-20" />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-bordo-light/30">
            <div className="text-center px-4">
              <Stethoscope size={48} className="text-lacivert/30 mx-auto mb-2 sm:w-16 sm:h-16" />
              <span className="text-lacivert-light text-xs sm:text-sm">Görsel Hazırlanıyor</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
