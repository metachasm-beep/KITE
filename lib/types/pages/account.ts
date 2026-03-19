import { MediaItem, ObjectCardData } from "../core";

export type OrderPhase = 'RECEIVED' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';

export type OrderLineItem = {
  id: string;
  artifactId: string;
  title: string;
  quantity: number;
  price: number;
  media: MediaItem;
};

export type OrderSummary = {
  id: string;
  totalAmount: number;
  status: OrderPhase;
  createdAt: string;
  itemCount: number;
};

export type OrderDetail = OrderSummary & {
  shippingAddress: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  items: OrderLineItem[];
  timeline: Array<{
    status: OrderPhase;
    note?: string;
    timestamp: string;
  }>;
};

export type AccountProfile = {
  id: string;
  name?: string;
  email: string;
  image?: string;
};

export type AccountPageData = {
  profile: AccountProfile;
  orders: OrderSummary[];
  recentOrders: OrderSummary[];
  ownedObjects: ObjectCardData[];
  savedAddresses: any[];
  releaseListSubscribed: boolean;
  selectedOrderId?: string;
};
