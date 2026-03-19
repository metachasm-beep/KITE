import { getArtifactBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";
import ArtifactDetailClient from "./ArtifactDetailClient";

export default async function ArtifactDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const artifact = await getArtifactBySlug(resolvedParams.slug);

  if (!artifact) {
    notFound();
  }

  return <ArtifactDetailClient artifact={artifact} />;
}
