import { C } from '../theme';
import { Avatar, Divider } from './UI';
import { ME } from '../data/mock';
import React from 'react';

const NAV = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'chats', label: 'Chats', icon: '💬' },
  { id: 'school', label: 'School', icon: '🏫' },
];

export default function Sidebar({ page, onNav }) {
  return (
    <aside
      style={{
        width: 190,
        flexShrink: 0,
        background: '#1e1e1e',
        display: 'flex',
        flexDirection: 'column',
        borderRight: `1px solid ${C.border}`,
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: '16px 14px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <img
          src="https://www.school-connect.eu/assets/Logo-CILsOnJo.png"
          width="135"
        />
      </div>

      <Divider />

      {/* Nav links */}
      <nav style={{ padding: '10px 8px', flex: 1 }}>
        {NAV.map((n) => (
          <div
            key={n.id}
            onClick={() => onNav(n.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '9px 10px',
              borderRadius: 8,
              cursor: 'pointer',
              marginBottom: 2,
              background: page === n.id ? C.surface : 'transparent',
              color: page === n.id ? C.textPrimary : C.textSecondary,
              fontWeight: page === n.id ? 600 : 400,
              fontSize: 14,
              transition: 'background .15s, color .15s',
            }}
          >
            <span style={{ fontSize: 15, width: 18, textAlign: 'center' }}>
              {n.icon}
            </span>
            {n.label}
          </div>
        ))}
      </nav>

      <Divider />

      {/* User card */}
      <div
        onClick={() => onNav('profile')}
        style={{
          padding: '10px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          cursor: 'pointer',
          background: page === 'profile' ? C.surface : 'transparent',
          transition: 'background .15s',
        }}
      >
        <Avatar name={ME.name} size={32} />
        <div style={{ overflow: 'hidden' }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: C.textPrimary,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {ME.name}
          </div>
          <div style={{ fontSize: 11, color: C.textMuted }}>{ME.role}</div>
        </div>
      </div>
    </aside>
  );
}
