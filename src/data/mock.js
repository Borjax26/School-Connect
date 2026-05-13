export const POSTS = [
  {
    id: 1, author: "Jonas Jost", role: "Student", school: "BBS-Bingen",
    country: "DE", time: "8min",
    content: "Och männo! Schon wieder Eins in Mathe 😤",
    likes: 12, comments: 3,
  },
  {
    id: 2, author: "Anna Schmidt", role: "Teacher", school: "BBS-Bingen",
    country: "DE", time: "45min",
    content: "Reminder: tomorrow's biology test covers chapters 4–7. Study well! 📚",
    likes: 31, comments: 8,
  },
  {
    id: 3, author: "Lena Müller", role: "Student", school: "BBS-Bingen",
    country: "DE", time: "2h",
    content: "Anyone forming a study group for the upcoming math exam? DM me!",
    likes: 19, comments: 14,
  },
  {
    id: 4, author: "Max Weber", role: "Student", school: "Global",
    country: "ES", time: "3h",
    content: "Greetings from Spain! Erasmus is going amazing so far 🇪🇸",
    likes: 47, comments: 22,
  },
  {
    id: 5, author: "Sofia Rossi", role: "Student", school: "Liceo Roma",
    country: "IT", time: "4h",
    content: "Just finished our school project presentation. Feeling proud! 🎉",
    likes: 38, comments: 11,
  },
];

export const NEWS = [
  {
    id: 1, org: "AG Demokratie", school: "BBS-Bingen", time: "7h",
    title: "Demokratie-Woche",
    desc: "Events from Nov 05–09. Daily workshops on democracy, anti-racism, freedom of opinion & more.",
  },
  {
    id: 2, org: "Schülervertretung", school: "BBS-Bingen", time: "2h",
    title: "SV Elections this week",
    desc: "Student council elections take place Thursday. All students are invited to participate.",
  },
  {
    id: 3, org: "Sekretariat", school: "BBS-Bingen", time: "1d",
    title: "Office hours changed",
    desc: "Secretary's office closed Friday afternoon. Please plan appointments accordingly.",
  },
];

export const CHATS = [
  { id: 1, name: "Class 11B",       type: "class",   last: "When is the next test?",          time: "5min",  unread: 3 },
  { id: 2, name: "Jonas Jost",      type: "private", last: "Thanks for the notes!",            time: "20min", unread: 0 },
  { id: 3, name: "Global Chat",     type: "global",  last: "Has anyone seen the new schedule?",time: "1h",    unread: 12 },
  { id: 4, name: "Math Study Group",type: "group",   last: "Meeting tomorrow at 3pm",          time: "2h",    unread: 1 },
  { id: 5, name: "Ms. Becker",      type: "private", last: "Please bring your homework",       time: "3h",    unread: 0 },
];

export const MESSAGES = {
  1: [
    { id: 1, from: "Anna K.",  me: false, text: "When is the next test?",          time: "10:05" },
    { id: 2, from: "Me",       me: true,  text: "I think next Wednesday.",          time: "10:06" },
    { id: 3, from: "Tim B.",   me: false, text: "Yeah Wednesday, Mr. Keller confirmed it.", time: "10:08" },
  ],
  2: [
    { id: 1, from: "Jonas Jost", me: false, text: "Hey, do you have notes from yesterday's physics?", time: "09:30" },
    { id: 2, from: "Me",         me: true,  text: "Sure, I'll send them over!",    time: "09:32" },
    { id: 3, from: "Jonas Jost", me: false, text: "Thanks for the notes! 🙏",      time: "09:33" },
  ],
  3: [
    { id: 1, from: "Lisa",  me: false, text: "Has anyone seen the new schedule?", time: "08:00" },
    { id: 2, from: "Max",   me: false, text: "Check the school website.",          time: "08:02" },
    { id: 3, from: "Me",    me: true,  text: "Found it, thanks!",                  time: "08:05" },
  ],
  4: [
    { id: 1, from: "Lena",  me: false, text: "Meeting tomorrow at 3pm in room 204?", time: "14:00" },
    { id: 2, from: "Me",    me: true,  text: "Works for me!",                         time: "14:05" },
  ],
  5: [
    { id: 1, from: "Ms. Becker", me: false, text: "Please bring your homework tomorrow.", time: "Yesterday" },
    { id: 2, from: "Me",         me: true,  text: "Of course, I will!",                  time: "Yesterday" },
  ],
};

export const SCHOOL = {
  name: "BBS-Bingen",
  fullName: "Berufsbildende Schule Bingen",
  address: "Rochusallee 4, 55411 Bingen am Rhein",
  country: "Germany",
  classes: ["10A","10B","11A","11B","12A","12B","BGY 1","BGY 2"],
  students: 630,
  staff: 42,
  admin: "Dr. Herbert Schneider",
};

export const ME = {
  name: "Jonas Jost",
  role: "Student",
  school: "BBS-Bingen",
  class: "11B",
  year: "2025/26",
  country: "DE",
  dob: "15.03.2007",
};