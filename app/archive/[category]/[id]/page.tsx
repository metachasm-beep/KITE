import { notFound } from "next/navigation";
import { ERAS, FACTIONS, TECH, EVENTS } from "@/lib/data/lore";
import LoreEntryClient from "./LoreEntryClient";

export default async function LoreEntryPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;

  let entry: any = null;

  switch (category) {
    case "eras":
      entry = ERAS.find((e) => e.id === id);
      break;
    case "factions":
      entry = FACTIONS.find((f) => f.id === id);
      break;
    case "tech":
      entry = TECH.find((t) => t.id === id);
      break;
    case "events":
      entry = EVENTS.find((e) => e.id === id);
      break;
    default:
      notFound();
  }

  if (!entry) notFound();

  return <LoreEntryClient entry={entry} category={category} />;
}
