# AEGIS402 — Claude Code Context

## Goal
x402 payment guard dashboard.
EthGlobal 2026 hackathon demo.
Final output: Figma wireframes + React/Next.js implementation.

## Figma
- File: https://www.figma.com/design/nbycZ7vMUhkvWPbrOFUU8j
- Design System page: 🎨 Design System
- Wireframe pages: 01 Overview ~ 08 Settings

## Design Token Rules — STRICT
- 헥스 코드 직접 사용 절대 금지
- 색상은 반드시 CSS 변수: var(--aegis-allow-bg)
- Tailwind 클래스: bg-aegis-allow-bg, text-aegis-block-text
- 토큰 파일: theme.css / tailwind.config.js

## Component Location (when implementing)
- src/components/ui/       shadcn 기본
- src/components/aegis/    AEGIS 전용
- src/components/layout/   Sidebar, Topbar

## AEGIS Components
- StatusBadge: variant = allow | warn | block | pass | fail | pending
- RouteBadge: variant = hook | direct | escrow | blocked
- RiskScoreBar: score 0-100 (자동 색상 분기)
- MonitorBar: state = processing | idle
- FeedRow: status + address + amount + route + riskScore
- MetricCard: label + value + variant
- HookTimeline: steps 배열, pass/fail/pending
- AuditRow: address + result + trigger(auto|manual)
- EscrowRow: address + amount + status
- SidebarItem: label + icon + badge + active state

## Pages (App Router)
- /overview /payments /audit /escrow
- /integrations /agents /merchants /settings

## Mock Data Location
- src/mock/payments.ts
- src/mock/audits.ts
- src/mock/agents.ts