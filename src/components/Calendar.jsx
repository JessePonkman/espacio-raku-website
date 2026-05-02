import { useState } from 'react';
import { useAvailability, toIso } from '../hooks/useAvailability.js';
import { ChevronDown } from './icons/Icons.jsx';

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const DAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

function buildGrid(year, month) {
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function Calendar({ onSelect }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const [selected, setSelected] = useState(null);
  const { unavailable, loading } = useAvailability();

  const cells = buildGrid(view.y, view.m);

  const move = (delta) => {
    const date = new Date(view.y, view.m + delta, 1);
    setView({ y: date.getFullYear(), m: date.getMonth() });
  };

  const isPast = (d) => d < today;
  const isUnavailable = (d) => unavailable.has(toIso(d));

  const pick = (d) => {
    if (!d || isPast(d) || isUnavailable(d)) return;
    const iso = toIso(d);
    setSelected(iso);
    onSelect?.(iso);
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
      <iframe
        srcDoc="
      <!DOCTYPE html>
      <html lang='en'>
      <head>
        <style>
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f9fafb;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          .container {
            text-align: center;
            padding: 40px;
            border: 2px dashed #d1d5db;
            border-radius: 12px;
            background: white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          h2 {
            margin-bottom: 10px;
            color: #111827;
          }
          p {
            color: #6b7280;
            font-size: 14px;
          }
          .calendar-mock {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 6px;
          }
          .day {
            height: 40px;
            background: #e5e7eb;
            border-radius: 6px;
          }
        </style>
      </head>
      <body>
        <div class='container'>
          <h2>Booking Calendar</h2>
          <p>This is a temporary placeholder. The scheduling system will be available soon.</p>
          <div class='calendar-mock'>
            <div class='day'></div><div class='day'></div><div class='day'></div>
            <div class='day'></div><div class='day'></div><div class='day'></div>
            <div class='day'></div>
            <div class='day'></div><div class='day'></div><div class='day'></div>
            <div class='day'></div><div class='day'></div><div class='day'></div>
            <div class='day'></div>
          </div>
        </div>
      </body>
      </html>
    "
        width="100%"
        height="500"
        style={{ border: 'none', borderRadius: '12px' }}
      ></iframe>
    </div>
  );
}
