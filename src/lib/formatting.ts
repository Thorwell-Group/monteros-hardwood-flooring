// Small formatting utilities used across templates.

export function formatPhoneE164(e164: string): string {
  // +19092798225 -> (909) 279-8225
  const digits = e164.replace(/\D/g, '').replace(/^1/, '');
  if (digits.length !== 10) return e164;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function priceRange(min: number, max: number, unit = '/sq ft'): string {
  return `$${min} – $${max}${unit}`;
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function readingTime(text: string): number {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
