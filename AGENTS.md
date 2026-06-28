<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: Wayfind Frontend

## Purpose

Wayfind is a multi-role education guidance platform. The frontend must support guests, students, providers, admins, and super admins.

The application should help users discover suitable education-related opportunities through structured flows, role-based dashboards, and an AI-supported guidance experience.

## Important Next.js Rule

Before writing or modifying Next.js code, always check the relevant local documentation inside:

node_modules/next/dist/docs/

This project may use a newer Next.js version than the model’s training data. Do not rely only on older Next.js assumptions.

## Core Stack

Use the following stack unless the user explicitly changes it:

* Next.js App Router
* TypeScript
* Tailwind CSS
* shadcn/ui
* React Hook Form
* Zod
* TanStack Query for server-state/data fetching when needed
* Zustand only if global client state is truly needed
* ESLint
* Prettier if configured

## Project Roles

The system has these roles:

* guest
* student
* provider
* admin
* super_admin

Every architecture decision should consider these roles.

Role expectations:

* guest: can view public landing pages and start limited discovery/onboarding flows
* student: can complete profile/onboarding, use AI guidance, view recommendations, manage applications or saved options
* provider: can manage provider profile, programs/services, leads/applications, and related dashboard data
* admin: can manage users, providers, content, moderation, and platform operations
* super_admin: has full platform-level control and access to highest-level administration features

Do not invent detailed permissions unless they are already documented. If permissions are unclear, create a centralized placeholder structure and mark assumptions clearly.

## Architecture Rules

Use a scalable feature-based architecture.

Recommended structure:

src/
app/
components/
features/
hooks/
lib/
services/
schemas/
types/
constants/
config/

Use this responsibility split:

* src/app/ — routes, layouts, loading states, error boundaries, route groups
* src/components/ — shared reusable UI components
* src/features/ — domain-specific feature modules
* src/hooks/ — reusable hooks
* src/lib/ — utilities, helpers, shared logic
* src/services/ — API request functions and external service wrappers
* src/schemas/ — Zod validation schemas
* src/types/ — shared TypeScript types
* src/constants/ — roles, routes, permissions, statuses, static values
* src/config/ — app-level configuration

Feature modules may contain their own components, hooks, services, schemas, and types when they are only used by that feature.

Example:

src/features/student/
components/
hooks/
services/
schemas/
types/

## Routing Rules

Use Next.js App Router.

Prefer route groups for separating public and role-based areas.

Example structure:

src/app/
(public)/
(auth)/
(student)/
(provider)/
(admin)/
(super-admin)/

Public routes should be separated from authenticated dashboard routes.

Authentication and authorization logic should be centralized. Do not duplicate role checks randomly across pages.

## Naming Conventions

Use these naming rules:

* Components: PascalCase
* Component files: PascalCase.tsx
* Hooks: useSomething.ts
* Variables: camelCase
* Functions: camelCase
* Types and interfaces: PascalCase
* Constants: UPPER_SNAKE_CASE or grouped object constants
* Route folders: kebab-case
* Feature folders: kebab-case
* Utility files: camelCase.ts or kebab-case.ts, but stay consistent

Avoid unclear names like:

* data
* item
* temp
* helper
* test
* newComponent

Prefer meaningful names like:

* studentProfile
* providerApplication
* recommendationStep
* onboardingProgress
* aiGuidanceSession

## Component Rules

Prefer clean, reusable components.

Component rules:

* Keep components small and focused
* Do not put API logic directly inside UI components
* Do not put complex business rules directly inside JSX
* Use props with clear TypeScript types
* Prefer composition over large condition-heavy components
* Use shared UI components only when they are genuinely reusable
* Keep feature-specific UI inside the relevant feature folder

## Server and Client Component Rules

Prefer Server Components by default.

Use Client Components only when needed for:

* interactivity
* useState/useEffect
* event handlers
* browser APIs
* forms
* client-side stores
* dynamic UI behavior

Do not add `"use client"` unnecessarily.

If a page can be a Server Component, keep it as a Server Component and move interactive parts into smaller Client Components.

## Form Rules

Use:

* React Hook Form
* Zod
* shared schemas where useful

Form rules:

* Keep validation schemas separate from UI when possible
* Use meaningful field names
* Show loading, error, and success states
* Avoid duplicating validation rules
* Make multi-step forms easy to extend

## AI Guidance Flow Rules

The AI-guided flow should be step-based and structured.

Do not create one huge AI prompt or one huge form.

Each AI/onboarding step should define:

* step id
* title
* description
* required inputs
* optional inputs
* validation schema
* next-step logic
* collected answer structure

The AI flow should collect user information progressively.

Possible AI flow areas:

* student goals
* preferred destination or study location
* education level
* budget
* language preferences
* academic background
* field of interest
* timeline
* constraints
* recommendation preferences

Do not invent final business logic if it is not documented. Use placeholder structures and mark assumptions.

## API and Service Layer Rules

Put API logic inside `src/services/` or inside feature-specific service folders.

Do not call APIs directly from deeply nested UI components.

Use clear service names such as:

* authService
* studentService
* providerService
* recommendationService
* aiGuidanceService
* adminService

Use typed request and response models.

If backend API details are missing, create mock service interfaces or placeholder functions, but clearly mark them as temporary.

## State Management Rules

Prefer local state for simple UI state.

Use URL state for filters, tabs, pagination, and shareable state where appropriate.

Use TanStack Query for server data where needed.

Use Zustand only for global client state such as:

* temporary onboarding state
* AI flow progress
* user session UI state
* global UI state

Do not overuse global state.

## Authorization Rules

Centralize role and permission logic.

Create shared constants/types for roles.

Do not hardcode role strings throughout the app.

Preferred role type:

type UserRole = "guest" | "student" | "provider" | "admin" | "super_admin";

Use centralized route and permission configuration when possible.

## UI and Design System Rules

Follow the uploaded design documents and design-system notes.

Use Tailwind CSS and shadcn/ui consistently.

Do not create random colors if the design system already defines colors.

Keep spacing, typography, border radius, cards, buttons, inputs, and layout patterns consistent.

If design details are missing, use clean modern defaults and mark assumptions.

## Business Logic Rules

Do not hallucinate business rules.

If the PRD, markdown files, or design documents do not define something, say so before implementing it.

When assumptions are necessary, write them clearly in comments or implementation notes.

## Code Quality Rules

* Use TypeScript strictly
* Avoid `any`
* Avoid duplicated logic
* Avoid large files
* Avoid deeply nested conditions
* Keep imports clean
* Prefer named exports for shared utilities and components
* Use clear error handling
* Add loading and empty states where needed
* Keep accessibility in mind

## Before Writing Code

Before making significant changes, first explain:

1. What you are going to build
2. Which files/folders will be created or modified
3. Any assumptions
4. Any missing information

For very small changes, this can be brief.

## After Writing Code

After changes, summarize:

1. What changed
2. Which files were touched
3. Why this structure was chosen
4. What the next recommended step is

## Current Priority

At the beginning of the project, do not build full features immediately.

First priority:

1. Confirm project structure
2. Create base folder architecture
3. Define roles and routes
4. Create layout structure
5. Create design system foundation
6. Create auth placeholders
7. Create AI flow structure
8. Then build pages and features step by step