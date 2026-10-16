'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/data';

export default function FloatingWhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside aria-label="Bantuan WhatsApp" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Tooltip bubble */}
      {showTooltip && !isDismissed && (
        <div className="mb-3 relative max-w-xs bg-white text-zinc-800 text-xs font-medium py-3 px-4 rounded-xl shadow-md border border-zinc-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="absolute -top-1.5 -left-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 rounded-full p-0.5 border border-zinc-300"
            aria-label="Tutup pesan bantuan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-bold text-zinc-950 text-xs sm:text-sm mb-0.5">Konsultasi Sewa Tenda</p>
          <p className="text-zinc-600 text-[11px] leading-relaxed">Tanya rekomendasi ukuran tenda pekarangan dan cek jadwal acara langsung ke pengelola.</p>
          
          {/* Arrow pointing down */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-zinc-200 transform rotate-45"></div>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={getWhatsAppUrl({})}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Chat WhatsApp dengan Admin Teratak Andika Raja"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2] relative z-10" />

        {/* Badge status online */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
      </a>
    </aside>
  );
}
