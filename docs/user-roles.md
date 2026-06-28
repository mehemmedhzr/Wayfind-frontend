# Wayfind User Roles

> Status: partly design-grounded, partly inferred from the project direction. Items marked **Needs PRD confirmation** should be checked against the PRD before implementation.

## Role overview

Wayfind has these visible roles in the available design files:

1. **Guest**
2. **Student**
3. **Provider**
4. **Admin**

The broader project conversation also mentioned **Super Admin**, but the uploaded HTML designs do not show a dedicated Super Admin screen. Treat Super Admin as **Needs PRD confirmation**.

## Guest

### Purpose

Guest users visit the public landing page, understand Wayfind’s value, and choose an entry path.

### Main screens

- Landing page
- Login
- Registration
- Role selection
- Provider join entry point

### Guest capabilities

- View marketing homepage.
- Read “How it works”.
- Choose “Start as a student”.
- Choose “Join as a provider”.
- Log in.
- Register.
- Navigate product/company/footer links.

### Restrictions

- Cannot access dashboard, AI assistant, marketplace booking, messages, or admin features.
- Cannot see protected user data.
- Cannot book providers without authentication.

## Student

### Purpose

Students use Wayfind to build their study-abroad profile, get AI-supported university/scholarship recommendations, find verified providers, and manage applications.

### Main screens

- Student onboarding
- Student dashboard
- AI Assistant questions
- AI results and roadmap
- Motivation letter helper
- Marketplace
- Provider profile
- Booking / escrow / messaging

### Student capabilities

#### Profile and onboarding

- Select student role.
- Build profile step by step.
- Add personal information.
- Add academic information.
- Add study goals.
- Add interests.
- Choose target countries.
- Choose degree level: Bachelor, Master, PhD.
- Choose admission year.
- Set annual budget.
- Upload transcript.
- See profile completion percentage.

#### AI assistant

- Let AI read uploaded transcript.
- Review what AI extracted, such as GPA, IELTS, degree, countries, and budget.
- Answer missing questions through a chat-like flow.
- Select quick chip answers or type free-form responses.
- Generate ranked university/program matches.
- Generate deadline roadmap based on verified data.
- Use motivation letter helper for structure and feedback.

#### Dashboard

- View study-abroad progress.
- Track stages:
  - Certification
  - University matching
  - Application
- View saved programs.
- View upcoming deadlines.
- Open AI suggestions.
- Navigate to universities, services, teachers, consultants, and messages.

#### Marketplace and providers

- Search consultants and teachers.
- Filter by country, price, and rating.
- View verified provider profiles.
- Review provider credentials, success history, ratings, and packages.
- Message provider before booking.
- Select a package.

#### Booking and escrow

- Create a booking.
- Pay into escrow.
- Message provider inside booking thread.
- Attach files.
- Track service progress.
- Confirm service completion and release funds.
- Open dispute.

### Restrictions

- Cannot verify providers.
- Cannot edit AI knowledge base.
- Cannot approve documents or resolve disputes.
- Cannot access admin panel.
- Cannot release funds until payment exists and booking is in a valid state.

## Provider

### Provider subtypes

The design shows two provider types:

1. **Certification teacher**
   - IELTS, SAT, TOEFL, and similar certification support.
2. **Consultant**
   - Study-abroad application consulting.

The architecture note says Phase 2 can add `provider_type = visa`, so visa providers are **not Phase 1 unless PRD says otherwise**.

### Purpose

Providers offer verified services to students through packages, bookings, and messaging.

### Main screens

- Provider registration path
- Provider profile
- Provider panel
- Booking messages
- Packages
- Reviews

### Provider capabilities

- Register as teacher or consultant.
- Submit verification materials.
- Maintain public profile.
- Show verified education/admission/LinkedIn records after admin approval.
- Create or manage packages.
- View active bookings.
- View escrow-held income.
- Message students inside booking context.
- Track package progress.
- Receive reviews.
- See profile views and rating.

### Provider dashboard metrics

Design examples:
- Verification status.
- Active bookings.
- Escrow income.
- Rating and review count.
- Profile views over last 30 days.

### Provider package examples

- Silver: 1 university, 140 ₼.
- Gold: 3 universities, 240 ₼.
- Platinum: unlimited + visa, 420 ₼.

These are design examples, not necessarily final pricing. **Needs PRD confirmation before hard-coding.**

### Restrictions

- Cannot self-verify credentials.
- Cannot manually release escrow funds.
- Cannot edit student profile data unless the student explicitly shares it through messages/files.
- Cannot access admin verification tools.
- Cannot access AI knowledge-base management.
- Cannot see unrelated students or bookings.

## Admin

### Purpose

Admin is the trust and operations role. Admin verifies providers, manages AI knowledge-base freshness, reviews bookings/disputes, and manages users.

### Main screens

- Admin panel
- Provider verification queue
- Knowledge base
- Bookings
- Disputes
- Users

### Admin capabilities

#### Provider verification

- View pending provider queue.
- Filter by consultant/teacher.
- Review diploma document.
- Review admission letter document.
- Review LinkedIn profile.
- Approve provider.
- Mark review status such as waiting, in review, approved/rejected.

#### Knowledge base management

- Manage facts used by AI.
- Keep `last_verified_at` fresh.
- Ensure AI recommendations use verified source data.
- Maintain university requirements and deadlines.

#### Booking and dispute operations

- View bookings.
- View disputes.
- Resolve issues between students and providers.
- Take operational actions according to platform policy. **Exact dispute permissions need PRD confirmation.**

#### User management

- View and manage users.
- Likely suspend or restrict accounts when necessary. **Needs PRD confirmation.**

### Restrictions

- Admin should not fabricate AI facts.
- Admin should not edit payment records without audit trail.
- Admin actions should be logged.
- Admin should have separated UI and permissions from student/provider surfaces.

## Super Admin

### Status

The project conversation mentions Super Admin, but the uploaded design files do not include a Super Admin screen or detailed permissions.

### Safe inferred purpose

Super Admin usually manages platform-wide settings and high-risk operations, but this must be confirmed from the PRD.

### Suggested capabilities to confirm in PRD

- Manage admin users.
- Assign roles and permissions.
- View audit logs.
- Configure platform settings.
- Manage payment/commission settings.
- Override disputes only with audit log.
- Manage AI provider/configuration.
- Manage global taxonomy such as countries, degree levels, provider types, package categories.

### Do not implement without confirmation

- Any financial override.
- Admin account creation/deletion.
- Commission changes.
- System-wide AI prompt/config changes.
- Production data deletion.

## Permission matrix

| Capability | Guest | Student | Provider | Admin | Super Admin |
|---|---:|---:|---:|---:|---:|
| View landing page | Yes | Yes | Yes | Yes | Yes |
| Register/login | Yes | Yes | Yes | Yes | Yes |
| Build student profile | No | Yes | No | View only if needed | Needs PRD |
| Upload transcript | No | Yes | No | View only if needed | Needs PRD |
| Use AI assistant | No | Yes | No | Test/manage KB only | Needs PRD |
| View AI results | No | Yes | No | Support/admin view if needed | Needs PRD |
| Browse marketplace | Limited/marketing | Yes | Yes | Yes | Yes |
| Book provider | No | Yes | No | Operational view | Operational view |
| Message inside booking | No | Yes | Yes | Support view if needed | Support view |
| Release escrow | No | Yes, after completion | No | Dispute-only? | Needs PRD |
| Open dispute | No | Yes | Possibly | Manage | Manage |
| Manage packages | No | No | Yes | View/moderate | Needs PRD |
| Verify provider | No | No | No | Yes | Yes |
| Manage AI knowledge base | No | No | No | Yes | Yes |
| Manage admin users | No | No | No | No/limited | Needs PRD |
| View audit logs | No | No | No | Needs PRD | Needs PRD |
