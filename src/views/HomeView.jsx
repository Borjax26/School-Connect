import { C } from '../theme';
import PostCard from '../components/PostCard';
import NewsCard from '../components/NewsCard';
import { POSTS, NEWS } from '../data/mock';
import React from 'react';

export default function HomeView({ feedFilter }) {
  const posts =
    feedFilter === 'Global'
      ? POSTS
      : feedFilter === 'School'
      ? POSTS.filter((p) => p.school === 'BBS-Bingen')
      : POSTS.filter((p) => p.school === 'BBS-Bingen').slice(0, 3);

  return (
    <div
      style={{ display: 'flex', gap: 14, height: '100%', overflow: 'hidden' }}
    >
      {/* Feed */}
      {/* This section creates a postCard for the posts, and manages the main central part of the tab */}
      <div style={{ flex: 1, overflowY: 'auto', paddingRight: 2 }}>
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
        {posts.length === 0 && (
          <div
            style={{
              color: C.textMuted,
              fontSize: 14,
              textAlign: 'center',
              marginTop: 48,
            }}
          >
            No posts to show.
          </div>
        )}
      </div>

      {/* School News column */}
      {/* This section manages the News Coloumn on the right, it generates a News Card for each news post. */}
      <div style={{ width: 230, flexShrink: 0, overflowY: 'auto' }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: C.textMuted,
            letterSpacing: 0.8,
            marginBottom: 9,
            textTransform: 'uppercase',
          }}
        >
          School News
        </div>
        {NEWS.map((n) => (
          <NewsCard key={n.id} item={n} />
        ))}
      </div>
    </div>
  );
}