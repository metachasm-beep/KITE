import { prisma } from "./db";
import { MediaItem, ObjectStatus } from "./types/core";

export type ArtifactSpec = {
  label: string;
  value: string;
};

export type Artifact = {
  id: string;
  slug: string;
  title: string;
  series: string;
  description: string;
  price: string;
  specs: ArtifactSpec[];
  status: ObjectStatus;
  media: MediaItem;
};

/**
 * Fetches all artifacts from the Supabase database via Prisma.
 */
export async function getArtifacts(): Promise<Artifact[]> {
  try {
    const dbArtifacts = await prisma.artifact.findMany({
      include: { specs: true },
      orderBy: { createdAt: "desc" },
    });

    // Map Prisma models back to our defined Artifact type
    return dbArtifacts.map((a: any) => ({
      id: a.id,
      slug: a.slug,
      title: a.title,
      series: a.series,
      description: a.description,
      price: a.price,
      status: a.status as ObjectStatus,
      media: {
        src: a.imageUrl || undefined,
        placeholderLabel: `MOD_INIT // ${a.slug.toUpperCase()}`
      },
      specs: a.specs.map((s: any) => ({ label: s.label, value: s.value })),
    }));
  } catch (error) {
    console.error("Failed to fetch artifacts from DB:", error);
    return [];
  }
}

/**
 * Retrieves a single artifact by its URL slug from the Supabase database.
 */
export async function getArtifactBySlug(slug: string): Promise<Artifact | null> {
  try {
    const a = await prisma.artifact.findUnique({
      where: { slug },
      include: { specs: true },
    });

    if (!a) return null;

    return {
      id: a.id,
      slug: a.slug,
      title: a.title,
      series: a.series,
      description: a.description,
      price: a.price,
      status: a.status as ObjectStatus,
      media: {
        src: a.imageUrl || undefined,
        placeholderLabel: `MOD_INIT // ${a.slug.toUpperCase()}`
      },
      specs: a.specs.map((s: any) => ({ label: s.label, value: s.value })),
    };
  } catch (error) {
    console.error(`Failed to fetch artifact ${slug} from DB:`, error);
    return null;
  }
}

