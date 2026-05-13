import { useState } from 'react';
import { C } from './theme';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import HomeView from './views/HomeView';
import ChatsView from './views/ChatsView';
import SchoolView from './views/SchoolView';
import ProfileView from './views/ProfileView';
import AuthScreen from './views/AuthScreen';
import React from 'react';

export default function App() {
  const [user, setUser] = useState(null); // null = logged out
  const [page, setPage] = useState('home');
  const [feedFilter, setFeedFilter] = useState('For You');

  // Called from AuthScreen when login/register succeeds
  function handleAuth(userData) {
    setUser(userData);
    setPage('home');
  }

  // Called from ProfileView's Log out button
  function handleLogout() {
    setUser(null);
  }

  if (!user) {
    return <AuthScreen onAuth={handleAuth} />;
  }

  const nopad = page === 'chats';

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        background: C.bgDark,
        color: C.textPrimary,
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
        overflow: 'hidden',
      }}
    >
      <Sidebar page={page} onNav={setPage} />

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Topbar
          page={page}
          feedFilter={feedFilter}
          setFeedFilter={setFeedFilter}
        />

        <main
          style={{
            flex: 1,
            overflow: 'hidden',
            padding: nopad ? 0 : 18,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {page === 'home' && <HomeView feedFilter={feedFilter} />}
          {page === 'chats' && <ChatsView />}
          {page === 'school' && <SchoolView />}
          {page === 'profile' && <ProfileView onLogout={handleLogout} />}
        </main>
      </div>
    </div>
  );
}