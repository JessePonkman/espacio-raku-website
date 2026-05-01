import { useEffect, useState } from 'react';

/**
 * Returns availability data: a Set of ISO yyyy-mm-dd strings for unavailable days.
 *
 * Currently uses MOCK data so the UI is fully functional without a backend.
 * To wire this up later, replace the body with one of:
 *
 *   1) Google Calendar (recommended via a serverless function — never expose API keys in the browser):
 *      const res = await fetch('/api/availability?from=...&to=...');
 *      const { unavailable } = await res.json();  // ['2026-05-12', ...]
 *
 *   2) Booking system (Beds24, Lodgify, Hostaway, custom backend):
 *      const res = await fetch('/api/bookings?cabin=raku-2-4');
 *      const { unavailable } = await res.json();
 *
 *   3) iCal feed (Google Calendar / Airbnb / Booking export):
 *      Parse the .ics on the server and expose a simple JSON endpoint.
 *
 * The component contract stays the same — only this hook changes.
 */
export function useAvailability(/* { from, to, cabinId } = {} */) {
  const [unavailable, setUnavailable] = useState(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // MOCK: simulate a network call returning a few unavailable dates this & next month
    const t = setTimeout(() => {
      const today = new Date();
      const mockDates = [3, 4, 5, 12, 13, 19, 24, 25, 26].map((d) => {
        const date = new Date(today.getFullYear(), today.getMonth(), d);
        return toIso(date);
      });
      const nextMonth = [7, 8, 9, 15, 22, 23].map((d) => {
        const date = new Date(today.getFullYear(), today.getMonth() + 1, d);
        return toIso(date);
      });
      setUnavailable(new Set([...mockDates, ...nextMonth]));
      setLoading(false);
    }, 350);
    return () => clearTimeout(t);
  }, []);

  return { unavailable, loading };
}

export function toIso(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
