import { getArtifacts } from "@/lib/cms";
import CollectionsClient from "./CollectionsClient";

export default async function CollectionsPage() {
  const artifacts = await getArtifacts();
  
  return <CollectionsClient initialArtifacts={artifacts} />;
}
