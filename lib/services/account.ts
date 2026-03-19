import { prisma } from "@/lib/db";
import { AccountPageData, OrderPhase, OrderSummary } from "../types/pages/account";

export async function getAccountData(email: string): Promise<AccountPageData | null> {
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      orders: {
        orderBy: { createdAt: 'desc' },
        include: {
          items: true
        }
      }
    }
  });

  if (!user) return null;

  const orders: OrderSummary[] = user.orders.map(order => ({
    id: order.id,
    totalAmount: order.totalAmount,
    status: order.status as OrderPhase,
    createdAt: order.createdAt.toISOString(),
    itemCount: order.items.reduce((acc, item) => acc + item.quantity, 0)
  }));

  return {
    profile: {
      id: user.id,
      name: user.name || undefined,
      email: user.email || '',
      image: user.image || undefined
    },
    orders,
    recentOrders: orders.slice(0, 3),
    ownedObjects: [], // Logic for owned physical units (NFT or similar mapping in future)
    savedAddresses: [],
    releaseListSubscribed: user.email === 'metachasm@gmail.com' || true,
  };
}

export async function getOrderDetail(id: string, email: string): Promise<any | null> {
  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      user: true,
      items: true,
      timeline: { orderBy: { timestamp: 'desc' } }
    }
  });

  if (!order || order.user.email !== email) return null;

  // Since DB doesn't have address yet in the Order model (it's a separate relation in schema but not linked to Order directly in current schema?)
  // Wait, schema.prisma line 120-131:
  // model Order {
  //   id          String      @id @default(cuid())
  //   userId      String
  //   user      User           @relation(fields: [userId], references: [id])
  //   items     OrderItem[]
  //   timeline  OrderTimeline[]
  // }
  // There is no addressId in Order. I'll mock the address for now or use user's first address.
  
  const userWithAddress = await prisma.user.findUnique({
    where: { email },
    include: { addresses: true }
  });

  const address = userWithAddress?.addresses[0] || {
    line1: "UNKNOWN_SEC_LOC",
    city: "VOID",
    state: "AQ",
    postalCode: "000000",
    country: "IN"
  };

  return {
    id: order.id,
    totalAmount: order.totalAmount,
    status: order.status as OrderPhase,
    createdAt: order.createdAt.toISOString(),
    itemCount: order.items.reduce((acc, item) => acc + item.quantity, 0),
    shippingAddress: address,
    items: order.items.map(item => ({
      id: item.id,
      artifactId: item.artifactId,
      title: item.title,
      quantity: item.quantity,
      price: item.price,
      media: { src: null, placeholderLabel: "MEDIA_OFFLINE" } // Placeholder media for order items for now
    })),
    timeline: order.timeline.map(t => ({
      status: t.status as OrderPhase,
      note: t.note || undefined,
      timestamp: t.timestamp.toISOString()
    }))
  };
}
