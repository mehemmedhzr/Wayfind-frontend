# Wayfind Design System Notes

> Source: derived from the uploaded HTML design documents:
> - `Wayfind Design Document-standalone.html`
> - `Wayfind MVP.dc.html`
>
> Status: design-grounded. Use this file as Claude project context for visual consistency.

## Product identity

Wayfind is an AI-powered study-abroad platform for Azerbaijani students. The visual direction is dark, premium, AI-oriented, and trust-focused. The brand metaphor is a “wayfinding route”: a gradient path with waypoint dots that represents the user journey from certification to university matching, application, scholarships, and final offer.

Core brand phrases found in the design:
- “Find Your Way”
- “Find your way to study abroad.”
- “Xaricdə təhsilin bir AI bələdçisi.”
- “AI-powered study abroad · made for Azerbaijan”

## Visual principles

1. **Dark SaaS foundation**
   - Main UI is built around dark navy backgrounds and elevated dark cards.
   - Use subtle borders instead of heavy outlines.
   - Use glow/radial gradients only for hero, AI, CTA, or important focus areas.

2. **Gradient identity**
   - Main gradient moves from purple to violet, pink, and orange.
   - The gradient should be used sparingly for:
     - Primary CTA buttons
     - Logo text or logo mark
     - Route/path illustration
     - High-value AI or progress moments

3. **Trust and verification**
   - Repeated visual trust elements:
     - `Verified` badges
     - `last_verified` / `last_verified_at`
     - document verification states
     - source-checked labels
     - escrow status
   - UI should make trust visible, especially for AI recommendations, providers, payments, and admin verification.

4. **Role-specific color language**
   - Student / primary product: purple/violet.
   - Provider: orange.
   - Admin: blue.
   - Success/verified: green.
   - Transition/accent: pink.

## Color palette

### Core colors

| Token suggestion | Hex | Usage |
|---|---:|---|
| `background` | `#0A0F1E` | Main dark app background |
| `backgroundDeep` | `#070B16` | Cover / deepest brand background |
| `surface` | `#111827` | Cards, sections |
| `surfaceRaised` | `#1A2235` | Elevated cards, list items, nav active background |
| `primary` | `#7C3AED` | Student primary, CTAs |
| `primarySoft` | `#A855F7` | AI accents, badges |
| `accentPink` | `#EC4899` | Gradient bridge, highlights |
| `provider` | `#F97316` | Provider context, provider CTAs |
| `success` | `#10B981` | Verified, active, completed |
| `admin` | `#3B82F6` | Admin context |
| `textPrimary` | `#F8FAFC` / `#F9FAFB` | Headings and primary text |
| `textSecondary` | `#AEB6C7` / `#9CA3AF` | Body and helper text |
| `textMuted` | `#5A6377` / `#6B7588` | Labels, metadata |

### Gradients

Main brand gradient:

```css
linear-gradient(135deg, #7C3AED, #A855F7 50%, #F97316)
```

Extended signature gradient:

```css
linear-gradient(100deg, #7C3AED, #A855F7, #EC4899, #F97316)
```

Logo/hero text gradient:

```css
linear-gradient(135deg, #A855F7, #EC4899 55%, #F97316)
```

Provider/avatar examples:
- `linear-gradient(135deg, #7C3AED, #EC4899)`
- `linear-gradient(135deg, #3B82F6, #7C3AED)`
- `linear-gradient(135deg, #EC4899, #F97316)`
- `linear-gradient(135deg, #10B981, #3B82F6)`

## Typography

The main design document uses:
- **Space Grotesk** for headings.
- **Inter** for body text and UI.
- **Space Mono** for labels, metadata, `last_verified`, source, and technical tags.

The landing-page HTML uses:
- **Poppins** for marketing headings and logo text.
- **Inter** for body/UI text.

Recommended implementation rule:
- Use `Inter` everywhere for UI and body.
- Use either `Space Grotesk` or `Poppins` for headings, but do not mix both in the app unless intentionally separating marketing pages from authenticated app pages.
- Use `Space Mono` only for small metadata, source labels, IDs, and verification timestamps.

Suggested scale:
- Hero: 56–68px desktop, 34–40px mobile.
- Page title: 30–36px.
- Section title: 22–30px.
- Card title: 16–19px.
- Body: 14–17px.
- Metadata: 10–12px.

## Layout and spacing

### Containers and grids

Authenticated app shell:
- Desktop: left sidebar around `220px`, content fills remaining width.
- Mobile: one-column layout; hide desktop rail/sidebar.
- Dashboard desktop grid: `1.6fr 1fr`.
- AI page desktop grid: `300px 1fr`.
- Motivation letter desktop grid: `188px 1fr 268px`.
- Marketplace desktop grid: `1fr 1fr`.
- Provider profile desktop grid: `1fr 330px`.
- Admin desktop grid: `210px 1fr`.
- Architecture client grid: `repeat(4, 1fr)` desktop, `1fr 1fr` mobile.

Landing page:
- Desktop max visual width: 1440px.
- Header padding: around `20px 44px`.
- Hero uses two columns: approximately `1.05fr .95fr`.
- Mobile width shown: 390px.

### Spacing

Use an 8px-based spacing system:
- Small gap: 8–12px.
- Card gap: 14–24px.
- Section vertical padding: 44–72px.
- Form/card padding: 18–30px.
- Page padding: 40–56px desktop, 18–28px mobile.

## Shape, borders, and shadows

Border radii:
- Small controls: 8–10px.
- Buttons: 10–12px.
- Cards: 14–18px.
- App preview / browser frame: 18px.
- Mobile phone mockup: 34px.
- Avatar blocks: 12–15px.
- Circular progress: 50%.

Borders:
```css
border: 1px solid rgba(255,255,255,.06);
border: 1px solid rgba(255,255,255,.08);
border: 1px solid rgba(255,255,255,.10);
```

Shadows:
- Marketing app preview: `0 30px 70px rgba(0,0,0,.5)`.
- Primary CTA: `0 10px 30px rgba(124,58,237,.35)`.
- Large canvas/mockup: `0 24px 70px rgba(0,0,0,.45)`.

## Components

### Logo

Logo consists of:
- Rounded square mark, 30–44px depending on context.
- Gradient fill.
- Wordmark: `Way` in light text and `find` in gradient in the design document; landing uses full gradient wordmark.
- Tagline in landing header: “Find Your Way”.

### Buttons

Primary CTA:
- White text.
- Gradient background.
- 10–12px radius.
- 14–15px semi-bold text.
- Use for “Start as a student”, “Register”, “Davam et”, main confirmations.

Secondary button:
- Transparent background.
- Light text.
- White low-opacity border.
- Same radius and padding as primary.

Role/action examples:
- Student CTA: purple gradient.
- Provider CTA: orange accent or provider-themed gradient.
- Admin action: blue accent where needed.
- Dangerous/dispute actions should not reuse success colors.

### Cards

Use cards for:
- AI match results.
- Provider profiles.
- Dashboard stats.
- Marketplace provider cards.
- Booking/escrow stages.
- Admin verification rows.

Card style:
```css
background: #111827;
border: 1px solid rgba(255,255,255,.07);
border-radius: 16px;
```

Raised list item:
```css
background: #1A2235;
border: 1px solid rgba(255,255,255,.06);
border-radius: 14px;
```

### Badges and chips

Verified:
- Green or neutral badge with a check.
- Always visible on provider cards/profiles where verification exists.

AI badge:
- Purple/violet soft background.
- Use for AI-generated, AI-assisted, or AI-powered areas.

Source/verification metadata:
- Prefer mono font.
- Examples:
  - `last_verified · 2026-06-12`
  - `mənbə yoxlandı · 2026-06-12`
  - `rəsmi mənbədən yoxla`

Filter chips:
- Rounded 7–9px.
- Low opacity border.
- Use for countries, IELTS requirements, tuition, scholarship, field tags.

### Progress tracker

Main student progress path:
- Stages: `Sertifikatlaşma → Universitet uyğunlaşması → Müraciət`.
- Show percent completion, e.g. `46% tamamlandı`.
- Repeat the route/waypoint motif.

Onboarding completion:
- Show profile completion percentage.
- Explain that richer profile data improves AI accuracy.

### AI assistant UI

AI pages should include:
- Left panel: “AI nə bilir”.
- Source profile facts such as GPA, IELTS, degree, countries, budget.
- Chat-like question flow.
- Chip answers plus free-text input.
- “Nəticələri göstər” action.
- Strong transparency: AI should show what data it uses.

### AI results cards

Each university/program recommendation card should include:
- Country flag.
- University name.
- Program name.
- Fit score percentage.
- Tags such as tuition, IELTS, language, ranking/scholarship.
- Deadline.
- `mənbə yoxlandı` and verification date.

### Motivation letter helper

This is an AI guidance interface, not a ghostwriter.
Required UI concepts:
- Structure rail: intro/story, academic base, why this program, why country, future goals.
- Completion percentage.
- Word count.
- AI suggestions.
- Similar successful example snippets only if consent exists.
- Strong warning: AI guides; student writes. No fake claims.

### Marketplace

Marketplace supports:
- Consultants.
- Teachers.
- Search by name, university, specialization.
- Filters for country, price, high rating.
- Cards with verified badge, rating, review count, university, tags, starting price, profile link.

### Provider profile

Provider trust sections:
- Diploma verified.
- Admission letter.
- LinkedIn.
- Success history.
- Reviews.
- Package cards: Silver, Gold, Platinum.
- Escrow protection copy.

### Booking / escrow / messaging

Booking screen must show:
- Booking number.
- Provider and package.
- Payment amount in AZN.
- Status.
- Escrow status.
- Timeline/stages.
- Confirmation action to release funds.
- Dispute action.
- Booking-linked messaging thread.
- File attachment support.

### Provider panel

Provider panel should include:
- Overview.
- Bookings.
- Packages.
- Messages.
- Reviews.
- My profile.
- Verification status.
- Active bookings.
- Escrow income.
- Rating/reviews.
- Profile views.
- Package management.

### Admin panel

Admin panel should include:
- Verification queue.
- Knowledge base.
- Bookings.
- Disputes.
- Users.
- Provider document review.
- Admin blue accent.
- `last_verified_at` management for AI facts.

## Iconography

- Use thin line icons around 1.8–2px stroke.
- Emoji should be used only for flags or small friendly cues.
- Avoid heavy, filled icon sets except for logo mark and compact badges.

## Animation

Found animation concepts:
- `wfPulse`: subtle pulse for highlighted route/waypoints.
- `wfFlow`: gradient flow motion.
- Use animation lightly for AI route/path, loading, and active waypoints.
- Do not animate core forms excessively.

## Responsive behavior

Breakpoint from design logic:
- Treat `< 880px` as mobile.
- Mobile layout should collapse to one column.
- Hide desktop side rails on mobile.
- Keep main CTAs full-width on landing mobile.
- Use bottom navigation only where app context needs it.

## Copy tone

The tone is:
- Helpful, calm, premium.
- Localized for Azerbaijan.
- Transparent about AI.
- Trust-first for money, verification, and recommendations.

Avoid:
- Overpromising admission outcomes.
- Saying AI guarantees acceptance.
- Hiding data sources.
- Making provider claims without verification.
