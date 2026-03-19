import { ObjectCardData, MediaItem, ObjectSpec } from "../core";

export type FinishOption = {
  id: string;
  label: string;
  priceDelta: number;
  hex?: string;
};

export type SizeOption = {
  id: string;
  label: string;
  priceDelta: number;
};

export type AddOnOption = {
  id: string;
  label: string;
  priceDelta: number;
  description?: string;
};

export type Review = {
  id: string;
  userName: string;
  rating: number;
  content: string;
  timestamp: string;
  verified: boolean;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ObjectDetail = {
  id: string;
  slug: string;
  title: string;
  series: string;
  description: string;
  basePrice: number;
  compareAtPrice?: number;
  editionLabel: string;
  material: string;
  dimensions: string;
  dispatchWindow: string;
  status: 'AVAILABLE' | 'SOLD_OUT' | 'ARCHIVED';
  media: MediaItem[];
  specs: ObjectSpec[];
  finishes: FinishOption[];
  sizes?: SizeOption[];
  addOns: AddOnOption[];
  environmentSection?: {
    title: string;
    description: string;
    media: MediaItem;
  };
  reviews: Review[];
  faqs: FAQItem[];
  relatedObjects: ObjectCardData[];
};

export type ObjectPageData = {
  hero: {
    title: string;
    subtitle: string;
  };
  object: ObjectDetail;
};
