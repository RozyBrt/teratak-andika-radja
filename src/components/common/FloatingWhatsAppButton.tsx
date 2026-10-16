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
        <div className="mb-3 relative max-w-xs bg-white text-stone-800 text-xs font-medium py-3 px-4 rounded-xl shadow-lg border border-[#C29B38]/40 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="absolute -top-1.5 -left-1.5 bg-[#F4EFE6] hover:bg-stone-200 text-stone-600 rounded-full p-0.5 border border-[#C29B38]/30"
            aria-label="Tutup pesan bantuan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-heading font-bold text-[#064E3B] text-sm mb-0.5">Konsultasi Sewa Teratak</p>
          <p className="text-stone-600">Tanya rekomendasi ukuran tenda pekarangan dan cek jadwal acara langsung ke pengelola.</p>
          
          {/* Arrow pointing down */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-[#C29B38]/40 transform rotate-45"></div>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={getWhatsAppUrl({})}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Chat WhatsApp dengan Admin Teratak Andika Raja"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping"></span>

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2] relative z-10" />

        {/* Badge status online */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-300 border-2 border-white rounded-full"></span>
      </a>
    </aside>
  );
}
