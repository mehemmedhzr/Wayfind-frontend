# Wayfind Naming Conventions

> Status: recommended conventions for frontend implementation. These are not fully specified in the uploaded design files, so treat this as a proposed engineering standard for Claude/Cursor/code generation.

## General principles

- Use clear, descriptive names.
- Prefer business meaning over generic words.
- Use English in code, even when UI labels are Azerbaijani.
- Keep user-facing copy in translation files or constants, not hard-coded across components.
- Avoid abbreviations unless they are domain-standard, such as `GPA`, `IELTS`, `SAT`, `TOEFL`, `API`, `AI`.

## Casing rules

| Item | Convention | Example |
|---|---|---|
| Variables | `camelCase` | `studentProfile`, `providerType` |
| Functions | `camelCase` | `getUniversityMatches`, `releaseEscrow` |
| React components | `PascalCase` | `UniversityMatchCard` |
| Types/interfaces | `PascalCase` | `StudentProfile`, `BookingStatus` |
| Enums/const maps | `PascalCase` or `UPPER_CASE` depending style | `BookingStatus`, `ROLE_LABELS` |
| Files with React components | `PascalCase.tsx` or kebab route folders | `ProviderCard.tsx` |
| Non-component files | `kebab-case.ts` | `format-currency.ts` |
| Route folders | `kebab-case` | `motivation-letter` |
| CSS variables | `--wf-kebab-case` | `--wf-surface-raised` |
| Tailwind custom tokens | `kebab-case` | `wf-surface-raised` |
| API JSON fields | `camelCase` preferred for frontend | `lastVerifiedAt` |
| Database fields | backend decision; often `snake_case` | `last_verified_at` |

## Domain names

### User and role

Use:
- `User`
- `UserRole`
- `StudentProfile`
- `ProviderProfile`
- `AdminUser`
- `SuperAdminUser` only if PRD confirms it.

Role values:

```ts
type UserRole = 'guest' | 'student' | 'provider' | 'admin' | 'superAdmin';
```

### Provider

Use:
- `Provider`
- `ProviderProfile`
- `ProviderType`
- `ProviderVerification`
- `ProviderPackage`
- `ProviderReview`
- `ProviderDashboardStats`

Provider type values:

```ts
type ProviderType = 'teacher' | 'consultant';
```

Phase 2 candidate from design:
```ts
type ProviderType = 'teacher' | 'consultant' | 'visa';
```

Do not add `visa` in Phase 1 unless PRD confirms it.

### Student profile

Use:
- `StudentProfile`
- `AcademicInfo`
- `StudyGoals`
- `TargetCountry`
- `DegreeLevel`
- `AdmissionYear`
- `AnnualBudget`
- `TranscriptFile`
- `ProfileCompletion`

Degree values:

```ts
type DegreeLevel = 'bachelor' | 'master' | 'phd';
```

### AI

Use:
- `AiAssistant`
- `AiKnownFact`
- `AiQuestion`
- `AiAnswer`
- `AiMatch`
- `UniversityMatch`
- `FitScore`
- `DeadlineRoadmap`
- `RoadmapStep`
- `SourceVerification`
- `KnowledgeBaseFact`
- `LastVerifiedAt`

Prefer `Ai` in code names instead of all-caps `AI` for PascalCase consistency:
- Good: `AiAssistantPanel`
- Avoid: `AIAssistantPanel`

For visible UI copy, write “AI”.

### University and scholarship

Use:
- `University`
- `Program`
- `Scholarship`
- `UniversityRequirement`
- `ProgramRequirement`
- `ApplicationDeadline`
- `TuitionFee`
- `LanguageRequirement`
- `SourceUrl`
- `LastVerifiedAt`

### Motivation letter

Use:
- `MotivationLetter`
- `MotivationLetterSection`
- `MotivationLetterDraft`
- `AiSuggestion`
- `SuccessfulExample`
- `ConsentStatus`

### Marketplace

Use:
- `Marketplace`
- `ProviderSearch`
- `ProviderFilter`
- `ProviderCard`
- `ProviderList`
- `Rating`
- `ReviewCount`
- `StartingPrice`

### Booking and escrow

Use:
- `Booking`
- `BookingStatus`
- `EscrowStatus`
- `BookingTimeline`
- `BookingMessage`
- `BookingAttachment`
- `Dispute`
- `Payment`
- `PlatformFee`

Booking status values:

```ts
type BookingStatus =
  | 'pending'
  | 'active'
  | 'completed'
  | 'cancelled'
  | 'disputed';
```

Escrow status values:

```ts
type EscrowStatus =
  | 'notFunded'
  | 'held'
  | 'released'
  | 'refunded'
  | 'disputed';
```

### Admin

Use:
- `AdminVerificationQueue`
- `VerificationRequest`
- `VerificationStatus`
- `DocumentReview`
- `KnowledgeBase`
- `KnowledgeBaseFact`
- `DisputeResolution`
- `AuditLog`

Verification status values:

```ts
type VerificationStatus =
  | 'pending'
  | 'inReview'
  | 'approved'
  | 'rejected'
  | 'needsMoreInfo';
```

## Component naming

Use noun-based component names.

Good:
```txt
StudentDashboard
StudentProgressTracker
UniversityMatchCard
DeadlineRoadmap
ProviderCard
ProviderProfileHeader
ProviderTrustSection
PackageCard
EscrowStatusCard
BookingTimeline
BookingChat
AdminVerificationQueue
DocumentReviewPanel
KnowledgeBaseFactRow
```

Avoid:
```txt
DashboardThing
Card1
NewComponent
AiBox
DataView
UserItem
```

## Hook naming

Use `use` prefix and describe behavior.

Examples:
```ts
useCurrentUser()
useStudentProfile()
useUpdateStudentProfile()
useTranscriptUpload()
useAiQuestions()
useUniversityMatches()
useProviderSearch()
useProviderProfile()
useCreateBooking()
useBookingMessages()
useProviderDashboard()
useAdminVerificationQueue()
useApproveProvider()
```

## API function naming

Use verb + entity.

Examples:
```ts
getCurrentUser()
getStudentProfile()
updateStudentProfile()
uploadTranscript()
getAiKnownFacts()
submitAiAnswer()
getUniversityMatches()
getDeadlineRoadmap()
searchProviders()
getProviderProfile()
createBooking()
getBooking()
sendBookingMessage()
releaseEscrow()
openDispute()
getProviderDashboardStats()
getVerificationRequests()
approveProviderVerification()
rejectProviderVerification()
updateKnowledgeBaseFact()
```

## Boolean naming

Use:
- `is`
- `has`
- `can`
- `should`

Examples:
```ts
isVerified
isProfileComplete
hasActiveBooking
hasUploadedTranscript
canReleaseEscrow
canOpenDispute
shouldShowAiPrompt
```

Avoid:
```ts
verifiedFlag
profileCompletedOrNot
releaseAllowed
```

## Event handler naming

Use `handle` prefix in components.

Examples:
```ts
handleSubmitProfile()
handleUploadTranscript()
handleSelectProvider()
handleCreateBooking()
handleReleaseEscrow()
handleOpenDispute()
handleApproveProvider()
```

## Translation key naming

Use feature namespaces:

```txt
landing.hero.title
landing.hero.primaryCta
auth.login.title
onboarding.role.student
student.dashboard.progress.title
ai.knownFacts.title
ai.results.sourceVerified
marketplace.filters.country
provider.profile.trust.diplomaVerified
booking.escrow.held
admin.verification.approve
```

## File naming

For component files:

```txt
UniversityMatchCard.tsx
ProviderTrustSection.tsx
BookingTimeline.tsx
AdminVerificationQueue.tsx
```

For utilities:

```txt
format-currency.ts
format-date.ts
calculate-profile-completion.ts
map-api-error.ts
```

For feature folders:

```txt
features/ai-assistant/
features/provider-profile/
features/admin-verification/
features/motivation-letter/
```

## Constants naming

Use UPPER_CASE for constant maps:

```ts
ROLE_LABELS
DEGREE_LEVEL_OPTIONS
PROVIDER_TYPE_OPTIONS
BOOKING_STATUS_LABELS
ESCROW_STATUS_LABELS
VERIFICATION_STATUS_LABELS
```

## Avoid these names

Avoid vague names:
- `data`
- `item`
- `obj`
- `temp`
- `test`
- `info`
- `stuff`
- `thing`
- `manager`
- `helper`

Acceptable only in very small local scopes:
```ts
items.map((item) => ...)
```

## UI copy naming

Keep Azerbaijani UI labels in translation/copy files. Code should not use Azerbaijani variable names.

Good:
```ts
const degreeLevel = 'master';
```

Avoid:
```ts
const derece = 'magistr';
```

## Currency and dates

Use:
- `amountAzN` only if amount is always AZN.
- `currency` for multi-currency support.
- `deadlineAt`, `lastVerifiedAt`, `createdAt`, `updatedAt`.
- Store dates as ISO strings from API.
- Format display dates in UI.

Examples:
```ts
priceAmount: 240
currency: 'AZN'
lastVerifiedAt: '2026-06-12'
applicationDeadlineAt: '2026-10-01'
```

## Source verification naming

Use consistent source names:
- `sourceUrl`
- `sourceName`
- `lastVerifiedAt`
- `isSourceVerified`
- `verificationNote`

Avoid:
- `checked`
- `real`
- `officialMaybe`
