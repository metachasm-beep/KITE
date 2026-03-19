export type ObjectStatus = 'AVAILABLE' | 'SOLD_OUT' | 'ARCHIVED';

export type MediaItem = {
  src?: string;
  placeholderLabel?: string;
  alt?: string;
};

export type ObjectSpec = {
  label: string;
  value: string;
};

export type ObjectCardData = {
  slug: string;
  title: string;
  series: string;
  price: string;
  status: ObjectStatus;
  media: MediaItem;
  specs?: ObjectSpec[];
};

export type CollectionSummary = {
  id: string;
  title: string;
  slug: string;
  media: MediaItem;
  objectCount: number;
};
