# SPEC.md — Project Specification

> **Status**: `FINALIZED`
> **Project**: VOIDLAB
> **Last Updated**: 2026-03-18

## Vision
A futuristic collectible systems brand, VOIDLAB, powered by 3D manufacturing. We build premium, engineered objects — "Artifacts from Tomorrow" — that sit somewhere between streetwear, hi-tech collectibles, and sci-fi artifacts.

## Goals
1. **Premium Storefront**: A cold, minimal, and engineered UI/UX that feels like a "sci-fi lab" rather than a gift shop.
2. **Drops-Based Release System**: A modular catalog system supporting limited "Drops" (e.g., Series 01, Drop 02).
3. **Hybrid Data Architecture**: A cleanly separated bridge layer connecting a Headless CMS (for content/marketing) and a PostgreSQL database (via Prisma) for transactional data.
4. **Account & Commerce**: Integrated Google Sign-in for user profiles and a secure cart/order tracking system.
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
- **Color Palette**: Strict adherence to #000000 (black) and **Cyber Purple (#8B5CF6)** as the sole accent.
- **Tech Stack**: React + Tailwind CSS (frontend), Prisma + PostgreSQL (backend), Headless CMS (Headless content).
- **Aesthetic**: Cold, minimal, high-impact visuals, zero clutter.

## Success Criteria
- [ ] Responsive, pixel-perfect frontend following the "VOIDLAB" layout rules.
- [ ] Functional "Bridge Layer" fetching data from both CMS and DB.
- [ ] Working "Drops" system that can filter by Series/Archive.
- [ ] Secure user auth and order tracking system.
- [ ] Production-ready Prisma schema reflecting the VOIDLAB transactional model.
