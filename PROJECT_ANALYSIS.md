--- START OF Business Plan + website plan.docx ---
You are building:

A futuristic collectible brand powered by 3D manufacturing

Think less “gift shop”

Think more streetwear x collectibles x sci-fi lab

⚔️ 1. CORE BRAND POSITIONING

What you are:

A futuristic collectible systems brand

What you are NOT:

❌ personalized gifting store

❌ toy shop

❌ hobby 3D print shop

What you ARE:

✔ engineered collectibles

✔ limited drops

✔ aesthetic desk artifacts

✔ sci-fi inspired objects

🔥 Brand Archetype

The Creator (innovation, making)

The Futurist (advanced, ahead of time)

The Collector (rarity, exclusivity)

🧠 Brand Core Idea

“Objects from the future, manufactured today.”

⚔️ 2. NAME SYSTEM (HIGH-IMPACT OPTIONS)

You need something that sounds like:

a lab

a system

a protocol

a future artifact brand

🔥 Tier 1 (Strongest)

NEUROFORM

VOIDLAB

ATOMFORGE

SYNTHRA

AXIOM OBJECTS

FORM//VOID

PRIME MOLD

NEXUS OBJECTS

ARCANE FORGE

VECTOR LABS

🔥 My CEO Picks

1. VOIDLAB

feels secretive + futuristic

easy recall

strong aesthetic identity

2. NEUROFORM

sounds advanced, engineered, intelligent

premium positioning

3. AXIOM OBJECTS

extremely premium, collectible-focused

👉 If you want domination: Pick VOIDLAB or NEUROFORM

⚔️ 3. TAGLINE OPTIONS

Keep it sharp, cold, powerful.

“Manufactured for the Future”

“Objects Beyond Function”

“Engineered Collectibles”

“Artifacts from Tomorrow”

“Designed to Exist Differently”

“Form. Engineered.”

“Not Toys. Objects.”

👉 Best:

“Artifacts from Tomorrow”

⚔️ 4. VISUAL IDENTITY (THIS IS CRITICAL)

You must look NOTHING like:

toy brands

D2C Instagram junk

colorful childish stores

🎨 Color Palette

Base:

#000000 (deep black)

#0A0A0A (near black)

#111111 (background layers)

Accent:

#FFFFFF (clean white)

#A3A3A3 (neutral gray)

Highlight (choose ONE):

neon blue (#3B82F6)

cyber purple (#8B5CF6)

acid green (#22C55E)

👉 Do NOT use multiple accents.

Pick ONE and dominate.

🧠 Feel:

cold

minimal

engineered

premium

futuristic

Typography

Headings:

Space Grotesk

Satoshi

Inter (tight tracking)

Style:

uppercase

tight spacing

bold weights

Example:

VOIDLAB

ARTIFACT SERIES 01

⚔️ 5. LOGO DIRECTION

You don’t need a fancy logo.

You need a system identity.

Option A: Wordmark (Best)

VOIDLAB

bold

tight spacing

uppercase

maybe slight letter spacing

Option B: Symbol + Wordmark

Symbol ideas:

broken square (modular object)

grid fragment

cube abstraction

glitch line

Option C: System Logo (STRONGEST)

VOIDLAB // SERIES 01

Feels like:

product system

drop culture

collectible lineage

⚔️ 6. PRODUCT PHILOSOPHY

This is where you become dangerous.

You are not selling:

random toys

You are selling:

limited, designed objects

Product categories

1. DESK OBJECTS

geometric sculptures

mechanical-looking forms

modular pieces

2. CHARACTER OBJECTS (non-personalized)

stylized humanoids

faceless figures

abstract beings

3. FUNCTIONAL OBJECTS

pen stands

cable holders

desk trays

BUT:

everything must feel like a collectible

4. LIMITED DROPS

This is your weapon.

Example:

“SERIES 01: VOID FIGURES”

“DROP 02: GRID FORMS”

⚔️ 7. WEBSITE DESIGN DIRECTION

Your website should feel like:

a product lab, not a shop

🧩 Homepage

Hero:

dark background

rotating object

minimal text

Example:

VOIDLAB

ARTIFACTS FROM TOMORROW

[ENTER SYSTEM]

Section 1: Current Drop

SERIES 01

VIEW OBJECTS →

Section 2: Product Grid

large visuals

minimal text

no clutter

Section 3: Philosophy

Short:

Designed as objects, not toys.

Manufactured through layered fabrication systems.

Built for display.

Section 4: CTA

ENTER COLLECTION

🧩 Product Page Style

full-screen visuals

minimal copy

specs like:

material

dimensions

finish

edition

Example:

VOID FIGURE 01

Material: PLA Composite

Finish: Matte Black

Edition: Open

⚔️ 8. CONTENT STYLE

Your content should feel like:

product ads from the future

not influencer cringe

Content formats:

1. Cinematic product shots

rotating object

dark lighting

reflections

2. Manufacturing visuals

3D printing timelapse

layers forming

3. “Object reveal”

slow unveil

dramatic

4. Desk setups

minimal aesthetic

Tone:

no emojis

no cringe captions

no over-explanation

Example:

SERIES 01

VOID FIGURE

AVAILABLE NOW

⚔️ 9. BRAND VOICE

Tone:

confident

minimal

precise

slightly mysterious

Avoid:

“cute”

“fun”

“amazing product!!!”

Use:

short lines

declarative statements

Example:

Built for display.

Not designed for play.

⚔️ 10. PACKAGING (CRUCIAL FOR PREMIUM FEEL)

Packaging style:

matte black box

minimal text

inner foam cutout

card insert

Insert text example:

VOIDLAB

ARTIFACT 01

Manufactured: 2026

⚔️ 11. PRICING STRATEGY

You are NOT cheap.

Pricing tiers:

Entry: ₹799–999

Core: ₹999–1999

Premium: ₹1999–3999

Why premium works:

looks premium

feels collectible

not compared to toys

⚔️ 12. THE REAL DIFFERENTIATOR

This is where you crush competitors:

You don’t sell products. You release “drops.”

Example:

DROP 01

VOID FIGURES

DROP 02

GRID OBJECTS

DROP 03

MECH SERIES

This creates:

urgency

identity

collectability

💀 FINAL TRUTH

If you execute this properly:

You will not compete with:

toy stores

Amazon sellers

You will sit closer to:

collectible brands

design studios

streetwear culture

🔥 NEXT MOVE
--- END OF Business Plan + website plan.docx ---
--- START OF CMS_database content model map for VOIDLAB.docx ---
 connect the frontend schema to the backend properly.

Below is the CMS/database content model map for VOIDLAB, designed to match the page schemas exactly and keep content, commerce, and account data cleanly separated.

The cleanest architecture is:

CMS for brand/content/catalog presentation

Database for transactional and user-owned data

Bridge layer that transforms CMS + DB into page schemas

That means:

collections, objects, journal, legal, support copy → CMS

cart, checkout, orders, users, addresses, subscriptions → database

1. System split: CMS vs database

CMS should own

homepage content

collection/release content

object content

archive content

system/about/journal pages

support/contact/legal content

release-list copy

SEO metadata

media references

Database should own

users

accounts

addresses

carts

cart items

orders

order items

order timeline events

release list subscribers

support tickets

payment records

shipping status

This split prevents the classic mess of trying to store operational state in a CMS.

2. CMS content model map

These are the recommended CMS document types.

site_settings

Global site-level content.

Fields

TypeScript

type SiteSettings = {

  id: string;

  brandName: string;

  tagline: string;

  primaryAccent: string;

  supportEmail: string;

  contactEmail: string;

  footerLinks: Array<{

    label: string;

    href: string;

    group: 'shop' | 'brand' | 'support' | 'account';

  }>;

  navigationLinks: Array<{

    label: string;

    href: string;

  }>;

  socialLinks: Array<{

    platform: string;

    href: string;

  }>;

};

Used by:

SiteHeader

SiteFooter

home_page

Matches HomePageData.

Fields

TypeScript

type HomePageDocument = {

  id: string;

  heroBadge: string;

  heroTitle: string;

  heroSubtitle: string;

  heroPrimaryCtaLabel: string;

  heroPrimaryCtaHref: string;

  heroSecondaryCtaLabel?: string;

  heroSecondaryCtaHref?: string;

  heroStats: Array<{

    label: string;

    value: string;

  }>;

  heroMedia: CMSMediaRef;

  currentDropSectionLabel: string;

  currentDropTitle: string;

  currentDropSubtitle: string;

  currentDropCtaLabel?: string;

  currentDropCtaHref?: string;

  currentDropCollectionSlug: string;

  philosophySectionLabel: string;

  philosophyTitle: string;

  philosophyBody: string;

  philosophyManifestoLines: string[];

  philosophySpecCards: Array<{

    label: string;

    value: string;

  }>;

  philosophyMedia: CMSMediaRef;

  featuredObjectSectionLabel: string;

  featuredObjectTitle: string;

  featuredObjectBody: string;

  featuredObjectSlug: string;

  featuredObjectSpecs: Array<{

    label: string;

    value: string;

  }>;

  featuredPrimaryCtaLabel: string;

  featuredPrimaryCtaHref: string;

  featuredSecondaryCtaLabel?: string;

  featuredSecondaryCtaHref?: string;

  featuredMedia: CMSMediaRef;

  archiveTeaserSectionLabel: string;

  archiveTeaserTitle: string;

  archiveTeaserSubtitle: string;

  archiveReleaseSlugs: string[];

  finalCtaSectionLabel: string;

  finalCtaTitle: string;

  finalCtaSubtitle: string;

  finalCtaPrimaryLabel: string;

  finalCtaPrimaryHref: string;

  finalCtaSecondaryLabel?: string;

  finalCtaSecondaryHref?: string;

  seoTitle?: string;

  seoDescription?: string;

};

collections

Matches CollectionSummary and CollectionDetail.

Fields

TypeScript

type CollectionDocument = {

  id: string;

  slug: string;

  code: string;

  title: string;

  subtitle: string;

  status: 'active' | 'archived' | 'upcoming';

  heroMedia: CMSMediaRef;

  releaseNote?: string;

  introTitle?: string;

  introBody?: string;

  objectIds: string[];

  availableCategories: string[];

  availableFinishes: string[];

  releaseNotes?: Array<{

    label: string;

    value: string;

  }>;

  sortOrder: number;

  releasedAt?: string;

  archivedAt?: string;

  seoTitle?: string;

  seoDescription?: string;

};

Used by:

/collection

/collection/[slug]

/archive

/archive/[slug]

homepage archive teaser

objects

Matches ObjectDetail and ObjectCardData.

Fields

TypeScript

type ObjectDocument = {

  id: string;

  slug: string;

  code: string;

  name: string;

  subtitle: string;

  description?: string;

  category: string;

  type: string;

  collectionId: string;

  editionType: 'open_edition' | 'limited_drop' | 'numbered_edition';

  editionLabel: string;

  status: 'available' | 'limited' | 'archived' | 'sold_out';

  basePrice: number;

  compareAtPrice?: number;

  material: string;

  dimensions: string;

  dispatchWindow: string;

  stockNote?: string;

  defaultFinishLabel: string;

  defaultThumbnail: CMSMediaRef;

  gallery: CMSMediaRef[];

  finishes: Array<{

    id: string;

    label: string;

    swatch?: string;

    priceDelta: number;

    note?: string;

    isDefault?: boolean;

  }>;

  sizes?: Array<{

    id: string;

    label: string;

    dimensionsLabel: string;

    priceDelta: number;

    note?: string;

    isDefault?: boolean;

  }>;

  addOns?: Array<{

    id: string;

    label: string;

    price: number;

    note?: string;

    isDefault?: boolean;

  }>;

  specs: Array<{

    label: string;

    value: string;

  }>;

  features: string[];

  faqs: Array<{

    id: string;

    question: string;

    answer: string;

  }>;

  relatedObjectIds: string[];

  environmentMedia?: CMSMediaRef[];

  isFeatured?: boolean;

  sortOrder?: number;

  seoTitle?: string;

  seoDescription?: string;

};

Important: Reviews should not live in CMS if they are operationally user-generated. They can be in DB, moderated, then exposed to frontend.

journal_articles

Matches JournalArticleCard and JournalArticleDetail.

Fields

TypeScript

type JournalArticleDocument = {

  id: string;

  slug: string;

  title: string;

  excerpt: string;

  category: string;

  publishedAt: string;

  heroMedia: CMSMediaRef;

  bodyHtml: string;

  relatedArticleIds: string[];

  seoTitle?: string;

  seoDescription?: string;

};

system_page

Matches SystemPageData.

Fields

TypeScript

type SystemPageDocument = {

  id: string;

  heroTitle: string;

  heroSubtitle: string;

  heroBadge?: string;

  heroMedia?: CMSMediaRef;

  manifestoSectionLabel: string;

  manifestoTitle: string;

  manifestoBody: string;

  manifestoLines: string[];

  fabricationSectionLabel: string;

  fabricationTitle: string;

  fabricationBody: string;

  fabricationVisuals: CMSMediaRef[];

  fabricationSpecs: Array<{

    label: string;

    value: string;

  }>;

  materialsSectionLabel: string;

  materialsTitle: string;

  materialsBody: string;

  materialItems: Array<{

    title: string;

    body: string;

  }>;

  packagingSectionLabel: string;

  packagingTitle: string;

  packagingBody: string;

  packagingItems: Array<{

    title: string;

    body: string;

  }>;

  finalCtaTitle: string;

  finalCtaSubtitle: string;

  finalCtaLabel: string;

  finalCtaHref: string;

  seoTitle?: string;

  seoDescription?: string;

};

about_page

You can model separately or reuse a generic page model.

Fields

TypeScript

type AboutPageDocument = {

  id: string;

  title: string;

  subtitle: string;

  sections: Array<{

    id: string;

    heading: string;

    bodyHtml: string;

    media?: CMSMediaRef;

  }>;

  seoTitle?: string;

  seoDescription?: string;

};

support_page

Matches SupportPageData.

Fields

TypeScript

type SupportPageDocument = {

  id: string;

  heroTitle: string;

  heroSubtitle: string;

  supportTopics: Array<{

    id: string;

    title: string;

    body: string;

    href?: string;

  }>;

  faqGroups: Array<{

    id: string;

    title: string;

    items: Array<{

      id: string;

      question: string;

      answer: string;

    }>;

  }>;

  contactMethods: Array<{

    id: string;

    title: string;

    body: string;

    href?: string;

  }>;

  seoTitle?: string;

  seoDescription?: string;

};

contact_page

Matches ContactPageData.

Fields

TypeScript

type ContactPageDocument = {

  id: string;

  heroTitle: string;

  heroSubtitle: string;

  submitLabel: string;

  contactDetails: Array<{

    label: string;

    value: string;

  }>;

  seoTitle?: string;

  seoDescription?: string;

};

release_list_page

Matches ReleaseListPageData.

Fields

TypeScript

type ReleaseListPageDocument = {

  id: string;

  heroTitle: string;

  heroSubtitle: string;

  benefits: Array<{

    id: string;

    title: string;

    body: string;

  }>;

  submitLabel: string;

  disclaimer?: string;

  seoTitle?: string;

  seoDescription?: string;

};

legal_pages

Matches LegalPageData.

Fields

TypeScript

type LegalPageDocument = {

  id: string;

  slug: 'privacy' | 'terms' | 'shipping' | 'returns';

  title: string;

  subtitle?: string;

  sections: Array<{

    id: string;

    heading: string;

    bodyHtml: string;

  }>;

  sidebarItems: Array<{

    id: string;

    label: string;

  }>;

  seoTitle?: string;

  seoDescription?: string;

};

3. Database content model map

Now the operational side.

users

Maps to auth identity.

Columns

TypeScript

type UserRow = {

  id: string;

  email: string;

  password_hash?: string;

  created_at: string;

  updated_at: string;

};

profiles

Matches AccountProfile.

Columns

TypeScript

type ProfileRow = {

  id: string; // same as user id

  collector_id: string;

  display_name: string;

  email: string;

  phone?: string;

  tier_label?: string;

  joined_at: string;

  updated_at: string;

};

addresses

Matches Address.

Columns

TypeScript

type AddressRow = {

  id: string;

  user_id: string;

  full_name: string;

  email?: string;

  phone: string;

  line1: string;

  line2?: string;

  city: string;

  state: string;

  postal_code: string;

  country: string;

  is_default: boolean;

  created_at: string;

  updated_at: string;

};

carts

One active cart per user or session.

Columns

TypeScript

type CartRow = {

  id: string;

  user_id?: string;

  session_id?: string;

  currency: string;

  created_at: string;

  updated_at: string;

};

cart_items

Columns

TypeScript

type CartItemRow = {

  id: string;

  cart_id: string;

  object_id: string;

  finish_id?: string;

  size_id?: string;

  add_on_ids?: string[]; // or JSONB

  quantity: number;

  unit_price: number;

  created_at: string;

  updated_at: string;

};

orders

Matches OrderSummary and part of OrderDetail.

Columns

TypeScript

type OrderRow = {

  id: string;

  user_id: string;

  code: string;

  phase: 'design_locked' | 'in_fabrication' | 'quality_check' | 'dispatched' | 'delivered';

  payment_status: 'paid' | 'pending' | 'failed';

  shipping_status: 'processing' | 'dispatched' | 'delivered';

  subtotal: number;

  shipping_fee: number;

  discount: number;

  total: number;

  eta_label: string;

  shipping_address_id: string;

  created_at: string;

  updated_at: string;

};

order_items

Matches OrderLineItem.

Columns

TypeScript

type OrderItemRow = {

  id: string;

  order_id: string;

  object_id: string;

  object_slug: string;

  code: string;

  name: string;

  type: string;

  finish_label: string;

  edition_label: string;

  quantity: number;

  unit_price: number;

  thumbnail_src?: string;

  thumbnail_alt?: string;

  thumbnail_placeholder_label?: string;

  created_at: string;

};

Important: Snapshot object fields at order time.

Do not rely only on live product joins, because product data can change later.

order_events

Matches OrderEvent.

Columns

TypeScript

type OrderEventRow = {

  id: string;

  order_id: string;

  phase: string;

  title: string;

  description?: string;

  timestamp_label: string;

  created_at: string;

};

payments

Columns

TypeScript

type PaymentRow = {

  id: string;

  order_id: string;

  provider: string;

  provider_payment_id?: string;

  amount: number;

  currency: string;

  status: 'pending' | 'paid' | 'failed' | 'refunded';

  created_at: string;

  updated_at: string;

};

release_list_subscribers

Columns

TypeScript

type ReleaseListSubscriberRow = {

  id: string;

  email: string;

  phone?: string;

  user_id?: string;

  source?: string;

  is_active: boolean;

  created_at: string;

};

support_tickets

Columns

TypeScript

type SupportTicketRow = {

  id: string;

  user_id?: string;

  order_id?: string;

  email: string;

  subject: string;

  message: string;

  status: 'open' | 'in_progress' | 'resolved' | 'closed';

  created_at: string;

  updated_at: string;

};

reviews

Operational reviews, later surfaced on PDP.

Columns

TypeScript

type ReviewRow = {

  id: string;

  user_id?: string;

  object_id: string;

  order_id?: string;

  name: string;

  city?: string;

  rating: number;

  title?: string;

  text: string;

  is_approved: boolean;

  created_at: string;

};

This gives moderation control before reviews go live.

4. CMS media model

You need one unified media reference shape.

TypeScript

type CMSMediaRef = {

  id: string;

  src?: string;

  alt: string;

  placeholderLabel?: string;

  width?: number;

  height?: number;

  mimeType?: string;

};

This maps cleanly to MediaItem.

5. Route-to-model mapping

This is the exact map from route → data source.

/

Uses:

home_page

collections

objects

/collection

Uses:

collections (active ones)

objects

/collection/[slug]

Uses:

collections by slug

objects by collection id

/object/[slug]

Uses:

objects by slug

reviews by object id

objects again for related objects

/archive

Uses:

collections where status = archived

/archive/[slug]

Uses:

collections by slug

objects by collection id

/system

Uses:

system_page

/about

Uses:

about_page

/journal

Uses:

journal_articles

/journal/[slug]

Uses:

journal_articles by slug

/support

Uses:

support_page

/contact

Uses:

contact_page

/release-list

Uses:

release_list_page

Submits to:

release_list_subscribers

/cart

Uses:

carts

cart_items

objects for enrichment

/checkout

Uses:

carts

cart_items

profiles

addresses

Writes to:

orders

order_items

payments

/checkout/success

Uses:

orders

/account

Uses:

profiles

orders

order_items

addresses

release_list_subscribers

/account/orders

Uses:

orders

/account/orders/[orderId]

Uses:

orders

order_items

order_events

addresses

/account/collection

Uses:

orders

order_items

objects

/account/profile

Uses:

profiles

/account/addresses

Uses:

addresses

/account/security

Uses:

auth provider + maybe profiles

/account/support

Uses:

support_tickets

orders

Writes to:

support_tickets

6. Transformation layer map

Do not pass raw CMS rows or DB rows directly into components.

Create mapper functions.

Example mapper files

Plain text

lib/mappers/

├── home.ts

├── collection.ts

├── object.ts

├── archive.ts

├── journal.ts

├── support.ts

├── cart.ts

├── checkout.ts

├── account.ts

└── orders.ts

Example mapper function

TypeScript

function mapObjectDocumentToObjectCard(doc: ObjectDocument): ObjectCardData

function mapObjectDocumentToObjectDetail(

  doc: ObjectDocument,

  reviews: ReviewRow[],

  related: ObjectDocument[]

): ObjectDetail

function mapOrderRowsToOrderSummary(order: OrderRow): OrderSummary

function mapOrderRowsToOrderDetail(

  order: OrderRow,

  items: OrderItemRow[],

  address: AddressRow,

  events: OrderEventRow[]

): OrderDetail

This keeps pages and components clean.

7. Suggested CMS collections / tables if using a headless CMS + Postgres

CMS collections

site_settings

home_page

collections

objects

journal_articles

system_page

about_page

support_page

contact_page

release_list_page

legal_pages

Database tables

users

profiles

addresses

carts

cart_items

orders

order_items

order_events

payments

release_list_subscribers

support_tickets

reviews

That is the clean split.

8. Recommended relational rules

collections → objects

One-to-many

objects → reviews

One-to-many

users → profiles

One-to-one

users → addresses

One-to-many

users → orders

One-to-many

orders → order_items

One-to-many

orders → order_events

One-to-many

orders → payments

One-to-many or one-to-one depending on payment flow

users / email → release_list_subscribers

Optional link

9. Minimal database schema priority for V1

If you want a tight V1, build these first:

CMS

site_settings

home_page

collections

objects

system_page

support_page

legal_pages

DB

users

profiles

addresses

carts

cart_items

orders

order_items

order_events

payments

Then add:

reviews

support_tickets

release_list_subscribers

journal_articles

10. Final architecture principle

Here is the clean mental model:

CMS answers:

“What is VOIDLAB showing and saying?”

Database answers:

“What has this user done, bought, and owned?”

Mapper layer answers:

“How do we convert backend truth into frontend page schemas?”

That separation is what keeps the system elegant.

11. CEO verdict

This content model map is strong because it matches the frontend contracts exactly and avoids two common failures:

dumping everything into one bloated products table

using the CMS as if it were an order system

With this structure, VOIDLAB can scale from a small premium drop brand into a real operating system.
--- END OF CMS_database content model map for VOIDLAB.docx ---
--- START OF Cms_database content model map.docx ---

--- END OF Cms_database content model map.docx ---
--- START OF Collections Page Ui .docx ---
'use client';

import React, { useMemo, useState } from 'react';

type ProductItem = {

  id: string;

  name: string;

  type: string;

  edition: string;

  price: number;

  category: string;

  finish: string;

  status: 'Available' | 'Limited' | 'Archive';

};

const COLLECTION = {

  title: 'SERIES 01',

  subtitle:

    'A controlled release of engineered desk objects and collectible forms manufactured through layered in-house fabrication.',

  totalObjects: 12,

  activeDrop: 'DROP 01',

  releaseNote: 'Current release is live in limited batch quantity.',

};

const PRODUCTS: ProductItem[] = [

  {

    id: 'UNIT 01',

    name: 'VOID FIGURE 01',

    type: 'Artifact Unit',

    edition: 'Open Edition',

    price: 1499,

    category: 'Figures',

    finish: 'Matte Black',

    status: 'Available',

  },

  {

    id: 'UNIT 02',

    name: 'GRID RELIC 02',

    type: 'Desk Object',

    edition: 'Limited Drop',

    price: 1999,

    category: 'Desk Objects',

    finish: 'Graphite Grey',

    status: 'Limited',

  },

  {

    id: 'UNIT 03',

    name: 'MECH TOTEM 03',

    type: 'Display Form',

    edition: 'Series 01',

    price: 2499,

    category: 'Totems',

    finish: 'Matte Black',

    status: 'Available',

  },

  {

    id: 'UNIT 04',

    name: 'AXIS BLOCK 04',

    type: 'Collectible Form',

    edition: 'Open Edition',

    price: 1199,

    category: 'Desk Objects',

    finish: 'Void White',

    status: 'Available',

  },

  {

    id: 'UNIT 05',

    name: 'NULL RELIC 05',

    type: 'Artifact Unit',

    edition: 'Limited Drop',

    price: 1799,

    category: 'Figures',

    finish: 'Matte Black',

    status: 'Limited',

  },

  {

    id: 'UNIT 06',

    name: 'FRAME CORE 06',

    type: 'Desk Object',

    edition: 'Series 01',

    price: 1599,

    category: 'Desk Objects',

    finish: 'Graphite Grey',

    status: 'Available',

  },

  {

    id: 'UNIT 07',

    name: 'VOID PILLAR 07',

    type: 'Display Form',

    edition: 'Open Edition',

    price: 2299,

    category: 'Totems',

    finish: 'Matte Black',

    status: 'Available',

  },

  {

    id: 'UNIT 08',

    name: 'GRID NODE 08',

    type: 'Collectible Form',

    edition: 'Limited Drop',

    price: 1399,

    category: 'Desk Objects',

    finish: 'Void White',

    status: 'Limited',

  },

];

const categoryOptions = ['All', 'Figures', 'Desk Objects', 'Totems'];

const finishOptions = ['All', 'Matte Black', 'Graphite Grey', 'Void White'];

const statusOptions = ['All', 'Available', 'Limited'];

function cn(...classes: Array<string | false | null | undefined>) {

  return classes.filter(Boolean).join(' ');

}

function SectionLabel({ children }: { children: React.ReactNode }) {

  return (

    <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">

      <span className="inline-block h-px w-8 bg-zinc-700" />

      {children}

    </div>

  );

}

function GridBackground() {

  return (

    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="absolute inset-y-0 left-1/3 w-px bg-white/5" />

      <div className="absolute inset-y-0 right-1/4 w-px bg-white/5" />

    </div>

  );

}

function PlaceholderVisual({

  label,

  className = '',

}: {

  label: string;

  className?: string;

}) {

  return (

    <div

      className={cn(

        'relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-zinc-950',

        'h-[320px]',

        className

      )}

    >

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_70%_65%,rgba(59,130,246,0.15),transparent_30%),linear-gradient(180deg,#111111_0%,#050505_100%)]" />

      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-violet-400/30 bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-[0_0_80px_rgba(139,92,246,0.15)]" />

      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[1.25rem] border border-white/10 bg-zinc-900/80 backdrop-blur" />

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">

        <div>

          <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

            Visual Placeholder

          </div>

          <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-200 sm:text-sm">

            {label}

          </div>

        </div>

        <div className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-zinc-400">

          Replace

        </div>

      </div>

    </div>

  );

}

function FilterPill({

  label,

  active,

  onClick,

}: {

  label: string;

  active: boolean;

  onClick: () => void;

}) {

  return (

    <button

      type="button"

      onClick={onClick}

      className={cn(

        'rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition',

        active

          ? 'border-violet-400/40 bg-violet-400/10 text-white'

          : 'border-white/10 bg-zinc-950 text-zinc-400 hover:border-white/20 hover:text-white'

      )}

    >

      {label}

    </button>

  );

}

function ProductCard({ item }: { item: ProductItem }) {

  return (

    <div className="group rounded-[2rem] border border-white/10 bg-zinc-950/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-zinc-950">

      <PlaceholderVisual label={item.name} />

      <div className="mt-4 flex items-start justify-between gap-4">

        <div>

          <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

            {item.id}

          </div>

          <h3 className="mt-2 text-lg font-semibold uppercase tracking-[0.08em] text-white">

            {item.name}

          </h3>

          <p className="mt-1 text-sm text-zinc-400">{item.type}</p>

          <div className="mt-3 flex flex-wrap gap-2">

            <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-500">

              {item.edition}

            </span>

            <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-500">

              {item.finish}

            </span>

            <span

              className={cn(

                'rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]',

                item.status === 'Limited'

                  ? 'border border-violet-400/30 bg-violet-400/10 text-violet-200'

                  : 'border border-white/10 text-zinc-500'

              )}

            >

              {item.status}

            </span>

          </div>

        </div>

        <div className="pt-1 text-right">

          <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

            Price

          </div>

          <div className="mt-2 text-base font-semibold text-white">

            ₹{item.price.toLocaleString('en-IN')}

          </div>

        </div>

      </div>

      <button className="mt-5 inline-flex w-full items-center justify-between rounded-full border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.22em] text-zinc-200 transition group-hover:border-violet-400/40 group-hover:text-white">

        View Object

        <span>→</span>

      </button>

    </div>

  );

}

export default function VoidlabCollectionPage() {

  const [category, setCategory] = useState('All');

  const [finish, setFinish] = useState('All');

  const [status, setStatus] = useState('All');

  const [sort, setSort] = useState('Featured');

  const filteredProducts = useMemo(() => {

    let result = [...PRODUCTS];

    if (category !== 'All') {

      result = result.filter((item) => item.category === category);

    }

    if (finish !== 'All') {

      result = result.filter((item) => item.finish === finish);

    }

    if (status !== 'All') {

      result = result.filter((item) => item.status === status);

    }

    if (sort === 'Price: Low to High') {

      result.sort((a, b) => a.price - b.price);

    } else if (sort === 'Price: High to Low') {

      result.sort((a, b) => b.price - a.price);

    } else if (sort === 'Limited First') {

      result.sort((a, b) => {

        if (a.status === b.status) return 0;

        return a.status === 'Limited' ? -1 : 1;

      });

    }

    return result;

  }, [category, finish, status, sort]);

  return (

    <div className="min-h-screen bg-black text-white">

      <div className="relative overflow-hidden border-b border-white/10">

        <GridBackground />

        <header className="relative z-20 border-b border-white/10">

          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xs font-semibold tracking-[0.24em]">

                VL

              </div>

              <div>

                <div className="text-sm font-semibold uppercase tracking-[0.26em]">

                  VOIDLAB

                </div>

                <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                  Artifacts from Tomorrow

                </div>

              </div>

            </div>

            <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.24em] text-zinc-400 md:flex">

              <a href="#" className="transition hover:text-white">

                Collection

              </a>

              <a href="#" className="transition hover:text-white">

                System

              </a>

              <a href="#" className="transition hover:text-white">

                Archive

              </a>

            </nav>

            <button className="rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

              Cart 00

            </button>

          </div>

        </header>

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-5 text-[11px] uppercase tracking-[0.22em] text-zinc-500 sm:px-8 lg:px-10">

          Home / Collection / <span className="text-zinc-300">{COLLECTION.title}</span>

        </div>

        <section className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-4 sm:px-8 lg:px-10 lg:pb-24">

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">

            <div className="flex flex-col justify-center">

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.26em] text-zinc-400">

                {COLLECTION.activeDrop}

                <span className="inline-block h-1 w-1 rounded-full bg-violet-400" />

                LIVE RELEASE

              </div>

              <h1 className="mt-7 text-5xl font-semibold uppercase tracking-[0.06em] text-white sm:text-6xl lg:text-7xl">

                {COLLECTION.title}

              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">

                {COLLECTION.subtitle}

              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <button className="rounded-full bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-zinc-200">

                  View Active Units

                </button>

                <button className="rounded-full border border-white/10 px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

                  Access Archive

                </button>

              </div>

              <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">

                <div>

                  <div className="text-2xl font-semibold text-white">

                    {COLLECTION.totalObjects}

                  </div>

                  <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500">

                    Total Objects

                  </div>

                </div>

                <div>

                  <div className="text-2xl font-semibold text-white">01</div>

                  <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500">

                    Active Drop

                  </div>

                </div>

                <div>

                  <div className="text-2xl font-semibold text-white">100%</div>

                  <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500">

                    In-House Fabrication

                  </div>

                </div>

              </div>

            </div>

            <div className="relative">

              <PlaceholderVisual label="Collection Hero Visual" className="h-[520px]" />

              <div className="absolute -bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/10 bg-black/80 p-5 backdrop-blur-xl">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                      Release Note

                    </div>

                    <div className="mt-2 text-lg font-semibold uppercase tracking-[0.08em] text-white">

                      {COLLECTION.releaseNote}

                    </div>

                  </div>

                  <button className="rounded-full border border-white/10 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

                    Acquire →

                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

      <section className="border-t border-white/10 bg-zinc-950/40">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

            <aside className="h-fit rounded-[2rem] border border-white/10 bg-zinc-950 p-5">

              <SectionLabel>Filters</SectionLabel>

              <div className="space-y-8">

                <div>

                  <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-zinc-500">

                    Category

                  </div>

                  <div className="flex flex-wrap gap-2">

                    {categoryOptions.map((item) => (

                      <FilterPill

                        key={item}

                        label={item}

                        active={category === item}

                        onClick={() => setCategory(item)}

                      />

                    ))}

                  </div>

                </div>

                <div>

                  <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-zinc-500">

                    Finish

                  </div>

                  <div className="flex flex-wrap gap-2">

                    {finishOptions.map((item) => (

                      <FilterPill

                        key={item}

                        label={item}

                        active={finish === item}

                        onClick={() => setFinish(item)}

                      />

                    ))}

                  </div>

                </div>

                <div>

                  <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-zinc-500">

                    Availability

                  </div>

                  <div className="flex flex-wrap gap-2">

                    {statusOptions.map((item) => (

                      <FilterPill

                        key={item}

                        label={item}

                        active={status === item}

                        onClick={() => setStatus(item)}

                      />

                    ))}

                  </div>

                </div>

                <div>

                  <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-zinc-500">

                    Sort

                  </div>

                  <select

                    value={sort}

                    onChange={(e) => setSort(e.target.value)}

                    className="w-full rounded-[1.25rem] border border-white/10 bg-black px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-zinc-200 outline-none"

                  >

                    <option>Featured</option>

                    <option>Price: Low to High</option>

                    <option>Price: High to Low</option>

                    <option>Limited First</option>

                  </select>

                </div>

              </div>

            </aside>

            <div>

              <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                <div>

                  <SectionLabel>Collection Grid</SectionLabel>

                  <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] sm:text-4xl">

                    Active Units

                  </h2>

                  <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-400">

                    Browse the current system release. Minimal forms, controlled finishes,

                    limited visual language.

                  </p>

                </div>

                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">

                  {filteredProducts.length} Objects Visible

                </div>

              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {filteredProducts.map((item) => (

                  <ProductCard key={item.id} item={item} />

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">

            <div>

              <SectionLabel>System Philosophy</SectionLabel>

              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] sm:text-4xl">

                Release-Led

                <br />

                Collecting

              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-zinc-400">

                VOIDLAB does not present endless clutter. Objects are grouped into controlled

                releases with a consistent industrial language, engineered for desks, shelves,

                and environments that reward visual presence.

              </p>

              <div className="mt-8 space-y-4">

                {[

                  'Series-based launches instead of random catalog sprawl.',

                  'Minimal typography and object-first merchandising.',

                  'In-house fabrication as part of the brand system.',

                ].map((line) => (

                  <div

                    key={line}

                    className="rounded-[1.5rem] border border-white/10 bg-zinc-950 px-5 py-4 text-sm text-zinc-300"

                  >

                    {line}

                  </div>

                ))}

              </div>

            </div>

            <div className="grid gap-6 sm:grid-cols-2">

              <PlaceholderVisual label="Studio Shelf Visual" />

              <PlaceholderVisual label="Manufacturing Visual" />

              <div className="sm:col-span-2 rounded-[2rem] border border-white/10 bg-zinc-950 p-6">

                <div className="grid gap-4 sm:grid-cols-3">

                  {[

                    ['Series', '01'],

                    ['Fabrication', 'Layer-Manufactured'],

                    ['Language', 'Industrial Minimal'],

                  ].map(([k, v]) => (

                    <div key={k} className="rounded-[1.25rem] border border-white/10 bg-black/30 p-4">

                      <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                        {k}

                      </div>

                      <div className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-white">

                        {v}

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="border-t border-white/10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_35%),#050505]">

        <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">

          <SectionLabel>Acquire</SectionLabel>

          <h2 className="text-4xl font-semibold uppercase tracking-[0.08em] text-white sm:text-5xl">

            Enter the Release

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">

            Controlled objects. Limited forms. Built for future-facing desks and shelf systems.

          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button className="rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-zinc-200">

              View Current Drop

            </button>

            <button className="rounded-full border border-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

              Join Release List

            </button>

          </div>

        </div>

      </section>

      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">

          <div>

            <div className="text-lg font-semibold uppercase tracking-[0.24em] text-white">

              VOIDLAB

            </div>

            <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-zinc-500">

              Artifacts from Tomorrow

            </div>

          </div>

          <div className="grid gap-4 text-[11px] uppercase tracking-[0.24em] text-zinc-500 sm:grid-cols-3 sm:gap-8">

            <a href="#" className="transition hover:text-white">

              Collection

            </a>

            <a href="#" className="transition hover:text-white">

              System

            </a>

            <a href="#" className="transition hover:text-white">

              Contact

            </a>

          </div>

        </div>

      </footer>

    </div>

  );

}
--- END OF Collections Page Ui .docx ---
--- START OF Homepage UI.docx ---
'use client';

import React from 'react';

const currentDrop = [

  {

    id: '01',

    name: 'VOID FIGURE 01',

    type: 'Artifact Unit',

    edition: 'Open Edition',

    price: '₹1,499',

  },

  {

    id: '02',

    name: 'GRID RELIC 02',

    type: 'Desk Object',

    edition: 'Limited Drop',

    price: '₹1,999',

  },

  {

    id: '03',

    name: 'MECH TOTEM 03',

    type: 'Display Form',

    edition: 'Series 01',

    price: '₹2,499',

  },

  {

    id: '04',

    name: 'AXIS BLOCK 04',

    type: 'Collectible Form',

    edition: 'Open Edition',

    price: '₹1,199',

  },

];

const manifesto = [

  'Engineered as objects, not toys.',

  'Manufactured through layered fabrication systems.',

  'Built for display, collection, and presence.',

];

const specs = [

  'Layer-manufactured in-house',

  'Matte industrial finish',

  'Series-based releases',

  'Limited visual language',

];

const archiveItems = [

  'DROP 01 / VOID FIGURES',

  'DROP 02 / GRID OBJECTS',

  'DROP 03 / MECH SERIES',

];

function GridBackground() {

  return (

    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

      <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />

    </div>

  );

}

function SectionLabel({ children }: { children: React.ReactNode }) {

  return (

    <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-400">

      <span className="inline-block h-px w-8 bg-zinc-600" />

      {children}

    </div>

  );

}

function PlaceholderVisual({

  label,

  tall = false,

}: {

  label: string;

  tall?: boolean;

}) {

  return (

    <div

      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 ${

        tall ? 'h-[520px]' : 'h-[360px]'

      }`}

    >

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_70%_65%,rgba(59,130,246,0.15),transparent_30%),linear-gradient(180deg,#111111_0%,#050505_100%)]" />

      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-violet-400/30 bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-[0_0_80px_rgba(139,92,246,0.15)]" />

      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[1.25rem] border border-white/10 bg-zinc-900/80 backdrop-blur" />

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">

        <div>

          <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

            Visual Placeholder

          </div>

          <div className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-zinc-200">

            {label}

          </div>

        </div>

        <div className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-zinc-400">

          Replace

        </div>

      </div>

    </div>

  );

}

function ProductCard({

  item,

}: {

  item: { id: string; name: string; type: string; edition: string; price: string };

}) {

  return (

    <div className="group rounded-[2rem] border border-white/10 bg-zinc-950/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-zinc-950">

      <PlaceholderVisual label={item.name} />

      <div className="mt-4 flex items-start justify-between gap-4">

        <div>

          <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

            Unit {item.id}

          </div>

          <h3 className="mt-2 text-lg font-semibold uppercase tracking-[0.08em] text-white">

            {item.name}

          </h3>

          <p className="mt-1 text-sm text-zinc-400">{item.type}</p>

          <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-zinc-500">

            {item.edition}

          </p>

        </div>

        <div className="pt-1 text-right">

          <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

            Price

          </div>

          <div className="mt-2 text-base font-semibold text-white">{item.price}</div>

        </div>

      </div>

      <button className="mt-5 inline-flex w-full items-center justify-between rounded-full border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.22em] text-zinc-200 transition group-hover:border-violet-400/40 group-hover:text-white">

        View Object

        <span>→</span>

      </button>

    </div>

  );

}

export default function VoidlabHomepage() {

  return (

    <div className="min-h-screen bg-black text-white">

      <div className="relative overflow-hidden">

        <GridBackground />

        <header className="relative z-20 border-b border-white/10">

          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xs font-semibold tracking-[0.24em]">

                VL

              </div>

              <div>

                <div className="text-sm font-semibold uppercase tracking-[0.26em]">

                  VOIDLAB

                </div>

                <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                  Artifacts from Tomorrow

                </div>

              </div>

            </div>

            <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.24em] text-zinc-400 md:flex">

              <a href="#drop" className="transition hover:text-white">

                Current Drop

              </a>

              <a href="#system" className="transition hover:text-white">

                System

              </a>

              <a href="#archive" className="transition hover:text-white">

                Archive

              </a>

              <a href="#acquire" className="transition hover:text-white">

                Acquire

              </a>

            </nav>

            <button className="rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

              Enter Collection

            </button>

          </div>

        </header>

        <section className="relative z-10">

          <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-20">

            <div className="flex flex-col justify-center">

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.26em] text-zinc-400">

                SERIES 01

                <span className="inline-block h-1 w-1 rounded-full bg-violet-400" />

                LIVE DROP

              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-semibold uppercase tracking-[0.06em] text-white sm:text-6xl lg:text-7xl">

                Artifacts

                <br />

                from Tomorrow

              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">

                Futuristic desk objects and collectible forms manufactured in-house through

                layered fabrication systems.

              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <button className="rounded-full bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-zinc-200">

                  Enter System

                </button>

                <button className="rounded-full border border-white/10 px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

                  View Current Drop

                </button>

              </div>

              <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">

                <div>

                  <div className="text-2xl font-semibold text-white">01</div>

                  <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500">

                    Active Series

                  </div>

                </div>

                <div>

                  <div className="text-2xl font-semibold text-white">04</div>

                  <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500">

                    Live Objects

                  </div>

                </div>

                <div>

                  <div className="text-2xl font-semibold text-white">100%</div>

                  <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500">

                    In-House Fabrication

                  </div>

                </div>

              </div>

            </div>

            <div className="relative">

              <PlaceholderVisual label="Hero Artifact Render" tall />

              <div className="absolute -bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/10 bg-black/80 p-5 backdrop-blur-xl">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                      Featured Object

                    </div>

                    <div className="mt-2 text-lg font-semibold uppercase tracking-[0.08em] text-white">

                      VOID FIGURE 01

                    </div>

                    <div className="mt-1 text-sm text-zinc-400">

                      Matte black / Series 01 / Open Edition

                    </div>

                  </div>

                  <button className="rounded-full border border-white/10 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

                    View →

                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

      <section id="drop" className="border-t border-white/10 bg-zinc-950/40">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">

          <SectionLabel>Current Drop</SectionLabel>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] sm:text-4xl">

                Series 01

              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">

                A controlled release of engineered objects designed for desks, shelves,

                and display surfaces. Minimal forms. Heavy presence.

              </p>

            </div>

            <button className="rounded-full border border-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

              View Full Drop

            </button>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {currentDrop.map((item) => (

              <ProductCard key={item.id} item={item} />

            ))}

          </div>

        </div>

      </section>

      <section id="system" className="border-t border-white/10">

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">

          <div>

            <SectionLabel>System Philosophy</SectionLabel>

            <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] sm:text-4xl">

              Not Toys.

              <br />

              Objects.

            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-zinc-400">

              VOIDLAB is built around a simple principle: objects should feel engineered,

              intentional, and display-worthy. Every release follows a controlled visual

              language and a system-based manufacturing approach.

            </p>

            <div className="mt-10 space-y-4">

              {manifesto.map((line) => (

                <div

                  key={line}

                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-zinc-300"

                >

                  {line}

                </div>

              ))}

            </div>

          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="sm:col-span-2">

              <PlaceholderVisual label="Manufacturing / Process Visual" />

            </div>

            {specs.map((item) => (

              <div

                key={item}

                className="rounded-[1.75rem] border border-white/10 bg-zinc-950 p-6"

              >

                <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                  Spec

                </div>

                <div className="mt-3 text-lg font-medium uppercase tracking-[0.08em] text-white">

                  {item}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="border-t border-white/10 bg-zinc-950/40">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">

          <SectionLabel>Feature Block</SectionLabel>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

            <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-6 sm:p-8">

              <div className="mb-8 flex items-center justify-between gap-4">

                <div>

                  <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                    Featured Release

                  </div>

                  <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[0.08em] text-white sm:text-3xl">

                    VOID FIGURE 01

                  </h3>

                </div>

                <div className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-violet-200">

                  Available Now

                </div>

              </div>

              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

                <PlaceholderVisual label="Featured Product Visual" />

                <div className="flex flex-col justify-between">

                  <div>

                    <p className="text-sm leading-7 text-zinc-400">

                      A faceless display form designed with a cold, architectural silhouette.

                      Produced in matte black with a controlled presence intended for premium

                      desk setups and shelf systems.

                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">

                      {[

                        ['Material', 'PLA Composite'],

                        ['Finish', 'Matte Black'],

                        ['Edition', 'Open'],

                        ['Category', 'Artifact Unit'],

                      ].map(([k, v]) => (

                        <div

                          key={k}

                          className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-4"

                        >

                          <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                            {k}

                          </div>

                          <div className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-white">

                            {v}

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                    <button className="rounded-full bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-zinc-200">

                      Acquire Object

                    </button>

                    <button className="rounded-full border border-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

                      View Specifications

                    </button>

                  </div>

                </div>

              </div>

            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black p-6 sm:p-8">

              <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                Interface Notes

              </div>

              <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[0.08em] text-white">

                Controlled Minimalism

              </h3>

              <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-400">

                <p>

                  Use oversized product visuals, low-clutter typography, and sharp spacing.

                </p>

                <p>

                  Keep copy minimal. Let the product and system language carry the page.

                </p>

                <p>

                  Every call-to-action should feel like access to a release, not a generic buy

                  button.

                </p>

              </div>

              <div className="mt-8 space-y-3">

                {[

                  'Dark interface',

                  'Single accent color',

                  'Uppercase system typography',

                  'Large object-first blocks',

                ].map((item) => (

                  <div

                    key={item}

                    className="rounded-[1.25rem] border border-white/10 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-zinc-300"

                  >

                    {item}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      <section id="archive" className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">

          <SectionLabel>Archive</SectionLabel>

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] sm:text-4xl">

                Release System

              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-zinc-400">

                Build scarcity and identity through drops, not endless product clutter.

                Every collection should feel like a controlled system release.

              </p>

            </div>

            <div className="grid gap-4">

              {archiveItems.map((item, index) => (

                <div

                  key={item}

                  className="flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-zinc-950 px-5 py-5"

                >

                  <div>

                    <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                      Archive {String(index + 1).padStart(2, '0')}

                    </div>

                    <div className="mt-2 text-lg font-medium uppercase tracking-[0.08em] text-white">

                      {item}

                    </div>

                  </div>

                  <button className="rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

                    View

                  </button>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <section id="acquire" className="border-t border-white/10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_35%),#050505]">

        <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">

          <SectionLabel>Acquire</SectionLabel>

          <h2 className="text-4xl font-semibold uppercase tracking-[0.08em] text-white sm:text-5xl">

            Enter the Collection

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">

            Release-led collectible objects manufactured in-house with a futuristic visual

            language. Built for display. Built to remain.

          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button className="rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-zinc-200">

              View Current Drop

            </button>

            <button className="rounded-full border border-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

              Join Release List

            </button>

          </div>

        </div>

      </section>

      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">

          <div>

            <div className="text-lg font-semibold uppercase tracking-[0.24em] text-white">

              VOIDLAB

            </div>

            <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-zinc-500">

              Artifacts from Tomorrow

            </div>

          </div>

          <div className="grid gap-4 text-[11px] uppercase tracking-[0.24em] text-zinc-500 sm:grid-cols-3 sm:gap-8">

            <a href="#" className="transition hover:text-white">

              Collection

            </a>

            <a href="#" className="transition hover:text-white">

              System

            </a>

            <a href="#" className="transition hover:text-white">

              Contact

            </a>

          </div>

        </div>

      </footer>

    </div>

  );

}
--- END OF Homepage UI.docx ---
--- START OF Kite Homepage .docx ---
⚔️ HOMEPAGE OBJECTIVE

In < 5 seconds:

User understands product

Feels emotional pull

Sees proof

Clicks CTA

If this fails → you lose the sale.

🧠 PAGE FLOW (CRITICAL)

HOOK → PROOF → DESIRE → OFFER → TRUST → URGENCY → CONVERSION

🧩 1. HERO SECTION (ABOVE THE FOLD) — “STOP SCROLL”

Layout:

Left: Headline + CTA

Right: Before → After transformation slider

Copy:

Headline:

Turn Yourself Into a Real Toy

Subheadline:

Upload your photo → We 3D print your mini version

Primary CTA:

[Create Your Mini Now]

Secondary CTA:

[See Examples]

🧠 Psychology:

Instant clarity

Transformation = curiosity trigger

Action-oriented CTA

🧩 2. TRUST BAR (INSTANT CREDIBILITY)

Layout:

Horizontal strip

Content:

⭐ 4.8/5 from 1,200+ customers

🚚 Pan-India Delivery

🧠 Designed & Printed In-House

🎁 Perfect for Gifting

🧠 Purpose:

Kills doubt immediately

🧩 3. BESTSELLING COMBOS (MONEY SECTION)

Layout:

Grid (3–4 cards)

Section Title:

Our Most Loved Gift Combos

Card Structure:

Image: Combo visual

Title: Couple Combo Pack

Contents:

2 figurines

heart stand

custom names

Price Anchor: ₹1499 ₹2499

CTA: [Customize Now]

🧠 Psychology:

Bundles increase AOV

Anchored pricing = perceived discount

“Most Loved” = social proof

🧩 4. BEFORE → AFTER TRANSFORMATIONS (DESIRE ENGINE)

Layout:

Scrollable slider

Title:

Real People → Mini Versions

Content:

Photo → Figurine

Short caption:

“Gifted this to my boyfriend. He loved it!”

🧠 Psychology:

Visual proof > words

Reduces imagination gap

🧩 5. HOW IT WORKS (FRICTION KILLER)

Layout:

3-step horizontal

Step 1:

📸 Upload Photo

Choose your style

Step 2:

🛠 We Design & Print

Precision 3D printing

Step 3:

📦 Delivered To You

Ready to gift

🧠 Psychology:

Removes uncertainty

Makes process feel simple

🧩 6. OCCASION-BASED SECTIONS (BUYER INTENT HACK)

Layout:

Category tiles

Sections:

🎁 Gifts for Couples

🎂 Birthday Specials

🎮 Gamer Desk Setup

🐶 Pet Figurines

Each → leads to collection page

🧠 Psychology:

Helps confused buyers decide fast

Increases browsing depth

🧩 7. VIRAL HOOK SECTION (SHAREABILITY ENGINE)

Title:

Everyone’s Turning Themselves Into Toys 👇

Content:

Embedded reels

Reaction videos

🧠 Psychology:

Social validation

FOMO

🧩 8. URGENCY + OFFER (CONVERSION PUSH)

Layout:

Banner

Copy:

⚡ Only 50 Custom Slots Available Today

🎁 Free Premium Gift Box on Orders Above ₹999

CTA: [Create Yours Now]

🧠 Psychology:

Scarcity = action

Bonus = value boost

🧩 9. REVIEWS (TRUST STACK)

Layout:

Cards with:

Photo

Review

Name

🧠 Psychology:

Reduces hesitation

Builds credibility

🧩 10. FINAL CTA (CLOSER)

Copy:

Ready to See Yourself as a Toy?

CTA: [Create Your Mini Now]

⚔️ TECH STRUCTURE (FOR YOUR BUILD)

If using Next.js:

/components/home/

  Hero.tsx

  TrustBar.tsx

  ComboGrid.tsx

  Transformations.tsx

  HowItWorks.tsx

  OccasionGrid.tsx

  ViralSection.tsx

  OfferBanner.tsx

  Reviews.tsx

  FinalCTA.tsx

⚔️ CRITICAL CONVERSION RULES

1. No dead space

Every scroll must:

increase desire

reduce doubt

2. CTA every 1–1.5 screens

Never let user drift

3. Mobile-first dominance

90% traffic = mobile

4. Images > text

This is a visual product

💀 FINAL TRUTH

This homepage is not “nice to have”.

If executed correctly:

Your conversion rate can jump 2–4x

Your AOV increases via combos

Your brand feels premium instantly
--- END OF Kite Homepage .docx ---
--- START OF Prisma schema draft for Postgres.docx ---
Below is a copy-paste Prisma schema draft for Postgres that matches the VOIDLAB model closely enough to implement now and refine later.

It includes:

catalog / CMS-side content tables

account + auth-adjacent tables

cart / checkout / order system

reviews

support

release list

If you are using an external CMS later, you can remove the CMS models and keep the commerce/account models.

Prisma

generator client {

  provider = "prisma-client-js"

}

datasource db {

  provider = "postgresql"

  url      = env("DATABASE_URL")

}

enum CollectionStatus {

  ACTIVE

  ARCHIVED

  UPCOMING

}

enum ObjectStatus {

  AVAILABLE

  LIMITED

  ARCHIVED

  SOLD_OUT

}

enum EditionType {

  OPEN_EDITION

  LIMITED_DROP

  NUMBERED_EDITION

}

enum OrderPhase {

  DESIGN_LOCKED

  IN_FABRICATION

  QUALITY_CHECK

  DISPATCHED

  DELIVERED

}

enum PaymentStatus {

  PENDING

  PAID

  FAILED

  REFUNDED

}

enum ShippingStatus {

  PROCESSING

  DISPATCHED

  DELIVERED

}

enum SupportTicketStatus {

  OPEN

  IN_PROGRESS

  RESOLVED

  CLOSED

}

enum MediaKind {

  IMAGE

  VIDEO

}

enum LegalPageSlug {

  PRIVACY

  TERMS

  SHIPPING

  RETURNS

}

model User {

  id           String   @id @default(cuid())

  email        String   @unique

  passwordHash String?  @map("password_hash")

  createdAt    DateTime @default(now()) @map("created_at")

  updatedAt    DateTime @updatedAt @map("updated_at")

  profile                Profile?

  addresses              Address[]

  carts                  Cart[]

  orders                 Order[]

  payments               Payment[]

  supportTickets         SupportTicket[]

  releaseListSubscriber  ReleaseListSubscriber?

  reviews                Review[]

  @@map("users")

}

model Profile {

  id          String   @id

  collectorId String   @unique @map("collector_id")

  displayName String   @map("display_name")

  email       String

  phone       String?

  tierLabel   String?  @map("tier_label")

  joinedAt    DateTime @default(now()) @map("joined_at")

  updatedAt   DateTime @updatedAt @map("updated_at")

  user User @relation(fields: [id], references: [id], onDelete: Cascade)

  @@index([displayName])

  @@map("profiles")

}

model Address {

  id         String   @id @default(cuid())

  userId     String   @map("user_id")

  fullName   String   @map("full_name")

  email      String?

  phone      String

  line1      String

  line2      String?

  city       String

  state      String

  postalCode String   @map("postal_code")

  country    String

  isDefault  Boolean  @default(false) @map("is_default")

  createdAt  DateTime @default(now()) @map("created_at")

  updatedAt  DateTime @updatedAt @map("updated_at")

  user            User    @relation(fields: [userId], references: [id], onDelete: Cascade)

  shippingOrders  Order[] @relation("OrderShippingAddress")

  @@index([userId])

  @@index([userId, isDefault])

  @@map("addresses")

}

model Cart {

  id        String   @id @default(cuid())

  userId    String?  @map("user_id")

  sessionId String?  @map("session_id")

  currency  String   @default("INR")

  createdAt DateTime @default(now()) @map("created_at")

  updatedAt DateTime @updatedAt @map("updated_at")

  user  User?      @relation(fields: [userId], references: [id], onDelete: SetNull)

  items CartItem[]

  @@index([userId])

  @@index([sessionId])

  @@map("carts")

}

model CartItem {

  id        String   @id @default(cuid())

  cartId    String   @map("cart_id")

  objectId  String   @map("object_id")

  finishId  String?  @map("finish_id")

  sizeId    String?  @map("size_id")

  addOnIds  String[] @default([]) @map("add_on_ids")

  quantity  Int

  unitPrice Int      @map("unit_price")

  createdAt DateTime @default(now()) @map("created_at")

  updatedAt DateTime @updatedAt @map("updated_at")

  cart   Cart           @relation(fields: [cartId], references: [id], onDelete: Cascade)

  object CatalogObject  @relation(fields: [objectId], references: [id], onDelete: Restrict)

  finish ObjectFinish?  @relation(fields: [finishId], references: [id], onDelete: SetNull)

  size   ObjectSize?    @relation(fields: [sizeId], references: [id], onDelete: SetNull)

  @@index([cartId])

  @@index([objectId])

  @@map("cart_items")

}

model Order {

  id                String         @id @default(cuid())

  userId            String         @map("user_id")

  code              String         @unique

  phase             OrderPhase

  paymentStatus     PaymentStatus  @map("payment_status")

  shippingStatus    ShippingStatus @map("shipping_status")

  subtotal          Int

  shippingFee       Int            @map("shipping_fee")

  discount          Int            @default(0)

  total             Int

  etaLabel          String         @map("eta_label")

  shippingAddressId String         @map("shipping_address_id")

  createdAt         DateTime       @default(now()) @map("created_at")

  updatedAt         DateTime       @updatedAt @map("updated_at")

  user            User         @relation(fields: [userId], references: [id], onDelete: Restrict)

  shippingAddress Address      @relation("OrderShippingAddress", fields: [shippingAddressId], references: [id], onDelete: Restrict)

  items           OrderItem[]

  events          OrderEvent[]

  payments        Payment[]

  supportTickets  SupportTicket[]

  reviews         Review[]

  @@index([userId])

  @@index([phase])

  @@index([shippingStatus])

  @@index([paymentStatus])

  @@index([createdAt])

  @@map("orders")

}

model OrderItem {

  id                       String   @id @default(cuid())

  orderId                  String   @map("order_id")

  objectId                 String?  @map("object_id")

  objectSlug               String   @map("object_slug")

  code                     String

  name                     String

  type                     String

  finishLabel              String   @map("finish_label")

  editionLabel             String   @map("edition_label")

  quantity                 Int

  unitPrice                Int      @map("unit_price")

  thumbnailSrc             String?  @map("thumbnail_src")

  thumbnailAlt             String?  @map("thumbnail_alt")

  thumbnailPlaceholderLabel String? @map("thumbnail_placeholder_label")

  createdAt                DateTime @default(now()) @map("created_at")

  order  Order          @relation(fields: [orderId], references: [id], onDelete: Cascade)

  object CatalogObject? @relation(fields: [objectId], references: [id], onDelete: SetNull)

  @@index([orderId])

  @@index([objectId])

  @@map("order_items")

}

model OrderEvent {

  id             String   @id @default(cuid())

  orderId        String   @map("order_id")

  phase          OrderPhase?

  title          String

  description    String?

  timestampLabel String   @map("timestamp_label")

  createdAt      DateTime @default(now()) @map("created_at")

  order Order @relation(fields: [orderId], references: [id], onDelete: Cascade)

  @@index([orderId])

  @@index([createdAt])

  @@map("order_events")

}

model Payment {

  id                String        @id @default(cuid())

  orderId           String        @map("order_id")

  userId            String?       @map("user_id")

  provider          String

  providerPaymentId String?       @map("provider_payment_id")

  amount            Int

  currency          String        @default("INR")

  status            PaymentStatus

  createdAt         DateTime      @default(now()) @map("created_at")

  updatedAt         DateTime      @updatedAt @map("updated_at")

  order Order @relation(fields: [orderId], references: [id], onDelete: Cascade)

  user  User? @relation(fields: [userId], references: [id], onDelete: SetNull)

  @@index([orderId])

  @@index([userId])

  @@index([status])

  @@map("payments")

}

model ReleaseListSubscriber {

  id        String   @id @default(cuid())

  email     String   @unique

  phone     String?

  userId    String?  @unique @map("user_id")

  source    String?

  isActive  Boolean  @default(true) @map("is_active")

  createdAt DateTime @default(now()) @map("created_at")

  user User? @relation(fields: [userId], references: [id], onDelete: SetNull)

  @@index([isActive])

  @@map("release_list_subscribers")

}

model SupportTicket {

  id        String              @id @default(cuid())

  userId    String?             @map("user_id")

  orderId   String?             @map("order_id")

  email     String

  subject   String

  message   String

  status    SupportTicketStatus @default(OPEN)

  createdAt DateTime            @default(now()) @map("created_at")

  updatedAt DateTime            @updatedAt @map("updated_at")

  user  User?  @relation(fields: [userId], references: [id], onDelete: SetNull)

  order Order? @relation(fields: [orderId], references: [id], onDelete: SetNull)

  @@index([userId])

  @@index([orderId])

  @@index([status])

  @@map("support_tickets")

}

model Review {

  id         String   @id @default(cuid())

  userId     String?  @map("user_id")

  objectId   String   @map("object_id")

  orderId    String?  @map("order_id")

  name       String

  city       String?

  rating     Int

  title      String?

  text       String

  isApproved Boolean  @default(false) @map("is_approved")

  createdAt  DateTime @default(now()) @map("created_at")

  user   User?         @relation(fields: [userId], references: [id], onDelete: SetNull)

  object CatalogObject @relation(fields: [objectId], references: [id], onDelete: Cascade)

  order  Order?        @relation(fields: [orderId], references: [id], onDelete: SetNull)

  @@index([objectId])

  @@index([orderId])

  @@index([isApproved])

  @@map("reviews")

}

/*

  CMS / catalog layer

*/

model SiteSettings {

  id            String @id @default(cuid())

  brandName     String @map("brand_name")

  tagline       String

  primaryAccent String @map("primary_accent")

  supportEmail  String @map("support_email")

  contactEmail  String @map("contact_email")

  navigationLinks Json @map("navigation_links")

  footerLinks     Json @map("footer_links")

  socialLinks     Json @map("social_links")

  createdAt DateTime @default(now()) @map("created_at")

  updatedAt DateTime @updatedAt @map("updated_at")

  @@map("site_settings")

}

model HomePage {

  id String @id @default(cuid())

  heroBadge             String @map("hero_badge")

  heroTitle             String @map("hero_title")

  heroSubtitle          String @map("hero_subtitle")

  heroPrimaryCtaLabel   String @map("hero_primary_cta_label")

  heroPrimaryCtaHref    String @map("hero_primary_cta_href")

  heroSecondaryCtaLabel String? @map("hero_secondary_cta_label")

  heroSecondaryCtaHref  String? @map("hero_secondary_cta_href")

  heroStats             Json   @map("hero_stats")

  heroMediaId           String? @map("hero_media_id")

  currentDropSectionLabel String  @map("current_drop_section_label")

  currentDropTitle        String  @map("current_drop_title")

  currentDropSubtitle     String  @map("current_drop_subtitle")

  currentDropCtaLabel     String? @map("current_drop_cta_label")

  currentDropCtaHref      String? @map("current_drop_cta_href")

  currentDropCollectionId String? @map("current_drop_collection_id")

  philosophySectionLabel  String @map("philosophy_section_label")

  philosophyTitle         String @map("philosophy_title")

  philosophyBody          String @db.Text @map("philosophy_body")

  philosophyManifestoLines Json  @map("philosophy_manifesto_lines")

  philosophySpecCards     Json   @map("philosophy_spec_cards")

  philosophyMediaId       String? @map("philosophy_media_id")

  featuredObjectSectionLabel String @map("featured_object_section_label")

  featuredObjectTitle        String @map("featured_object_title")

  featuredObjectBody         String @db.Text @map("featured_object_body")

  featuredObjectId           String? @map("featured_object_id")

  featuredObjectSpecs        Json   @map("featured_object_specs")

  featuredPrimaryCtaLabel    String @map("featured_primary_cta_label")

  featuredPrimaryCtaHref     String @map("featured_primary_cta_href")

  featuredSecondaryCtaLabel  String? @map("featured_secondary_cta_label")

  featuredSecondaryCtaHref   String? @map("featured_secondary_cta_href")

  featuredMediaId            String? @map("featured_media_id")

  archiveTeaserSectionLabel String @map("archive_teaser_section_label")

  archiveTeaserTitle        String @map("archive_teaser_title")

  archiveTeaserSubtitle     String @map("archive_teaser_subtitle")

  archiveReleaseIds         String[] @default([]) @map("archive_release_ids")

  finalCtaSectionLabel   String  @map("final_cta_section_label")

  finalCtaTitle          String  @map("final_cta_title")

  finalCtaSubtitle       String  @db.Text @map("final_cta_subtitle")

  finalCtaPrimaryLabel   String  @map("final_cta_primary_label")

  finalCtaPrimaryHref    String  @map("final_cta_primary_href")

  finalCtaSecondaryLabel String? @map("final_cta_secondary_label")

  finalCtaSecondaryHref  String? @map("final_cta_secondary_href")

  seoTitle       String? @map("seo_title")

  seoDescription String? @db.Text @map("seo_description")

  heroMedia        MediaAsset?    @relation("HomeHeroMedia", fields: [heroMediaId], references: [id], onDelete: SetNull)

  philosophyMedia  MediaAsset?    @relation("HomePhilosophyMedia", fields: [philosophyMediaId], references: [id], onDelete: SetNull)

  featuredMedia    MediaAsset?    @relation("HomeFeaturedMedia", fields: [featuredMediaId], references: [id], onDelete: SetNull)

  currentDropCollection Collection? @relation("HomeCurrentDropCollection", fields: [currentDropCollectionId], references: [id], onDelete: SetNull)

  featuredObject     CatalogObject? @relation("HomeFeaturedObject", fields: [featuredObjectId], references: [id], onDelete: SetNull)

  createdAt DateTime @default(now()) @map("created_at")

  updatedAt DateTime @updatedAt @map("updated_at")

  @@map("home_page")

}

model Collection {

  id          String           @id @default(cuid())

  slug        String           @unique

  code        String

  title       String

  subtitle    String           @db.Text

  status      CollectionStatus

  heroMediaId String?          @map("hero_media_id")

  releaseNote String?          @db.Text @map("release_note")

  introTitle  String?          @map("intro_title")

  introBody   String?          @db.Text @map("intro_body")

  availableCategories String[] @default([]) @map("available_categories")

  availableFinishes   String[] @default([]) @map("available_finishes")

  releaseNotes Json?           @map("release_notes")

  sortOrder    Int             @default(0) @map("sort_order")

  releasedAt   DateTime?       @map("released_at")

  archivedAt   DateTime?       @map("archived_at")

  seoTitle     String?         @map("seo_title")

  seoDescription String?       @db.Text @map("seo_description")

  createdAt    DateTime        @default(now()) @map("created_at")

  updatedAt    DateTime        @updatedAt @map("updated_at")

  heroMedia MediaAsset?     @relation("CollectionHeroMedia", fields: [heroMediaId], references: [id], onDelete: SetNull)

  objects   CatalogObject[]

  @@index([status])

  @@index([sortOrder])

  @@map("collections")

}

model CatalogObject {

  id            String       @id @default(cuid())

  slug          String       @unique

  code          String

  name          String

  subtitle      String       @db.Text

  description   String?      @db.Text

  category      String

  type          String

  collectionId  String?      @map("collection_id")

  editionType   EditionType  @map("edition_type")

  editionLabel  String       @map("edition_label")

  status        ObjectStatus

  basePrice     Int          @map("base_price")

  compareAtPrice Int?        @map("compare_at_price")

  material      String

  dimensions    String

  dispatchWindow String      @map("dispatch_window")

  stockNote     String?      @db.Text @map("stock_note")

  defaultFinishLabel String  @map("default_finish_label")

  defaultThumbnailId String? @map("default_thumbnail_id")

  specs         Json

  features      String[]

  environmentMediaIds String[] @default([]) @map("environment_media_ids")

  isFeatured    Boolean      @default(false) @map("is_featured")

  sortOrder     Int          @default(0) @map("sort_order")

  seoTitle      String?      @map("seo_title")

  seoDescription String?     @db.Text @map("seo_description")

  createdAt     DateTime     @default(now()) @map("created_at")

  updatedAt     DateTime     @updatedAt @map("updated_at")

  collection        Collection?     @relation(fields: [collectionId], references: [id], onDelete: SetNull)

  defaultThumbnail  MediaAsset?     @relation("ObjectDefaultThumbnail", fields: [defaultThumbnailId], references: [id], onDelete: SetNull)

  media             ObjectMedia[]

  finishes          ObjectFinish[]

  sizes             ObjectSize[]

  addOns            ObjectAddOn[]

  faqs              ObjectFaq[]

  reviews           Review[]

  cartItems         CartItem[]

  orderItems        OrderItem[]

  relatedFrom       ObjectRelation[] @relation("ObjectRelationSource")

  relatedTo         ObjectRelation[] @relation("ObjectRelationTarget")

  @@index([collectionId])

  @@index([status])

  @@index([category])

  @@index([isFeatured])

  @@index([sortOrder])

  @@map("objects")

}

model ObjectMedia {

  id        String    @id @default(cuid())

  objectId  String    @map("object_id")

  mediaId   String    @map("media_id")

  sortOrder Int       @default(0) @map("sort_order")

  createdAt DateTime  @default(now()) @map("created_at")

  object CatalogObject @relation(fields: [objectId], references: [id], onDelete: Cascade)

  media  MediaAsset    @relation(fields: [mediaId], references: [id], onDelete: Cascade)

  @@unique([objectId, mediaId])

  @@index([objectId, sortOrder])

  @@map("object_media")

}

model ObjectFinish {

  id         String   @id @default(cuid())

  objectId   String   @map("object_id")

  label      String

  swatch     String?

  priceDelta Int      @default(0) @map("price_delta")

  note       String?

  isDefault  Boolean  @default(false) @map("is_default")

  createdAt  DateTime @default(now()) @map("created_at")

  object CatalogObject @relation(fields: [objectId], references: [id], onDelete: Cascade)

  cartItems CartItem[]

  @@index([objectId])

  @@map("object_finishes")

}

model ObjectSize {

  id              String   @id @default(cuid())

  objectId        String   @map("object_id")

  label           String

  dimensionsLabel String   @map("dimensions_label")

  priceDelta      Int      @default(0) @map("price_delta")

  note            String?

  isDefault       Boolean  @default(false) @map("is_default")

  createdAt       DateTime @default(now()) @map("created_at")

  object CatalogObject @relation(fields: [objectId], references: [id], onDelete: Cascade)

  cartItems CartItem[]

  @@index([objectId])

  @@map("object_sizes")

}

model ObjectAddOn {

  id        String   @id @default(cuid())

  objectId  String   @map("object_id")

  label     String

  price     Int

  note      String?

  isDefault Boolean  @default(false) @map("is_default")

  createdAt DateTime @default(now()) @map("created_at")

  object CatalogObject @relation(fields: [objectId], references: [id], onDelete: Cascade)

  @@index([objectId])

  @@map("object_add_ons")

}

model ObjectFaq {

  id        String   @id @default(cuid())

  objectId  String   @map("object_id")

  question  String

  answer    String   @db.Text

  sortOrder Int      @default(0) @map("sort_order")

  createdAt DateTime @default(now()) @map("created_at")

  object CatalogObject @relation(fields: [objectId], references: [id], onDelete: Cascade)

  @@index([objectId, sortOrder])

  @@map("object_faqs")

}

model ObjectRelation {

  id             String   @id @default(cuid())

  sourceObjectId String   @map("source_object_id")

  targetObjectId String   @map("target_object_id")

  sortOrder      Int      @default(0) @map("sort_order")

  createdAt      DateTime @default(now()) @map("created_at")

  source CatalogObject @relation("ObjectRelationSource", fields: [sourceObjectId], references: [id], onDelete: Cascade)

  target CatalogObject @relation("ObjectRelationTarget", fields: [targetObjectId], references: [id], onDelete: Cascade)

  @@unique([sourceObjectId, targetObjectId])

  @@index([sourceObjectId, sortOrder])

  @@map("object_relations")

}

model MediaAsset {

  id               String    @id @default(cuid())

  kind             MediaKind

  src              String?

  alt              String

  placeholderLabel String?   @map("placeholder_label")

  width            Int?

  height           Int?

  mimeType         String?   @map("mime_type")

  createdAt        DateTime  @default(now()) @map("created_at")

  updatedAt        DateTime  @updatedAt @map("updated_at")

  objectMedia            ObjectMedia[]

  homeHeroPages          HomePage[]   @relation("HomeHeroMedia")

  homePhilosophyPages    HomePage[]   @relation("HomePhilosophyMedia")

  homeFeaturedPages      HomePage[]   @relation("HomeFeaturedMedia")

  collectionHeroPages    Collection[] @relation("CollectionHeroMedia")

  objectThumbnailPages   CatalogObject[] @relation("ObjectDefaultThumbnail")

  journalHeroArticles    JournalArticle[]

  systemPageHero         SystemPage[]

  genericPageSections    GenericPageSection[]

  @@map("media_assets")

}

model JournalArticle {

  id              String   @id @default(cuid())

  slug            String   @unique

  title           String

  excerpt         String   @db.Text

  category        String

  publishedAt     DateTime @map("published_at")

  heroMediaId     String?  @map("hero_media_id")

  bodyHtml        String   @db.Text @map("body_html")

  seoTitle        String?  @map("seo_title")

  seoDescription  String?  @db.Text @map("seo_description")

  createdAt       DateTime @default(now()) @map("created_at")

  updatedAt       DateTime @updatedAt @map("updated_at")

  heroMedia MediaAsset? @relation(fields: [heroMediaId], references: [id], onDelete: SetNull)

  relatedFrom JournalArticleRelation[] @relation("JournalRelationSource")

  relatedTo   JournalArticleRelation[] @relation("JournalRelationTarget")

  @@index([publishedAt])

  @@map("journal_articles")

}

model JournalArticleRelation {

  id              String   @id @default(cuid())

  sourceArticleId String   @map("source_article_id")

  targetArticleId String   @map("target_article_id")

  sortOrder       Int      @default(0) @map("sort_order")

  source JournalArticle @relation("JournalRelationSource", fields: [sourceArticleId], references: [id], onDelete: Cascade)

  target JournalArticle @relation("JournalRelationTarget", fields: [targetArticleId], references: [id], onDelete: Cascade)

  @@unique([sourceArticleId, targetArticleId])

  @@index([sourceArticleId, sortOrder])

  @@map("journal_article_relations")

}

model SystemPage {

  id String @id @default(cuid())

  heroTitle    String @map("hero_title")

  heroSubtitle String @db.Text @map("hero_subtitle")

  heroBadge    String? @map("hero_badge")

  heroMediaId  String? @map("hero_media_id")

  manifestoSectionLabel String @map("manifesto_section_label")

  manifestoTitle        String @map("manifesto_title")

  manifestoBody         String @db.Text @map("manifesto_body")

  manifestoLines        String[] @default([]) @map("manifesto_lines")

  fabricationSectionLabel String @map("fabrication_section_label")

  fabricationTitle        String @map("fabrication_title")

  fabricationBody         String @db.Text @map("fabrication_body")

  fabricationVisualIds    String[] @default([]) @map("fabrication_visual_ids")

  fabricationSpecs        Json @map("fabrication_specs")

  materialsSectionLabel String @map("materials_section_label")

  materialsTitle        String @map("materials_title")

  materialsBody         String @db.Text @map("materials_body")

  materialItems         Json @map("material_items")

  packagingSectionLabel String @map("packaging_section_label")

  packagingTitle        String @map("packaging_title")

  packagingBody         String @db.Text @map("packaging_body")

  packagingItems        Json @map("packaging_items")

  finalCtaTitle    String @map("final_cta_title")

  finalCtaSubtitle String @db.Text @map("final_cta_subtitle")

  finalCtaLabel    String @map("final_cta_label")

  finalCtaHref     String @map("final_cta_href")

  seoTitle       String? @map("seo_title")

  seoDescription String? @db.Text @map("seo_description")

  heroMedia MediaAsset? @relation(fields: [heroMediaId], references: [id], onDelete: SetNull)

  createdAt DateTime @default(now()) @map("created_at")

  updatedAt DateTime @updatedAt @map("updated_at")

  @@map("system_page")

}

model GenericPage {

  id             String   @id @default(cuid())

  slug           String   @unique

  title          String

  subtitle       String?  @db.Text

  submitLabel    String?  @map("submit_label")

  seoTitle       String?  @map("seo_title")

  seoDescription String?  @db.Text @map("seo_description")

  createdAt      DateTime @default(now()) @map("created_at")

  updatedAt      DateTime @updatedAt @map("updated_at")

  sections GenericPageSection[]

  @@map("generic_pages")

}

/*

  Use GenericPage for:

  - about

  - support

  - contact

  - release-list

*/

model GenericPageSection {

  id          String   @id @default(cuid())

  pageId      String   @map("page_id")

  kind        String

  heading     String?

  bodyHtml    String?  @db.Text @map("body_html")

  jsonContent Json?    @map("json_content")

  mediaId     String?  @map("media_id")

  sortOrder   Int      @default(0) @map("sort_order")

  page  GenericPage @relation(fields: [pageId], references: [id], onDelete: Cascade)

  media MediaAsset? @relation(fields: [mediaId], references: [id], onDelete: SetNull)

  @@index([pageId, sortOrder])

  @@map("generic_page_sections")

}

model LegalPage {

  id             String        @id @default(cuid())

  slug           LegalPageSlug @unique

  title          String

  subtitle       String?       @db.Text

  sidebarItems   Json          @map("sidebar_items")

  seoTitle       String?       @map("seo_title")

  seoDescription String?       @db.Text @map("seo_description")

  createdAt      DateTime      @default(now()) @map("created_at")

  updatedAt      DateTime      @updatedAt @map("updated_at")

  sections LegalPageSection[]

  @@map("legal_pages")

}

model LegalPageSection {

  id        String   @id @default(cuid())

  pageId    String   @map("page_id")

  heading   String

  bodyHtml  String   @db.Text @map("body_html")

  sortOrder Int      @default(0) @map("sort_order")

  page LegalPage @relation(fields: [pageId], references: [id], onDelete: Cascade)

  @@index([pageId, sortOrder])

  @@map("legal_page_sections")

}

Notes engineering should follow

1. CatalogObject is named that way to avoid confusion with JS/TS Object

That will save you pain.

2. Use mapper functions between Prisma rows and frontend page schemas

Do not pass Prisma objects directly into React sections.

Recommended mapper files:

Plain text

lib/mappers/

  home.ts

  collection.ts

  object.ts

  archive.ts

  journal.ts

  cart.ts

  checkout.ts

  account.ts

  legal.ts

3. GenericPage is a pragmatic shortcut

It covers:

about

support

contact

release-list

If you want stricter CMS structure later, split them into dedicated models.

4. JSON fields are used where flexibility is useful

That is deliberate for:

nav links

stats

support topic groups

manifesto/spec arrays

page block payloads

It keeps V1 fast without creating 40 tiny tables.

5. Order items snapshot product data

That is critical.

Never rely only on live joins to products for order history.

Recommended immediate next commands

After saving this as prisma/schema.prisma:

Bash

npx prisma format

npx prisma validate

npx prisma migrate dev --name init_voidlab

npx prisma generate

Suggested next backend files

Build these right after schema migration:

Plain text

lib/db.ts

lib/mappers/object.ts

lib/mappers/collection.ts

lib/mappers/order.ts

lib/mappers/account.ts

lib/queries/objects.ts

lib/queries/collections.ts

lib/queries/orders.ts

lib/queries/account.ts
--- END OF Prisma schema draft for Postgres.docx ---
--- START OF Prisma_Postgres schema .docx ---

--- END OF Prisma_Postgres schema .docx ---
--- START OF Product Page React + Tailwind code.docx ---
'use client';

import React, { useMemo, useState } from 'react';

type VariantOption = {

  label: string;

  price: number;

  note?: string;

};

type Review = {

  name: string;

  city: string;

  text: string;

  product: string;

};

const PRODUCT = {

  title: 'Custom Mini You Figurine',

  subtitle:

    'Made from your photo. Printed in-house. Gift-ready and built to be displayed.',

  basePrice: 1499,

  compareAtPrice: 2199,

  rating: 4.8,

  reviewCount: 1284,

  badge: 'Free premium gift box on orders above ₹999',

  weeklySlotsLeft: 34,

  gallery: [

    'Hero Product Image',

    'Close-up Detail Shot',

    'Packaging Shot',

    'Scale in Hand Shot',

    'Before / After Shot',

  ],

  sizes: [

    { label: 'Small', price: 999, note: 'Best for budget gifts' },

    { label: 'Medium', price: 1499, note: 'Most popular' },

    { label: 'Large', price: 2199, note: 'Premium display piece' },

  ] as VariantOption[],

  finishes: [

    { label: 'Matte', price: 0 },

    { label: 'Premium Gloss', price: 199 },

  ] as VariantOption[],

  styles: [

    { label: 'Cute', price: 0 },

    { label: 'Realistic', price: 149 },

    { label: 'Cartoon', price: 99 },

  ] as VariantOption[],

  bases: [

    { label: 'Standard Base', price: 0 },

    { label: 'Name Base', price: 149 },

    { label: 'LED Base', price: 299 },

  ] as VariantOption[],

  combos: [

    {

      id: 'solo',

      name: 'Solo',

      price: 1499,

      badge: '',

      items: ['1 figurine', 'Standard base', 'Protective packaging'],

    },

    {

      id: 'gift',

      name: 'Gift Combo',

      price: 1999,

      badge: 'Most Popular',

      items: ['1 figurine', 'Name base', 'Premium gift box', 'Greeting card'],

    },

    {

      id: 'premium',

      name: 'Premium Combo',

      price: 2499,

      badge: 'Best Value',

      items: [

        '1 figurine',

        'LED base',

        'Premium gift box',

        'Gift wrap',

        'Priority crafting',

      ],

    },

  ],

  testimonialStrip: [

    'Looked exactly like the photo. Gift box made it feel premium.',

    'The detailing was far better than expected.',

    'Perfect anniversary gift. Fast delivery too.',

  ],

  reviews: [

    {

      name: 'Aditi',

      city: 'Delhi',

      text: 'Looked exactly like the photo and the gift box made it feel premium.',

      product: 'Gift Combo',

    },

    {

      name: 'Rohan',

      city: 'Mumbai',

      text: 'The face details were surprisingly accurate. This is not a gimmick product.',

      product: 'Medium + Name Base',

    },

    {

      name: 'Sneha',

      city: 'Bengaluru',

      text: 'Bought this for my boyfriend and he kept it on his desk instantly.',

      product: 'Premium Combo',

    },

    {

      name: 'Karan',

      city: 'Pune',

      text: 'Process was smooth, upload was easy, and support helped with my image.',

      product: 'Small + Standard Base',

    },

  ] as Review[],

  faqs: [

    {

      q: 'What kind of photo should I upload?',

      a: 'Upload a clear front-facing photo with good lighting for the best result.',

    },

    {

      q: 'How long does production take?',

      a: 'Most orders are crafted in 3–5 days, then delivered in 2–5 days across India.',

    },

    {

      q: 'Will it look exactly like my photo?',

      a: 'It will be a stylized 3D interpretation based on the style you choose. We aim for strong resemblance, not a literal scan.',

    },

    {

      q: 'Can I add a custom name or message?',

      a: 'Yes. You can add names or a short custom message during customization.',

    },

    {

      q: 'Is it suitable for gifting?',

      a: 'Yes. Our combo options are specifically designed for gifting and premium presentation.',

    },

    {

      q: 'What if my uploaded photo is unclear?',

      a: 'Our team reviews every image before production and may contact you if a better photo is needed.',

    },

  ],

  related: [

    { name: 'Premium Gift Box', price: 249 },

    { name: 'Custom Greeting Card', price: 99 },

    { name: 'Extra LED Base', price: 299 },

    { name: 'Couple Upgrade', price: 899 },

  ],

  ugcPlaceholders: [

    'Customer Gift Reveal',

    'Desk Setup Photo',

    'Unboxing Shot',

  ],

};

function classNames(...items: Array<string | false | null | undefined>) {

  return items.filter(Boolean).join(' ');

}

function PriceDisplay({

  current,

  compareAt,

}: {

  current: number;

  compareAt?: number;

}) {

  const savings = compareAt ? compareAt - current : 0;

  return (

    <div className="space-y-1">

      <div className="flex items-end gap-3">

        <span className="text-3xl font-bold tracking-tight text-neutral-950">

          ₹{current.toLocaleString('en-IN')}

        </span>

        {compareAt ? (

          <span className="text-lg text-neutral-400 line-through">

            ₹{compareAt.toLocaleString('en-IN')}

          </span>

        ) : null}

      </div>

      {compareAt ? (

        <p className="text-sm font-medium text-emerald-700">

          You save ₹{savings.toLocaleString('en-IN')}

        </p>

      ) : null}

    </div>

  );

}

function VariantGroup({

  label,

  options,

  value,

  onChange,

}: {

  label: string;

  options: VariantOption[];

  value: string;

  onChange: (label: string) => void;

}) {

  return (

    <div className="space-y-3">

      <div className="flex items-center justify-between">

        <h3 className="text-sm font-semibold text-neutral-900">{label}</h3>

        <span className="text-xs text-neutral-500">

          {options.find((o) => o.label === value)?.label}

        </span>

      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">

        {options.map((option) => (

          <button

            key={option.label}

            type="button"

            onClick={() => onChange(option.label)}

            className={classNames(

              'rounded-2xl border p-3 text-left transition',

              value === option.label

                ? 'border-neutral-950 bg-neutral-950 text-white shadow-lg'

                : 'border-neutral-200 bg-white text-neutral-900 hover:border-neutral-400'

            )}

          >

            <div className="text-sm font-semibold">{option.label}</div>

            <div

              className={classNames(

                'mt-1 text-xs',

                value === option.label ? 'text-neutral-200' : 'text-neutral-500'

              )}

            >

              {option.price === 0 ? 'Included' : `+₹${option.price}`}

            </div>

            {option.note ? (

              <div

                className={classNames(

                  'mt-2 text-[11px]',

                  value === option.label ? 'text-neutral-300' : 'text-neutral-500'

                )}

              >

                {option.note}

              </div>

            ) : null}

          </button>

        ))}

      </div>

    </div>

  );

}

function Accordion({

  q,

  a,

  defaultOpen = false,

}: {

  q: string;

  a: string;

  defaultOpen?: boolean;

}) {

  const [open, setOpen] = useState(defaultOpen);

  return (

    <div className="rounded-2xl border border-neutral-200 bg-white">

      <button

        type="button"

        onClick={() => setOpen((v) => !v)}

        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"

      >

        <span className="text-sm font-semibold text-neutral-900">{q}</span>

        <span className="text-lg text-neutral-500">{open ? '−' : '+'}</span>

      </button>

      {open ? (

        <div className="px-5 pb-4 text-sm leading-6 text-neutral-600">{a}</div>

      ) : null}

    </div>

  );

}

function ImagePlaceholder({

  label,

  className = '',

  compact = false,

}: {

  label: string;

  className?: string;

  compact?: boolean;

}) {

  return (

    <div

      className={classNames(

        'relative flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-neutral-300 bg-gradient-to-br from-neutral-100 to-neutral-200 text-center',

        compact ? 'h-20' : 'h-[420px] sm:h-[560px]',

        className

      )}

    >

      <div className="absolute inset-0 opacity-40">

        <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.55)_50%,rgba(255,255,255,0.55)_75%,transparent_75%,transparent)] bg-[length:32px_32px]" />

      </div>

      <div className="relative z-10 px-4">

        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-400 bg-white/70 text-neutral-700">

          🖼

        </div>

        <div className="text-sm font-semibold text-neutral-700">{label}</div>

        <div className="mt-1 text-xs text-neutral-500">Replace with your image</div>

      </div>

    </div>

  );

}

export default function ProductPage() {

  const [activeImage, setActiveImage] = useState(0);

  const [size, setSize] = useState('Medium');

  const [finish, setFinish] = useState('Matte');

  const [style, setStyle] = useState('Cute');

  const [base, setBase] = useState('Name Base');

  const [combo, setCombo] = useState('gift');

  const [customName, setCustomName] = useState('');

  const [occasion, setOccasion] = useState('Birthday');

  const [notes, setNotes] = useState('');

  const [quantity, setQuantity] = useState(1);

  const sizePrice = PRODUCT.sizes.find((v) => v.label === size)?.price ?? PRODUCT.basePrice;

  const finishPrice = PRODUCT.finishes.find((v) => v.label === finish)?.price ?? 0;

  const stylePrice = PRODUCT.styles.find((v) => v.label === style)?.price ?? 0;

  const basePrice = PRODUCT.bases.find((v) => v.label === base)?.price ?? 0;

  const comboData = PRODUCT.combos.find((c) => c.id === combo);

  const calculatedPrice = useMemo(() => {

    const customized = sizePrice + finishPrice + stylePrice + basePrice;

    const comboFloor = comboData?.price ?? customized;

    const unitPrice = Math.max(customized, comboFloor);

    return unitPrice * quantity;

  }, [sizePrice, finishPrice, stylePrice, basePrice, comboData, quantity]);

  return (

    <div className="min-h-screen bg-neutral-50 text-neutral-900">

      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          <div className="text-lg font-bold tracking-tight">ToyForge</div>

          <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">

            <a href="#" className="hover:text-neutral-950">

              Shop

            </a>

            <a href="#" className="hover:text-neutral-950">

              Gift Combos

            </a>

            <a href="#" className="hover:text-neutral-950">

              Reviews

            </a>

            <a href="#" className="hover:text-neutral-950">

              FAQ

            </a>

          </nav>

          <button className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white">

            Cart (0)

          </button>

        </div>

      </header>

      <main className="mx-auto max-w-7xl px-4 pb-28 pt-6 sm:px-6 lg:px-8">

        <div className="mb-6 text-sm text-neutral-500">

          Home / Figurines / <span className="text-neutral-900">{PRODUCT.title}</span>

        </div>

        <section className="grid gap-8 lg:grid-cols-2">

          <div className="space-y-4">

            <ImagePlaceholder label={PRODUCT.gallery[activeImage]} />

            <div className="grid grid-cols-5 gap-3">

              {PRODUCT.gallery.map((label, index) => (

                <button

                  key={label}

                  type="button"

                  onClick={() => setActiveImage(index)}

                  className={classNames(

                    'overflow-hidden rounded-2xl border bg-white',

                    activeImage === index

                      ? 'border-neutral-950 ring-2 ring-neutral-950'

                      : 'border-neutral-200'

                  )}

                >

                  <ImagePlaceholder label={label} compact />

                </button>

              ))}

            </div>

            <div className="grid gap-3 sm:grid-cols-3">

              {[

                'Close-up detailing',

                'Gift-ready packaging',

                'Size shown in hand',

              ].map((item) => (

                <div

                  key={item}

                  className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-600"

                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          <div className="space-y-6">

            <div className="space-y-3">

              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">

                Bestseller

              </span>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">

                {PRODUCT.title}

              </h1>

              <p className="max-w-xl text-base leading-7 text-neutral-600">

                {PRODUCT.subtitle}

              </p>

              <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">

                <span className="font-semibold text-neutral-950">

                  {PRODUCT.rating} ★

                </span>

                <span>{PRODUCT.reviewCount.toLocaleString('en-IN')} reviews</span>

                <span>In-house crafted</span>

                <span>Pan-India delivery</span>

              </div>

              <PriceDisplay current={calculatedPrice} compareAt={PRODUCT.compareAtPrice} />

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">

                {PRODUCT.badge}

              </div>

            </div>

            <div className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">

              <VariantGroup

                label="Choose Size"

                options={PRODUCT.sizes}

                value={size}

                onChange={setSize}

              />

              <VariantGroup

                label="Choose Finish"

                options={PRODUCT.finishes}

                value={finish}

                onChange={setFinish}

              />

              <VariantGroup

                label="Choose Style"

                options={PRODUCT.styles}

                value={style}

                onChange={setStyle}

              />

              <VariantGroup

                label="Choose Base"

                options={PRODUCT.bases}

                value={base}

                onChange={setBase}

              />

              <div className="space-y-4 border-t border-neutral-200 pt-6">

                <div>

                  <h3 className="text-base font-semibold text-neutral-950">

                    Make It Yours

                  </h3>

                  <p className="mt-1 text-sm text-neutral-600">

                    Keep customization simple and fast. We review every order before production.

                  </p>

                </div>

                <div className="space-y-2">

                  <label className="text-sm font-semibold text-neutral-900">

                    Upload Photo

                  </label>

                  <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-8 text-center hover:border-neutral-500">

                    <span className="text-sm font-semibold text-neutral-900">

                      Tap to upload your photo

                    </span>

                    <span className="mt-1 text-xs text-neutral-500">

                      JPG, PNG supported • Best results with a clear front photo

                    </span>

                    <input type="file" accept="image/*" className="hidden" />

                  </label>

                  <p className="text-xs text-neutral-500">

                    Our team reviews every image before production.

                  </p>

                </div>

                <div className="grid gap-4 sm:grid-cols-2">

                  <div className="space-y-2">

                    <label className="text-sm font-semibold text-neutral-900">

                      Custom Name or Message

                    </label>

                    <input

                      value={customName}

                      onChange={(e) => setCustomName(e.target.value)}

                      placeholder="Example: Rahul"

                      className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-950"

                    />

                  </div>

                  <div className="space-y-2">

                    <label className="text-sm font-semibold text-neutral-900">

                      Occasion

                    </label>

                    <select

                      value={occasion}

                      onChange={(e) => setOccasion(e.target.value)}

                      className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-950"

                    >

                      <option>Birthday</option>

                      <option>Anniversary</option>

                      <option>Couple Gift</option>

                      <option>Desk Decor</option>

                      <option>Pet Tribute</option>

                      <option>Just for Fun</option>

                    </select>

                  </div>

                </div>

                <div className="space-y-2">

                  <label className="text-sm font-semibold text-neutral-900">

                    Special Notes

                  </label>

                  <textarea

                    value={notes}

                    onChange={(e) => setNotes(e.target.value)}

                    rows={4}

                    placeholder="Pose vibe, hairstyle, clothing color, deadline notes..."

                    className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-950"

                  />

                </div>

                <div className="grid gap-4 sm:grid-cols-[1fr_140px]">

                  <div className="space-y-2">

                    <label className="text-sm font-semibold text-neutral-900">

                      Quantity

                    </label>

                    <div className="flex items-center rounded-2xl border border-neutral-300 bg-white">

                      <button

                        type="button"

                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}

                        className="px-4 py-3 text-lg text-neutral-700"

                      >

                        −

                      </button>

                      <div className="flex-1 text-center text-sm font-semibold">

                        {quantity}

                      </div>

                      <button

                        type="button"

                        onClick={() => setQuantity((q) => q + 1)}

                        className="px-4 py-3 text-lg text-neutral-700"

                      >

                        +

                      </button>

                    </div>

                  </div>

                  <div className="space-y-2">

                    <label className="text-sm font-semibold text-neutral-900">

                      Total

                    </label>

                    <div className="rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm font-bold text-neutral-950">

                      ₹{calculatedPrice.toLocaleString('en-IN')}

                    </div>

                  </div>

                </div>

              </div>

              <div className="space-y-4 border-t border-neutral-200 pt-6">

                <div>

                  <h3 className="text-base font-semibold text-neutral-950">

                    Upgrade to a Gift Combo

                  </h3>

                  <p className="mt-1 text-sm text-neutral-600">

                    Push the buyer toward higher value without making the choice feel heavy.

                  </p>

                </div>

                <div className="grid gap-3">

                  {PRODUCT.combos.map((item) => {

                    const active = combo === item.id;

                    return (

                      <button

                        key={item.id}

                        type="button"

                        onClick={() => setCombo(item.id)}

                        className={classNames(

                          'rounded-2xl border p-4 text-left transition',

                          active

                            ? 'border-neutral-950 bg-neutral-950 text-white shadow-lg'

                            : 'border-neutral-200 bg-white hover:border-neutral-400'

                        )}

                      >

                        <div className="flex flex-wrap items-start justify-between gap-3">

                          <div>

                            <div className="flex items-center gap-2">

                              <h4 className="text-sm font-bold">{item.name}</h4>

                              {item.badge ? (

                                <span

                                  className={classNames(

                                    'rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide',

                                    active

                                      ? 'bg-white/15 text-white'

                                      : 'bg-neutral-100 text-neutral-700'

                                  )}

                                >

                                  {item.badge}

                                </span>

                              ) : null}

                            </div>

                            <ul

                              className={classNames(

                                'mt-2 space-y-1 text-xs',

                                active ? 'text-neutral-200' : 'text-neutral-500'

                              )}

                            >

                              {item.items.map((feature) => (

                                <li key={feature}>• {feature}</li>

                              ))}

                            </ul>

                          </div>

                          <div className="text-right">

                            <div className="text-sm font-bold">

                              ₹{item.price.toLocaleString('en-IN')}

                            </div>

                          </div>

                        </div>

                      </button>

                    );

                  })}

                </div>

              </div>

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">

                <div className="grid gap-3 text-sm text-neutral-700">

                  <div className="flex items-start gap-3">

                    <span>📦</span>

                    <div>

                      <div className="font-semibold text-neutral-950">

                        Crafted in 3–5 days

                      </div>

                      <div>Delivered in 2–5 days across India</div>

                    </div>

                  </div>

                  <div className="flex items-start gap-3">

                    <span>🛠</span>

                    <div>

                      <div className="font-semibold text-neutral-950">

                        Designed and printed in-house

                      </div>

                      <div>Better quality control and hand-finished checks</div>

                    </div>

                  </div>

                  <div className="flex items-start gap-3">

                    <span>🎁</span>

                    <div>

                      <div className="font-semibold text-neutral-950">

                        Safe, gift-ready packaging

                      </div>

                      <div>Built to arrive display-worthy and damage-safe</div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="space-y-3">

                <button className="w-full rounded-full bg-neutral-950 px-6 py-4 text-sm font-bold text-white transition hover:opacity-90">

                  Create My Figurine

                </button>

                <button className="w-full rounded-full border border-neutral-950 bg-white px-6 py-4 text-sm font-bold text-neutral-950 transition hover:bg-neutral-100">

                  Buy as Gift Combo

                </button>

                <div className="flex items-center justify-between text-xs text-neutral-500">

                  <span>Secure checkout</span>

                  <span>Support available</span>

                </div>

                <p className="text-sm font-medium text-amber-700">

                  Only {PRODUCT.weeklySlotsLeft} custom production slots left this week.

                </p>

              </div>

            </div>

          </div>

        </section>

        <section className="mt-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">

          <div className="grid gap-px bg-neutral-200 md:grid-cols-3">

            {PRODUCT.testimonialStrip.map((item) => (

              <div key={item} className="bg-white px-5 py-4 text-sm text-neutral-700">

                “{item}”

              </div>

            ))}

          </div>

        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

          <div className="space-y-8">

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">

              <h2 className="text-2xl font-bold tracking-tight">A memory you can hold</h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">

                A custom figurine is more than a product. It is a miniature version of a

                person, a moment, or a relationship—crafted to be displayed, gifted, and

                remembered.

              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">

                <div>

                  <h3 className="text-sm font-bold text-neutral-950">What you get</h3>

                  <ul className="mt-3 space-y-2 text-sm text-neutral-600">

                    <li>• Custom 3D printed figurine</li>

                    <li>• Selected base option</li>

                    <li>• Hand-finished detailing</li>

                    <li>• Safe premium packaging</li>

                  </ul>

                </div>

                <div>

                  <h3 className="text-sm font-bold text-neutral-950">Best for</h3>

                  <ul className="mt-3 space-y-2 text-sm text-neutral-600">

                    <li>• Birthdays</li>

                    <li>• Anniversaries</li>

                    <li>• Couple gifts</li>

                    <li>• Desk décor</li>

                  </ul>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">

              <h2 className="text-2xl font-bold tracking-tight">How it works</h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">

                {[

                  {

                    title: '1. Upload your photo',

                    text: 'Choose a clear image and your preferred options.',

                  },

                  {

                    title: '2. We craft your figurine',

                    text: 'Our team designs, prints, and finishes it in-house.',

                  },

                  {

                    title: '3. We ship it gift-ready',

                    text: 'Your order arrives ready to display or gift.',

                  },

                ].map((step) => (

                  <div

                    key={step.title}

                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4"

                  >

                    <h3 className="text-sm font-bold text-neutral-950">{step.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-neutral-600">{step.text}</p>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">

              <div className="flex items-end justify-between gap-4">

                <div>

                  <h2 className="text-2xl font-bold tracking-tight">

                    Made for real people

                  </h2>

                  <p className="mt-2 text-sm text-neutral-600">

                    Real gifting moments, desk setups, and customer reactions.

                  </p>

                </div>

              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {PRODUCT.ugcPlaceholders.map((label) => (

                  <ImagePlaceholder key={label} label={label} className="h-64" compact={false} />

                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">

              <h2 className="text-2xl font-bold tracking-tight">Reviews</h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                {PRODUCT.reviews.map((review) => (

                  <div

                    key={`${review.name}-${review.city}`}

                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"

                  >

                    <div className="text-sm font-semibold text-neutral-950">

                      {review.name} • {review.city}

                    </div>

                    <div className="mt-1 text-xs uppercase tracking-wide text-neutral-500">

                      {review.product}

                    </div>

                    <p className="mt-3 text-sm leading-7 text-neutral-600">

                      “{review.text}”

                    </p>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">

              <h2 className="text-2xl font-bold tracking-tight">Frequently asked questions</h2>

              <div className="mt-6 space-y-3">

                {PRODUCT.faqs.map((faq, index) => (

                  <Accordion

                    key={faq.q}

                    q={faq.q}

                    a={faq.a}

                    defaultOpen={index === 0}

                  />

                ))}

              </div>

            </div>

          </div>

          <aside className="space-y-8">

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold tracking-tight">Complete the gift</h2>

              <div className="mt-5 space-y-3">

                {PRODUCT.related.map((item) => (

                  <label

                    key={item.name}

                    className="flex items-center justify-between rounded-2xl border border-neutral-200 p-4"

                  >

                    <div className="flex items-center gap-3">

                      <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" />

                      <span className="text-sm font-medium text-neutral-800">

                        {item.name}

                      </span>

                    </div>

                    <span className="text-sm font-bold text-neutral-950">

                      +₹{item.price}

                    </span>

                  </label>

                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-neutral-200 bg-neutral-950 p-6 text-white shadow-sm">

              <h2 className="text-xl font-bold tracking-tight">

                Why customers trust us

              </h2>

              <div className="mt-5 space-y-4 text-sm text-neutral-300">

                <div>• In-house production, not random dropshipping</div>

                <div>• Premium finishing and careful packaging</div>

                <div>• Fast support if your photo needs improvement</div>

                <div>• Built for gifting, display, and emotional impact</div>

              </div>

            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold tracking-tight">

                Final reassurance

              </h2>

              <div className="mt-5 grid gap-3 text-sm text-neutral-600">

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">

                  Secure checkout

                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">

                  Pan-India delivery

                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">

                  Damage-safe packaging

                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">

                  Fast support

                </div>

              </div>

            </div>

          </aside>

        </section>

      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur lg:hidden">

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">

          <div>

            <div className="text-xs text-neutral-500">Starting from</div>

            <div className="text-lg font-bold text-neutral-950">

              ₹{calculatedPrice.toLocaleString('en-IN')}

            </div>

          </div>

          <button className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-bold text-white">

            Create Yours

          </button>

        </div>

      </div>

    </div>

  );

}
--- END OF Product Page React + Tailwind code.docx ---
--- START OF Product Page Ui.docx ---
'use client';

import React, { useMemo, useState } from 'react';

type VariantOption = {

  label: string;

  price: number;

  note?: string;

};

const PRODUCT = {

  code: 'UNIT 01',

  name: 'VOID FIGURE 01',

  subtitle:

    'A faceless display form designed with a cold architectural silhouette and manufactured for shelf and desk presence.',

  price: 1499,

  compareAtPrice: 1999,

  edition: 'Open Edition',

  category: 'Artifact Unit',

  material: 'PLA Composite',

  finish: 'Matte Black',

  dimensions: '180 × 90 × 70 mm',

  stockNote: 'Low Batch Availability',

  accent: 'Violet',

  rating: 4.9,

  reviewCount: 184,

  gallery: [

    'Hero Artifact Render',

    'Front Elevation Render',

    'Side Profile Render',

    'In-Environment Desk Shot',

    'Packaging / Insert Shot',

  ],

  finishes: [

    { label: 'Matte Black', price: 0, note: 'Standard finish' },

    { label: 'Graphite Grey', price: 100, note: 'Industrial tone' },

    { label: 'Void White', price: 150, note: 'High contrast finish' },

  ] as VariantOption[],

  sizes: [

    { label: 'Standard', price: 0, note: 'Display-ready' },

    { label: 'Large', price: 500, note: 'Shelf statement piece' },

  ] as VariantOption[],

  addOns: [

    { label: 'Display Plinth', price: 249, note: 'Minimal stand base' },

    { label: 'Collector Box', price: 299, note: 'Premium packaging' },

    { label: 'Priority Dispatch', price: 199, note: 'Fast queue placement' },

  ] as VariantOption[],

  specs: [

    ['Material', 'PLA Composite'],

    ['Finish', 'Matte Industrial'],

    ['Fabrication', 'Layer-manufactured in-house'],

    ['Edition', 'Open'],

    ['Use Case', 'Display / Desk / Shelf'],

    ['Packaging', 'Protective collector box'],

  ],

  features: [

    'Engineered as a collectible object, not a toy.',

    'Layer-manufactured in-house for controlled consistency.',

    'Designed for premium desks, shelves, and display surfaces.',

  ],

  faqs: [

    {

      q: 'Is this a toy or a display object?',

      a: 'This is designed as a collectible display object. It is built for desks, shelves, and visual presence rather than play use.',

    },

    {

      q: 'What material is used?',

      a: 'The object is produced using a premium PLA composite and finished for a clean, matte industrial look.',

    },

    {

      q: 'How long does dispatch take?',

      a: 'Most orders are processed in 2–4 working days unless priority dispatch is selected.',

    },

    {

      q: 'Will every unit look exactly the same?',

      a: 'Each unit follows the same controlled design language, but small finish variances may occur as part of the fabrication process.',

    },

  ],

  reviews: [

    {

      name: 'Arjun',

      city: 'Delhi',

      text: 'This looks far more premium in person. It feels like an object from a design studio, not a generic product.',

    },

    {

      name: 'Neel',

      city: 'Mumbai',

      text: 'Perfect desk piece. The silhouette is sharp and the finish looks clean under soft lighting.',

    },

    {

      name: 'Karan',

      city: 'Bengaluru',

      text: 'Packaging was excellent and the product had real presence on the shelf immediately.',

    },

  ],

  related: [

    {

      code: 'UNIT 02',

      name: 'GRID RELIC 02',

      price: '₹1,999',

      type: 'Desk Object',

    },

    {

      code: 'UNIT 03',

      name: 'MECH TOTEM 03',

      price: '₹2,499',

      type: 'Display Form',

    },

    {

      code: 'UNIT 04',

      name: 'AXIS BLOCK 04',

      price: '₹1,199',

      type: 'Collectible Form',

    },

  ],

};

function cn(...classes: Array<string | false | null | undefined>) {

  return classes.filter(Boolean).join(' ');

}

function SectionLabel({ children }: { children: React.ReactNode }) {

  return (

    <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">

      <span className="inline-block h-px w-8 bg-zinc-700" />

      {children}

    </div>

  );

}

function GridBackground() {

  return (

    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:40px_40px]" />

    </div>

  );

}

function PlaceholderVisual({

  label,

  compact = false,

  className = '',

}: {

  label: string;

  compact?: boolean;

  className?: string;

}) {

  return (

    <div

      className={cn(

        'relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-zinc-950',

        compact ? 'h-24' : 'h-[520px]',

        className

      )}

    >

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_70%_65%,rgba(59,130,246,0.15),transparent_30%),linear-gradient(180deg,#111111_0%,#050505_100%)]" />

      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-violet-400/30 bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-[0_0_80px_rgba(139,92,246,0.15)]" />

      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[1.25rem] border border-white/10 bg-zinc-900/80 backdrop-blur" />

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">

        <div>

          <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

            Visual Placeholder

          </div>

          <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-200 sm:text-sm">

            {label}

          </div>

        </div>

        {!compact ? (

          <div className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-zinc-400">

            Replace

          </div>

        ) : null}

      </div>

    </div>

  );

}

function OptionGroup({

  title,

  options,

  value,

  onChange,

}: {

  title: string;

  options: VariantOption[];

  value: string;

  onChange: (value: string) => void;

}) {

  return (

    <div className="space-y-3">

      <div className="flex items-center justify-between gap-4">

        <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">{title}</div>

        <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{value}</div>

      </div>

      <div className="grid gap-3 sm:grid-cols-2">

        {options.map((option) => {

          const active = value === option.label;

          return (

            <button

              key={option.label}

              type="button"

              onClick={() => onChange(option.label)}

              className={cn(

                'rounded-[1.25rem] border p-4 text-left transition',

                active

                  ? 'border-violet-400/40 bg-violet-400/10 text-white'

                  : 'border-white/10 bg-zinc-950 text-zinc-200 hover:border-white/20'

              )}

            >

              <div className="flex items-start justify-between gap-3">

                <div>

                  <div className="text-sm font-medium uppercase tracking-[0.08em]">

                    {option.label}

                  </div>

                  {option.note ? (

                    <div className={cn('mt-2 text-xs', active ? 'text-zinc-300' : 'text-zinc-500')}>

                      {option.note}

                    </div>

                  ) : null}

                </div>

                <div className="text-xs uppercase tracking-[0.18em]">

                  {option.price === 0 ? 'Base' : `+₹${option.price}`}

                </div>

              </div>

            </button>

          );

        })}

      </div>

    </div>

  );

}

function Accordion({

  q,

  a,

  defaultOpen = false,

}: {

  q: string;

  a: string;

  defaultOpen?: boolean;

}) {

  const [open, setOpen] = useState(defaultOpen);

  return (

    <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950">

      <button

        type="button"

        onClick={() => setOpen((v) => !v)}

        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"

      >

        <span className="text-sm font-medium uppercase tracking-[0.08em] text-zinc-100">

          {q}

        </span>

        <span className="text-lg text-zinc-500">{open ? '−' : '+'}</span>

      </button>

      {open ? <div className="px-5 pb-5 text-sm leading-7 text-zinc-400">{a}</div> : null}

    </div>

  );

}

export default function VoidlabProductPage() {

  const [activeImage, setActiveImage] = useState(0);

  const [selectedFinish, setSelectedFinish] = useState(PRODUCT.finishes[0].label);

  const [selectedSize, setSelectedSize] = useState(PRODUCT.sizes[0].label);

  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const [quantity, setQuantity] = useState(1);

  const finishPrice =

    PRODUCT.finishes.find((item) => item.label === selectedFinish)?.price ?? 0;

  const sizePrice = PRODUCT.sizes.find((item) => item.label === selectedSize)?.price ?? 0;

  const addOnPrice = selectedAddOns.reduce((sum, current) => {

    const addOn = PRODUCT.addOns.find((item) => item.label === current);

    return sum + (addOn?.price ?? 0);

  }, 0);

  const totalPrice = useMemo(() => {

    return (PRODUCT.price + finishPrice + sizePrice + addOnPrice) * quantity;

  }, [finishPrice, sizePrice, addOnPrice, quantity]);

  const toggleAddOn = (label: string) => {

    setSelectedAddOns((prev) =>

      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]

    );

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <div className="relative overflow-hidden border-b border-white/10">

        <GridBackground />

        <header className="relative z-20 border-b border-white/10">

          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xs font-semibold tracking-[0.24em]">

                VL

              </div>

              <div>

                <div className="text-sm font-semibold uppercase tracking-[0.26em]">

                  VOIDLAB

                </div>

                <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                  Artifacts from Tomorrow

                </div>

              </div>

            </div>

            <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.24em] text-zinc-400 md:flex">

              <a href="#" className="transition hover:text-white">

                Collection

              </a>

              <a href="#" className="transition hover:text-white">

                System

              </a>

              <a href="#" className="transition hover:text-white">

                Archive

              </a>

            </nav>

            <button className="rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

              Cart 00

            </button>

          </div>

        </header>

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-5 text-[11px] uppercase tracking-[0.22em] text-zinc-500 sm:px-8 lg:px-10">

          Home / Collection / Series 01 / <span className="text-zinc-300">{PRODUCT.name}</span>

        </div>

        <section className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-4 sm:px-8 lg:px-10 lg:pb-24">

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">

            <div className="space-y-4">

              <PlaceholderVisual label={PRODUCT.gallery[activeImage]} />

              <div className="grid grid-cols-5 gap-3">

                {PRODUCT.gallery.map((item, index) => (

                  <button

                    key={item}

                    type="button"

                    onClick={() => setActiveImage(index)}

                    className={cn(

                      'rounded-[1.25rem] border p-1 transition',

                      activeImage === index

                        ? 'border-violet-400/40 bg-violet-400/10'

                        : 'border-white/10 bg-zinc-950 hover:border-white/20'

                    )}

                  >

                    <PlaceholderVisual label={item} compact />

                  </button>

                ))}

              </div>

            </div>

            <div className="flex flex-col gap-6">

              <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6 sm:p-7">

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-violet-200">

                    {PRODUCT.code}

                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-zinc-400">

                    {PRODUCT.edition}

                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-zinc-400">

                    {PRODUCT.stockNote}

                  </span>

                </div>

                <h1 className="mt-5 text-3xl font-semibold uppercase tracking-[0.08em] text-white sm:text-4xl">

                  {PRODUCT.name}

                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">

                  {PRODUCT.subtitle}

                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-zinc-500">

                  <span className="text-zinc-300">

                    {PRODUCT.rating} / 5 ({PRODUCT.reviewCount} reviews)

                  </span>

                  <span>{PRODUCT.category}</span>

                  <span>{PRODUCT.material}</span>

                </div>

                <div className="mt-8 flex items-end gap-4">

                  <div className="text-3xl font-semibold text-white sm:text-4xl">

                    ₹{totalPrice.toLocaleString('en-IN')}

                  </div>

                  <div className="pb-1 text-lg text-zinc-500 line-through">

                    ₹{PRODUCT.compareAtPrice.toLocaleString('en-IN')}

                  </div>

                </div>

                <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-violet-300">

                  Controlled release pricing

                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                  {[

                    ['Material', PRODUCT.material],

                    ['Finish', PRODUCT.finish],

                    ['Dimensions', PRODUCT.dimensions],

                  ].map(([k, v]) => (

                    <div key={k} className="rounded-[1.25rem] border border-white/10 bg-black/30 p-4">

                      <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">{k}</div>

                      <div className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-white">

                        {v}

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-6 sm:p-7">

                <SectionLabel>Configuration</SectionLabel>

                <div className="space-y-6">

                  <OptionGroup

                    title="Finish"

                    options={PRODUCT.finishes}

                    value={selectedFinish}

                    onChange={setSelectedFinish}

                  />

                  <OptionGroup

                    title="Scale"

                    options={PRODUCT.sizes}

                    value={selectedSize}

                    onChange={setSelectedSize}

                  />

                  <div className="space-y-3">

                    <div className="flex items-center justify-between gap-4">

                      <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">

                        Add-On Modules

                      </div>

                      <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">

                        Optional

                      </div>

                    </div>

                    <div className="grid gap-3">

                      {PRODUCT.addOns.map((item) => {

                        const active = selectedAddOns.includes(item.label);

                        return (

                          <button

                            key={item.label}

                            type="button"

                            onClick={() => toggleAddOn(item.label)}

                            className={cn(

                              'rounded-[1.25rem] border p-4 text-left transition',

                              active

                                ? 'border-violet-400/40 bg-violet-400/10 text-white'

                                : 'border-white/10 bg-black/30 text-zinc-200 hover:border-white/20'

                            )}

                          >

                            <div className="flex items-start justify-between gap-3">

                              <div>

                                <div className="text-sm font-medium uppercase tracking-[0.08em]">

                                  {item.label}

                                </div>

                                <div

                                  className={cn(

                                    'mt-2 text-xs',

                                    active ? 'text-zinc-300' : 'text-zinc-500'

                                  )}

                                >

                                  {item.note}

                                </div>

                              </div>

                              <div className="text-xs uppercase tracking-[0.18em]">+₹{item.price}</div>

                            </div>

                          </button>

                        );

                      })}

                    </div>

                  </div>

                  <div className="grid gap-4 sm:grid-cols-[1fr_180px]">

                    <div className="rounded-[1.25rem] border border-white/10 bg-black/30 p-4">

                      <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                        Dispatch Window

                      </div>

                      <div className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-white">

                        2–4 Working Days

                      </div>

                      <div className="mt-2 text-xs leading-6 text-zinc-500">

                        Priority module accelerates queue placement.

                      </div>

                    </div>

                    <div className="rounded-[1.25rem] border border-white/10 bg-black/30 p-4">

                      <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                        Quantity

                      </div>

                      <div className="mt-3 flex items-center justify-between rounded-full border border-white/10 px-3 py-2">

                        <button

                          type="button"

                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}

                          className="h-8 w-8 rounded-full border border-white/10 text-sm text-zinc-300"

                        >

                          −

                        </button>

                        <div className="text-sm font-medium uppercase tracking-[0.12em] text-white">

                          {quantity}

                        </div>

                        <button

                          type="button"

                          onClick={() => setQuantity((q) => q + 1)}

                          className="h-8 w-8 rounded-full border border-white/10 text-sm text-zinc-300"

                        >

                          +

                        </button>

                      </div>

                    </div>

                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">

                    <button className="rounded-full bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-zinc-200">

                      Acquire Object

                    </button>

                    <button className="rounded-full border border-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

                      Add to Cart

                    </button>

                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">

                    {[

                      'In-house fabrication',

                      'Collector-grade packaging',

                      'Designed for display',

                    ].map((item) => (

                      <div

                        key={item}

                        className="rounded-[1.1rem] border border-white/10 bg-black/30 px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-zinc-400"

                      >

                        {item}

                      </div>

                    ))}

                  </div>

                </div>

              </div>

              <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6">

                <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                  Product Notes

                </div>

                <div className="mt-4 grid gap-3">

                  {PRODUCT.features.map((line) => (

                    <div

                      key={line}

                      className="rounded-[1.25rem] border border-white/10 bg-zinc-950 px-4 py-4 text-sm leading-7 text-zinc-300"

                    >

                      {line}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

      <section className="border-t border-white/10 bg-zinc-950/40">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">

            <div>

              <SectionLabel>Object Profile</SectionLabel>

              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] sm:text-4xl">

                Controlled

                <br />

                Presence

              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-zinc-400">

                This unit is designed to function as a sharp, minimal display object. The

                silhouette is deliberate, the finish is restrained, and the visual language

                is consistent with the VOIDLAB system.

              </p>

              <div className="mt-8 space-y-4">

                {PRODUCT.features.map((line) => (

                  <div

                    key={line}

                    className="rounded-[1.5rem] border border-white/10 bg-zinc-950 px-5 py-4 text-sm text-zinc-300"

                  >

                    {line}

                  </div>

                ))}

              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {PRODUCT.specs.map(([k, v]) => (

                <div

                  key={k}

                  className="rounded-[1.75rem] border border-white/10 bg-zinc-950 p-5"

                >

                  <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">{k}</div>

                  <div className="mt-3 text-sm font-medium uppercase tracking-[0.08em] text-white">

                    {v}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">

          <SectionLabel>In Environment</SectionLabel>

          <div className="grid gap-6 lg:grid-cols-3">

            <PlaceholderVisual label="Desk Setup Render" className="h-[340px]" />

            <PlaceholderVisual label="Shelf / Studio Render" className="h-[340px]" />

            <PlaceholderVisual label="Packaging / Insert Render" className="h-[340px]" />

          </div>

        </div>

      </section>

      <section className="border-t border-white/10 bg-zinc-950/40">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">

          <SectionLabel>Reviews</SectionLabel>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] sm:text-4xl">

                Collector Response

              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">

                Early buyers respond to finish quality, silhouette, and shelf presence.

              </p>

            </div>

            <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">

              {PRODUCT.rating} / 5 average score

            </div>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {PRODUCT.reviews.map((review) => (

              <div

                key={`${review.name}-${review.city}`}

                className="rounded-[1.75rem] border border-white/10 bg-zinc-950 p-6"

              >

                <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                  {review.city}

                </div>

                <div className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-white">

                  {review.name}

                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-400">{review.text}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">

          <SectionLabel>FAQ</SectionLabel>

          <div className="grid gap-4">

            {PRODUCT.faqs.map((faq, index) => (

              <Accordion key={faq.q} q={faq.q} a={faq.a} defaultOpen={index === 0} />

            ))}

          </div>

        </div>

      </section>

      <section className="border-t border-white/10 bg-zinc-950/40">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">

          <SectionLabel>Related Objects</SectionLabel>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] sm:text-4xl">

                Continue the System

              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">

                Expand the collection with related units from the same controlled visual language.

              </p>

            </div>

            <button className="rounded-full border border-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

              View Collection

            </button>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {PRODUCT.related.map((item) => (

              <div

                key={item.code}

                className="rounded-[2rem] border border-white/10 bg-zinc-950 p-4"

              >

                <PlaceholderVisual label={item.name} className="h-[280px]" />

                <div className="mt-4 flex items-start justify-between gap-4">

                  <div>

                    <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">

                      {item.code}

                    </div>

                    <div className="mt-2 text-lg font-medium uppercase tracking-[0.08em] text-white">

                      {item.name}

                    </div>

                    <div className="mt-1 text-sm text-zinc-500">{item.type}</div>

                  </div>

                  <div className="text-sm font-medium text-white">{item.price}</div>

                </div>

                <button className="mt-5 w-full rounded-full border border-white/10 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

                  View Object

                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="border-t border-white/10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_35%),#050505]">

        <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">

          <SectionLabel>Acquire</SectionLabel>

          <h2 className="text-4xl font-semibold uppercase tracking-[0.08em] text-white sm:text-5xl">

            Add Unit 01 to the Collection

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">

            Minimal form. Controlled finish. Built for desks, shelves, and future-facing spaces.

          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button className="rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-zinc-200">

              Acquire Now

            </button>

            <button className="rounded-full border border-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-200 transition hover:border-violet-400/40 hover:text-white">

              Return to Collection

            </button>

          </div>

        </div>

      </section>

      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">

          <div>

            <div className="text-lg font-semibold uppercase tracking-[0.24em] text-white">

              VOIDLAB

            </div>

            <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-zinc-500">

              Artifacts from Tomorrow

            </div>

          </div>

          <div className="grid gap-4 text-[11px] uppercase tracking-[0.24em] text-zinc-500 sm:grid-cols-3 sm:gap-8">

            <a href="#" className="transition hover:text-white">

              Collection

            </a>

            <a href="#" className="transition hover:text-white">

              System

            </a>

            <a href="#" className="transition hover:text-white">

              Contact

            </a>

          </div>

        </div>

      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/90 backdrop-blur lg:hidden">

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">

          <div>

            <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">Unit 01</div>

            <div className="text-lg font-semibold text-white">₹{totalPrice.toLocaleString('en-IN')}</div>

          </div>

          <button className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black">

            Acquire

          </button>

        </div>

      </div>

    </div>

  );

}
--- END OF Product Page Ui.docx ---
--- START OF Products Page.docx ---
For your business, the product page must do 5 things fast:

Make the product feel premium

Make customization feel easy

Increase order value with combos and add-ons

Remove fear about quality/delivery

Push checkout hard

So we will not design a generic ecommerce PDP.

We will build a high-converting custom-product sales page.

Product page objective

The user must think:

“This looks amazing, it feels trustworthy, customization seems simple, and I should buy the bigger bundle.”

Core structure

Plain text

Gallery + Product Info + Customization + Social Proof + Urgency + Bundle Upsell + FAQ + Sticky CTA

1. Above-the-fold layout

Desktop layout

Two-column layout:

Left column

Large product media gallery:

Main hero image

Thumbnail strip below or vertical on left

Mix of:

final product shots

close-up detail shots

packaging shot

scale-in-hand shot

before/after if personalized

short video / rotating view

Right column

All money-making elements:

Product title

Short emotional subtitle

Rating + review count

Price

Compare-at price

Offer badge

Customization module

Delivery estimate

Primary CTA

Secondary reassurance text

2. Product header block

Exact order

Product title

Make it sharp and benefit-led.

Examples:

Custom Mini You Figurine

Personalized Couple Figurine Set

Gamer Desk Character Combo

Pet Mini Statue with Name Base

Subtitle

One-line outcome, not technical description.

Examples:

Made from your photo. Printed in-house. Gift-ready.

Turn a memory into a collectible.

The perfect personalized gift for birthdays, couples, and desks.

Review row

Show:

stars

number of reviews

“Made in-house”

“Pan-India delivery”

Example: 4.8 ★ | 1,284 reviews | In-house crafted | Gift-ready packaging

This row kills suspicion immediately.

3. Pricing block

This block must be aggressive.

Structure

Current price in large bold

Original price smaller and struck through

Savings amount or percentage

EMI only if useful later, not needed initially

Bundle-saving indicator

Example:

₹1,499

₹2,199

You save ₹700

Then directly below:

Free premium gift box on orders above ₹999

This makes the buyer feel they’re already winning.

4. Variant / style selection

Never let options feel confusing.

Use visual tiles, not dropdowns, wherever possible

Variant groups could be:

Size: Small / Medium / Large

Finish: Matte / Premium Gloss

Style: Cute / Realistic / Cartoon

Base: Standard / Name Base / LED Base

Each should be:

a pill or card

visually tappable

show incremental price difference

Example:

Choose Size

Small — ₹999

Medium — ₹1499

Large — ₹2199

Choose Base

Standard — Included

Name Base — +₹149

LED Base — +₹299

This structure quietly upsells without friction.

5. Customization block

This is the heart of your business.

It must feel easy, guided, and safe.

Section title

Make It Yours

Fields

Only show essential fields first.

Recommended order

Upload photo

Enter name/text

Select occasion

Add notes

Quantity

Best UX pattern

A. Upload photo area

Large boxed drag-and-drop or tap-to-upload zone.

Text:

Upload 1 clear front photo

JPG, PNG supported

Best results with good lighting

Below it, add a tiny trust line: Our team reviews every image before production.

This reduces fear of uploading the wrong thing.

B. Name engraving / custom text

Simple text input

Label: Add custom name or message

Helper copy: Example: Rahul, Forever Us, Best Dad

C. Occasion selector

Helps both buyer psychology and future personalization

Options:

Birthday

Anniversary

Couple Gift

Desk Decor

Pet Tribute

Just for Fun

This also helps you tailor packaging later.

D. Notes field

For special instructions:

hairstyle

pose vibe

clothing color

gift deadline note

Keep it optional.

6. Delivery and reassurance block

This should sit right below customization before the CTA.

Show three things:

Production time

Delivery window

Quality reassurance

Example:

Delivery

Crafted in 3–5 days

Delivered in 2–5 days across India

Why customers trust us

Designed and printed in-house

Hand-finished quality checks

Safe packaging for gifting

This kills the biggest objections: “Will this be good?”

“Will it arrive?”

“Is this random dropship junk?”

7. Primary CTA zone

This area must be impossible to ignore.

Buttons

Primary: Create My Figurine

Secondary: Buy as Gift Combo

The second button is a hidden weapon.

It shifts the user upward in AOV.

Below buttons:

Secure checkout icon/text

COD only if you truly support it and it doesn’t wreck margins

Small urgency line

Example: Only 34 custom production slots left this week

Not too dramatic. Just enough tension.

8. Sticky mobile CTA

This is mandatory.

On mobile, bottom sticky bar should always show:

price

primary CTA

Example:

₹1,499 | [Create Yours]

As the user scrolls, this keeps the purchase alive.

Without this, mobile conversions leak badly.

9. Product media section strategy

Your gallery should not be random.

Ideal image order

Best clean hero shot

Product in gift-ready context

Close-up texture/detail

Scale reference in hand or on desk

Personalization example

Packaging image

Short video / spin

Customer photo if available

This sequence answers:

What is it?

How good is it?

How big is it?

How personal is it?

What do I receive?

10. Combo upsell section

This is where margin explodes.

Place this directly below the main purchase block or immediately after the first description section.

Title

Upgrade to a Gift Combo

Layout

3 offer cards, one visually marked “Most Popular”

Example:

Option 1: Solo

1 figurine

Standard base

₹1499

Option 2: Gift Combo — Most Popular

1 figurine

name base

premium box

greeting card

₹1999

Option 3: Premium Combo

1 figurine

LED base

premium box

gift wrap

priority crafting

₹2499

This reframes the base product as the small choice.

Most buyers will drift to the middle or top option.

11. Description section

Do not write long boring ecommerce text.

Break it into conversion blocks.

Recommended format

A. Emotional hook

A memory you can hold

A custom figurine is more than a product. It’s a miniature version of a person, a moment, or a relationship—crafted to be displayed, gifted, and remembered.

B. What you get

Custom 3D printed figurine

selected base option

hand-finished detailing

safe protective packaging

C. Best for

birthdays

anniversaries

couple gifts

desk decor

pet lovers

collectors

D. Craft quality

Talk about finish, precision, durability, and in-house production.

Keep paragraphs short.

This section should feel premium, not technical and dull.

12. “How it works” block on PDP

Very important for personalized products.

Use 3 simple steps

1. Upload your photo

Choose a clear image and your preferred options.

2. We craft your figurine

Our team designs, prints, and finishes it in-house.

3. We ship it gift-ready

Your order arrives ready to display or gift.

This dramatically reduces hesitation.

13. Social proof section

Do not hide reviews at the bottom only.

You need reviews in three places:

rating near the title

testimonial snippets near the CTA

full reviews lower down

Best layout

A slider or grid with:

customer image if available

review text

name

city

purchased product

Example: “Looked exactly like the photo and the gift box made it feel premium.”

— Aditi, Delhi

Even 6–12 strong reviews can do serious work.

14. UGC / real customer photos

This is stronger than polished brand shots.

Title

Made for real people, gifted by real people

Show:

unboxing photos

desk setup photos

gifting moment photos

close-ups by customers

This makes the product feel real and attainable.

15. FAQ block

For your category, FAQ is not decoration. It is objection handling.

Questions to include

What kind of photo should I upload?

How long does production take?

Will it look exactly like my photo?

Can I add custom text or names?

Is it suitable for gifting?

What if my uploaded photo is unclear?

Can I preview it before production?

What material is used?

Is it fragile?

Do you offer bulk orders?

Each answer should reduce risk and increase trust.

16. Urgency / scarcity section

Use believable operational scarcity, not fake countdown nonsense.

Examples:

Custom slots are limited each week due to production capacity

Valentine orders close on February X

Priority crafting available for a limited number of orders per day

This is especially powerful during seasonal campaigns.

17. Cross-sell section

Below the main content, add related intent-based products.

Better than “You may also like”

Use:

Complete the gift

Pair it with

Make it extra special

Examples:

LED display base

premium gift box

custom greeting card

couple figurine upgrade

pet figurine add-on

This feels curated, not algorithmic.

18. Footer reassurance strip on PDP

Before the footer, show a final trust strip:

In-house production

Secure checkout

Pan-India delivery

Damage-safe packaging

Fast support

This acts like a last objection sweep.

Wireframe structure

Here is the page skeleton in order:

Plain text

[Header]

[Breadcrumbs]

[Product Section]

  [Left: Media Gallery]

  [Right: Title]

          [Subtitle]

          [Rating + Trust]

          [Price]

          [Variant Selectors]

          [Customization Form]

          [Delivery + Reassurance]

          [CTA Buttons]

          [Urgency Note]

[Combo Upgrade Section]

[Mini Testimonial Strip]

[Product Description]

  [Emotional Hook]

  [What You Get]

  [Why It’s Special]

[How It Works]

[Customer Photos / UGC]

[Reviews]

[FAQ]

[Related Add-ons / Pair It With]

[Final Trust Strip]

[Footer]

Mobile layout

On mobile, the order matters even more.

Best mobile sequence

Product images

Title

Rating

Price

Variant options

Customization form

Delivery info

CTA

Combo upgrade

Description

Reviews

FAQ

Related products

Keep the sticky CTA alive throughout.

Conversion rules for your PDP

Rule 1

The first screen must show:

what it is

what it costs

how to start buying

Rule 2

Every major scroll section must do one of three things:

increase desire

reduce doubt

increase order value

If a section does none of these, remove it.

Rule 3

Use images to sell, not paragraphs.

Rule 4

Push bundles aggressively, but elegantly.

Rule 5

Never make customization feel like work.

The moment it feels complicated, the sale dies.

Component map for implementation

If you build this in Next.js / React:

Plain text

/components/product/

  ProductGallery.tsx

  ProductHeader.tsx

  PriceBlock.tsx

  VariantSelector.tsx

  CustomizationForm.tsx

  DeliveryInfo.tsx

  StickyBuyBar.tsx

  ComboUpgrade.tsx

  TestimonialStrip.tsx

  ProductStory.tsx

  HowItWorks.tsx

  UGCGallery.tsx

  ReviewsSection.tsx

  FAQSection.tsx

  CrossSellSection.tsx

  TrustStrip.tsx

Exact high-converting section copy examples

CTA area

Create Your Figurine

Upload your photo and we’ll craft a mini version that feels personal, premium, and gift-ready.

Combo upsell title

Make It a Gift They’ll Never Forget

Reassurance line

Designed, printed, and finished in-house for better quality control.

Urgency line

This week’s custom production slots are filling fast.

The real money move

Do not make the product page about “a product.”

Make it about:

the person receiving it

the emotional reaction

the gift moment

the premium feel

the easy customization path

That is how you escape commodity ecommerce.

Ideal KPI target mindset

This page should be engineered to improve:

add-to-cart rate

bundle attachment rate

checkout completion rate

AOV

photo-upload completion

Those are the real scoreboard metrics.
--- END OF Products Page.docx ---
--- START OF full route map for the entire VOIDLAB storefront and account system.docx ---
the full route map for the entire VOIDLAB storefront + account system, structured so the brand stays coherent, the buyer journey stays sharp, and engineering can build without drift.

This is not just a sitemap.

It is a commercial operating map.

1. Top-level route system

Plain text

/

├── /collection

├── /collection/[slug]

├── /object/[slug]

├── /archive

├── /archive/[slug]

├── /system

├── /about

├── /journal

├── /journal/[slug]

├── /support

├── /contact

├── /release-list

├── /cart

├── /checkout

├── /checkout/success

├── /account

├── /account/orders

├── /account/orders/[orderId]

├── /account/collection

├── /account/profile

├── /account/addresses

├── /account/security

├── /account/support

├── /auth/login

├── /auth/register

├── /auth/forgot-password

├── /search

├── /legal/privacy

├── /legal/terms

├── /legal/shipping

├── /legal/returns

└── /404

2. Core public storefront routes

/

Homepage

Purpose:

establish VOIDLAB identity

present current drop

push users into collection or object pages

Sections:

hero

current drop

system philosophy

featured object

archive teaser

acquire CTA

Primary actions:

Enter Collection

View Current Drop

Join Release List

/collection

Master collection page

Purpose:

show active purchasable objects

filter by type, finish, status

function as the main browsing layer

Sections:

collection hero

filters

product grid

release philosophy

CTA to release list

This is your main merchandising surface.

/collection/[slug]

Specific release / drop page

Examples:

/collection/series-01

/collection/drop-02-grid-objects

Purpose:

present one release as a coherent system

create drop culture

control scarcity language

Sections:

release intro

object grid

release notes

manufacturing / material notes

related archive / next drop teaser

This is stronger than dumping everything into one collection.

/object/[slug]

Individual product page

Examples:

/object/void-figure-01

/object/grid-relic-02

Purpose:

convert interest into purchase

maintain VOIDLAB system language

communicate product status precisely

Sections:

gallery

object profile

configuration

specs

in-environment visuals

reviews

FAQ

related objects

acquire CTA

This is your main revenue page.

/archive

Archive landing page

Purpose:

build brand mythology

show past drops

signal continuity and collectability

Sections:

archive intro

past releases

sold-out objects

philosophy of the archive

join release list CTA

Archive pages increase perceived value.

They make VOIDLAB feel like a system, not a one-off store.

/archive/[slug]

Past release page

Examples:

/archive/drop-01-void-figures

Purpose:

preserve old releases

show sold-out items without cluttering the current store

deepen collector culture

Use:

“archived”

“released”

“retired” not “out of stock” everywhere

/system

Brand philosophy / manufacturing page

Purpose:

explain what VOIDLAB is

justify premium positioning

elevate product perception

Sections:

manifesto

fabrication method

material philosophy

release logic

object categories

packaging philosophy

This is where trust becomes cultural, not just transactional.

/about

Brand origin page

Purpose:

tell the story

make the company feel intentional

Keep it tight:

why VOIDLAB exists

what kinds of objects it creates

why everything is release-based

why in-house fabrication matters

Not a generic startup story.

A designed-origin story.

/journal

Editorial / content hub

Purpose:

SEO

brand depth

visual / cultural authority

Content types:

release notes

studio process logs

desk setup inspiration

material and finish essays

behind-the-scenes fabrication posts

This can become a long-term brand moat.

/journal/[slug]

Single editorial page

Examples:

/journal/inside-series-01

/journal/the-logic-of-void-objects

Purpose:

deepen identity

improve search presence

give media and collectors pages to share

/support

Support hub

Purpose:

central support entry point

reduce inbox chaos

Sections:

order tracking link

shipping info

returns policy

damaged item help

contact methods

FAQ categories

/contact

Contact page

Purpose:

direct brand / support contact

partnership and press inquiries

Keep it minimal and controlled.

/release-list

Email / SMS waitlist page

Purpose:

capture interest

notify on drops

build launch leverage

Sections:

why join

what you’ll receive

form

privacy reassurance

This is strategically important.

Do not bury it in the footer only.

/search

Search results

Purpose:

help users find objects fast

useful once catalog expands

Results should prioritize:

active objects

current collection

archive below active inventory

3. Commerce routes

/cart

Cart page

Purpose:

preserve brand during pre-checkout

upsell add-ons

prepare user for acquisition

Sections:

cart objects

optional add-ons

summary

dispatch notes

checkout CTA

No generic cart feel.

/checkout

Checkout page

Purpose:

complete acquisition with minimal friction

maintain VOIDLAB identity while staying highly usable

Sections:

delivery info

payment method

order summary

shipping / dispatch notes

confirm acquisition CTA

The rule here: brand tone remains strong, but usability wins.

/checkout/success

Order confirmation page

Purpose:

confirm order

reduce anxiety

move customer into post-purchase ecosystem

Sections:

order confirmed

tracking CTA

dispatch estimate

support link

continue collection CTA

release list CTA

This page is crucial for reducing support tickets.

4. Authentication routes

/auth/login

Purpose:

account entry

/auth/register

Purpose:

account creation

/auth/forgot-password

Purpose:

password recovery

Brand rule: even auth should feel like VOIDLAB, not a generic SaaS modal.

Use language like:

Access Account

Enter System

Restore Access

Not overly robotic, but brand-consistent.

5. Account system routes

/account

Account dashboard

Purpose:

account overview

order snapshots

quick links

collector identity layer

Sections:

profile summary

recent orders

active tracking

saved addresses

release list status

support shortcuts

This is the user’s control center.

/account/orders

All orders page

Purpose:

list all orders

make history easy to scan

Each order card should show:

order code

date

status

total

tracking CTA

/account/orders/[orderId]

Single order tracking page

Purpose:

live tracking

item-level visibility

support access

Sections:

status timeline

tracked units

operational log

shipping / ETA

invoice download

support CTA

This is the most important account route.

/account/collection

Owned objects / collector library

Purpose:

show what the user has acquired

increase collector identity

drive repeat purchases

Sections:

owned units

release grouping

reorder / buy related objects

archive continuity

This is powerful for brand retention.

/account/profile

Profile page

Purpose:

personal details

communication preferences

release list settings

/account/addresses

Saved addresses

Purpose:

manage shipping locations

improve repeat checkout speed

/account/security

Password / access management

Purpose:

login security

session management

/account/support

Support center for logged-in users

Purpose:

ticket creation

order-linked help

shipping issue reporting

damaged item flow

This route should connect support to actual orders.

6. Legal / policy routes

/legal/privacy

/legal/terms

/legal/shipping

/legal/returns

These matter more than people think, especially for premium ecommerce.

/legal/shipping should clearly explain:

dispatch window

estimated delivery

batch-based releases

delay scenarios

/legal/returns should be crystal clear for collectible objects.

7. Recommended route groups for Next.js App Router

If you are using Next.js App Router, structure it like this:

Plain text

app/

├── (storefront)/

│   ├── page.tsx

│   ├── collection/

│   │   ├── page.tsx

│   │   └── [slug]/page.tsx

│   ├── object/

│   │   └── [slug]/page.tsx

│   ├── archive/

│   │   ├── page.tsx

│   │   └── [slug]/page.tsx

│   ├── system/page.tsx

│   ├── about/page.tsx

│   ├── journal/

│   │   ├── page.tsx

│   │   └── [slug]/page.tsx

│   ├── support/page.tsx

│   ├── contact/page.tsx

│   ├── release-list/page.tsx

│   ├── search/page.tsx

│   └── legal/

│       ├── privacy/page.tsx

│       ├── terms/page.tsx

│       ├── shipping/page.tsx

│       └── returns/page.tsx

│

├── (commerce)/

│   ├── cart/page.tsx

│   ├── checkout/page.tsx

│   └── checkout/success/page.tsx

│

├── (auth)/

│   ├── auth/login/page.tsx

│   ├── auth/register/page.tsx

│   └── auth/forgot-password/page.tsx

│

├── (account)/

│   └── account/

│       ├── page.tsx

│       ├── orders/page.tsx

│       ├── orders/[orderId]/page.tsx

│       ├── collection/page.tsx

│       ├── profile/page.tsx

│       ├── addresses/page.tsx

│       ├── security/page.tsx

│       └── support/page.tsx

│

├── api/

│   ├── checkout/

│   ├── orders/

│   ├── auth/

│   ├── release-list/

│   ├── contact/

│   └── support/

│

├── not-found.tsx

├── layout.tsx

└── globals.css

8. Shared layout logic

Storefront layout

Use for:

homepage

collection

object

archive

system

journal

legal

Shared parts:

main nav

footer

release-list CTA blocks

dark grid background logic

Commerce layout

Use for:

cart

checkout

success

Shared parts:

reduced nav

focus on transaction

minimal distractions

summary side panel

Account layout

Use for:

account dashboard

orders

support

settings

Shared parts:

account sidebar or top tabs

profile identity bar

support shortcuts

account footer

This keeps the product team from rebuilding navigation repeatedly.

9. Navigation map

Main nav

Top-level:

Plain text

Collection

Archive

System

Journal

Support

Cart

Optional:

About

Release List

Footer nav

Group by intent:

Shop

Collection

Archive

Release List

Brand

System

About

Journal

Support

Support

Shipping

Returns

Contact

Account

Login

Orders

Profile

10. Critical route priority: what to build first

Do not build everything at once.

Phase 1: revenue-critical

Build first:

/

/collection

/object/[slug]

/cart

/checkout

/checkout/success

/auth/login

/account/orders/[orderId]

/legal/shipping

/legal/returns

These are the routes needed to sell and support orders.

Phase 2: brand-deepening

Then:

/archive

/system

/about

/release-list

/account

/account/orders

Phase 3: moat-building

Then:

/journal

/journal/[slug]

/archive/[slug]

/account/collection

/account/support

/search

11. Data model alignment by route

Collection routes need:

id

slug

name

subtitle

drop status

hero media

product IDs

Product routes need:

object metadata

pricing

finish options

gallery

dimensions

materials

stock / drop status

related objects

reviews

Order routes need:

order code

status

line items

dispatch ETA

payment status

shipping address

support hooks

Archive routes need:

release status

release date

retired inventory metadata

campaign visuals

If you align route planning with data design early, the build stays clean.

12. UX rules across all routes

Every route must follow the VOIDLAB doctrine:

Rule 1

Object-first presentation.

Rule 2

Uppercase system language, but readable.

Rule 3

Minimal clutter.

Rule 4

Release framing over generic product catalog framing.

Rule 5

No route should suddenly feel like generic Shopify.

That is especially important on:

cart

checkout

account

support

13. The real route strategy

You are not building pages.

You are building a controlled acquisition and retention system:

Homepage creates desire

Collection creates browse logic

Product pages create conversion

Checkout creates acquisition

Account routes create retention

Archive creates mythology

Journal creates authority

Release list creates launch leverage

That is the full machine.

14. My recommended final route stack for V1

If you want the cleanest V1, launch with this exact subset:

Plain text

/

 /collection

 /collection/series-01

 /object/[slug]

 /archive

 /system

 /cart

 /checkout

 /checkout/success

 /auth/login

 /account

 /account/orders

 /account/orders/[orderId]

 /support

 /release-list

 /legal/shipping

 /legal/returns

 /legal/privacy

 /legal/terms

That is enough to feel complete, premium, and operational.

15. CEO verdict

The most dangerous mistake now would be building pages in isolation.

Build VOIDLAB as three connected systems:

Storefront system for desire

Commerce system for conversion

Account system for retention and collector identity

If those three systems stay visually and structurally coherent, the brand feels much bigger than its size.
--- END OF full route map for the entire VOIDLAB storefront and account system.docx ---
