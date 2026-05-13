import { useState } from 'react';
import { C } from '../theme';
import { Avatar, Badge, Divider } from '../components/UI';
import { CHATS, MESSAGES } from '../data/mock';
import React from 'react';

export default function ChatsView() {
  const [selected, setSelected] = useState(1);
  const [msgs, setMsgs] = useState(MESSAGES);
  const [input, setInput] = useState('');

  const chat = CHATS.find((c) => c.id === selected);
  const thread = msgs[selected] || [];

  function send() {
    const text = input.trim();
    if (!text) return;
    const now = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setMsgs((m) => ({
      ...m,
      [selected]: [
        ...(m[selected] || []),
        { id: Date.now(), from: 'Me', me: true, text, time: now },
      ],
    }));
    setInput('');
  }

  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
      {/* Chat list */}
      {/* This section manages the chat list on the central left side. */}
      <div
        style={{
          width: 210,
          flexShrink: 0,
          overflowY: 'auto',
          borderRight: `1px solid ${C.border}`,
        }}
      >
        {CHATS.map((c) => (
          <div
            key={c.id}
            onClick={() => setSelected(c.id)}
            style={{
              padding: '11px 12px',
              cursor: 'pointer',
              background: selected === c.id ? C.surfaceHi : 'transparent',
              borderBottom: `1px solid ${C.border}`,
              transition: 'background .12s',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 4,
              }}
            >
              <Avatar name={c.name} size={28} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.textPrimary,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {c.name}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: 3,
                }}
              >
                <span style={{ fontSize: 10, color: C.textMuted }}>
                  {c.time}
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                paddingLeft: 36,
              }}
            >
              <Badge label={c.type} />
              <span
                style={{
                  fontSize: 11,
                  color: C.textMuted,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {c.last}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Conversation */}
      {/* This section manages the chat itself. */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Chat header */}
        {/* This section manages the chat header. */}
        <div
          style={{
            padding: '10px 14px',
            borderBottom: `1px solid ${C.border}`,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            background: '#222',
            flexShrink: 0,
          }}
        >
          <Avatar name={chat?.name || ''} size={30} />
          <div>
            <div
              style={{ fontWeight: 600, fontSize: 14, color: C.textPrimary }}
            >
              {chat?.name}
            </div>
            <div
              style={{
                fontSize: 11,
                color: C.textMuted,
                textTransform: 'capitalize',
              }}
            >
              {chat?.type} chat
            </div>
          </div>
        </div>

        {/* Messages */}
        {/* This section manages the main chat part, the messages. */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px' }}>
          {thread.map((m) => (
            <div
              key={m.id}
              style={{
                display: 'flex',
                justifyContent: m.me ? 'flex-end' : 'flex-start',
                marginBottom: 10,
              }}
            >
              <div style={{ maxWidth: '65%' }}>
                {!m.me && (
                  <div
                    style={{
                      fontSize: 10,
                      color: C.textMuted,
                      marginBottom: 2,
                    }}
                  >
                    {m.from}
                  </div>
                )}
                <div
                  style={{
                    background: m.me ? C.accent1 : C.surfaceHi,
                    color: C.textPrimary,
                    borderRadius: m.me
                      ? '12px 12px 4px 12px'
                      : '12px 12px 12px 4px',
                    padding: '8px 12px',
                    fontSize: 13,
                    lineHeight: 1.45,
                  }}
                >
                  {m.text}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: C.textMuted,
                    textAlign: m.me ? 'right' : 'left',
                    marginTop: 2,
                  }}
                >
                  {m.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        {/* This section manages the lower central part, where the Input is. */}
        <div
          style={{
            padding: '10px 14px',
            borderTop: `1px solid ${C.border}`,
            display: 'flex',
            gap: 8,
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Write a message..."
            style={{
              flex: 1,
              background: C.surfaceHi,
              border: 'none',
              borderRadius: 8,
              padding: '8px 12px',
              color: C.textPrimary,
              fontSize: 13,
              outline: 'none',
            }}
          />
          <button
            onClick={send}
            style={{
              background: C.accent1,
              border: 'none',
              borderRadius: 8,
              padding: '8px 16px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
