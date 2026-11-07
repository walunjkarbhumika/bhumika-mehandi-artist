import { useState } from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { services } from '../config/services.js';
import { validateBooking } from '../lib/validate.js';
import { buildMessage, waLink } from '../lib/whatsapp.js';

const empty = { name: '', phone: '', service: '', date: '', location: '', design: '' };

function Field({ id, label, children, hint, error }) {
  return (
    <div>
      <label htmlFor={`f-${id}`} className="mb-1.5 block text-sm font-bold">{label}</label>
      {children}
      {hint && !error[id] && <p className="mt-1 text-xs text-brown/60">{hint}</p>}
      {error[id] && <p id={`e-${id}`} role="alert" className="mt-1 text-sm font-semibold text-red-800">{error[id]}</p>}
    </div>
  );
}

export default function BookingForm({ initialService = '' }) {
  const [v, setV] = useState({ ...empty, service: initialService });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);
  const today = new Date().toISOString().slice(0, 10);

  const set = (k) => (e) => {
    setV({ ...v, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  const submit = (e) => {
    e.preventDefault();
    const err = validateBooking(v);
    setErrors(err);
    if (Object.keys(err).length) {
      document.getElementById(`f-${Object.keys(err)[0]}`)?.focus();
      return;
    }
    const url = waLink(buildMessage({ ...v, name: `${v.name.trim()} (${v.phone.trim()})`, location: v.location.trim(), design: v.design.trim() }));
    window.open(url, '_blank', 'noopener');
    setSent(url);
  };

  if (sent) {
    return (
      <div role="status" className="rounded-3xl bg-white p-8 text-center shadow-soft">
        <CheckCircle2 className="mx-auto text-maroon" size={44} />
        <h3 className="mt-4 text-3xl font-semibold">Your enquiry is ready</h3>
        <p className="mt-3 text-brown/75">WhatsApp should have opened with your details filled in. Press send there to reach Bhumika. If nothing opened, use the button below.</p>
        <a href={sent} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6"><MessageCircle size={18} /> Open WhatsApp</a>
        <button type="button" onClick={() => { setSent(null); setV(empty); }} className="mt-4 block w-full text-sm font-semibold text-maroon underline">Make another enquiry</button>
      </div>
    );
  }

  const props = (id) => ({ id: `f-${id}`, value: v[id], onChange: set(id), 'aria-invalid': !!errors[id], 'aria-describedby': errors[id] ? `e-${id}` : undefined, className: `field ${errors[id] ? 'field-error' : ''}` });

  return (
    <form onSubmit={submit} noValidate className="space-y-5 rounded-3xl bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field error={errors} id="name" label="Your name"><input {...props('name')} autoComplete="name" /></Field>
        <Field error={errors} id="phone" label="Mobile number"><input {...props('phone')} type="tel" inputMode="tel" autoComplete="tel" placeholder="98765 43210" /></Field>
      </div>
      <Field error={errors} id="service" label="Service">
        <select {...props('service')}>
          <option value="">Select a service</option>
          {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
        </select>
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field error={errors} id="date" label="Event date"><input {...props('date')} type="date" min={today} /></Field>
        <Field error={errors} id="location" label="Event location" ><input {...props('location')} placeholder="Area / venue, e.g. Hinjewadi" /></Field>
      </div>
      <Field error={errors} id="design" label="Preferred design (optional)" hint="Describe your idea or mention a reference you will share on WhatsApp.">
        <textarea {...props('design')} rows={3} maxLength={500} />
      </Field>
      <button type="submit" className="btn btn-primary w-full"><MessageCircle size={18} /> Send enquiry on WhatsApp</button>
      <p className="text-center text-xs text-brown/60">Your details are only used to prepare the WhatsApp message. Nothing is stored on this website.</p>
    </form>
  );
}
