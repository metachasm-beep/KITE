import { prisma } from "./db";

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
  status: string;
};

/**
 * Fetches all artifacts from the Supabase database via Prisma.
 */
export async function getArtifacts(): Promise<Artifact[]> {
  const dbArtifacts = await prisma.artifact.findMany({
    include: { specs: true },
    orderBy: { createdAt: "desc" },
  });

  // Map Prisma models back to our defined Artifact type
  return dbArtifacts.map((a) => ({
    id: a.id,
    slug: a.slug,
    title: a.title,
    series: a.series,
    description: a.description,
    price: a.price,
    status: a.status as any,
    specs: a.specs.map((s) => ({ label: s.label, value: s.value })),
  }));
}

/**
 * Retrieves a single artifact by its URL slug from the Supabase database.
 */
export async function getArtifactBySlug(slug: string): Promise<Artifact | null> {
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
    status: a.status as any,
    specs: a.specs.map((s) => ({ label: s.label, value: s.value })),
  };
}
