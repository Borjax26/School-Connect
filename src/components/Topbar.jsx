import { C } from '../theme';
import React from 'react';

/*
Topbar: when page is home shows the FeedTabs component plus a "School News →" label. For other pages looks up the title in a TITLES object. The "School" tab gets a ▾ arrow appended.
*/
const TITLES = {
  home: null,
  chats: 'Messages',
  school: 'School',
  profile: 'My Profile',
};

export default function Topbar({ page, feedFilter, setFeedFilter }) {
  return (
    <header
      style={{
        height: 48,
        flexShrink: 0,
        background: '#222',
        borderBottom: `1px solid ${C.border}`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        gap: 8,
      }}
    >
      {page === 'home' && (
        <>
          <FeedTabs active={feedFilter} onChange={setFeedFilter} />
          <div style={{ flex: 1 }} />
          <span style={{ fontSize: 12, color: C.textMuted, fontWeight: 500 }}>
            School News →
          </span>
        </>
      )}
      {page !== 'home' && (
        <span style={{ fontWeight: 700, fontSize: 15, color: C.textPrimary }}>
          {TITLES[page]}
        </span>
      )}
    </header>
  );
}

function FeedTabs({ active, onChange }) {
  const tabs = ['For You', 'School', 'Global'];
  return (
    <div
      style={{
        display: 'flex',
        background: '#333',
        borderRadius: 8,
        padding: 3,
        gap: 2,
      }}
    >
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          style={{
            background: active === t ? '#3d8f90' : 'transparent',
            color: active === t ? '#fff' : '#999',
            border: 'none',
            borderRadius: 6,
            padding: '4px 13px',
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background .15s, color .15s',
          }}
        >
          {t}
          {t === 'School' ? ' ▾' : ''}
        </button>
      ))}
    </div>
  );
}
