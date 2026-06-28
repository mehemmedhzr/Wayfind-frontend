# Wayfind Frontend Architecture

> Status: recommended architecture for the planned Next.js frontend, grounded in the provided design files where possible.
>
> The uploaded design document says the web client is `React + TS`. The user has chosen Next.js for frontend implementation, so this document adapts the design to a Next.js architecture.

## Goals

The frontend should support:

- Public guest landing pages.
- Auth and role-based onboarding.
- Student dashboard and AI assistant flow.
- Marketplace, provider profiles, booking, escrow, and messages.
- Provider dashboard.
- Admin dashboard.
- Future mobile/API reuse.
- Strong design-system consistency.
- Clear separation between UI, business rules, API calls, and role permissions.

## Recommended stack

### Core

- **Next.js App Router**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui or Radix UI primitives**
- **React Hook Form**
- **Zod**
- **TanStack Query** for client-side server state
- **Zustand** only for small UI state, not server data
- **NextAuth/Auth.js or backend-issued JWT integration** depending on backend auth decision
- **next-intl** if Azerbaijani/English localization is needed from the start

### Styling

- Tailwind theme tokens should mirror `design-system-notes.md`.
- Use CSS variables for colors and role themes.
- Prefer reusable components instead of copying inline design styles.
- Keep animations minimal and tokenized.

### Data fetching

Use a layered approach:

1. Server Components for mostly static/public data.
2. Server Actions only for simple mutations where appropriate.
3. TanStack Query for interactive app areas:
   - AI chat
   - dashboard refresh
   - marketplace filters
   - booking status
   - messages
   - admin queues

## App route structure

Recommended `app/` structure:

```txt
app/
  (marketing)/
    page.tsx
    how-it-works/
    about/
    providers/
  (auth)/
    login/
    register/
    forgot-password/
  (student)/
    onboarding/
    dashboard/
    ai/
      page.tsx
      results/
      motivation-letter/
    marketplace/
    providers/
      [providerId]/
    bookings/
      [bookingId]/
    messages/
  (provider)/
    provider/
      dashboard/
      bookings/
      packages/
      messages/
      reviews/
      profile/
  (admin)/
    admin/
      verification/
      knowledge-base/
      bookings/
      disputes/
      users/
  api/ // only if using Next.js route handlers for BFF/proxy
```

Alternative if you want URLs closer to the design:
- `/panel`
- `/profil`
- `/ai`
- `/ai/netice`
- `/ai/motivasiya-mektubu`
- `/konsultantlar`
- `/konsultant/[slug]`
- `/bron/[bookingId]`
- `/provayder/panel`
- `admin.wayfind.az/...`

For maintainability, prefer English folder names in code and localized labels in UI.

## Feature-based source structure

Recommended `src/` structure:

```txt
src/
  app/
  components/
    ui/
    layout/
    brand/
    forms/
    feedback/
  features/
    auth/
    onboarding/
    student-dashboard/
    ai-assistant/
    ai-results/
    motivation-letter/
    marketplace/
    provider-profile/
    booking/
    messaging/
    provider-dashboard/
    admin-verification/
    admin-knowledge-base/
  lib/
    api/
    auth/
    permissions/
    validations/
    formatting/
    constants/
  types/
    user.ts
    provider.ts
    student.ts
    ai.ts
    booking.ts
    admin.ts
  styles/
    globals.css
    tokens.css
```

Rule:
- Shared generic components go in `components/`.
- Business-specific UI goes in `features/<feature>/components`.
- API functions live close to the feature or in `lib/api` if shared.

## Layout architecture

### Marketing layout

Used for:
- Landing page
- How it works
- About
- Public provider info

Contains:
- Public header
- Responsive mobile nav
- Hero sections
- Footer

### Auth layout

Used for:
- Login
- Register
- Forgot password
- Role selection

Contains:
- Centered glass/dark card.
- Route/path background illustration.
- Social login options if enabled.

### Student app layout

Used for:
- Dashboard
- AI assistant
- Marketplace
- Bookings
- Messages

Contains:
- Sidebar on desktop.
- Collapsed or bottom nav on mobile.
- Student purple theme.
- User profile summary.

### Provider app layout

Used for:
- Provider dashboard.
- Provider bookings/packages/messages/reviews/profile.

Contains:
- Provider orange theme.
- Verification status visible.
- Escrow income visible.

### Admin layout

Used for:
- Admin verification.
- Knowledge base.
- Bookings/disputes/users.

Contains:
- Blue admin accent.
- Dense table/list layout.
- Audit-friendly actions.
- No marketing styling.

## Component architecture

### UI primitives

Suggested shared primitives:

```txt
Button
Card
Badge
Input
Textarea
Select
Tabs
Modal/Dialog
Dropdown
Avatar
Progress
Stepper
Toast
Skeleton
FileUpload
DataTable
EmptyState
ErrorState
```

### Brand components

```txt
Logo
GradientText
RoutePath
Waypoint
TrustBadge
VerifiedBadge
SourceVerifiedLabel
RoleBadge
```

### Product components

```txt
ProfileCompletionRail
StudentProgressTracker
AiKnownFactsPanel
AiQuestionChat
AiAnswerChips
UniversityMatchCard
DeadlineRoadmap
MotivationLetterEditor
AiSuggestionPanel
ProviderCard
ProviderTrustSection
PackageCard
BookingTimeline
EscrowStatusCard
BookingChat
ProviderStatsGrid
AdminVerificationQueue
DocumentReviewPanel
KnowledgeBaseFactRow
```

## State management

### Server state

Use TanStack Query for:
- Current user profile.
- AI question state.
- AI results.
- Marketplace provider list.
- Provider profile.
- Booking details.
- Messages.
- Provider dashboard metrics.
- Admin queues.

### Local UI state

Use local React state or Zustand for:
- Sidebar open/closed.
- Active tabs.
- Modal state.
- Temporary step state before submit.
- Draft text in motivation letter editor if not persisted immediately.

### Forms

Use:
- React Hook Form.
- Zod schemas.
- Server-side validation mirrored from backend.
- Clear validation messages.

## Authentication and authorization

Frontend must not rely only on hidden UI for security. Role checks should exist in the backend too.

Frontend should still:
- Redirect unauthenticated users from protected routes.
- Load the current session/user.
- Use role-based navigation.
- Render only allowed route groups.
- Display clear forbidden/unauthorized states.

Suggested roles enum:

```ts
export type UserRole = 'guest' | 'student' | 'provider' | 'admin' | 'superAdmin';
```

Provider type enum:

```ts
export type ProviderType = 'teacher' | 'consultant';
// Phase 2 candidate from design document:
// | 'visa'
```

## API client pattern

Recommended:

```txt
lib/api/client.ts
lib/api/endpoints.ts
features/<feature>/api/*.ts
features/<feature>/hooks/*.ts
```

Example naming:
- `getCurrentUser`
- `updateStudentProfile`
- `uploadTranscript`
- `getAiKnownFacts`
- `submitAiAnswer`
- `getUniversityMatches`
- `getDeadlineRoadmap`
- `searchProviders`
- `getProviderProfile`
- `createBooking`
- `releaseEscrow`
- `openDispute`
- `getProviderDashboard`
- `getAdminVerificationQueue`
- `approveProviderVerification`
- `updateKnowledgeBaseFact`

## Design tokens

Create tokens in Tailwind config and CSS variables.

Suggested CSS variables:

```css
:root {
  --wf-bg: #0A0F1E;
  --wf-bg-deep: #070B16;
  --wf-surface: #111827;
  --wf-surface-raised: #1A2235;
  --wf-primary: #7C3AED;
  --wf-primary-soft: #A855F7;
  --wf-accent-pink: #EC4899;
  --wf-provider: #F97316;
  --wf-success: #10B981;
  --wf-admin: #3B82F6;
  --wf-text-primary: #F8FAFC;
  --wf-text-secondary: #AEB6C7;
  --wf-text-muted: #5A6377;
}
```

Tailwind should expose:
- `bg-wf-bg`
- `bg-wf-surface`
- `bg-wf-surface-raised`
- `text-wf-primary`
- `text-wf-muted`
- `border-white/6` style utilities
- gradient utility classes for brand CTAs.

## Route protection

Suggested route policies:

```txt
(marketing)          public
(auth)               public, redirect logged-in users
(student)            student only
(provider)           provider only
(admin)              admin/superAdmin only
```

Super Admin needs PRD confirmation before special frontend routes are built.

## Error and loading states

Use consistent states:
- Skeleton cards for dashboard and marketplace.
- Chat typing/loading state for AI.
- Upload progress for transcripts and attachments.
- Empty state for no matches/no bookings/no messages.
- Error state with retry for failed AI/API calls.
- Admin action confirmation dialogs for approve/reject/dispute actions.

## File upload handling

Needed from design:
- Transcript upload.
- Motivation letter attachment in messages.
- Provider verification documents.
- Booking chat attachments.

Frontend should support:
- Upload progress.
- File type validation.
- File size validation.
- Virus/security scan status if backend supports it.
- Preview for PDFs/images where safe.
- User-friendly failure messages.

## AI frontend rules

AI UI should:
- Display what the AI knows before asking more.
- Ask missing facts step by step.
- Let users correct extracted transcript values.
- Show source verification on recommendations and deadlines.
- Avoid presenting AI output as guaranteed truth.
- Keep motivation-letter helper as guidance, not automated fake writing.

## Admin frontend rules

Admin UI should:
- Be dense and efficient.
- Prioritize document preview and side-by-side verification.
- Show timestamps and `last_verified_at`.
- Require confirmation for approve/reject/dispute operations.
- Preserve audit trail data from backend.

## Testing recommendations

- Unit tests for formatting, validation, permissions.
- Component tests for role-specific navigation and protected UI.
- E2E tests for:
  - Guest → register → student onboarding.
  - Transcript upload → AI questions → AI results.
  - Marketplace → provider profile → booking.
  - Student/provider booking message flow.
  - Provider package management.
  - Admin provider approval.
  - Knowledge-base verification update.

## What needs PRD confirmation

- Exact backend stack if different from the design document.
- Exact auth provider and session model.
- Super Admin permissions.
- Payment provider and escrow mechanics.
- Commission/platform fee rules.
- Exact document upload limits and accepted formats.
- Whether mobile app is in Phase 1 or later.
- Whether Azerbaijani-only or multilingual UI is required in MVP.
