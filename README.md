# School-Connect

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Borjax26/School-Connect)

> A social platform for students and teachers to connect, share posts, and communicate within and across schools.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Components](#components)
- [Views](#views)
- [Getting Started](#getting-started)

---

## Overview

School Connect is a React-based web app that simulates a school-oriented social network. Users can log in or register, browse a post feed filtered by scope (For You / School / Global), send messages in chats, view school info and news, and manage their profile.

The UI is entirely dark-themed, built with inline styles using a shared theme object (`src/theme.js`) that centralizes all colors and design tokens.

---

## Tech Stack

- **React 18** — UI framework
- **react-scripts** — Build tooling (Create React App)
- **Inline styles** — All styling is done via JavaScript style objects, no CSS files or external UI libraries

---

## Project Structure

```
src/
├── App.jsx                  # Root component — routing, auth state
├── theme.js                 # Global color/design tokens (C object)
├── data/
│   └── mock.js              # Mock data: posts, chats, messages, school, news, user
├── components/
│   ├── UI.jsx               # Base component library (Avatar, Badge, Divider, IconBtn)
│   ├── Sidebar.jsx          # Left navigation sidebar
│   ├── Topbar.jsx           # Top bar with feed tabs or page title
│   ├── PostCard.jsx         # Individual post card
│   └── NewsCard.jsx         # Individual news item card
└── views/
    ├── AuthScreen.jsx       # Login and registration screen
    ├── HomeView.jsx         # Post feed + school news column
    ├── ChatsView.jsx        # Messaging interface
    ├── SchoolView.jsx       # School info, stats, classes, and news
    └── ProfileView.jsx      # User profile and logout
```

---

## Features

### 🔐 Authentication
- Login and registration forms with basic validation
- Role selection (Student / Teacher) on registration
- Auth state managed in `App.jsx`; the entire app is gated behind the auth screen

### 🏠 Home Feed
- Three filter tabs: **For You**, **School**, **Global**
- Posts are filtered from mock data based on the active tab
- Right-side column shows school news items

### 💬 Chats
- Chat list on the left showing conversations with type badges (class, private, group, global)
- Full message thread view with sent/received bubble styling
- Send messages with Enter key or the Send button
- Message state is local (React state, not persisted)

### 🏫 School
- Header card with school name, address, and key stats (students, staff, classes)
- Class tags list
- Country and admin details
- School news feed

### 👤 Profile
- Displays the current user's info: name, role, school, class, year, country, date of birth
- Log out button that clears auth state and returns to the login screen

---

## Components

### `UI.jsx` — Base Component Library

| Component | Description |
|-----------|-------------|
| `Avatar` | Circular avatar with initials; color derived from the name's char codes as an HSL hue |
| `Badge`  | Colored label pill; style determined by label value (Student, Teacher, class, private, group, global) |
| `Divider` | 1px separator line, horizontal or vertical |
| `IconBtn` | Bare icon button; turns accent-colored when `active={true}` |

### `Sidebar.jsx`
Left navigation with links to Home, Chats, and School. The bottom user card navigates to the Profile view.

### `Topbar.jsx`
Shows feed filter tabs on the Home page; shows a plain title for all other pages.

### `PostCard.jsx`
Renders a single post with author avatar, role badge, school, country, content, and timestamp.

### `NewsCard.jsx`
Purely presentational card for a news item: org name, school tag, time, title, and description.

---

## Views

### `AuthScreen.jsx`
Handles both login and registration in a single screen with a toggle. On success it calls `onAuth(userData)` which is handled by `App.jsx`.

### `HomeView.jsx`
Renders the filtered post list and the news sidebar. Receives `feedFilter` as a prop from `App.jsx`.

### `ChatsView.jsx`
Full messaging UI: chat list, message thread, and input box. State is local per session.

### `SchoolView.jsx`
Informational view about the user's school, pulling from `SCHOOL` and `NEWS` mock data.

### `ProfileView.jsx`
Shows user details from the `ME` mock object and a logout button.

---

## Getting Started

### Prerequisites

- Node.js 16+
- npm

### Install & Run

```bash
npm install
npm start
```

The app will open at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

---

## Notes

- All data is mocked in `src/data/mock.js` — there is no backend or API integration
- The `theme.js` file exports a `C` object used everywhere for consistent colors (backgrounds, surfaces, accents, text levels, borders)
- The app uses no routing library; navigation is handled via a `page` state string in `App.jsx`
