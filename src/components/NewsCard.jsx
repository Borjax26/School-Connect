import { C } from "../theme";
import React from "react";

//Purely presentational, just renders the fields from the item prop with no logic or state.
export default function NewsCard({ item }) {
  return (
    <article style={{
      background: C.surface, borderRadius: 10,
      padding: "11px 13px", marginBottom: 9,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
        <span style={{ fontWeight: 600, fontSize: 12, color: C.accent1 }}>{item.org}</span>
        <span style={{
          fontSize: 10, padding: "1px 6px", borderRadius: 4,
          background: "#5a100a33", color: "#e07070", fontWeight: 600,
        }}>
          {item.school}
        </span>
        <span style={{ fontSize: 10, color: C.textMuted, marginLeft: "auto" }}>{item.time}</span>
      </div>
      <div style={{ fontWeight: 600, fontSize: 13, color: C.textPrimary, marginBottom: 4 }}>{item.title}</div>
      <div style={{ fontSize: 12, color: C.textSecondary, lineHeight: 1.45 }}>{item.desc}</div>
    </article>
  );
}