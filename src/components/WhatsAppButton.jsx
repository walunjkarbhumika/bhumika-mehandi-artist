import { MessageCircle } from 'lucide-react';
import { quickLink } from '../lib/whatsapp.js';

export default function WhatsAppButton({ service = '', children = 'Book on WhatsApp', className = 'btn btn-primary', icon = true }) {
  return (
    <a href={quickLink(service)} target="_blank" rel="noopener noreferrer" className={className}>
      {icon && <MessageCircle size={18} aria-hidden="true" />}
      {children}
    </a>
  );
}
