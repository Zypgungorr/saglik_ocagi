import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-lacivert text-gray-300 text-sm">
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <h3 className="text-white text-base sm:text-lg font-normal mb-4 sm:mb-6">İletişim Bilgileri</h3>
            <div className="flex flex-col gap-3 sm:gap-4 leading-relaxed text-sm">
              <p>
              Kirazlıdere, Efsun Sk., <br />
              34788 Çekmeköy/İSTANBUL
              </p>
              <p>
                <a href="tel:02163124176" className="hover:text-white transition-colors py-1 inline-block">
                  Telefon: 0 216 312 41 76
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg font-normal mb-4 sm:mb-6">Sağlık Hesaplamaları</h3>
            <ul className="flex flex-col gap-2 sm:gap-3">
              <li><Link href="/saglik-hesaplamalari/asi-takvimi" className="hover:text-bordo-light transition-colors block py-1">Bebeğinizin Aşı Takvimi</Link></li>
              <li><Link href="/saglik-hesaplamalari/aktiviteye-gore-harcanan-kalori" className="hover:text-bordo-light transition-colors block py-1">Aktiviteye Göre Harcanan Kalori</Link></li>
              <li><Link href="/saglik-hesaplamalari/yetiskin-bel-cevresi" className="hover:text-bordo-light transition-colors block py-1">Yetişkin Bel Çevresi Hesaplama</Link></li>
              <li><Link href="/saglik-hesaplamalari/cocuk-beden-kitle-indeksi" className="hover:text-bordo-light transition-colors block py-1">Çocuk Beden Kitle İndeksi</Link></li>
              <li><Link href="/saglik-hesaplamalari/yetiskin-beden-kitle-indeksi" className="hover:text-bordo-light transition-colors block py-1">Yetişkin Beden Kitle İndeksi</Link></li>
              <li><Link href="/saglik-hesaplamalari/persentil-egrisi" className="hover:text-bordo-light transition-colors block py-1">Persentil Eğrisi</Link></li>
              <li><Link href="/saglik-hesaplamalari/kiz-cocuk-persentil" className="hover:text-bordo-light transition-colors block py-1">Kız Çocuklar İçin Persentil Tablosu</Link></li>
              <li><Link href="/saglik-hesaplamalari/erkek-cocuk-persentil" className="hover:text-bordo-light transition-colors block py-1">Erkek Çocuklar İçin Persentil Tablosu</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg font-normal mb-4 sm:mb-6">ASM Rehberi</h3>
            <ul className="flex flex-col gap-2 sm:gap-3">
              <li><Link href="/kurumsal/hakkimizda" className="hover:text-bordo-light transition-colors block py-1">ASM&apos;ye Gelirken</Link></li>
              <li><Link href="/kurumsal/hakkimizda" className="hover:text-bordo-light transition-colors block py-1">Tetkik İşlemleri</Link></li>
              <li><Link href="/kurumsal/hasta-haklari" className="hover:text-bordo-light transition-colors block py-1">Hasta Hakları</Link></li>
              <li><Link href="/kurumsal/hakkimizda" className="hover:text-bordo-light transition-colors block py-1">Hizmet Politikamız</Link></li>
              <li><Link href="/kurumsal/hakkimizda" className="hover:text-bordo-light transition-colors block py-1">Muayene İşlemleri</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg font-normal mb-4 sm:mb-6">Dosyalar</h3>
            <ul className="flex flex-col gap-2 sm:gap-3">
              <li><Link href="/dosyalar/asm-talimatlari" className="hover:text-bordo-light transition-colors block py-1">ASM Talimatları</Link></li>
              <li><Link href="/dosyalar/yararli-dosyalar" className="hover:text-bordo-light transition-colors block py-1">Yararlı Dosyalar</Link></li>
              <li><Link href="/dosyalar/ilk-yardim" className="hover:text-bordo-light transition-colors block py-1">İlk Yardım</Link></li>
              <li><Link href="/dosyalar/sigaranin-zararlari" className="hover:text-bordo-light transition-colors block py-1">Sigaranın Zararları</Link></li>
              <li><Link href="/dosyalar/tum-dosya-liste" className="hover:text-bordo-light transition-colors block py-1">Tüm Dosya Liste</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-lacivert-dark py-4 sm:py-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-xs text-gray-400 text-center md:text-right w-full">
            © Copyright {new Date().getFullYear()}, Çekmeköy Efsun ASM
          </div>
        </div>
      </div>
    </footer>
  );
}
