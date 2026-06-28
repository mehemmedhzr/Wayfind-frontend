# Wayfind Business Rules

> Status: grounded in the uploaded design files where possible. Anything not clearly present in the designs is marked **Needs PRD confirmation**.

## Core product rules

1. Wayfind helps Azerbaijani students plan and manage study-abroad applications.
2. The platform combines:
   - AI assistant.
   - University/program matching.
   - Scholarship/deadline roadmap.
   - Verified certification teachers.
   - Verified study-abroad consultants.
   - Booking, messaging, and escrow.
   - Admin verification and knowledge-base operations.
3. AI must support decisions, not guarantee admission.
4. Trust, verification, and source freshness are central product rules.

## User journey rules

### Guest

- Guest can view the landing page.
- Guest can choose student or provider registration.
- Guest must authenticate before using protected app features.

### Student onboarding

- Student must choose student role.
- Student profile is built through multiple steps.
- Profile completion affects AI recommendation quality.
- Required/important profile areas shown in design:
  - Personal information.
  - Academic information.
  - Goals.
  - Interests.
  - Target countries.
  - Degree level.
  - Admission year.
  - Annual budget.
  - Transcript upload.

**Needs PRD confirmation:** exact required fields and whether profile can be skipped.

### Transcript upload

- Student can upload a transcript.
- AI analyzes transcript.
- Student should be able to see what AI extracted.
- AI should ask for missing information instead of inventing it.

## AI rules

### General AI rules

- AI must not fabricate user facts.
- AI must not fabricate university requirements or deadlines.
- AI asks the student for missing profile data.
- AI recommendations should be based on verified platform data.
- AI should show what it knows about the student.
- AI should allow corrections if extracted data is wrong. **Needs PRD confirmation for exact correction flow.**

### Known facts panel

AI should show extracted/known facts such as:
- GPA.
- IELTS.
- Degree.
- Target countries.
- Budget.
- Field/interest.

### AI questions

- Questions should be asked step by step.
- Prefer chip answers for common responses.
- Allow free text for flexible answers.
- Each answer improves profile and matching accuracy.

### AI results

Each recommendation should include:
- University.
- Program.
- Country.
- Fit score.
- Requirement tags.
- Deadline.
- Source verification date.

### RAG/source rules

- University requirements and deadlines must come from curated/verified source data.
- Each deadline should have source metadata.
- Each fact should have `last_verified` or `last_verified_at`.
- UI should communicate source freshness.
- Admin must be able to update knowledge-base verification timestamps.

### Motivation letter helper

- AI guides; it does not write fake claims.
- Student owns all facts and achievements.
- Suggestions should improve specificity, structure, and tone.
- Successful examples may be used only with consent.
- Example snippets should not be copied blindly.
- The helper should encourage concrete, verifiable program details.

## Matching rules

### Fit score

The design shows university/program cards with fit scores such as 94%, 91%, 88%.

Fit score should likely consider:
- Degree level.
- Field/interest.
- GPA.
- Language scores.
- Budget.
- Country preference.
- Tuition.
- Scholarship availability.
- Deadline timing.
- Program requirements.

**Needs PRD confirmation:** exact scoring algorithm and weighting.

### Match result rules

- Only show programs with sufficient verified data.
- Deadline data must be source-checked.
- If source is stale, show warning or require admin refresh. **Needs PRD confirmation.**
- “Free tuition” or tuition claims must come from verified data.

## Marketplace rules

### Provider categories

Phase 1 visible categories:
- Certification teachers.
- Consultants.

Provider cards should show:
- Name.
- Verified badge if verified.
- Provider role.
- Rating.
- Review count.
- University/background.
- Tags.
- Starting price.
- Profile link.

### Search and filters

Design includes:
- Search by name, university, specialization.
- Filter by country.
- Filter by price.
- Filter by high rating.
- Tabs for consultants and teachers.

**Needs PRD confirmation:** exact filters and sorting rules.

## Provider verification rules

Providers must be verified by admin before trust badges are shown.

Verification evidence shown:
- Diploma.
- Admission letter.
- LinkedIn.
- Success history.

Admin reviews these materials before approving provider status.

Rules:
- Provider cannot self-verify.
- Verified badge appears only after admin approval.
- Success stories should be marked confirmed only after verification.
- Claims like “accepted to X university” require evidence.
- Provider profile should separate verified and unverified information.

**Needs PRD confirmation:** whether unverified providers can appear in marketplace.

## Provider profile rules

Provider profile may include:
- Name.
- Role/specialization.
- Verified badge.
- Rating.
- Review count.
- Number of students.
- Response time.
- Verified documents.
- Success history.
- Reviews.
- Packages.
- Escrow protection notice.

Provider package examples in design:
- Silver: 1 university, 140 ₼.
- Gold: 3 universities, 240 ₼.
- Platinum: unlimited + visa, 420 ₼.

These package names/prices are design examples unless confirmed in PRD.

## Booking rules

Booking is tied to:
- Student.
- Provider.
- Package.
- Payment amount.
- Booking status.
- Escrow status.
- Messaging thread.

Booking statuses shown or implied:
- Pending.
- Active.
- Completed / finishing.
- Disputed.

Design examples:
- Booking number: `bron #8842`.
- Status: Active.
- Escrow: held.
- Package: Gold, 240 ₼.

### Booking messages

- Messaging is linked to a booking.
- Communication should remain inside the platform.
- Attachments can be shared.
- Messages should display online/status where applicable.

**Needs PRD confirmation:** whether pre-booking messages are allowed and whether all attachments are scanned/moderated.

## Escrow rules

- Student payment is held in escrow.
- Provider receives funds only when student confirms service completion.
- UI must clearly show escrow status.
- Student can release funds after service completion.
- Student can open dispute.
- Provider cannot unilaterally release escrow.
- Admin handles disputes. Exact admin powers need PRD confirmation.

Payment/escrow design example:
- Gold package: 240 ₼.
- Platform fee: included.
- Escrow held: 240 ₼.

**Needs PRD confirmation:**
- Payment provider.
- Refund rules.
- Commission/platform fee.
- Partial release rules.
- Cancellation windows.
- Dispute deadlines.
- Evidence requirements.

## Reviews and ratings

- Students can leave reviews after service.
- Provider rating and review count appear on cards and profile.
- Reviews should be tied to completed bookings.
- Reviews should show package context where useful.
- Fake reviews should be preventable through booking verification.

**Needs PRD confirmation:** exact review moderation and edit/delete rules.

## Provider panel rules

Provider can see:
- Verification status.
- Active bookings.
- Escrow-held income.
- Rating and reviews.
- Profile views over 30 days.
- Active booking list.
- Package list.

Provider can manage:
- Packages.
- Booking communication.
- Profile content.

Provider cannot:
- Approve own verification.
- Release escrow.
- Modify reviews.
- Access unrelated student data.

## Admin rules

Admin responsibilities:
- Verify providers.
- Review documents.
- Manage knowledge base.
- Monitor bookings.
- Resolve disputes.
- Manage users.

Admin provider verification queue includes:
- All pending providers.
- Consultant filter.
- Teacher filter.
- Status such as waiting or in review.

Admin document review includes:
- Diploma PDF.
- Admission letter PDF.
- LinkedIn profile.

Admin knowledge-base management:
- Facts must have `last_verified_at`.
- AI facts should be kept fresh.
- Changes should be logged. **Needs PRD confirmation but strongly recommended.**

## Super Admin rules

The existence of Super Admin was mentioned in project discussion, but is not shown in the HTML design files.

Treat all Super Admin rules as **Needs PRD confirmation**.

Possible Super Admin-only rules:
- Manage admin accounts.
- Manage roles/permissions.
- View audit logs.
- Configure commission/platform fee.
- Configure AI provider settings.
- Configure global taxonomies.
- Delete or export platform data.

Do not implement high-risk Super Admin actions without PRD confirmation.

## Data and privacy rules

Recommended rules:
- Student documents are private.
- Provider verification documents are private to provider/admin.
- Booking messages are visible only to booking participants and authorized support/admin roles.
- Admin access should be logged.
- AI should not expose one student’s data to another student.
- Successful motivation-letter examples require consent.

**Needs PRD confirmation:** privacy policy, data retention, and consent model.

## Localization rules

The design is mostly Azerbaijani in app screens, while the landing page HTML uses English marketing copy.

Needs decision:
- Azerbaijani-only MVP?
- English-only MVP?
- Bilingual Azerbaijani + English?

Recommendation:
- Keep code in English.
- Store UI copy in locale files from the start.

## Financial rules needing PRD confirmation

The design shows escrow and AZN payments but not full payment policy.

Confirm:
- Payment provider.
- Escrow provider or internal ledger model.
- Currency support.
- Platform fee.
- Refunds.
- Chargebacks.
- Provider payout schedule.
- Tax/invoice requirements.
- Dispute resolution policy.

## Non-negotiable product safety rules

- AI does not guarantee admission.
- AI does not invent deadlines.
- AI does not invent student achievements.
- Provider claims must be verified before trust badges.
- Escrow status must be transparent.
- Admin actions should be auditable.
- Sensitive documents must not be publicly exposed.
