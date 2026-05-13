import { useState } from 'react';
import { C } from '../theme';
import { Avatar, Badge, IconBtn } from './UI';
import React from 'react';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  return (
    <article
      style={{
        background: C.surface,
        borderRadius: 12,
        padding: '13px 15px',
        marginBottom: 10,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          marginBottom: 9,
        }}
      >
        <Avatar name={post.author} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{ fontWeight: 600, fontSize: 13, color: C.textPrimary }}
            >
              {post.author}
            </span>
            <Badge label={post.role} />
            <span style={{ fontSize: 11, color: C.accent1, fontWeight: 500 }}>
              {post.school}
            </span>
            <span style={{ fontSize: 11, color: C.textMuted }}>
              {post.country}
            </span>
          </div>
        </div>
        <span style={{ fontSize: 11, color: C.textMuted, flexShrink: 0 }}>
          {post.time}
        </span>
      </div>

      {/* Body */}
      <p
        style={{
          margin: '0 0 10px',
          fontSize: 14,
          color: C.textPrimary,
          lineHeight: 1.55,
        }}
      >
        {post.content}
      </p>
    </article>
  );
}