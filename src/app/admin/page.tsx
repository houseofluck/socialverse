"use client";

import { useState, useEffect, useCallback } from "react";

interface Lead {
  id: string;
  name: string;
  business: string;
  service: string;
  budget: string;
  message: string;
  source: string;
  timestamp: string;
  ip: string | null;
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/lead");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setLeads(data.leads || []);
    } catch {
      setError("Failed to load leads");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authed) fetchLeads();
  }, [authed, fetchLeads]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple client-side gate - replace with proper auth in production
    const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "socialverse2026";
    if (password === adminPass) {
      setAuthed(true);
    } else {
      setError("Invalid password");
    }
  };

  const filtered = leads
    .filter((l) => {
      if (!filter) return true;
      const q = filter.toLowerCase();
      return (
        l.name.toLowerCase().includes(q) ||
        l.business.toLowerCase().includes(q) ||
        l.service.toLowerCase().includes(q) ||
        l.message.toLowerCase().includes(q)
      );
    })
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

  const exportCSV = () => {
    const headers = [
      "ID",
      "Name",
      "Business",
      "Service",
      "Budget",
      "Message",
      "Source",
      "Timestamp",
      "IP",
    ];
    const rows = filtered.map((l) => [
      l.id,
      l.name,
      l.business,
      l.service,
      l.budget,
      `"${l.message.replace(/"/g, '""')}"`,
      l.source,
      l.timestamp,
      l.ip || "",
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `social-verse-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ============ LOGIN SCREEN ============
  if (!authed) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="font-display text-2xl font-black text-white mb-1">
              Social <span className="text-gold">Verse.</span>
            </div>
            <p className="text-white/30 text-sm font-accent">Admin Dashboard</p>
          </div>
          <form onSubmit={handleAuth}>
            <label className="block text-[0.72rem] text-white/40 uppercase tracking-[0.15em] font-accent font-medium mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter admin password"
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-sm px-4 py-3 text-white font-body text-sm outline-none focus:border-gold placeholder:text-white/20 mb-3"
              autoFocus
            />
            {error && (
              <p className="text-red-400 text-xs mb-3 font-accent">{error}</p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-gold text-black border-none rounded-sm font-accent font-semibold text-sm tracking-wider uppercase cursor-pointer hover:bg-gold-light transition-all"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ============ DASHBOARD ============
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/[0.06] px-6 py-4 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-4">
          <div className="font-display text-lg font-black">
            Social <span className="text-gold">Verse.</span>
          </div>
          <span className="text-[0.65rem] text-gold uppercase tracking-[0.2em] font-accent font-medium bg-gold/10 px-2 py-0.5 rounded">
            Admin
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchLeads}
            className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-sm text-white/60 text-xs font-accent cursor-pointer hover:border-gold hover:text-gold transition-all"
          >
            <i className="ri-refresh-line mr-1" />
            Refresh
          </button>
          <button
            onClick={exportCSV}
            disabled={filtered.length === 0}
            className="px-3 py-1.5 bg-gold text-black rounded-sm text-xs font-accent font-semibold cursor-pointer hover:bg-gold-light transition-all disabled:opacity-40"
          >
            <i className="ri-download-2-line mr-1" />
            Export CSV
          </button>
        </div>
      </header>

      <div className="px-6 py-6 max-w-[1400px] mx-auto">
        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Total Leads", value: leads.length, icon: "ri-contacts-book-line" },
            {
              label: "Today",
              value: leads.filter(
                (l) =>
                  new Date(l.timestamp).toDateString() ===
                  new Date().toDateString()
              ).length,
              icon: "ri-calendar-check-line",
            },
            {
              label: "This Week",
              value: leads.filter((l) => {
                const d = new Date(l.timestamp);
                const now = new Date();
                const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                return d >= weekAgo;
              }).length,
              icon: "ri-calendar-2-line",
            },
            {
              label: "Top Service",
              value:
                leads.length > 0
                  ? Object.entries(
                      leads.reduce(
                        (acc, l) => {
                          if (l.service) acc[l.service] = (acc[l.service] || 0) + 1;
                          return acc;
                        },
                        {} as Record<string, number>
                      )
                    ).sort((a, b) => b[1] - a[1])[0]?.[0] || "-"
                  : "-",
              icon: "ri-bar-chart-line",
              isText: true,
            },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/[0.02] border border-white/[0.06] rounded-md p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <i className={`${s.icon} text-gold text-sm`} />
                <span className="text-[0.68rem] text-white/35 uppercase tracking-wider font-accent">
                  {s.label}
                </span>
              </div>
              <div
                className={`font-display font-bold ${
                  "isText" in s && s.isText
                    ? "text-sm text-gold truncate"
                    : "text-2xl text-white"
                }`}
              >
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search leads by name, business, service..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full max-w-md bg-white/[0.04] border border-white/[0.08] rounded-sm px-4 py-2.5 text-white font-body text-sm outline-none focus:border-gold placeholder:text-white/20"
          />
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-20 text-white/30">
            <i className="ri-loader-4-line animate-spin text-2xl text-gold" />
            <p className="mt-3 text-sm font-accent">Loading leads...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-white/20">
            <i className="ri-inbox-line text-4xl mb-3 block" />
            <p className="text-sm font-accent">
              {leads.length === 0
                ? "No leads captured yet"
                : "No leads match your search"}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  {["Name", "Business", "Service", "Budget", "Message", "Source", "Date"].map(
                    (h) => (
                      <th
                        key={h}
                        className="py-3 px-3 text-[0.68rem] text-gold uppercase tracking-wider font-accent font-medium whitespace-nowrap"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3 px-3 font-medium whitespace-nowrap">
                      {lead.name}
                    </td>
                    <td className="py-3 px-3 text-white/50 whitespace-nowrap">
                      {lead.business || "-"}
                    </td>
                    <td className="py-3 px-3">
                      {lead.service ? (
                        <span className="text-[0.7rem] bg-gold/10 text-gold px-2 py-0.5 rounded font-accent whitespace-nowrap">
                          {lead.service}
                        </span>
                      ) : (
                        <span className="text-white/20">-</span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-white/50 whitespace-nowrap">
                      {lead.budget || "-"}
                    </td>
                    <td className="py-3 px-3 text-white/40 max-w-[250px] truncate">
                      {lead.message || "-"}
                    </td>
                    <td className="py-3 px-3 text-white/30 text-xs font-accent">
                      {lead.source}
                    </td>
                    <td className="py-3 px-3 text-white/30 text-xs font-accent whitespace-nowrap">
                      {new Date(lead.timestamp).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
