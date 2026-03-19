import { ObjectCardData, MediaItem } from "../core";

export type CollectionFilterState = {
  sort: 'NEWEST' | 'PRICE_ASC' | 'PRICE_DESC' | 'ALPHABETICAL';
  categories: string[];
  finishes: string[];
};

export type CollectionPageData = {
  hero: {
    title: string;
    subtitle: string;
    media: MediaItem;
  };
  objects: ObjectCardData[];
  filters: CollectionFilterState;
  availableCategories: string[];
  availableFinishes: string[];
};
