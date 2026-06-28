# Wayfind PRD — Phase 1 MVP

**Product:** Wayfind  
**Document type:** Product Requirements Document for Claude / VS Code project context  
**Version:** 1.0  
**Date:** June 2026  
**Platform:** Web platform + mobile application  
**Market:** Azerbaijan  
**Primary UI language:** Azerbaijani  

---

## 0. How Claude Should Use This Document

This file is the main product source of truth for Phase 1 development. When generating code, UI, routes, components, API calls, database-facing types, validation logic, or tests, Claude must follow this PRD together with the other project Markdown files in `/docs`.

### Non-negotiable rules

1. **Do not build Phase 2 features in Phase 1.**
2. **Do not invent university deadlines, requirements, or scholarship facts.**
3. **Every AI output containing a date, requirement, tuition, deadline, eligibility rule, or document requirement must be source-grounded.**
4. **The UI must be Azerbaijani-first.** English labels may be used only as temporary development placeholders.
5. **Provider trust and verification are core product features, not optional UI decorations.**
6. **Escrow payment logic must never auto-release funds without student confirmation or admin action.**
7. **Transcripts, diplomas, admission letters, and credentials are private files.** They must be handled through private storage and signed URLs.
8. **If any requirement is unclear, preserve flexibility and mark it as needing product-owner confirmation instead of hardcoding assumptions.**

---

## 1. Product Purpose & Scope

Wayfind is an AI-powered study abroad platform for Azerbaijani students. It connects students with verified education service providers and uses a source-grounded AI engine to generate personalised university matches, scholarship matches, and application deadline roadmaps.

Phase 1 is the MVP. The goal is to prove the core loop:

> A student creates a profile, uploads a transcript, receives an AI roadmap, browses verified providers, books a teacher or consultant, pays through escrow, messages the provider, completes the service, and leaves a review.

### 1.1 Phase 1 pillars

Phase 1 includes exactly these three pillars:

1. **AI Assistant**
   - Student profile analysis
   - Transcript parsing
   - University/program matching
   - Scholarship matching
   - Deadline roadmap generation
   - Motivation-letter assistance

2. **Certification Teachers**
   - IELTS, TOEFL, GRE/GMAT, Goethe, ÖSD teachers
   - Teacher profiles
   - Class/package listings
   - Verification and reviews

3. **Verified Consultants**
   - Study-abroad consultants
   - Verified graduates who studied abroad
   - Experienced professional consultants
   - Consultant packages
   - Verified credentials and success records

### 1.2 Phase 1 excludes

Do **not** build these in Phase 1:

- Visa company listings, profiles, filters, or bookings.
- ESC / SDGT volunteering section.
- AI ESC matching.
- Apartment-finding service for students abroad.
- University advertising or paid placement module.
- Premium student subscription billing.

The architecture should leave room for these later, but they must not appear as active MVP features unless explicitly requested by the product owner.

---

## 2. Target Users

| User type | Role | Primary need |
|---|---|---|
| Student | Consumer / demand side | Find providers, get AI roadmap, manage application journey |
| Certification Teacher | Provider / supply side | List classes, show verified results, receive student bookings |
| Verified Consultant | Provider / supply side | Offer mentorship packages, display credentials and success records |
| Admin | Internal platform operator | Verify providers, moderate content, manage disputes and AI knowledge base |

### 2.1 Student

Students use Wayfind to:

- Register and build a study-abroad profile.
- Upload transcript and certificates.
- Receive AI-generated university and scholarship matches.
- View fit scores, tuition, requirements, deadlines, and source notes.
- Save universities/programs.
- Track document checklist and upcoming deadlines.
- Browse certification teachers and consultants.
- Book a class or package.
- Pay through escrow.
- Message the provider inside the booking.
- Confirm service completion.
- Leave one review per completed booking.

### 2.2 Certification Teacher

Certification teachers use Wayfind to:

- Register as a provider.
- Choose provider subtype: teacher.
- Upload credentials for admin verification.
- Create teacher profile.
- Add certifications and claimed score-gain records.
- Create class/package listings.
- Manage bookings.
- Message students inside booking context.
- Receive payment after completion confirmation or admin release.

Supported certificate categories for Phase 1:

- IELTS
- TOEFL
- GRE / GMAT
- Goethe
- ÖSD

### 2.3 Verified Consultant

Verified consultants use Wayfind to:

- Register as a provider.
- Choose provider subtype: consultant.
- Upload credentials.
- Create consultant profile.
- Add country specialisations.
- Add university/major/year information where relevant.
- Create packages such as Silver, Gold, and Platinum.
- Add success records for admin verification.
- Manage bookings and messages.

Supported consultant categories:

1. **Verified graduate**
   - Someone who studied abroad and can prove it with documents such as diploma, admission letter, LinkedIn, or similar evidence.

2. **Experienced professional consultant**
   - Someone with professional consulting experience and track record.

The verification criteria for these two consultant categories differ and must be represented in admin tooling.

### 2.4 Admin

Admins use Wayfind to:

- Verify or reject provider applications.
- Review uploaded diplomas, admission letters, LinkedIn profiles, and other credentials.
- Verify teacher results and consultant success records before public display.
- Manage the AI knowledge base.
- Add, edit, and mark universities, programs, and scholarships as verified.
- View all bookings.
- Resolve disputes.
- Freeze or release escrow.
- Moderate content and reviews.
- Manage users.

---

## 3. Product Goals & Success Criteria

### 3.1 Product goals

1. Deliver a working web platform and mobile app where a student can complete the full Phase 1 journey end to end.
2. Establish provider verification as the platform's trust differentiator.
3. Ship an AI Assistant that produces accurate, source-grounded university and scholarship matches with deadline roadmaps.
4. Build an architecture that can extend to Phase 2 without re-engineering.

### 3.2 Definition of Done for Phase 1

Phase 1 is done when all of these are true:

- Student can register, log in, build a profile, upload transcript, and receive AI-generated university and scholarship matches.
- Student can receive a deadline roadmap based on retrieved program data.
- Student can browse, filter, and compare certification teachers.
- Student can browse, filter, and compare verified consultants.
- Student can book a class or consultant package.
- Student can pay through escrow.
- Student can message a provider in-app within booking context.
- Provider can register, submit credentials, create listings/packages, and manage bookings.
- Admin can verify providers and success records.
- Admin can view bookings and resolve disputes.
- Review/rating flow works after completed bookings.
- Web app is responsive.
- Mobile app supports iOS and Android.
- UI is Azerbaijani-first.

---

## 4. High-Level Architecture

Wayfind is a client-server system with four client surfaces connected to a single backend API.

### 4.1 Client surfaces

- Web app
- Mobile app for iOS
- Mobile app for Android
- Admin panel

### 4.2 Backend services

- API gateway / backend API
- AI service
- Payment / escrow integration
- File storage
- Core relational database
- Vector database or vector extension

### 4.3 Architecture diagram

```text
┌─────────────────────────────────────────────────────────────┐
│                         CLIENTS                             │
│   Web App (Next.js)   Mobile App (React Native)   Admin Panel│
└───────────────┬─────────────────┬───────────────┬───────────┘
                │                 │               │
                ▼                 ▼               ▼
        ┌───────────────────────────────────────────┐
        │           API GATEWAY / BACKEND API        │
        │   Auth · Rate limiting · Request routing   │
        └───────────────┬───────────────────────────┘
                        │
        ┌───────────────┼───────────────────────────┐
        ▼               ▼               ▼           ▼
  ┌──────────┐   ┌──────────┐    ┌──────────┐  ┌──────────┐
  │ Backend  │   │ AI       │    │ Payment  │  │ File     │
  │ API      │   │ Service  │    │ Escrow   │  │ Storage  │
  │ Core     │   │ FastAPI  │    │ Gateway  │  │ S3-like  │
  └────┬─────┘   └────┬─────┘    └──────────┘  └──────────┘
       │              │
       ▼              ▼
  ┌──────────┐   ┌──────────────┐
  │ Postgres │   │ Vector DB    │
  │ Core DB  │   │ Embeddings   │
  └──────────┘   └──────────────┘
```

---

## 5. Recommended Technology Stack

| Layer | Recommended technology | Reason |
|---|---|---|
| Web frontend | React, Next.js, TypeScript, Tailwind CSS | Component-based, fast, good for dark UI and SEO landing pages |
| Mobile app | React Native with Expo | Single codebase for iOS and Android |
| Backend API | Node.js + NestJS + TypeScript | Structured backend with same language as frontend |
| AI service | Python + FastAPI | Strong AI, LLM, OCR, embeddings ecosystem |
| Core database | PostgreSQL | Relational integrity for users, bookings, payments |
| Vector database | pgvector or Qdrant | Embedding search for AI matching and document retrieval |
| File storage | AWS S3 or Cloudflare R2 | Private transcript and credential storage |
| Auth | JWT + refresh tokens, or Supabase Auth | Works across web and mobile |
| Payments | Local AZN gateway such as Kapital or ABB, plus escrow logic | Required for Azerbaijan market |
| Hosting | DigitalOcean, Hetzner VPS, or AWS | Cost-effective and scalable |
| AI model | Claude / GPT API with RAG pipeline | Source-grounded answer generation |

### 5.1 Frontend implementation note

The project may use Next.js for web. Prefer:

- TypeScript everywhere.
- App Router if using modern Next.js.
- Server components where useful, but keep interactive flows as client components.
- Shared design tokens from `design-system-notes.md`.
- Shared validation schemas where possible.
- Feature-based folder structure.
- Role-aware layouts.

---

## 6. AI Assistant Requirements

The AI Assistant is the core differentiator. It must be implemented as a separate AI service that the backend calls.

### 6.1 Critical AI principle

The AI must use Retrieval-Augmented Generation.

It must **not** free-generate:

- University requirements
- Scholarship requirements
- Tuition values
- Deadlines
- Document requirements
- Eligibility rules
- Program facts

It must retrieve verified facts from the curated knowledge base and compose answers from those facts.

### 6.2 AI inputs

The AI Assistant accepts:

- Parsed transcript data:
  - GPA
  - credits
  - courses
  - grades
- Target countries
- Field of study
- Degree level
- Budget:
  - tuition budget
  - living budget
- Certificate score
- Intake year
- Student interests

### 6.3 AI processing pipeline

1. Parse transcript.
2. Extract structured academic data.
3. Build query embedding from student profile.
4. Retrieve matching programs and scholarships from curated DB.
5. Apply structured filters:
   - country
   - field
   - degree level
   - budget
   - language requirement
   - intake year
   - academic requirements
6. Rank matches by fit score.
7. Generate deadline roadmap from retrieved program deadlines and document requirements.
8. Generate motivation-letter guidance from successful-letter examples where available.
9. Attach source references to all factual outputs.
10. Show a “verify with official source” note in UI.

### 6.4 AI outputs

The AI Assistant returns:

- Ranked university/program list.
- Fit score per program.
- Tuition information.
- Language requirement.
- Deadline.
- Source reference.
- Matching scholarships.
- Deadline roadmap.
- Ordered application steps.
- Document checklist.
- Motivation-letter assistance.

### 6.5 AI UI requirements

Every result containing facts must show:

- Match score.
- Main reason for match.
- Tuition or cost if known.
- Language requirement if known.
- Deadline if known.
- Source reference.
- “Verify with official source” notice.

### 6.6 AI safety / product risk

A hallucinated deadline or requirement can seriously harm students. Treat AI accuracy as a product-critical requirement.

Do not hide uncertainty. If data is missing, show:

> This information is not verified yet. Please check the official university source.

---

## 7. Feature Requirements

## 7.1 Authentication & Onboarding

### Users

- Student
- Provider
- Admin

### Requirements

- Email + password registration.
- Email + password login.
- JWT access token.
- Refresh token.
- Password reset via email.
- Role selection during registration:
  - Student
  - Provider
- If provider is selected, ask provider subtype:
  - Certification Teacher
  - Verified Consultant
- Phone number is optional but recommended.
- All screens and validation messages must be Azerbaijani.

### Acceptance criteria

- A user can register as a student.
- A user can register as a provider.
- A provider must select teacher or consultant subtype.
- A user can log in and remain authenticated through refresh token.
- A user can request password reset.
- Role-specific dashboard opens after login.

---

## 7.2 Student Profile & Transcript

### Requirements

Student profile builder must be multi-step:

1. Personal information
2. Academic information
3. Certificate information
4. Goals
5. Budget
6. Intake year
7. Interests
8. Transcript upload

### Student profile fields

Recommended fields based on PRD:

- Full name
- Email
- Phone number
- Current education level
- GPA
- Field of study
- Degree target
- Target countries
- Budget
- Intake year
- Certificate type
- Certificate score
- Interests
- Transcript file

### Transcript upload

- Accept PDF or image.
- Store in private file storage.
- Maximum file size: 10MB per file.
- AI service reads the transcript for analysis.
- Use signed URLs for private access.

### Profile completeness

Show a profile completeness indicator because AI quality depends on profile completeness.

### Acceptance criteria

- Student can complete all profile steps.
- Student can save partial profile.
- Student can upload transcript.
- Student can see profile completeness percentage.
- AI match generation is blocked or warned when required profile data is missing.

---

## 7.3 Certification Teachers Marketplace

### Browse and filter requirements

Students can browse teachers and filter by:

- Certificate type
- Price
- Rating
- Format:
  - Online
  - Offline
  - Hybrid

### Teacher profile requirements

Teacher profile shows:

- Photo
- Name
- Verified badge if verified
- Certificate specialisations
- Certifications
- Average score gain
- Packages/classes
- Reviews
- Rating
- Format
- Price

### Teacher provider requirements

Teacher can:

- Register.
- Upload credentials.
- Submit claimed results for verification.
- Create packages/classes.
- Manage bookings.

### Acceptance criteria

- Student can browse teacher cards.
- Student can filter teacher list.
- Student can open teacher profile.
- Unverified teacher cannot show verified badge.
- Claimed results are not public until admin verification.
- Student can book a teacher package.

---

## 7.4 Verified Consultants Marketplace

### Browse and filter requirements

Students can browse consultants and filter by:

- Country specialisation
- Price
- Rating
- University attended

### Consultant profile requirements

Consultant profile shows:

- Photo
- Name
- Verified badge
- Consultant type:
  - Verified graduate
  - Professional consultant
- Country specialisations
- University attended where relevant
- Major
- Year
- Diploma / admission / LinkedIn verification badge where relevant
- Packages:
  - Silver
  - Gold
  - Platinum
- Success records table
- Reviews
- Rating

### Consultant registration requirements

Consultant can:

- Upload credentials.
- Add education background.
- Add country specialisation.
- Add packages.
- Add success records.
- Submit for admin verification.

### Acceptance criteria

- Student can browse consultant cards.
- Student can filter consultants.
- Student can open consultant profile.
- Consultant profile clearly shows verification state.
- Success records are not public until admin verification.
- Student can book a consultant package.

---

## 7.5 Booking, Escrow Payments & Messaging

### Booking lifecycle

Booking statuses:

1. `pending`
2. `active`
3. `completed`
4. `disputed`
5. `cancelled`

### Booking requirements

- Student chooses teacher class or consultant package.
- Student creates booking.
- Student pays through escrow.
- Booking becomes active after payment capture.
- Messaging opens inside booking context.
- Provider delivers service.
- Student confirms completion.
- Funds release to provider after confirmation.
- If there is a dispute, admin resolves it.

### Escrow requirements

- Payment is captured into platform escrow.
- Funds are held until student confirms completion or admin releases funds.
- Refund path exists if disputed.
- Funds must not auto-release without confirmation or admin action.

### Messaging requirements

- Messaging is scoped to booking.
- Messaging exists to keep communication on-platform.
- Anti-circumvention matters.

### Acceptance criteria

- Student can create booking.
- Payment status is tracked.
- Booking status changes correctly.
- Student and provider can message only within booking context.
- Student can confirm service completion.
- Admin can freeze/release escrow during dispute.

---

## 7.6 Reviews & Ratings

### Requirements

- One review per completed booking.
- Provider cannot delete reviews.
- Provider rating average recalculates after each new review.
- Reviews should be associated with the booking.

### Acceptance criteria

- Student can leave review only after completed booking.
- Student cannot create multiple reviews for one booking.
- Provider cannot delete review.
- Rating average updates correctly.

---

## 7.7 Student Dashboard & Progress Tracker

### Progress tracker stages

1. Certification
2. University Matching
3. Application

### Dashboard modules

Student dashboard should show:

- Profile completeness
- AI roadmap status
- Saved universities/programs
- Document checklist
- Upcoming deadlines
- Deadline urgency colour coding
- My providers
- Active bookings
- Notifications

### Acceptance criteria

- Student can see application progress.
- Student can see upcoming deadlines.
- Student can access saved universities.
- Student can access active provider bookings.
- Student can continue incomplete profile or AI flow from dashboard.

---

## 7.8 Admin Panel

### Admin capabilities

Admin can:

- View provider verification queue.
- Verify or reject provider.
- Review uploaded diplomas, admission letters, LinkedIn, certifications.
- Verify teacher score-gain records.
- Verify consultant success records.
- Manage AI knowledge base.
- Add/edit universities.
- Add/edit programs.
- Add/edit scholarships.
- Mark records with `last_verified_at`.
- View all bookings.
- Resolve disputes.
- Freeze escrow.
- Release escrow.
- Moderate content.
- Manage users.

### Acceptance criteria

- Admin can approve provider verification.
- Admin can reject provider verification with reason.
- Verified badge only appears after approval.
- Admin can verify or reject success records.
- Admin can update knowledge-base records.
- AI uses only verified/source-backed data for factual outputs.

---

## 8. Suggested Frontend Route Map

These route names are implementation suggestions for consistency. Adjust only if the project already uses a different route convention.

### Public routes

```text
/
/how-it-works
/about
/login
/register
/register/student
/register/provider
```

### Student routes

```text
/student/dashboard
/student/profile
/student/profile/edit
/student/profile/transcript
/student/ai
/student/ai/results
/student/roadmap
/student/universities/saved
/student/providers/teachers
/student/providers/teachers/[teacherId]
/student/providers/consultants
/student/providers/consultants/[consultantId]
/student/bookings
/student/bookings/[bookingId]
/student/messages/[bookingId]
/student/reviews/[bookingId]
```

### Provider routes

```text
/provider/dashboard
/provider/profile
/provider/verification
/provider/packages
/provider/packages/new
/provider/packages/[packageId]/edit
/provider/bookings
/provider/bookings/[bookingId]
/provider/messages/[bookingId]
/provider/reviews
```

### Admin routes

```text
/admin/dashboard
/admin/users
/admin/providers
/admin/providers/verification
/admin/providers/[providerId]
/admin/success-records
/admin/bookings
/admin/disputes
/admin/knowledge-base
/admin/knowledge-base/universities
/admin/knowledge-base/programs
/admin/knowledge-base/scholarships
/admin/moderation
```

---

## 9. Suggested Core Data Entities

The uploaded PRD references data model migrations but does not include a full database schema section. The entities below are inferred from explicit feature requirements and should be treated as a starting point, not a final schema.

### Identity and roles

- `User`
- `StudentProfile`
- `ProviderProfile`
- `AdminProfile` or admin role flag
- `Role`
- `ProviderSubtype`

### Student journey

- `TranscriptFile`
- `StudentGoal`
- `StudentCertificate`
- `SavedProgram`
- `DeadlineTask`
- `DocumentChecklistItem`

### AI knowledge base

- `University`
- `Program`
- `Scholarship`
- `ProgramRequirement`
- `ProgramDeadline`
- `KnowledgeSource`
- `EmbeddingRecord`
- `AiMatchRun`
- `AiMatchResult`
- `AiRoadmapItem`

### Providers

- `TeacherProfile`
- `ConsultantProfile`
- `ProviderCredential`
- `ProviderVerificationRequest`
- `TeacherResultRecord`
- `ConsultantSuccessRecord`
- `ProviderPackage`
- `ProviderReview`

### Transactions and communication

- `Booking`
- `Payment`
- `EscrowTransaction`
- `Dispute`
- `MessageThread`
- `Message`
- `Notification`

### Important schema notes

- Most provider public trust fields require admin verification.
- AI factual outputs require source references.
- File records should store private object keys, not public URLs.
- Reviews should be tied to completed bookings.
- Booking-scoped messaging should reference booking ID.

---

## 10. Non-Functional Requirements

| Requirement | Target |
|---|---|
| Language | Full Azerbaijani UI across web and mobile; i18n-ready for future English |
| Performance | Page/screen load under 3 seconds on average mobile connection |
| Mobile platforms | iOS 14+ and Android 9+ |
| Responsive web | Desktop, tablet, and mobile browsers |
| Security | HTTPS everywhere; passwords hashed with bcrypt or argon2; JWT expiry and refresh |
| Data protection | Comply with Azerbaijan Law on Personal Data; explicit consent for transcript and AI training use |
| File handling | Private file storage; signed URLs; max 10MB per file |
| Escrow integrity | Funds never auto-release without student confirmation or admin action |
| AI accuracy | No date/requirement output without source record; verify notice mandatory |
| Availability | 99% uptime target for MVP; daily DB backups |
| Accessibility | Sufficient colour contrast on dark theme; readable font sizes |

---

## 11. Design Requirements

Use the separate `design-system-notes.md` file as the detailed design-system source. The PRD-level design requirements are:

### 11.1 Visual identity

- Dark, AI-forward, modern interface.
- Azerbaijani-first content.
- Use the supplied Wayfind logo PNG.
- Logo concept: “W” formed by two human figures with purple-to-orange gradient on dark rounded square.
- Wordmark: “Way” in purple, “find” in orange.
- Slogans:
  - Find Your Way
  - Your Way. Your World.

### 11.2 Brand colours

| Token | Hex | Use |
|---|---|---|
| Background primary | `#0A0F1E` | App background |
| Surface | `#111827`, `#13132A` | Cards, panels |
| Surface elevated | `#1A2235` | Raised cards, modals |
| Brand purple | `#A855F7`, `#7C3AED` | Primary brand, student accent |
| Brand orange | `#F97316` | Secondary brand, consultant accent |
| Brand pink | `#EC4899` | Gradient midpoint |
| Success green | `#10B981` | Verified, completed, positive |
| Info blue | `#3B82F6` | Information, links |
| Text primary | `#F9FAFB` | Headings, primary text |
| Text secondary | `#9CA3AF` | Body, muted text |

### 11.3 Typography

- Inter or Poppins.
- Prefer Inter for UI/body text.
- Prefer Poppins for headings/brand moments if the design system uses it.

### 11.4 Component requirements

Design and implement reusable components for:

- Navigation
- Provider cards
- Teacher card variant
- Consultant card variant
- Profile pages
- Package cards
- AI chat / AI input form
- AI results panel
- Deadline timeline
- Student dashboard
- Progress tracker
- Booking flow
- Messaging
- Review components
- Provider registration wizard
- Admin tables
- Verification badges
- Status badges
- Empty states
- Loading states
- Error states

### 11.5 UI style

- Gradient buttons, purple to orange.
- Soft glows on hover.
- Rounded corners around 12–16px.
- Subtle card borders.
- Dark navy backgrounds.
- AI/product preview cards should feel premium and trustworthy.

---

## 12. Build Sequence

### 12.1 Sprint 0 — Foundations, Week 1–2

Designer:

- Finalise Figma design system.
- Finalise colours, typography, and core components.
- Create 6–8 core screens.

Backend:

- Set up repo.
- Set up CI.
- Set up PostgreSQL.
- Implement data model migrations.
- Build authentication.
- Implement register/login/JWT/refresh/roles.

AI engineer:

- Stand up FastAPI service skeleton.
- Choose vector database.
- Begin curating universities, programs, and scholarships seed data.

Frontend and mobile:

- Scaffold apps.
- Create shared API client.
- Set up routing.
- Set up design tokens.

### 12.2 Sprint 1 — Identity & Profiles, Week 3–4

- Student onboarding.
- Provider onboarding.
- Student profile builder.
- Transcript upload.
- Provider profile.
- Credential upload.
- Basic admin verification screen.

### 12.3 Sprint 2 — Marketplace, Week 5–6

- Teacher browse/filter/compare.
- Consultant browse/filter/compare.
- Provider profile pages.
- Packages.
- Success records.
- Reviews display.
- Provider verification.
- Success-record verification.

### 12.4 Sprint 3 — AI Assistant, Week 5–8, parallel

- Transcript parsing.
- RAG retrieval over curated DB.
- Ranking and match results endpoint.
- Deadline roadmap generation from retrieved data.
- Frontend AI page.
- AI input form.
- AI results panel.
- Roadmap timeline.
- Motivation-letter assist.

### 12.5 Sprint 4 — Transactions, Week 7–9

- Booking flow.
- Escrow payment integration.
- Booking-scoped messaging.
- Reviews and ratings after completion.
- Student dashboard.
- Progress tracker.

### 12.6 Sprint 5 — Hardening & Launch, Week 10–12

- End-to-end testing.
- Security review.
- Data-protection consent flows.
- Performance tuning.
- Admin tooling completion.
- Dispute resolution.
- Beta release to waitlist users.

### 12.7 Critical path

Build in this order:

1. Data model and auth.
2. Profiles.
3. AI knowledge-base curation.
4. Marketplace.
5. AI matching.
6. Booking and escrow.

The AI knowledge base is the longest dependency. Start curation early.

---

## 13. Frontend Development Guidance for Claude

When working in the frontend codebase:

### 13.1 Use project docs first

Before generating or editing code, read:

- `docs/prd-phase1.md`
- `docs/design-system-notes.md`
- `docs/user-roles.md`
- `docs/frontend-architecture.md`
- `docs/naming-conventions.md`
- `docs/business-rules.md`

### 13.2 UI language

- Build UI text in Azerbaijani.
- If translations are not yet available, use clear translation keys instead of hardcoded English.
- Keep copy concise and product-appropriate.

### 13.3 Role-aware UX

Always check which role owns the screen:

- Guest
- Student
- Provider Teacher
- Provider Consultant
- Admin

Do not show admin/provider actions to students.
Do not show unverified badges until verification is approved.
Do not expose private file URLs.

### 13.4 Component structure

Prefer reusable components:

- `ProviderCard`
- `TeacherCard`
- `ConsultantCard`
- `PackageCard`
- `VerificationBadge`
- `FitScoreBadge`
- `DeadlineTimeline`
- `ProgressTracker`
- `BookingStatusBadge`
- `EscrowStatusBadge`
- `ReviewCard`
- `AdminTable`

### 13.5 Validation

Use explicit validation for:

- Required profile fields.
- File type.
- File size.
- Provider subtype.
- Package price.
- Booking status transitions.
- Review eligibility.
- AI input completeness.

### 13.6 State and API handling

For every async UI:

- Show loading state.
- Show empty state.
- Show error state.
- Avoid silent failures.
- Use typed API responses.

### 13.7 Security-sensitive frontend rules

- Never assume client-side role checks are enough.
- Never expose private document URLs directly.
- Never show unverified success records as verified.
- Never allow review UI before booking completion.
- Never show escrow release action to student except completion confirmation.
- Never show escrow release/freeze controls outside admin.

---

## 14. Backend / API Expectations for Frontend

The frontend should expect APIs for:

### Auth

- Register
- Login
- Refresh token
- Logout
- Password reset
- Current user

### Student

- Get/update profile
- Upload transcript
- Get profile completeness
- Get AI matches
- Get roadmap
- Save/unsave program
- Get dashboard

### Marketplace

- List teachers
- Get teacher profile
- List consultants
- Get consultant profile
- Filter providers
- Compare providers

### Provider

- Get/update provider profile
- Upload credentials
- Submit verification
- Create/update/delete package
- Get bookings
- Respond to booking where applicable

### Booking

- Create booking
- Start payment
- Get payment status
- Get booking
- Update booking status
- Confirm completion
- Open dispute

### Messaging

- Get booking messages
- Send booking message

### Reviews

- Create review
- List provider reviews

### Admin

- List provider verification requests
- Approve/reject provider
- Verify/reject success record
- Manage knowledge base
- View bookings
- Resolve dispute
- Freeze/release escrow

---

## 15. Business Rules

### 15.1 Verification

- Provider verification is required before showing verified badge.
- Success records require admin verification before public display.
- Teacher claimed results require admin verification before public display.
- Consultant credential type depends on consultant category.

### 15.2 Booking

- Booking must be linked to one student and one provider package.
- Booking messages must be scoped to booking.
- Review requires completed booking.
- One booking can have at most one review from the student.

### 15.3 Escrow

- Student payment is held by platform escrow.
- Funds release only after student confirmation or admin action.
- Disputed bookings require admin resolution.
- Cancelled/refunded paths must be explicitly represented.

### 15.4 AI

- AI result facts must have source references.
- If source is missing, the UI must show uncertainty.
- AI must not generate deadlines from model memory.
- AI roadmap dates must come from retrieved program/scholarship data.

### 15.5 Files

- Transcript files are private.
- Credential files are private.
- Use signed URLs.
- Max file size is 10MB.
- Do not store public URLs for sensitive documents.

---

## 16. Known Gaps / Needs Product Owner Confirmation

The uploaded Phase 1 PRD does not fully specify these items. Do not hardcode assumptions without confirmation:

1. Exact database schema and field names.
2. Exact payment gateway provider.
3. Exact escrow legal/financial implementation.
4. Exact refund rules.
5. Exact dispute resolution SLA.
6. Exact provider commission percentage.
7. Exact package pricing rules.
8. Exact AI fit-score formula.
9. Exact source format for university and scholarship knowledge base.
10. Exact admin roles beyond general Admin.
11. Whether there is a separate Super Admin role.
12. Exact notification channels.
13. Exact Azerbaijani UI copy.
14. Exact mobile navigation pattern.
15. Exact launch analytics requirements.

When implementing, prefer flexible typed structures and TODO notes over fake business logic.

---

## 17. MVP Quality Bar

The MVP should feel trustworthy, not experimental.

Minimum quality expectations:

- Clean dark visual design.
- Consistent spacing and typography.
- Responsive layouts.
- Clear role-based navigation.
- Clear verification states.
- Clear AI source notices.
- Clear booking status.
- Clear escrow status.
- Strong empty/loading/error states.
- Azerbaijani-first UX.
- No fake verified claims.
- No fake AI facts.

---

## 18. Final Reminder for Claude

When generating code for this project:

- Follow the PRD.
- Follow the design system.
- Follow naming conventions.
- Keep Phase 1 scope strict.
- Do not hallucinate business rules.
- Ask for confirmation only when a decision blocks implementation.
- Otherwise, choose a safe, reversible implementation and mark uncertain details clearly.
