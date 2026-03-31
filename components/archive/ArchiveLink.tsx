"use client";

import Link from "next/link";
import { UNIVERSE, ERAS, FACTIONS, TECH, EVENTS } from "@/lib/data/lore";

interface ArchiveLinkProps {
  children: string;
}

/**
 * A utility component that scans text for lore keywords and turns them into interactive CTAs.
 */
export default function ArchiveLink({ children }: ArchiveLinkProps) {
  // Combine all keywords from various categories
  const keywordsArr = [
    { text: "The Fold", category: "universe", id: "fold" },
    { text: "The Great Fracture", category: "events", id: "great-fracture" },
    { text: "Zenith Era", category: "eras", id: "zenith" },
    { text: "Fracture Era", category: "eras", id: "fracture" },
    { text: "Drift Era", category: "eras", id: "drift" },
    { text: "Neural Link", category: "tech", id: "neural-link" },
    { text: "Zenith Gate", category: "tech", id: "zenith-gate" },
    ...FACTIONS.map(f => ({ text: f.name, category: "factions", id: f.id })),
    ...TECH.map(t => ({ text: t.name, category: "tech", id: t.id })),
    ...EVENTS.map(e => ({ text: e.name, category: "events", id: e.id })),
  ];

  // Helper to split text by multiple optional keywords
  const parts = splitWithKeywords(children, keywordsArr);

  return (
    <>
      {parts.map((part, i) => {
        if (part.isKeyword) {
          return (
            <Link 
              key={i} 
              href={`/archive/${part.category}/${part.id}`}
              className="text-[#00f5d4] hover:text-white transition-colors underline underline-offset-4 decoration-dotted decoration-[#00f5d4]/40 hover:decoration-white font-bold"
            >
              {part.text}
            </Link>
          );
        }
        return <span key={i}>{part.text}</span>;
      })}
    </>
  );
}

function splitWithKeywords(text: string, keywords: any[]) {
  let result = [{ text, isKeyword: false, category: "", id: "" }];

  keywords.forEach(({ text: kw, category, id }) => {
    const nextResult: any[] = [];
    result.forEach(part => {
      if (part.isKeyword) {
        nextResult.push(part);
      } else {
        const regex = new RegExp(`(${kw})`, 'g');
        const snippets = part.text.split(regex);
        snippets.forEach(s => {
          if (s === kw) {
            nextResult.push({ text: s, isKeyword: true, category, id });
          } else if (s !== "") {
            nextResult.push({ text: s, isKeyword: false });
          }
        });
      }
    });
    result = nextResult;
  });

  return result;
}
