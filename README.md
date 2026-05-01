# Growth System — brand growth website

A productized brand growth system website. Vite + React + TypeScript + Tailwind. Animations, custom magnetic cursor, configurator with live pricing.

## Stack notes (important)

This project is **Vite + React** (not Next.js). The original brief mentioned `/api/*` routes, `NEXT_PUBLIC_*` env vars, and Vercel — those need to be adapted:

- API routes → **Lovable Cloud edge functions** (Supabase) or any backend you point at.
- Client env vars → must be prefixed `VITE_*` (e.g. `VITE_RAZORPAY_KEY_ID`).
- Server-side secrets (Razorpay secret, Resend API key, Sheets service account) live in Lovable Cloud secrets, never in the client bundle.

## Local dev

```bash
bun install
bun dev
```

## Environment variables

Client (Vite — exposed to browser, must be prefixed `VITE_`):

```
VITE_RAZORPAY_KEY_ID=
VITE_WHATSAPP_NUMBER=
VITE_CALENDLY_URL=
VITE_SITE_URL=
```

Server (added via Lovable Cloud secrets — never committed):

```
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RESEND_API_KEY=
OWNER_EMAIL=
GOOGLE_SHEETS_ID=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
```

## Integrations — wiring guide

The site ships fully designed. Integrations are stubbed (forms log + toast success) so you can wire them at your own pace.

### 1) Google Sheets as the backend

Create a Google Cloud service account → enable Google Sheets API → share your spreadsheet with the service account email (Editor).

Sheets to create in one spreadsheet:

- **Leads** — Timestamp | Name | Email | Phone | Source | Services | Estimated Value | Message
- **Configurator Submissions** — Timestamp | Email | Phone | Services JSON | Monthly | One-time | Above 25K | Action
- **Payments** — Timestamp | Email | Phone | Razorpay Order ID | Amount | Status | Services
- **Franchise Applications** — Timestamp | Name | City | Phone | Email | Current Work | Why Partner

Recommended: enable **Lovable Cloud** and use the **Google Sheets** connector via the gateway — it auto-refreshes OAuth tokens and removes the need to manage service-account JSON yourself. Then create one edge function `append-to-sheet` and call it from the contact form, configurator, and franchise form.

Endpoints to wire:
- `src/pages/Contact.tsx` (`onSubmit` — TODO comment)
- `src/pages/Franchise.tsx` (`onSubmit`)
- `src/components/sections/Configurator.tsx` (Pay Now / Book a Free Call buttons)

### 2) Razorpay (test → live swap)

1. Get test key from Razorpay dashboard → Settings → API Keys.
2. Add `VITE_RAZORPAY_KEY_ID` (test key) + `RAZORPAY_KEY_SECRET` (server-side).
3. Create two edge functions: `create-razorpay-order` and `verify-razorpay-payment`.
4. In `Configurator.tsx`, replace the toast in the **Pay Now** branch with: load `https://checkout.razorpay.com/v1/checkout.js`, call `create-razorpay-order`, open `Razorpay()` checkout, on success call `verify-razorpay-payment`.
5. Switch to live: replace test keys with live keys. No code change needed.

### 3) Resend transactional emails

Recommended: use the **Resend** connector via Lovable Cloud gateway. Add an edge function `send-transactional-email` that branches by `templateName`:

- `payment-confirmation` (to client)
- `lead-notification` (to `OWNER_EMAIL`)
- `contact-confirmation` (to submitter)

Templates are React Email components. See Lovable docs for full setup.

### 4) Calendly

Set `VITE_CALENDLY_URL` to your scheduling link. The configurator opens it in a new tab when the estimate is above ₹25K.

### 5) WhatsApp

Set `VITE_WHATSAPP_NUMBER` (E.164 without `+`, e.g. `919999999999`). Update the hardcoded numbers in `Footer.tsx` and `Contact.tsx` to read from this env var if you want it dynamic.

## Editing content

- **Case studies**: `src/data/case-studies.ts` — add to the array, add a slug, the route auto-resolves.
- **Testimonials**: `src/data/testimonials.ts` — set `type: "whatsapp"` for chat-style cards.
- **Partnerships**: `src/data/partnerships.ts`.
- **Pricing**: `src/lib/pricing.ts` — single source of truth for the configurator. Edit the numbers, the live estimate updates.
- **Services copy**: `src/components/sections/ServiceRows.tsx`.

## Replacing portfolio CSS art with real work

The portfolio (`src/components/sections/Portfolio.tsx`) and individual case studies use crafted CSS art via `src/components/ArtBlock.tsx`. To swap in real images:

1. Drop assets in `src/assets/`.
2. In `ArtBlock.tsx`, replace the SVG/div art for a given `cs.art` value with `<img src={...} />` — keep the `aspect-[4/5] rounded-2xl` wrapper.

## Hero video

Drop `hero-bg.mp4` into `/public/`. Then in `src/components/sections/Hero.tsx`, add inside the `<section>`:

```tsx
<video autoPlay muted loop playsInline className="absolute inset-0 -z-20 w-full h-full object-cover opacity-20">
  <source src="/hero-bg.mp4" type="video/mp4" />
</video>
```

## Animations included

Magnetic cursor · scroll progress bar · word-by-word hero reveal · letter-stagger subtext · floating + parallax hero cards · dual-direction marquee (pause on hover) · count-up metrics · alternate-side case study slide-in · morphing portfolio filter · infinite drag-to-scroll testimonial carousel · cinematic stamp-down stats · split-flap live price · service row hover expansion · cubic-eased smooth scroll · per-section in-view entrances. All GPU-accelerated; respects `prefers-reduced-motion`.

## Deploy

Click **Publish** in Lovable. For custom domains, see Project Settings → Domains.
