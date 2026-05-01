import { useState } from 'react';
import { useAvailability, toIso } from '../hooks/useAvailability.js';
import { ChevronDown } from './icons/Icons.jsx';

const MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const DAYS = ['L','M','M','J','V','S','D'];

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
    <div className="cal">
      <div className="cal-head">
        <button className="cal-nav" onClick={() => move(-1)} aria-label="Mes anterior">
          <ChevronDown style={{ transform: 'rotate(90deg)' }} />
        </button>
        <strong>{MONTHS[view.m]} {view.y}</strong>
        <button className="cal-nav" onClick={() => move(1)} aria-label="Mes siguiente">
          <ChevronDown style={{ transform: 'rotate(-90deg)' }} />
        </button>
      </div>

      <div className="cal-weekdays">
        {DAYS.map((d, i) => <span key={i}>{d}</span>)}
      </div>

      <div className={`cal-grid ${loading ? 'is-loading' : ''}`} aria-busy={loading}>
        {cells.map((d, i) => {
          if (!d) return <span key={i} className="cal-cell empty" />;
          const past = isPast(d);
          const unavail = isUnavailable(d);
          const iso = toIso(d);
          const isSel = selected === iso;
          const cls = ['cal-cell'];
          if (past) cls.push('past');
          if (unavail) cls.push('unavailable');
          if (!past && !unavail) cls.push('available');
          if (isSel) cls.push('selected');
          return (
            <button
              key={iso}
              type="button"
              className={cls.join(' ')}
              disabled={past || unavail}
              onClick={() => pick(d)}
              aria-label={unavail ? `${d.getDate()} no disponible` : `${d.getDate()} disponible`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>

      <div className="cal-legend">
        <span><i className="dot dot-avail" /> Disponible</span>
        <span><i className="dot dot-unavail" /> No disponible</span>
        <span><i className="dot dot-sel" /> Seleccionado</span>
      </div>
    </div>
  );
}
