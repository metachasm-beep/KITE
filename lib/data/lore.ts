export type Era = {
  id: string;
  name: string;
  years: string;
  aesthetic: string;
  description: string;
  toneHints: string[];
  tagline: string;
};

export type Faction = {
  id: string;
  name: string;
  era: string;
  description: string;
  motto: string;
};

export type UniverseInfo = {
  name: string;
  tagline: string;
  summary: string;
  baselab_role: string;
  key_events: Array<{ date: string; event: string; description: string }>;
};

export const UNIVERSE: UniverseInfo = {
  name: "The Fold",
  tagline: "A Shattered Reality in the Void.",
  summary: "The Fold is a non-linear dimension that exists between the stars. Once a stable highway for Type III civilizations, a mathematical error during a spatial folding procedure caused 'The Great Fracture'—a cataclysm that shattered the dimension into thousands of isolated 'shards'.",
  baselab_role: "Unit_01 (Baselab) is a high-altitude research station orbiting the relatively stable Vertex Shard. We use Neural Link technology to probe the Fold, reconstructing lost ship designs from digital echoes and materializing them as high-detail collectibles.",
  key_events: [
    {
      date: "Fracture Point Zero",
      event: "The Great Fracture",
      description: "The collapse of the Zenith Gate, leading to the fragmentation of spatial folding infrastructure."
    },
    {
      date: "Post-Fracture Year 14",
      event: "The First Reconstruction",
      description: "Baselab successfully materializes the first 'Zenith' class hull from a salvaged neural fragment."
    },
    {
      date: "Current Period",
      event: "The Archival Age",
      description: "Systematic mapping of Fold shards and recovery of diverse fleet configurations."
    }
  ]
};

export const ERAS: Era[] = [
  {
    id: "zenith",
    name: "The Zenith Era",
    years: "Pre-Fracture - Fracture Year 0",
    aesthetic: "Pristine, Geometric, High-Energy",
    description: "The peak of Architect civilization. Ships are masterworks of spatial symmetry, characterized by smooth, high-index surfaces and integrated energy manifolds. These designs represent 'Order' at its most refined.",
    toneHints: ["pristine", "elegant", "advanced"],
    tagline: "Symmetry in the Eternal Light."
  },
  {
    id: "fracture",
    name: "The Fracture Era",
    years: "Fracture Year 1 - Year 50",
    aesthetic: "Jagged, Experimental, Unstable",
    description: "A period of desperation and rapid adaptation. Ships from this era are often experimental, featuring exposed conduits and asymmetric hulls to compensate for the tearing of space-time. These are the scars of history materialize.",
    toneHints: ["agile", "aggressive", "experimental"],
    tagline: "The Beauty of Broken Things."
  },
  {
    id: "drift",
    name: "The Drift Era",
    years: "Year 51 - Present",
    aesthetic: "Industrial, Salvaged, Heavy",
    description: "The current age of survival. Known as the 'Scavenger Age', ships are kitbashed from multiple eras, prioritizing utility and durability over aesthetics. These rugged vessels are the lifeblood of shard-to-shard commerce.",
    toneHints: ["industrial", "rugged", "utilitarian"],
    tagline: "Survival Across the Shards."
  }
];

export const FACTIONS: Faction[] = [
  {
    id: "the_aligned",
    name: "The Aligned",
    era: "zenith",
    description: "An elite cadre of spatial engineers dedicated to the preservation of Order. Their ships are characterized by white and cyan materials, balanced geometries, and high-energy manifolds.",
    motto: "Symmetry in all Shards."
  },
  {
    id: "void_siphons",
    name: "Void Siphons",
    era: "drift",
    description: "Scavengers who harvest spatial echoes from the edges of the Great Fracture. Their ships are industrial, often using salvaged Architect parts in unconventional ways.",
    motto: "Whatever the Void Spits Out."
  },
  {
    id: "shard_crawlers",
    name: "Shard Crawlers",
    era: "fracture", // fixed typo from 'frawcture'
    description: "Traders and nomadic fleets who wander the Shards. Their ships are highly experimental, adaptive, and often feature asymmetric, jagged hulls.",
    motto: "Fracture or Thrive."
  }
];

// Helper to determine lore dynamically based on generic product series
export function getProductLore(series: string): { era: Era, faction: Faction } {
  // Simple deterministic map based on text hash
  let sum = 0;
  for (let i = 0; i < series.length; i++) {
    sum += series.charCodeAt(i);
  }
  
  const era = ERAS[sum % ERAS.length];
  
  // Find a faction matching this era, or fallback
  const fallbackFaction = FACTIONS[sum % FACTIONS.length];
  const matchingFactions = FACTIONS.filter(f => f.era === era.id);
  
  const faction = matchingFactions.length > 0 
    ? matchingFactions[sum % matchingFactions.length] 
    : fallbackFaction;
    
  return { era, faction };
}
