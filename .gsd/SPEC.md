# SPEC.md — Project Specification

> **Status**: `FINALIZED`
> **Project**: UNIT_01
> **Last Updated**: 2026-03-19

## Vision
A contemporary physical design protocol, UNIT_01. We engineer tactile "studies" in form and weight — high-density geometric configurations that exist at the intersection of streetwear, hi-tech collectibles, and industrial brutalism.

## Goals
1. **Premium Storefront**: A minimal, engineered UI/UX that feels like a "Spaceship HUD" or "Mission Control".
2. **Allocation-Based Release System**: A modular catalog system supporting limited "Allocations" (e.g., Series 01, Drop 02).
3. **Hybrid Data Architecture**: Connecting a Headless CMS (for content/marketing) and a PostgreSQL database (via Prisma) for transactional data.
4. **Account & Commerce**: Integrated Google Sign-in for collector profiles and a secure cart/allocation tracking system.
5. **Admin Operations**: A dedicated Admin Dashboard for managing inventory, tracking orders, adding items, and monitoring delivery status.
6. **Infrastructure**: Hosted cleanly on Render with source code managed in a private GitHub repository.

## Non-Goals (Out of Scope)
- Personalized gifting/customization features.
- A "toy shop" or "hobby 3D print shop" vibe — this is professional grade.
- General e-commerce (selling third-party products) — this is a single-brand label.
- Low-end, inexpensive product categories.

## Users
- **Collectors**: Design-focused individuals looking for rare, premium desk artifacts.
- **Futurists**: Enthusiasts of sci-fi and speculative design who appreciate engineered objects.
- **Gift Buyers (Premium)**: Looking for unique, high-end "objects from the future" for others.

## Constraints
- **Color Palette**: Strict adherence to High-Density Black (#050505), Lunar White (#F5F5F7), and **HUD Cyan (#00F2FF)** as the sole accent.
- **Tech Stack**: React + Tailwind CSS (frontend), Prisma + PostgreSQL (backend), Headless CMS (Headless content).
- **Aesthetic**: Technical, minimal, precise visuals, HUD scanlines, zero clutter.

## Success Criteria
- [x] Responsive, pixel-perfect frontend following the "UNIT_01" layout rules.
- [x] Functional "Bridge Layer" fetching data from both CMS and DB.
- [x] Working "Drops" system that can filter by Series/Archive.
- [x] Secure user auth and order tracking system.
- [x] Production-ready Prisma schema reflecting the UNIT_01 transactional model.
- [ ] Automated logistics integration via Shiprocket for order fulfillment and tracking.

## Logistics (Shiprocket)
1. **Automated Fulfillment**: Upon successful payment, orders are pushed to Shiprocket.
2. **AWB & Pickup**: Automatic generation of AWB and pickup requests.
3. **Live Tracking**: Webhook-based tracking updates reflected in the user account.
4. **Token Management**: Automated 9-day JWT refresh to maintain API connectivity.
