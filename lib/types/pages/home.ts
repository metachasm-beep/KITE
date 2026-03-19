import { MediaItem, ObjectCardData, CollectionSummary } from "../core";

export type HomePageData = {
  hero: {
    title: string[];
    subtitle: string;
    cta: { label: string; href: string }[];
    telemetry: { label: string; value: string }[];
  };
  currentDrop: {
    title: string;
    subtitle: string;
    object: ObjectCardData;
  };
  philosophy: {
    title: string;
    content: string;
    stats: { label: string; value: string }[];
  };
  featuredObject: {
    object: ObjectCardData;
    specs: { label: string; value: string }[];
  };
};
