import { C } from '../theme';
import React from 'react';
/*
UI.jsx is  the project's internal component library. Contains the most basic building blocks used by everything else
*/

//Avatar: circle with initials, color derived from the name's char codes as an HSL hue

export function Avatar({ name = '', size = 34 }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const hue = [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        flexShrink: 0,
        background: `hsl(${hue},35%,28%)`,
        color: `hsl(${hue},55%,72%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.36,
        fontWeight: 700,
        userSelect: 'none',
      }}
    >
      {initials}
    </div>
  );
}

//Badge: colored label, looks up styles from a BADGE_STYLES map, falls back to grey
const BADGE_STYLES = {
  Student: { bg: '#1b3660', fg: '#82b8f8' },
  Teacher: { bg: '#1a4230', fg: '#6ed49a' },
  class: { bg: '#252565', fg: '#9090ee' },
  private: { bg: '#1a3d3d', fg: '#5abfbf' },
  global: { bg: '#4a2010', fg: '#e08858' },
  group: { bg: '#38184a', fg: '#c070e0' },
};

export function Badge({ label }) {
  const s = BADGE_STYLES[label] || { bg: '#333', fg: '#aaa' };
  return (
    <span
      style={{
        background: s.bg,
        color: s.fg,
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: 0.4,
        padding: '2px 7px',
        borderRadius: 4,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}

//Divider: separator line  1px div, horizontal or vertical depending on the vertical prop
export function Divider({ vertical = false, style = {} }) {
  return (
    <div
      style={{
        background: C.border,
        width: vertical ? 1 : '100%',
        height: vertical ? '100%' : 1,
        flexShrink: 0,
        ...style,
      }}
    />
  );
}

//IconBtn:  bare button, switches to accent color when active is true, used for likes, comments and sharing
export function IconBtn({ children, onClick, active, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: active ? C.accent1 : C.textSecondary,
        padding: '4px 6px',
        borderRadius: 6,
        fontSize: 13,
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        transition: 'color .15s',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
