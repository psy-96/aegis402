/** @type {import('tailwindcss').Config} */

// ============================================================
// AEGIS402 — Tailwind Config
// Base: shadcn/ui Figma Variables (January 2026)
// Extended: AEGIS402 semantic tokens
//
// 규칙: 헥스 코드 직접 사용 금지. 모두 CSS 변수로 연결.
// theme.css에서 변수값 정의됨.
// ============================================================

module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      // ── shadcn/ui semantic colors ──────────────────────────
      colors: {
        background:  'var(--background)',
        foreground:  'var(--foreground)',

        card: {
          DEFAULT:    'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT:    'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT:    'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT:    'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT:    'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT:    'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT:    'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border:      'var(--border)',
        input:       'var(--input)',
        ring:        'var(--ring)',

        sidebar: {
          DEFAULT:    'var(--sidebar)',
          foreground: 'var(--sidebar-foreground)',
          border:     'var(--sidebar-border)',
        },

        // ── AEGIS402 전용 토큰 ─────────────────────────────
        aegis: {
          allow: {
            bg:     'var(--aegis-allow-bg)',
            border: 'var(--aegis-allow-border)',
            text:   'var(--aegis-allow-text)',
            solid:  'var(--aegis-allow-solid)',
          },
          warn: {
            bg:     'var(--aegis-warn-bg)',
            border: 'var(--aegis-warn-border)',
            text:   'var(--aegis-warn-text)',
            solid:  'var(--aegis-warn-solid)',
          },
          block: {
            bg:     'var(--aegis-block-bg)',
            border: 'var(--aegis-block-border)',
            text:   'var(--aegis-block-text)',
            solid:  'var(--aegis-block-solid)',
          },
          escrow: {
            bg:     'var(--aegis-escrow-bg)',
            border: 'var(--aegis-escrow-border)',
            text:   'var(--aegis-escrow-text)',
            solid:  'var(--aegis-escrow-solid)',
          },
          hook: {
            bg:     'var(--aegis-hook-bg)',
            border: 'var(--aegis-hook-border)',
            text:   'var(--aegis-hook-text)',
            solid:  'var(--aegis-hook-solid)',
          },
          risk: {
            low:    'var(--aegis-risk-low)',
            mid:    'var(--aegis-risk-mid)',
            high:   'var(--aegis-risk-high)',
            track:  'var(--aegis-risk-track)',
          },
        },
      },

      // ── Border radius (from tokens collection) ─────────────
      borderRadius: {
        none: 'var(--radius-none)',
        xs:   'var(--radius-xs)',
        sm:   'var(--radius-sm)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        xl:   'var(--radius-xl)',
        '2xl':'var(--radius-2xl)',
        '3xl':'var(--radius-3xl)',
        full: 'var(--radius-full)',
      },

      // ── Typography ─────────────────────────────────────────
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        xs:   ['var(--text-xs)',   { lineHeight: '1rem' }],
        sm:   ['var(--text-sm)',   { lineHeight: '1.25rem' }],
        base: ['var(--text-base)', { lineHeight: '1.5rem' }],
        lg:   ['var(--text-lg)',   { lineHeight: '1.75rem' }],
        xl:   ['var(--text-xl)',   { lineHeight: '1.75rem' }],
        '2xl':['var(--text-2xl)',  { lineHeight: '2rem' }],
      },
    },
  },
  plugins: [],
}

// ============================================================
// 사용 예시
//
// 결제 상태 뱃지:
//   <span class="bg-aegis-allow-bg text-aegis-allow-text border border-aegis-allow-border">
//     ALLOW
//   </span>
//
// BLOCK 뱃지:
//   <span class="bg-aegis-block-bg text-aegis-block-text border border-aegis-block-border">
//     BLOCK
//   </span>
//
// Hook 뱃지:
//   <span class="bg-aegis-hook-bg text-aegis-hook-text border border-aegis-hook-border">
//     V4 Hook
//   </span>
//
// Risk score bar:
//   <div class="bg-aegis-risk-track">
//     <div class="bg-aegis-risk-high" style="width: 91%"></div>
//   </div>
// ============================================================
