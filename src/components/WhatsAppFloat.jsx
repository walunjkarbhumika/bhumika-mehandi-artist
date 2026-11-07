import { MessageCircle } from 'lucide-react';
import { quickLink } from '../lib/whatsapp.js';

export default function WhatsAppFloat() {
  return (
    <a href={quickLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 items-center gap-2 rounded-full bg-[#1E8E4E] px-4 text-white shadow-soft transition hover:scale-105 sm:px-5">
      <MessageCircle size={24} aria-hidden="true" />
      <span className="hidden text-sm font-bold sm:inline">Book on WhatsApp</span>
    </a>
  );
}
