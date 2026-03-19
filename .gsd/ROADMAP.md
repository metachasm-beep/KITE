# ROADMAP.md — VOIDLAB Development Roadmap

> **Current Phase**: Phase 1: Foundation & Identity
> **Milestone**: v1.0 Launch
> **Last Updated**: 2026-03-18

## Must-Haves (from SPEC)
- [ ] Responsive UI for Homepage, Product Page, and Collections Page.
- [ ] Bridge layer connecting CMS and PostgreSQL Database.
- [ ] Basic User Auth and Profile Management.
- [ ] Order workflow from Cart to Confirmation.
- [ ] Admin dashboard (via Prisma Studio / CMS UI) for catalog management.

## Phases

### Phase 1: Foundation & Identity (🎨 UI/UX Focus)
**Status**: ✅ Complete
**Objective**: Build the core UI library and functional homepage with Cyber Purple accent.
**Deliverables**:
- [x] Design System (React + Tailwind) with "Cyber Purple" accent (#8B5CF6).
- [x] Homepage UI with Hero, Current Drop, and Philosophy sections.
- [x] Site Header and Footer (Lab/System style).

### Phase 2: Authentication & Admin Control (🔒 Google Auth & CMS)
**Status**: ✅ Complete
**Objective**: Build a robust Google Auth system and a secure Admin Dashboard for managing platform data.
**Deliverables**:
- [x] Integrate Google Sign-in (NextAuth/Auth.js) for collectors and administrators.
- [x] Establish Protected Admin Dashboard route (`/admin`).
- [x] Create Admin interfaces for: Inventory Management, Order Tracking, Delivery Status, and Item catalog addition.

### Phase 3: Catalog & Drops System (📂 Headless Integration)
**Status**: ✅ Complete
**Objective**: Build the public-facing collection, archive, and individual product page systems.
**Deliverables**:
- [x] Headless CMS integration and Bridge Layer (Content fetching).
- [x] Collections Page (Grid-based, minimal) connected to live DB inventory.
- [x] Product Details Page with spec-cards (Matte Black aesthetic).

### Phase 4: Transactions & User Accounts (💳 Commerce Bridge)
**Status**: ✅ Complete
**Objective**: Set up Prisma/Postgres for users, carts, and order history.
**Deliverables**:
- [x] Prisma Schema implementation for Postgres (Users, Accounts, Carts, Orders).
- [x] User Profile timeline and tracking access.
- [x] Cart functionality and Order confirmation workflows.

### Phase 5: Deployment & Launch (🚀 Infrastructure)
**Status**: ⬜ Not Started
**Objective**: Finalize configuration, migrate DB, push to GitHub, and deploy to Vercel.
**Deliverables**:
- [ ] Comprehensive `.gitignore` and Secret management.
- [ ] Push source code to the private `KITE` repository on GitHub.
- [ ] Provision and Migrate PostgreSQL on Supabase (completed/awaiting local run).
- [ ] Deploy Next.js to Vercel and activate Google OAuth redirect.
- [ ] Final End-to-End Audit.

### Phase 6: Logistics & Post-Purchase Automation (📦 Shiprocket)
**Status**: ✅ Finished
**Objective**: Integrate Shiprocket for automated fulfillment and tracking.
**Deliverables**:
- [x] Prisma schema updates for tracking and JWT storage.
- [x] Automated 9-day JWT refresh mechanism.
- [x] Shiprocket API service (Create Order, AWB, Pickup).
- [x] Checkout integration for automated fulfillment flow.
- [x] Webhook handler for real-time tracking updates.
