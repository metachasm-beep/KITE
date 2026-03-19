# ARCHITECTURE.md — UNIT_01 System Design

## System Architecture: The Bridge Layer

UNIT_01 follows a strictly decoupled architecture intended to keep content and transactional data in their specialized systems, united by a middle "Bridge Layer".

```mermaid
graph TD
    A[Frontend: Next.js + Tailwind CSS]
    B[Headless CMS: Sanity/Payload/etc.]
    C[Database: PostgreSQL with Prisma]
    D[Bridge Layer: API / Data Handlers]
    E[Auth Layer: NextAuth + Google Sign-In]
    F[Infrastructure: Render + GitHub]

    A <--> D
    A <--> E
    D <--> B
    D <--> C
    E <--> C
```

### Data Split: CMS vs Database

| System | Role | Data Examples |
|---|---|---|
| **Headless CMS** | **Content & Branding** | Homepage copy, Hero media, Collection descriptions, Product marketing content, SEO metadata. |
| **PostgreSQL (Database)** | **Transactional & State** | User accounts, Saved addresses, Carts, Order history, Tracking status, Subscriptions. |
| **Bridge Layer** | **Transformation** | Merging CMS content with Database availability/price data to serve page-ready schemas. |

## Content Models

### CMS Models (High Level)
1. **Site Settings**: Global navigation, social links, brand settings.
2. **Homepage**: Hero, Current Drop, Philosophy section, Featured Object.
3. **Collections**: Drop labels, titles, subtitles, collection-wide assets.
4. **Product Content**: Descriptions, high-res media, marketing copy.

### Database Models (Transactional)
1. **User**: Auth data, personal info.
2. **Address**: Shipping and billing.
3. **Cart & CartItem**: Temporary shopping state.
4. **Order & OrderItem**: Immutable purchase records.
5. **Order Timeline**: Status history for fulfillment tracking.

## Visual & Interaction System

1. **The Core Grid**: Minimalist, high contrast, heavy use of high-density black space (#050505).
2. **The HUD Accent**: **HUD Cyan (#00F2FF)** used for telemetry edges, active states, and scanlines.
3. **The Object**: Technical CAD-like line-art animations and solid resin representations.
4. **The Specs**: Diagnostic layout for unit details (Material, Finish, Geometry, Density).
