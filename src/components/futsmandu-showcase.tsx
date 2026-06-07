import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Server,
  Shield,
  CreditCard,
  MessageSquare,
  Layers,
  ExternalLink,
  Github,
  Lock,
  Zap,
  Database,
  Globe,
  Activity,
  ArrowDown,
} from 'lucide-react';

// ─── Tech Badge ───────────────────────────────────────────────────────────────
function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-primary/30 bg-primary/10 text-accent rounded-sm">
      {label}
    </span>
  );
}

// ─── Section label ────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.2em] text-white/25 mb-6 border-b border-white/10 pb-3">
      {children}
    </p>
  );
}

// ─── Infrastructure Visual ────────────────────────────────────────────────────
function InfraVisual() {
  const layers = [
    {
      label: 'Cloudflare',
      sub: 'DDoS Protection · CDN · SSL at Edge',
      dot: 'bg-orange-400',
      border: 'border-orange-500/25',
      bg: 'bg-orange-500/5',
    },
    {
      label: 'Nginx',
      sub: 'Reverse Proxy · TLS Termination · Rate Limiting',
      dot: 'bg-green-400',
      border: 'border-green-500/25',
      bg: 'bg-green-500/5',
    },
    {
      label: 'Fail2Ban · UFW',
      sub: 'IP Banning · Host Firewall · Port 22/80/443 only',
      dot: 'bg-yellow-400',
      border: 'border-yellow-500/25',
      bg: 'bg-yellow-500/5',
    },
    {
      label: '12 Docker Containers',
      sub: 'API · Worker · PostgreSQL · Redis',
      dot: 'bg-blue-400',
      border: 'border-blue-500/25',
      bg: 'bg-blue-500/5',
    },
  ];

  return (
    <div className="card-cinematic p-8">
      <SectionLabel>Traffic Flow — Internet to App</SectionLabel>
      <div className="space-y-3">
        {layers.map((l, i) => (
          <div key={i}>
            <div className={`flex items-center gap-5 px-5 py-4 border rounded-sm ${l.border} ${l.bg}`}>
              <span className={`w-3 h-3 rounded-full flex-shrink-0 ${l.dot} animate-pulse`} />
              <div>
                <p className="text-white font-bold text-base">{l.label}</p>
                <p className="text-white/45 text-sm mt-0.5">{l.sub}</p>
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="flex justify-center py-2">
                <ArrowDown className="w-4 h-4 text-white/20" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Booking Visual ───────────────────────────────────────────────────────────
function BookingVisual() {
  const layers = [
    {
      n: '01',
      label: 'Date Guards',
      desc: 'UTC-normalized past/future validation — zero DB hits',
      color: 'text-green-400',
      bg: 'bg-green-500/8 border-green-500/20',
    },
    {
      n: '02',
      label: 'User Eligibility',
      desc: 'Reliability score · ban_until · suspension check',
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/8 border-yellow-500/20',
    },
    {
      n: '03',
      label: 'Active Hold Guard',
      desc: 'Player cannot hold 2+ slots in parallel — SELECT check',
      color: 'text-blue-400',
      bg: 'bg-blue-500/8 border-blue-500/20',
    },
    {
      n: '04',
      label: 'Postgres Advisory Lock',
      desc: 'pg_try_advisory_xact_lock(court:date:time) — auto-released, zero deadlock',
      color: 'text-purple-400',
      bg: 'bg-purple-500/8 border-purple-500/20',
    },
    {
      n: '05',
      label: 'Range Overlap Query',
      desc: 'start_time < endTime AND end_time > startTime — catches partial overlaps',
      color: 'text-red-400',
      bg: 'bg-red-500/8 border-red-500/20',
    },
  ];

  return (
    <div className="card-cinematic p-8">
      <SectionLabel>5-Layer Defence — Cheapest First</SectionLabel>
      <div className="space-y-3">
        {layers.map((l) => (
          <div key={l.n} className={`flex items-start gap-5 px-5 py-4 border rounded-sm ${l.bg}`}>
            <span className={`text-sm font-black flex-shrink-0 mt-0.5 font-mono ${l.color}`}>{l.n}</span>
            <div>
              <p className="text-white font-bold text-base">{l.label}</p>
              <p className="text-white/45 text-sm mt-0.5">{l.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Payment Visual ───────────────────────────────────────────────────────────
function PaymentVisual() {
  return (
    <div className="card-cinematic p-8 space-y-6">
      <SectionLabel>Dual Payment Flow</SectionLabel>

      {/* Web v2 */}
      <div className="border border-blue-500/25 bg-blue-500/5 rounded-sm p-6">
        <div className="flex items-center gap-1 mb-4">
          <div className="w-10 h-10 rounded-sm  flex items-center justify-center">
            <Image src="/esewa/esewa.png" alt="eSewa" width={30} height={30} />
          </div>
          <div>
            <p className="text-white font-black text-base">eSewa Web v2</p>
            <p className="text-blue-300/70 text-xs">Browser / WebView flow</p>
          </div>
        </div>
        <div className="space-y-2.5 font-mono text-sm">
          {[
            'HMAC-SHA256(amount + uuid + product_code)',
            'form-POST to eSewa → redirect back',
            'base64 decode response → HMAC verify',
            'confirmPayment() on success',
          ].map((line, i) => (
            <div key={i} className="flex items-start gap-3 text-white/50">
              <span className="text-blue-400 flex-shrink-0">→</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Intent */}
      <div className="border border-primary/25 bg-primary/5 rounded-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-sm  flex items-center justify-center">
            <Image src="/esewa/esewa.png" alt="eSewa" width={30} height={30} />
          </div>
          <div>
            <p className="text-white font-black text-base">eSewa Intent API</p>
            <p className="text-accent text-xs">Native deep-link · no WebView · MPIN auth</p>
          </div>
        </div>
        <div className="space-y-2.5 font-mono text-sm">
          {[
            'initiateIntent() → receives deeplink + correlation_id',
            'MPIN / biometric auth in native eSewa app',
            'eSewa redirects via futsmandu:// deep-link',
            'Atomic claim → verifyIntent() → confirmPayment()',
          ].map((line, i) => (
            <div key={i} className="flex items-start gap-3 text-white/50">
              <span className="text-primary flex-shrink-0">→</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm text-white/35 border border-white/10 rounded-sm px-4 py-3">
        <Lock className="w-4 h-4 text-green-400 flex-shrink-0" />
        <span>All amounts sourced from DB — client-supplied amounts never used in signing or verification</span>
      </div>
    </div>
  );
}

// ─── Chat Visual ──────────────────────────────────────────────────────────────
function ChatVisual() {
  const cards = [
    {
      icon: <Activity className="w-5 h-5" />,
      label: 'Redis Pub/Sub',
      sub: 'Horizontal scaling across server instances via @socket.io/redis-adapter',
      color: 'text-red-400',
      border: 'border-red-500/20',
      bg: 'bg-red-500/5',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      label: 'Dual JWT Auth',
      sub: 'PLAYER_JWT_SECRET + OWNER_JWT_SECRET — re-validated on every message event',
      color: 'text-yellow-400',
      border: 'border-yellow-500/20',
      bg: 'bg-yellow-500/5',
    },
    {
      icon: <Database className="w-5 h-5" />,
      label: 'Presence System',
      sub: 'Redis TTL 30s + 10s app heartbeat. redis.del() on disconnect — no TTL wait',
      color: 'text-blue-400',
      border: 'border-blue-500/20',
      bg: 'bg-blue-500/5',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      label: 'Firebase FCM',
      sub: 'Async push via BullMQ — HTTP returns immediately, FCM delivered in worker',
      color: 'text-green-400',
      border: 'border-green-500/20',
      bg: 'bg-green-500/5',
    },
  ];

  return (
    <div className="card-cinematic p-8 space-y-5">
      <SectionLabel>Chat Architecture</SectionLabel>

      <div className="space-y-3">
        {cards.map((c, i) => (
          <div key={i} className={`flex items-start gap-4 px-5 py-4 border rounded-sm ${c.border} ${c.bg}`}>
            <div className={`flex-shrink-0 mt-0.5 ${c.color}`}>{c.icon}</div>
            <div>
              <p className="text-white font-bold text-base">{c.label}</p>
              <p className="text-white/45 text-sm mt-1">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-white/10 rounded-sm p-5 font-mono text-sm space-y-2.5">
        <SectionLabel>Connection Lifecycle</SectionLabel>
        {[
          { color: 'text-green-400', label: 'connect', rest: '→ auth → join inbox room → setOnline(Redis)' },
          { color: 'text-blue-400', label: 'auto-join', rest: '→ all active chat rooms → emit presence_update' },
          { color: 'text-red-400', label: 'disconnect', rest: '→ redis.del() immediately → presence: false' },
        ].map((row, i) => (
          <div key={i} className="flex items-start gap-2 text-white/45">
            <span className={`flex-shrink-0 font-bold ${row.color}`}>{row.label}</span>
            <span>{row.rest}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Queue Visual ─────────────────────────────────────────────────────────────
function QueueVisual() {
  const workers = [
    {
      name: 'player-worker',
      jobs: ['Booking Expiry', 'FCM Push', 'Email Delivery'],
      color: 'text-primary',
      border: 'border-primary/25',
      bg: 'bg-primary/5',
      dot: 'bg-primary',
    },
    {
      name: 'owner-worker',
      jobs: ['Settlement', 'Analytics Aggregation', 'FCM Push'],
      color: 'text-yellow-400',
      border: 'border-yellow-500/25',
      bg: 'bg-yellow-500/5',
      dot: 'bg-yellow-400',
    },
    {
      name: 'admin-worker',
      jobs: ['Reports Export', 'Audit Logging', 'Payment Reconciliation'],
      color: 'text-blue-400',
      border: 'border-blue-500/25',
      bg: 'bg-blue-500/5',
      dot: 'bg-blue-400',
    },
    {
      name: 'chat-worker',
      jobs: ['FCM Delivery', 'Delivery Receipts'],
      color: 'text-green-400',
      border: 'border-green-500/25',
      bg: 'bg-green-500/5',
      dot: 'bg-green-400',
    },
  ];

  return (
    <div className="card-cinematic p-8">
      <SectionLabel>Domain-Isolated Workers — BullMQ / Redis</SectionLabel>
      <div className="space-y-4">
        {workers.map((w, i) => (
          <div key={i} className={`px-5 py-4 border rounded-sm ${w.border} ${w.bg}`}>
            <div className="flex items-center gap-3 mb-3">
              <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${w.dot}`} />
              <p className={`font-black text-base font-mono ${w.color}`}>{w.name}</p>
            </div>
            <div className="flex flex-wrap gap-2 pl-5">
              {w.jobs.map((j) => (
                <span key={j} className="text-xs text-white/55 bg-white/5 border border-white/10 px-3 py-1 rounded-sm">
                  {j}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-white/30 mt-5 border-t border-white/10 pt-4">
        ↑ Slow admin export jobs cannot delay critical player booking confirmations. Workers are independently scalable.
      </p>
    </div>
  );
}

// ─── ShowcaseStep ─────────────────────────────────────────────────────────────
interface StepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  summary: string;
  details: string[];
  visual: React.ReactNode;
  flip?: boolean;
}

function ShowcaseStep({ number, icon, title, summary, details, visual, flip }: StepProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${flip ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
      {/* Text */}
      <div className="lg:pt-4">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-6xl font-black leading-none select-none text-primary/60 font-big-shoulders">
            {number}
          </span>
          <div className="w-11 h-11 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
            {icon}
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-accent mb-4 uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-white leading-relaxed mb-6 text-base">{summary}</p>

        <ul className="space-y-3">
          {details.map((d, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-white/45">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span className="leading-relaxed">{d}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual */}
      <div>{visual}</div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export function FutsmanduShowcase() {
  const techStack = [
    'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ',
    'Socket.IO', 'Docker Compose', 'Nginx', 'Cloudflare',
    'Fail2Ban · UFW', 'eSewa Intent', 'eSewa Web v2',
    'Firebase FCM', '12 Containers',
  ];

  const steps: StepProps[] = [
    {
      number: '01',
      icon: <Server className="w-5 h-5" />,
      title: 'Infrastructure & DevOps',
      summary:
        '12 Docker containers on a single VPS — every service isolated, independently deployable, with zero single point of failure at the application layer.',
      details: [
        '3-stage multi-stage Dockerfile (deps → builder → runner) — no TypeScript compiler or dev tools in the final image',
        'Nginx is the only container with host ports 80/443; all internal traffic is plain HTTP on Docker\'s virtual network',
        'Cloudflare in front: VPS IP hidden, DDoS absorbed, SSL at edge — Nginx trusts Cloudflare IP ranges for X-Forwarded-For',
        'Fail2Ban monitors Nginx logs and bans IPs after repeated 4xx/5xx or brute-force patterns on auth endpoints',
        'CI/CD via GHCR — migrate container runs as a one-shot before any API starts, then exits cleanly',
      ],
      visual: <InfraVisual />,
    },
    {
      number: '02',
      icon: <Shield className="w-5 h-5" />,
      title: 'Booking Engine',
      summary:
        'A 5-layer double-booking prevention system that runs cheapest-first — from pure in-memory validation all the way down to Postgres advisory locks and range-overlap queries.',
      details: [
        'pg_try_advisory_xact_lock(court:date:time) — serializes concurrent identical requests, auto-released on transaction end, zero deadlock risk',
        'Slots held for 3 minutes with PENDING_PAYMENT status; BullMQ job auto-expires stale holds',
        'booking_meta JSONB written once at holdSlot(), read at confirmPayment() — immutable single source of truth',
        'Range overlap query: start_time < endTime AND end_time > startTime catches any partial overlap on HELD/PENDING/CONFIRMED rows',
      ],
      visual: <BookingVisual />,
      flip: true,
    },
    {
      number: '03',
      icon: <CreditCard className="w-5 h-5" />,
      title: 'eSewa Payment — Dual Flow',
      summary:
        'Two production payment integrations sharing the same security model: the server is always the price authority, HMAC verified before any DB write.',
      details: [
        'Web v2 (ePay): HMAC-SHA256 over total_amount + transaction_uuid + product_code; base64 decode + HMAC verify on redirect',
        'Intent API: native deep-link to eSewa app, MPIN/biometric auth, futsmandu:// scheme returns control to Flutter',
        'Atomic claim via updateMany WHERE status IN [INITIATED, PENDING] prevents concurrent verify race — 409 Conflict on contention',
        'Idempotency keys on all payment upserts guard against duplicate webhook replays',
      ],
      visual: <PaymentVisual />,
    },
    {
      number: '04',
      icon: <MessageSquare className="w-5 h-5" />,
      title: 'Real-Time Chat',
      summary:
        'Dedicated NestJS microservice with Socket.IO, Redis Pub/Sub for horizontal scaling, and a dual-secret JWT guard re-validated on every message event.',
      details: [
        'Two dedicated Redis connections per instance — shared pub client + isolated sub client (Redis protocol mandates this separation)',
        '@socket.io/redis-adapter broadcasts room events across all server instances for true horizontal scale',
        'Presence system: 30s Redis TTL + 10s app heartbeat to keep TTL alive; redis.del() on disconnect — no TTL wait',
        'Inbox Room pattern: every user is auto-joined at connect so new chat initiations reach users before they open the chat',
        'Firebase FCM push via BullMQ — HTTP returns immediately, FCM delivery is fully async in the worker process',
      ],
      visual: <ChatVisual />,
      flip: true,
    },
    {
      number: '05',
      icon: <Layers className="w-5 h-5" />,
      title: 'Async Queue Architecture',
      summary:
        'BullMQ decouples every async operation from the HTTP path — each domain has its own worker process with an independent retry strategy and independent scaling.',
      details: [
        'Booking expiry, push notifications, email delivery, analytics aggregation, payment reconciliation — all queue-driven',
        'Slow admin export jobs cannot delay critical player booking confirmations — domain isolation enforces this',
        'Workers are independently scalable: player-worker ×3 without touching admin or owner workers',
        'SchedulerService registers BullMQ repeatable jobs on startup for scheduled recurring tasks',
      ],
      visual: <QueueVisual />,
    },
  ];

  return (
    <section id="futsmandu" className="py-24 lg:py-32 bg-section-dark">
      <div className="container mx-auto px-4 md:px-10">

        {/* ── Section Label ── */}
        <div className="inline-flex items-center gap-3 mb-12">
          <span className="w-8 h-[2px] bg-primary" />
          <span className="text-sm text-primary font-bold uppercase tracking-widest">Featured Project</span>
        </div>

        {/* ── Hero Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left — title + intro */}
          <div>
            <div className="flex items-center gap-5 mb-8">
              <div className="relative w-16 h-16 flex-shrink-0 border border-white/10 rounded-sm p-1 bg-white/3">
                <Image
                  src="/originals/projects/futsmandu_logo.png"
                  alt="Futsmandu logo"
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  Futs<span className="text-heading-gold">mandu</span>
                </h2>
                <p className="text-white/35 text-xs font-bold uppercase tracking-[0.1em] mt-1.5">
                  Full-Stack SaaS · Production
                </p>
              </div>
            </div>

            <p className="text-white/70 leading-relaxed mb-5 text-base md:text-lg">
              A production multi-tenant futsal booking platform running{' '}
              <strong className="text-white">12 Docker containers</strong> on a single VPS —
              foue distinct API servers (Admin, Player, Owner and Chat Service) each with their own async Worker,
              backed by Postgres advisory locks for concurrency-safe slot reservations and dual
              eSewa payment flows for native app-to-app checkout.
            </p>

            <p className="text-white/45 leading-relaxed mb-10 text-sm">
              Sole architect, backend engineer, and DevOps. Designed the booking engine,
              payment integration, real-time chat microservice, and the entire container
              orchestration from scratch.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.futsmandu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 btn-primary-cinematic text-white text-sm font-bold rounded-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Platform
              </a>

            </div>
          </div>

          {/* Right — tech stack + stats */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/25 mb-4 border-b border-white/10 pb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {techStack.map((t) => (
                <Badge key={t} label={t} />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '12', label: 'Docker\nContainers' },
                { value: '5', label: 'Booking\nDefence Layers' },
                { value: '2', label: 'eSewa\nPayment Flows' },
              ].map((s) => (
                <div key={s.label} className="border border-white/10 bg-white/3 rounded-sm p-5 text-center">
                  <p className="text-4xl font-black text-primary mb-2">{s.value}</p>
                  <p className="text-white/35 text-xs leading-snug whitespace-pre-line">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-white/8 mb-24" />

        {/* ── Alternating Steps ── */}
        <div className="space-y-28">
          {steps.map((step) => (
            <ShowcaseStep key={step.number} {...step} />
          ))}
        </div>

        {/* ── Closing Bar ── */}
        <div className="mt-28 border border-white/10 rounded-sm p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <p className="text-white font-black text-lg md:text-xl mb-2">
              Key Engineering Takeaway
            </p>
            <p className="text-white/45 text-sm leading-relaxed max-w-2xl">
              Every design decision here — Postgres advisory locks over app-level mutexes, immutable JSONB booking_meta,
              domain-isolated workers, atomic concurrent-verify claims — was driven by correctness under concurrency, not convenience.
              This is what production looks like.
            </p>
          </div>
          <Link
            href="/projects"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 border border-primary/40 text-primary text-sm font-bold rounded-sm hover:bg-primary hover:text-white transition-all duration-300"
          >
            All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
