import React, { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/img/logo/23.png"
// ── Types ──────────────────────────────────────────────────────────────────────
interface DayAvailability {
    [key: string]: string[]; // "YYYY-MM-DD" → time slots
}

// ── Helpers ────────────────────────────────────────────────────────────────────
const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number): number {
    return new Date(year, month, 1).getDay();
}
function pad(n: number): string {
    return String(n).padStart(2, "0");
}
function toKey(y: number, m: number, d: number): string {
    return `${y}-${pad(m + 1)}-${pad(d)}`;
}

// ── Mock availability data ─────────────────────────────────────────────────────
function buildAvailability(): DayAvailability {
    const slots = [
        "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM",
        "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
        "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    ];
    const avail: DayAvailability = {};
    const today = new Date();
    for (let i = 1; i <= 60; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        if (d.getDay() !== 0 && d.getDay() !== 6) {
            // weekdays only
            const key = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
            avail[key] = slots.slice(0, 6 + Math.floor(Math.random() * 6));
        }
    }
    // Also add Fri & Sat for demo
    for (let i = 1; i <= 60; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        if (d.getDay() === 5 || d.getDay() === 6) {
            const key = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
            avail[key] = slots.slice(0, 4);
        }
    }
    return avail;
}

const AVAILABILITY = buildAvailability();

// ── CSS injected at runtime ────────────────────────────────────────────────────
const STYLES = `
 
  :root {
    --brand: #1B3A6B;
    --brand-light: #E8EEF7;
    --brand-dark: #122748;
    --text-primary: #1a1a2e;
    --text-muted: #6b7280;
    --border: #e5e7eb;
    --surface: #ffffff;
    --bg: #f4f6fb;
    --radius: 14px;
    --shadow: 0 4px 24px rgba(27,58,107,.1); 
  }

  * { box-sizing: border-box; }

  body {
    background: var(--bg);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-primary);
    min-height: 100vh;
    margin: 0;
  }

  .booking-card {
    background: var(--surface);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    overflow: hidden;
    max-width: 980px;
    margin: 0 auto;
  }

  /* ── Left panel ── */
  .panel-left {
    padding: 2rem 2rem 2.5rem;
    border-right: 1px solid var(--border);
    min-width: 260px;
  }

  .logo-wrap img { height: 52px; }

  .panel-title {
    font-family: 'DM Serif Display', serif;
    font-size: 1.6rem;
    font-weight: 400;
    margin: 1.5rem 0 .25rem;
    color: var(--text-primary);
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: .45rem;
    font-size: .875rem;
    color: var(--text-muted);
    margin-bottom: .35rem;
  }

  .meta-item svg { flex-shrink: 0; }

  .divider-subtle { border-color: var(--border); margin: 1.25rem 0; }

  .info-heading {
    font-weight: 600;
    font-size: .9rem;
    color: var(--text-primary);
    margin-bottom: .8rem;
  }

  .checklist { list-style: none; padding: 0; margin: 0 0 1rem; }
  .checklist li {
    display: flex;
    align-items: flex-start;
    gap: .5rem;
    font-size: .84rem;
    color: var(--text-muted);
    margin-bottom: .45rem;
    line-height: 1.4;
  }
  .checklist li .check-icon { color: #22c55e; flex-shrink: 0; margin-top: 1px; }

  .link-item {
    display: flex;
    align-items: center;
    gap: .45rem;
    font-size: .84rem;
    color: var(--brand);
    text-decoration: none;
    margin-bottom: .4rem;
    transition: opacity .15s;
  }
  .link-item:hover { opacity: .75; }

  /* ── Calendar panel ── */
  .panel-right { padding: 2rem 1.75rem 2.5rem; }

  .panel-section-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  .cal-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .cal-nav-btn {
    width: 36px; height: 36px;
    border-radius: 50%;
    border: none;
    background: transparent;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--text-muted);
    transition: background .15s, color .15s;
  }
  .cal-nav-btn:hover { background: var(--brand-light); color: var(--brand); }
  .cal-nav-btn:disabled { opacity: .3; cursor: default; }
  .cal-nav-btn.active { background: var(--brand-light); color: var(--brand); }

  .cal-month { font-weight: 600; font-size: 1rem; min-width: 140px; text-align: center; }

  .cal-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    margin-bottom: 1.5rem;
  }

  .cal-header {
    text-align: center;
    font-size: .72rem;
    font-weight: 600;
    color: var(--text-muted);
    padding-bottom: .5rem;
    letter-spacing: .04em;
    text-transform: uppercase;
  }

  .cal-day {
    aspect-ratio: 1;
    display: flex; align-items: center; justify-content: center;
    border-radius: 50%;
    font-size: .875rem;
    font-weight: 500;
    cursor: default;
    transition: all .15s;
    color: var(--text-muted);
    user-select: none;
  }

  .cal-day.empty { pointer-events: none; }

  .cal-day.available {
    color: var(--brand);
    background: var(--brand-light);
    cursor: pointer;
    font-weight: 600;
  }
  .cal-day.available:hover {
    background: var(--brand);
    color: #fff;
    transform: scale(1.08);
  }

  .cal-day.today {
    background: var(--brand);
    color: #fff;
    font-weight: 700;
  }

  .cal-day.selected {
    background: var(--brand);
    color: #fff;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(229,38,60,.35);
    transform: scale(1.08);
  }

  .cal-day.past { opacity: .35; }

  /* ── Time slots ── */
  .slots-label {
    font-size: .78rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .06em;
    color: var(--text-muted);
    margin-bottom: .75rem;
  }

  .slots-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: .6rem;
    max-height: 320px;
    overflow-y: auto;
    padding-right: 4px;
  }

  .slots-grid::-webkit-scrollbar { width: 4px; }
  .slots-grid::-webkit-scrollbar-track { background: transparent; }
  .slots-grid::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

  .slot-btn {
    padding: .6rem .5rem;
    border: 1.5px solid var(--brand);
    border-radius: 8px;
    background: transparent;
    color: var(--brand);
    font-size: .875rem;
    font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    transition: all .15s;   
    text-align: center;
  }
  .slot-btn:hover {
    background: var(--brand);
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(229,38,60,.25);
  }
  .slot-btn.selected {
    background: var(--brand);
    color: #fff;
    box-shadow: 0 4px 12px rgba(229,38,60,.3);
  }

  /* ── Timezone ── */
  .tz-select-wrap {
    display: flex; align-items: center; gap: .5rem;
    background: var(--bg);
    border-radius: 8px;
    padding: .5rem .8rem;
    margin-top: 1.25rem;
    border: 1px solid var(--border);
  }
  .tz-select {
    border: none; background: transparent;
    font-family: 'DM Sans', sans-serif;
    font-size: .83rem;
    color: var(--text-primary);
    cursor: pointer;
    flex: 1;
    outline: none;
  }

  /* ── Confirm step ── */
  .confirm-wrap {
    padding: 1rem 0 .5rem;
  }
  .confirm-summary {
    background: var(--brand-light);
    border-left: 3px solid var(--brand);
    border-radius: 8px;
    padding: 1rem 1.25rem;
    margin-bottom: 1.5rem;
  }
  .confirm-summary .cs-date {
    font-weight: 700; font-size: 1.05rem; color: var(--brand);
  }
  .confirm-summary .cs-time {
    font-size: .9rem; color: var(--text-muted); margin-top: .25rem;
  }

  .form-label { font-weight: 600; font-size: .85rem; }

  .btn-brand {
    background: var(--brand);
    color: #fff;
    border: none;
    padding: .75rem 1.75rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: .95rem;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    transition: all .2s;
    display: inline-flex; align-items: center; gap: .5rem;
  }
  .btn-brand:hover {
    background: var(--brand-dark);
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(229,38,60,.3);
  }

  .btn-ghost {
    background: transparent;
    color: var(--text-muted);
    border: 1.5px solid var(--border);
    padding: .7rem 1.25rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: .9rem;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    transition: all .15s;
  }
  .btn-ghost:hover { border-color: var(--brand); color: var(--brand); }

  /* ── Success ── */
  .success-wrap { text-align: center; padding: 2.5rem 1rem; }
  .success-icon {
    width: 72px; height: 72px;
    background: var(--brand-light);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 1.5rem;
  }
  .success-title {
    font-family: 'DM Serif Display', serif;
    font-size: 1.75rem;
    margin-bottom: .5rem;
  }
  .success-sub { color: var(--text-muted); font-size: .9rem; }
  .success-badge {
    display: inline-block;
    background: var(--brand-light);
    color: var(--brand);
    font-weight: 600;
    border-radius: 8px;
    padding: .45rem 1rem;
    font-size: .9rem;
    margin-top: 1rem;
  }

  /* ── No slots ── */
  .no-slots {
    color: var(--text-muted);
    font-size: .9rem;
    text-align: center;
    padding: 2rem 0;
  }

  /* ── Responsive ── */
  @media (max-width: 767px) {
    .booking-card { border-radius: 0; box-shadow: none; }
    .panel-left { border-right: none; border-bottom: 1px solid var(--border); }
    .panel-right { padding: 1.5rem 1rem 2rem; }
    .panel-left { padding: 1.5rem 1rem; }
    .cal-day { font-size: .78rem; }
    .slot-btn { font-size: .8rem; }
    .slots-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;

// ── Icon helpers ───────────────────────────────────────────────────────────────
const ClockIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
);
const CalIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);
const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);
const GlobeIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);
const ChevronLeft = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);
const ChevronRight = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);
const TeamsIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#E5263C">
        <rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
);
const DownloadIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E5263C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);
const ArrowRight = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
);
const BigCheck = () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E5263C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

// ── Left panel ─────────────────────────────────────────────────────────────────
const LeftPanel: React.FC<{ selectedDate: Date | null; selectedTime: string | null }> = ({ selectedDate, selectedTime }) => {
    const fmt = (d: Date) =>
        d.toLocaleDateString("en-AU", { weekday: "short", month: "short", day: "numeric", year: "numeric" });

    return (
        <div className="panel-left d-flex flex-column">
            <div className="logo-wrap mb-3">
                {/* Simple text logo as placeholder */}
                <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                    <Link href="/">
                        {/* ✅ ADD background color wrapper here */}
                        <div style={{
                            background: "#1B3A6B",        // ← Stella College navy blue bg
                            borderRadius: "10px",          // ← rounded corners
                            padding: "6px 10px",           // ← breathing room around logo
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <Image
                                src={logo}
                                width={100}                  // ← slightly smaller to fit padding nicely
                                height={100}
                                priority

                                alt="Logo"
                            />
                        </div>
                    </Link>

                    <span style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.15rem", fontWeight: 400, color: "#1a1a2e", lineHeight: 1.1 }}>
                        Stella College<br />
                        <span style={{ fontSize: ".7rem", fontFamily: "'DM Sans',sans-serif", fontWeight: 400, letterSpacing: ".05em", color: "#6b7280" }}>
                            Institute of Education
                        </span>
                    </span>
                </div>
            </div>

            <h2 className="panel-title">Schedule Meeting Now</h2>

            <div className="meta-item">
                <ClockIcon />
                <span>30 Mins</span>
            </div>

            {selectedDate ? (
                <div className="meta-item">
                    <CalIcon />
                    <span>
                        {selectedDate.toLocaleDateString("en-AU", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}
                        {selectedTime && ` · ${selectedTime}`}
                    </span>
                </div>
            ) : (
                <div className="meta-item">
                    <CalIcon />
                    <span>Select a date →</span>
                </div>
            )}

            <hr className="divider-subtle" />

            <p className="info-heading">Ready to Start Your Journey?</p>
            <p style={{ fontSize: ".84rem", color: "#4b5563", lineHeight: 1.55, marginBottom: "1rem" }}>
                Book your <strong>enrolment appointment</strong> to discuss course options, entry requirements, and the enrolment process.
            </p>

            <ul className="checklist">
                <li><span className="check-icon"><CheckIcon /></span> Have your <strong>photo ID</strong> ready</li>
                <li><span className="check-icon"><CheckIcon /></span> Ensure your <strong>camera works</strong></li>
                <li><span className="check-icon"><CheckIcon /></span> <strong>Read the course outline</strong> before the meeting</li>
                <li><span className="check-icon"><CheckIcon /></span> Join the meeting <strong>10 minutes early</strong></li>
            </ul>

            <a href="#" className="link-item"><TeamsIcon /> Microsoft Teams Instructions + Download</a>
            <a href="#" className="link-item"><DownloadIcon /> Download Microsoft Teams</a>
        </div>
    );
};

// ── Calendar ───────────────────────────────────────────────────────────────────
interface CalendarProps {
    selectedDate: Date | null;
    onSelectDate: (d: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onSelectDate }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [viewYear, setViewYear] = useState(today.getFullYear());
    const [viewMonth, setViewMonth] = useState(today.getMonth());

    const prevMonth = () => {
        if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
        else setViewMonth(m => m - 1);
    };
    const nextMonth = () => {
        if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
        else setViewMonth(m => m + 1);
    };

    const isCurrentMonth =
        viewYear === today.getFullYear() && viewMonth === today.getMonth();

    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

    const cells: (number | null)[] = [
        ...Array(firstDay).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];

    return (
        <div>
            <div className="cal-nav">
                <button className="cal-nav-btn" onClick={prevMonth} disabled={isCurrentMonth}><ChevronLeft /></button>
                <span className="cal-month">{MONTHS[viewMonth]} {viewYear}</span>
                <button className="cal-nav-btn active" onClick={nextMonth}><ChevronRight /></button>
            </div>

            <div className="cal-grid">
                {DAYS_OF_WEEK.map(d => <div key={d} className="cal-header">{d}</div>)}
                {cells.map((day, idx) => {
                    if (!day) return <div key={`e-${idx}`} className="cal-day empty" />;
                    const key = toKey(viewYear, viewMonth, day);
                    const date = new Date(viewYear, viewMonth, day);
                    const isPast = date < today;
                    const isToday = date.getTime() === today.getTime();
                    const hasSlots = Boolean(AVAILABILITY[key]);
                    const isSelected =
                        selectedDate?.getFullYear() === viewYear &&
                        selectedDate?.getMonth() === viewMonth &&
                        selectedDate?.getDate() === day;

                    let cls = "cal-day";
                    if (isSelected) cls += " selected";
                    else if (isToday) cls += " today";
                    else if (isPast) cls += " past";
                    else if (hasSlots) cls += " available";

                    return (
                        <div
                            key={key}
                            className={cls}
                            onClick={() => !isPast && hasSlots && !isSelected && onSelectDate(date)}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// ── Time slots ─────────────────────────────────────────────────────────────────
interface TimeSlotsProps {
    date: Date;
    selected: string | null;
    onSelect: (t: string) => void;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({ date, selected, onSelect }) => {
    const key = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const slots = AVAILABILITY[key] ?? [];

    if (slots.length === 0)
        return <p className="no-slots">No available slots for this day.</p>;

    return (
        <div>
            <p className="slots-label">Available times</p>
            <div className="slots-grid">
                {slots.map(t => (
                    <button
                        key={t}
                        className={`slot-btn${selected === t ? " selected" : ""}`}
                        onClick={() => onSelect(t)}
                    >
                        {t}
                    </button>
                ))}
            </div>
        </div>
    );
};

// ── Confirm form ───────────────────────────────────────────────────────────────
interface ConfirmProps {
    date: Date;
    time: string;
    isSubmitting: boolean;
    submitError: string | null;
    onBack: () => void;
    onConfirm: (name: string, email: string, notes: string) => void;
}

const ConfirmForm: React.FC<ConfirmProps> = ({ date,
    time,
    isSubmitting,
    submitError,
    onBack,
    onConfirm, }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [notes, setNotes] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    const validate = () => {
        const e: { name?: string; email?: string } = {};
        if (!name.trim()) e.name = "Name is required";
        if (!email.trim()) e.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Enter a valid email address";
        setErrors(e);
        return Object.keys(e).length === 0;
    };


    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        if (validate()) onConfirm(name, email, notes);
    };

    const dateStr = date.toLocaleDateString("en-AU", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="confirm-wrap">

            {/* ── Booking summary banner ── */}
            <div className="confirm-summary">
                <div className="cs-date">{dateStr}</div>
                <div className="cs-time">🕐 {time} · 30 minutes · Microsoft Teams</div>
            </div>

            <form onSubmit={handleSubmit} noValidate>

                {/* Name */}
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        placeholder="Jane Smith"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        disabled={isSubmitting}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="jane@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        disabled={isSubmitting}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                {/* Notes */}
                <div className="mb-4">
                    <label className="form-label">
                        Additional Notes{" "}
                        <span style={{ fontWeight: 400, color: "#9ca3af" }}>(optional)</span>
                    </label>
                    <textarea
                        className="form-control"
                        rows={3}
                        placeholder="e.g. I'm interested in Certificate III..."
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                        disabled={isSubmitting}
                    />
                </div>

                {/* ── API error alert ── */}
                {submitError && (
                    <div
                        className="alert alert-danger d-flex align-items-center gap-2 mb-3"
                        role="alert"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span style={{ fontSize: ".88rem" }}>{submitError}</span>
                    </div>
                )}

                {/* ── Buttons ── */}
                <div className="d-flex gap-3 flex-wrap">
                    <button
                        type="button"
                        className="btn-ghost"
                        onClick={onBack}
                        disabled={isSubmitting}
                    >
                        ← Back
                    </button>

                    <button
                        type="submit"
                        className="btn-brand"
                        disabled={isSubmitting}
                        style={{ minWidth: "180px", justifyContent: "center" }}
                    >
                        {isSubmitting ? (
                            <>
                                {/* Spinner */}
                                <svg
                                    width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2.5"
                                    strokeLinecap="round"
                                    style={{ animation: "spin 1s linear infinite" }}
                                >
                                    <circle cx="12" cy="12" r="10" strokeOpacity=".25" />
                                    <path d="M12 2a10 10 0 0 1 10 10" />
                                </svg>
                                Sending…
                            </>
                        ) : (
                            <>
                                Confirm Booking
                                <ArrowRight />
                            </>
                        )}
                    </button>
                </div>

            </form>

            {/* Spinner keyframe — injected once */}
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
};


// ── Success screen ─────────────────────────────────────────────────────────────
interface SuccessProps {
    date: Date;
    time: string;
    name: string;
    onReset: () => void;
}

const SuccessScreen: React.FC<SuccessProps> = ({ date, time, name, onReset }) => {
    const dateStr = date.toLocaleDateString("en-AU", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
    });
    return (
        <div className="success-wrap">
            <div className="success-icon"><BigCheck /></div>
            <h3 className="success-title">You are all booked, {name.split(" ")[0]}!</h3>
            <p className="success-sub">A confirmation has been sent to your email. See you at the session.</p>
            <div className="success-badge">📅 {dateStr} · {time}</div>
            <br /><br />
            <button className="btn-ghost" onClick={onReset}>Book another time</button>
        </div>
    );
};

// ── Main component ─────────────────────────────────────────────────────────────
type Step = "calendar" | "confirm" | "success";

const CalendarBooking: React.FC = () => {
    const [step, setStep] = useState<Step>("calendar");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [bookedName, setBookedName] = useState("");
    const [timezone, setTimezone] = useState("Asia/Calcutta");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleDateSelect = (d: Date) => {
        setSelectedDate(d);
        setSelectedTime(null);
    };

    const handleContinue = () => {
        if (selectedDate && selectedTime) setStep("confirm");
    };


    const handleConfirm = async (name: string, email: string, notes: string) => {
        setIsSubmitting(true);
        setSubmitError(null);

        // Format date for the email (e.g. "Wednesday, 25 February 2026")
        const formattedDate = selectedDate!.toLocaleDateString("en-AU", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        try {
            const res = await fetch("/api/bookings/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    notes,
                    date: formattedDate,
                    time: selectedTime,
                    timezone,
                }),
            }); 

            const text = await res.text();
            let data: { success: boolean; message?: string };
            try {
                data = JSON.parse(text);      // then try to parse as JSON
            } catch {
                // If it's still HTML, show a clear message instead of crashing
                console.error("API returned HTML instead of JSON:", text.slice(0, 300));
                throw new Error("API route not found. Check your file path.");
            }
            if (!res.ok || !data.success) {
                throw new Error(data.message || "Booking failed. Please try again.");
            }

            // ✅ Success — move to success screen
            setBookedName(name);
            setStep("success");

        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Something went wrong.";
            setSubmitError(message);
        } finally {
            setIsSubmitting(false);
        }
    };


    const handleReset = () => {
        setStep("calendar");
        setSelectedDate(null);
        setSelectedTime(null);
        setBookedName("");
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: STYLES }} />
            <div style={{ minHeight: "100vh", padding: "2rem 1rem", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)" }}>
                <div className="booking-card w-100">
                    <div className="row g-0">
                        {/* Left panel */}
                        <div className="col-12 col-md-4">
                            <LeftPanel selectedDate={selectedDate} selectedTime={selectedTime} />
                        </div>

                        {/* Right panel */}
                        <div className="col-12 col-md-8">
                            <div className="panel-right">
                                {step === "success" && selectedDate && selectedTime ? (
                                    <SuccessScreen date={selectedDate} time={selectedTime} name={bookedName} onReset={handleReset} />
                                ) : step === "confirm" && selectedDate && selectedTime ? (
                                    <>
                                        <p className="panel-section-title">Confirm Your Booking</p>
                                        <ConfirmForm
                                            date={selectedDate}
                                            time={selectedTime}
                                            isSubmitting={isSubmitting}
                                            submitError={submitError}
                                            onBack={() => setStep("calendar")}
                                            onConfirm={handleConfirm}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <p className="panel-section-title">Select Date &amp; Time</p>

                                        <div className="row g-4">
                                            {/* Calendar */}
                                            <div className="col-12 col-lg-7">
                                                <Calendar selectedDate={selectedDate} onSelectDate={handleDateSelect} />

                                                {/* Timezone */}
                                                <div className="tz-select-wrap">
                                                    <GlobeIcon />
                                                    <select
                                                        className="tz-select"
                                                        value={timezone}
                                                        onChange={e => setTimezone(e.target.value)}
                                                    >
                                                        <option value="Asia/Calcutta">GMT+05:30 Asia/Calcutta (GMT+5:30)</option>
                                                        <option value="Australia/Sydney">GMT+11:00 Australia/Sydney</option>
                                                        <option value="America/New_York">GMT-05:00 America/New_York</option>
                                                        <option value="Europe/London">GMT+00:00 Europe/London</option>
                                                        <option value="Asia/Singapore">GMT+08:00 Asia/Singapore</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Time slots */}
                                            <div className="col-12 col-lg-5">
                                                {selectedDate ? (
                                                    <>
                                                        <p style={{ fontSize: ".85rem", fontWeight: 600, color: "#1a1a2e", marginBottom: ".75rem" }}>
                                                            {selectedDate.toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long" })}
                                                        </p>
                                                        <TimeSlots
                                                            date={selectedDate}
                                                            selected={selectedTime}
                                                            onSelect={setSelectedTime}
                                                        />
                                                        {selectedTime && (
                                                            <button
                                                                className="btn-brand mt-3 w-100"
                                                                onClick={handleContinue}
                                                            >
                                                                Continue <ArrowRight />
                                                            </button>
                                                        )}
                                                    </>
                                                ) : (
                                                    <div className="no-slots" style={{ paddingTop: "3rem" }}>
                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" style={{ display: "block", margin: "0 auto .75rem" }}>
                                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                                                        </svg>
                                                        Pick a highlighted date<br />to see available times
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CalendarBooking;