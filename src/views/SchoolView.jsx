import { C } from "../theme";
import NewsCard from "../components/NewsCard";
import { SCHOOL, NEWS } from "../data/mock";
import React from "react";

function StatCard({ label, value, color }) {
  return (
    <div style={{
      background: C.surfaceHi, borderRadius: 10,
      padding: "14px 10px", textAlign: "center", flex: 1,
    }}>
      <div style={{ fontSize: 28, fontWeight: 700, color }}>{value}</div>
      <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>{label}</div>
    </div>
  );
}

export default function SchoolView() {
  return (
    <div style={{ overflowY: "auto", maxWidth: 680 }}>
      {/* Header card */}
      <div style={{ background: C.surface, borderRadius: 14, padding: "20px 22px", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: C.accent1, display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 26, fontWeight: 900, color: "#fff",
          }}>S</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 18, color: C.textPrimary }}>{SCHOOL.name}</div>
            <div style={{ fontSize: 12, color: C.textMuted }}>{SCHOOL.fullName}</div>
            <div style={{ fontSize: 12, color: C.textMuted }}>{SCHOOL.address}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <StatCard label="Students" value={SCHOOL.students} color={C.accent1} />
          <StatCard label="Staff" value={SCHOOL.staff} color={C.accent2} />
          <StatCard label="Classes" value={SCHOOL.classes.length} color={C.success} />
        </div>
      </div>

      {/* Classes */}
      <div style={{ background: C.surface, borderRadius: 14, padding: "16px 20px", marginBottom: 14 }}>
        <SectionLabel>Classes</SectionLabel>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {SCHOOL.classes.map(cls => (
            <div key={cls} style={{
              background: C.surfaceHi, borderRadius: 8,
              padding: "6px 14px", fontSize: 13, color: C.textPrimary, fontWeight: 500,
            }}>
              {cls}
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div style={{ background: C.surface, borderRadius: 14, padding: "16px 20px", marginBottom: 14 }}>
        <SectionLabel>Details</SectionLabel>
        {[["Country", SCHOOL.country], ["Admin", SCHOOL.admin]].map(([k, v]) => (
          <InfoRow key={k} label={k} value={v} />
        ))}
      </div>

      {/* News */}
      <div style={{ background: C.surface, borderRadius: 14, padding: "16px 20px" }}>
        <SectionLabel>School News</SectionLabel>
        {NEWS.map(n => <NewsCard key={n.id} item={n} />)}
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 700, color: "#666",
      letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 12,
    }}>
      {children}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between",
      padding: "8px 0", borderBottom: `1px solid ${C.border}`,
      fontSize: 13,
    }}>
      <span style={{ color: C.textMuted }}>{label}</span>
      <span style={{ color: C.textPrimary, fontWeight: 500 }}>{value}</span>
    </div>
  );
}