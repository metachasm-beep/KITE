import ArchiveClient from "./ArchiveClient";
import { getArtifacts } from "@/lib/cms";

export const metadata = {
  title: "Intel Archive | BaseLab Unit",
  description: "Explore the shards of The Fold, the historical timeline of the Great Fracture, and the factions fighting for survival."
};

export default async function ArchivePage() {
  const artifacts = await getArtifacts();
  
  return <ArchiveClient artifacts={artifacts} />;
}
