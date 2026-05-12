import { useState } from 'react';
import { useAvailability, toIso } from '../hooks/useAvailability.js';
import { ChevronDown } from './icons/Icons.jsx';

const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];
const DAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

function buildGrid(year, month) {
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7;
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
    const d = new Date(view.y, view.m + delta, 1);
    setView({ y: d.getFullYear(), m: d.getMonth() });
  };

  const isPast = (d) => d < today;
  const isUnavailable = (d) => unavailable.has(toIso(d));

  const pick = (d) => {
    if (!d || isPast(d) || isUnavailable(d)) return;
    const iso = toIso(d);
    setSelected(iso);
    onSelect?.(iso);
  };

  const cellClass = (d) => {
    if (!d) return 'cal-cell empty';
    if (selected && toIso(d) === selected) return 'cal-cell selected';
    if (isPast(d)) return 'cal-cell past';
    if (isUnavailable(d)) return 'cal-cell unavailable';
    return 'cal-cell available';
  };

  return (
    <div className="cal" role="region" aria-label="Calendario de disponibilidad">
      <div className="cal-head">
        <button
          className="cal-nav"
          onClick={() => move(-1)}
          aria-label="Mes anterior"
        >
          <ChevronDown style={{ transform: 'rotate(90deg)' }} />
        </button>
        <strong>{MONTHS[view.m]} {view.y}</strong>
        <button
          className="cal-nav"
          onClick={() => move(1)}
          aria-label="Mes siguiente"
        >
          <ChevronDown style={{ transform: 'rotate(-90deg)' }} />
        </button>
      </div>

      <div className="cal-weekdays" aria-hidden="true">
        {DAYS.map((d, i) => <span key={i}>{d}</span>)}
      </div>

      <div className={`cal-grid${loading ? ' is-loading' : ''}`}>
        {cells.map((d, i) => (
          <button
            key={i}
            className={cellClass(d)}
            onClick={() => pick(d)}
            disabled={!d || isPast(d) || isUnavailable(d)}
            aria-label={
              d
                ? d.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })
                : undefined
            }
            aria-pressed={d && selected === toIso(d) ? true : undefined}
          >
            {d ? d.getDate() : ''}
          </button>
        ))}
      </div>

      <div className="cal-legend" aria-label="Referencias del calendario">
        <span><i className="dot dot-avail" aria-hidden="true" /> Disponible</span>
        <span><i className="dot dot-unavail" aria-hidden="true" /> No disponible</span>
        <span><i className="dot dot-sel" aria-hidden="true" /> Seleccionado</span>
      </div>
    </div>
  );
}
