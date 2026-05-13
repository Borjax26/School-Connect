import { useState } from 'react';
import { C } from '../theme';
import React from 'react';

// ─── tiny reusable field ───────────────────────────────────────────────────
function Field({ label, type = 'text', value, onChange, placeholder }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 14 }}>
      <label
        style={{
          display: 'block',
          fontSize: 11,
          fontWeight: 700,
          color: C.textMuted,
          letterSpacing: 0.6,
          textTransform: 'uppercase',
          marginBottom: 5,
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          background: C.surfaceHi,
          border: `1px solid ${focused ? C.accent1 : C.border}`,
          borderRadius: 8,
          padding: '9px 12px',
          color: C.textPrimary,
          fontSize: 13,
          outline: 'none',
          transition: 'border-color .15s',
        }}
      />
    </div>
  );
}

// ─── Logo mark ────────────────────────────────────────────────────────────
function Logo() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'center',
        marginBottom: 28,
      }}
    >
      <img
        src="https://www.school-connect.eu/assets/Logo-CILsOnJo.png"
        width="205"
      />
    </div>
  );
}

// ─── Login ────────────────────────────────────────────────────────────────
function LoginForm({ onLogin, onGoRegister }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');

  function handle() {
    if (!email || !pass) {
      setErr('Please fill in all fields.');
      return;
    }
    setErr('');
    onLogin({ email });
  }

  return (
    <>
      <h2
        style={{
          margin: '0 0 4px',
          fontSize: 18,
          fontWeight: 700,
          color: C.textPrimary,
          textAlign: 'center',
        }}
      >
        Welcome back
      </h2>
      <p
        style={{
          margin: '0 0 22px',
          fontSize: 12,
          color: C.textMuted,
          textAlign: 'center',
        }}
      >
        Log in to your School Connect account
      </p>

      <Field
        label="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@school.de"
      />
      <Field
        label="Password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="••••••••"
      />

      {err && (
        <div
          style={{
            fontSize: 12,
            color: '#e07070',
            marginBottom: 10,
            background: '#3a101022',
            borderRadius: 6,
            padding: '6px 10px',
          }}
        >
          {err}
        </div>
      )}

      <button
        onClick={handle}
        style={{
          width: '100%',
          background: C.accent1,
          border: 'none',
          borderRadius: 8,
          padding: '10px',
          color: '#fff',
          fontSize: 14,
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: `0 4px 14px ${C.accent1}44`,
          transition: 'opacity .15s',
          marginTop: 2,
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = '.88')}
        onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
      >
        Log in
      </button>

      <p
        style={{
          textAlign: 'center',
          fontSize: 12,
          color: C.textMuted,
          marginTop: 18,
          marginBottom: 0,
        }}
      >
        Don't have an account?{' '}
        <span
          onClick={onGoRegister}
          style={{ color: C.accent1, cursor: 'pointer', fontWeight: 600 }}
        >
          Register
        </span>
      </p>
    </>
  );
}

// ─── Register ─────────────────────────────────────────────────────────────
function RegisterForm({ onRegister, onGoLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [role, setRole] = useState('Student');
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [err, setErr] = useState('');

  function handle() {
    if (!name || !email || !school || !pass || !pass2) {
      setErr('Please fill in all fields.');
      return;
    }
    if (pass !== pass2) {
      setErr('Passwords do not match.');
      return;
    }
    setErr('');
    onRegister({ name, email, school, role });
  }

  const roleBtn = (r) => (
    <button
      key={r}
      onClick={() => setRole(r)}
      style={{
        flex: 1,
        padding: '7px 0',
        borderRadius: 7,
        fontSize: 13,
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all .15s',
        border: `1px solid ${role === r ? C.accent1 : C.border}`,
        background: role === r ? `${C.accent1}22` : 'transparent',
        color: role === r ? C.accent1 : C.textSecondary,
      }}
    >
      {r}
    </button>
  );

  return (
    <>
      <h2
        style={{
          margin: '0 0 4px',
          fontSize: 18,
          fontWeight: 700,
          color: C.textPrimary,
          textAlign: 'center',
        }}
      >
        Create account
      </h2>
      <p
        style={{
          margin: '0 0 20px',
          fontSize: 12,
          color: C.textMuted,
          textAlign: 'center',
        }}
      >
        Join your school community
      </p>

      {/* Role picker */}
      <div style={{ marginBottom: 14 }}>
        <label
          style={{
            display: 'block',
            fontSize: 11,
            fontWeight: 700,
            color: C.textMuted,
            letterSpacing: 0.6,
            textTransform: 'uppercase',
            marginBottom: 6,
          }}
        >
          I am a
        </label>
        <div style={{ display: 'flex', gap: 8 }}>
          {['Student', 'Teacher'].map(roleBtn)}
        </div>
      </div>

      <Field
        label="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Jonas Jost"
      />
      <Field
        label="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@school.de"
      />
      <Field
        label="School"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        placeholder="BBS-Bingen"
      />
      <Field
        label="Password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="••••••••"
      />
      <Field
        label="Confirm password"
        type="password"
        value={pass2}
        onChange={(e) => setPass2(e.target.value)}
        placeholder="••••••••"
      />

      {err && (
        <div
          style={{
            fontSize: 12,
            color: '#e07070',
            marginBottom: 10,
            background: '#3a101022',
            borderRadius: 6,
            padding: '6px 10px',
          }}
        >
          {err}
        </div>
      )}

      <button
        onClick={handle}
        style={{
          width: '100%',
          background: C.accent1,
          border: 'none',
          borderRadius: 8,
          padding: '10px',
          color: '#fff',
          fontSize: 14,
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: `0 4px 14px ${C.accent1}44`,
          transition: 'opacity .15s',
          marginTop: 2,
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = '.88')}
        onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
      >
        Create account
      </button>

      <p
        style={{
          textAlign: 'center',
          fontSize: 12,
          color: C.textMuted,
          marginTop: 18,
          marginBottom: 0,
        }}
      >
        Already have an account?{' '}
        <span
          onClick={onGoLogin}
          style={{ color: C.accent1, cursor: 'pointer', fontWeight: 600 }}
        >
          Log in
        </span>
      </p>
    </>
  );
}

// ─── Main exported screen ─────────────────────────────────────────────────
export default function AuthScreen({ onAuth }) {
  const [view, setView] = useState('login'); // 'login' | 'register'

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        background: C.bgDark,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: 'fixed',
          top: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 300,
          background: `radial-gradient(ellipse, ${C.accent1}18 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: 380,
          background: C.surface,
          borderRadius: 16,
          border: `1px solid ${C.border}`,
          padding: '30px 28px',
          boxShadow: '0 8px 40px #0006',
          position: 'relative',
        }}
      >
        <Logo />

        {view === 'login' ? (
          <LoginForm
            onLogin={onAuth}
            onGoRegister={() => setView('register')}
          />
        ) : (
          <RegisterForm
            onRegister={onAuth}
            onGoLogin={() => setView('login')}
          />
        )}
      </div>
    </div>
  );
}
