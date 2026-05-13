import { C } from '../theme';
import { Avatar, Badge } from '../components/UI';
import { ME } from '../data/mock';
import React from 'react';

const SETTINGS = ['Notifications', 'Privacy', 'Appearance', 'Language'];

export default function ProfileView({ onLogout }) {
  return (
    <div style={{ overflowY: 'auto', maxWidth: 440 }}>
      {/* Profile card */}
      <div
        style={{
          background: C.surface,
          borderRadius: 14,
          padding: '24px 22px',
          marginBottom: 14,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <Avatar name={ME.name} size={72} />
          <div
            style={{
              fontWeight: 700,
              fontSize: 19,
              color: C.textPrimary,
              marginTop: 12,
            }}
          >
            {ME.name}
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
            <Badge label={ME.role} />
            <span style={{ fontSize: 11, color: C.accent1, fontWeight: 500 }}>
              {ME.school}
            </span>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 16 }}>
          {[
            ['School', ME.school],
            ['Class', ME.class],
            ['Year', ME.year],
            ['Country', 'Germany 🇩🇪'],
            ['Born', ME.dob],
          ].map(([k, v]) => (
            <div
              key={k}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderBottom: `1px solid ${C.border}`,
                fontSize: 13,
              }}
            >
              <span style={{ color: C.textMuted }}>{k}</span>
              <span style={{ color: C.textPrimary, fontWeight: 500 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Log out */}
      <button
        onClick={onLogout}
        style={{
          width: '100%',
          background: '#3a1010',
          border: `1px solid ${C.error}`,
          borderRadius: 10,
          padding: '11px',
          color: '#e07070',
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Log out
      </button>
    </div>
  );
}
