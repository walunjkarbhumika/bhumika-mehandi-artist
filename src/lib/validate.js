export function validateBooking(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Enter your name.';
  const phone = v.phone.replace(/[\s-]/g, '');
  if (!/^(\+?91)?0?[6-9]\d{9}$/.test(phone)) e.phone = 'Enter a valid 10-digit mobile number.';
  if (!v.service) e.service = 'Choose a service.';
  if (!v.date) e.date = 'Pick your event date.';
  else if (new Date(v.date + 'T23:59') < new Date()) e.date = 'Pick today or a future date.';
  if (v.location.trim().length < 3) e.location = 'Enter the event area or venue.';
  if (v.design.length > 500) e.design = 'Keep this under 500 characters.';
  return e;
}
