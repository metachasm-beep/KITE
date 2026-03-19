import { MediaItem } from "./core";

export interface CartItem {
  id: string;
  slug: string;
  title: string;
  price: string;
  quantity: number;
  media: MediaItem;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  totalAmount: number;
}
