export type StaffMember = {
  name: string;
  title: string;
  unitOrDoctor?: string;
  type: 'doctor' | 'nurse' | 'staff';
};

export const staff: StaffMember[] = [
  {
    name: 'Alperen GÜNGÖR',
    title: 'Dr.',
    unitOrDoctor: '34.16.077 NOLU BİRİM',
    type: 'doctor',
  },
  {
    name: 'İsmail Emre KOÇ',
    title: 'Dr.',
    unitOrDoctor: '34.16.078 NOLU BİRİM',
    type: 'doctor',
  },
  {
    name: 'Gülşen NOHUT',
    title: 'Hemşire',
    unitOrDoctor: 'Dr. Alperen GÜNGÖR',
    type: 'nurse',
  },
  {
    name: 'İnci YILMAZER',
    title: 'Hemşire',
    unitOrDoctor: 'Dr. İsmail Emre KOÇ',
    type: 'nurse',
  },
  {
    name: 'Kevser KAVLAK',
    title: 'Hemşire',
    unitOrDoctor: '',
    type: 'nurse',
  },
];

export const doctors = staff.filter((m) => m.type === 'doctor');
export const nurses = staff.filter((m) => m.type === 'nurse');
