export type Era = {
  id: string;
  name: string;
  years: string;
  aesthetic: string;
  description: string;
  toneHints: string[];
  tagline: string;
  imagePath?: string;
};

export type Faction = {
  id: string;
  name: string;
  era: string;
  description: string;
  longDescription: string;
  motto: string;
  imagePath?: string;
};

export type LoreEntry = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  imagePath: string;
  relatedIds: string[];
};

export type CategoryData = {
  tech: LoreEntry[];
  events: LoreEntry[];
};

export type UniverseInfo = {
  name: string;
  tagline: string;
  summary: string;
  longSummary: string;
  baselab_role: string;
  key_events: Array<{ date: string; event: string; id: string; description: string }>;
  imagePath: string;
};

export const UNIVERSE: UniverseInfo = {
  name: "The Fold",
  tagline: "A Shattered Reality in the Void.",
  summary: "The Fold is a non-linear dimension that exists between the stars. Once a stable highway for Type III civilizations, a mathematical error during a spatial folding procedure caused 'The Great Fracture'—a cataclysm that shattered the dimension into thousands of isolated 'shards'.",
  longSummary: "The Fold is not a place, but a condition of space-time. Discovered by the Architects during the Zenith Era, it allowed for instantaneous travel between galaxies by 'folding' the fabric of reality. However, the dimension was never meant for permanent habitation. The Great Fracture transformed this elegant highway into a labyrinth of jagged 'Shards'—isolated pockets of reality drifting in a sea of spatial static. To navigate the Fold today is to gamble with one's own existence, as the laws of physics vary from one Shard to the next.",
  baselab_role: "Unit_01 (Baselab) is a high-altitude research station orbiting the relatively stable Vertex Shard. We use Neural Link technology to probe the Fold, reconstructing lost ship designs from digital echoes and materializing them as high-detail collectibles.",
  imagePath: "/images/lore/the_fold_nebula.png",
  key_events: [
    {
      date: "Fracture Point Zero",
      event: "The Great Fracture",
      id: "great-fracture",
      description: "The collapse of the Zenith Gate, leading to the fragmentation of spatial folding infrastructure."
    },
    {
      date: "Post-Fracture Year 14",
      event: "The First Reconstruction",
      id: "first-reconstruction",
      description: "Baselab successfully materializes the first 'Zenith' class hull from a salvaged neural fragment."
    },
    {
      date: "Current Period",
      event: "The Archival Age",
      id: "archival-age",
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
    description: "The peak of Architect civilization. Ships are masterworks of spatial symmetry, characterized by smooth, high-index surfaces and integrated energy manifolds.",
    tagline: "Symmetry in the Eternal Light.",
    toneHints: ["pristine", "elegant", "advanced"],
    imagePath: "/images/lore/zenith_era_ship.png"
  },
  {
    id: "fracture",
    name: "The Fracture Era",
    years: "Fracture Year 1 - Year 50",
    aesthetic: "Jagged, Experimental, Unstable",
    description: "A period of desperation and rapid adaptation. Ships from this era are often experimental, featuring exposed conduits and asymmetric hulls.",
    tagline: "The Beauty of Broken Things.",
    toneHints: ["agile", "aggressive", "experimental"],
    imagePath: "/images/lore/great_fracture.png"
  },
  {
    id: "drift",
    name: "The Drift Era",
    years: "Year 51 - Present",
    aesthetic: "Industrial, Salvaged, Heavy",
    description: "The current age of survival. Known as the 'Scavenger Age', ships are kitbashed from multiple eras, prioritizing utility and durability over aesthetics.",
    tagline: "Survival Across the Shards.",
    toneHints: ["industrial", "rugged", "utilitarian"],
    imagePath: "/images/lore/drift_era_station.png"
  }
];

export const FACTIONS: Faction[] = [
  {
    id: "the_aligned",
    name: "The Aligned",
    era: "zenith",
    description: "An elite cadre of spatial engineers dedicated to the preservation of Order.",
    longDescription: "The Aligned were the primary architects behind the 'Zenith Fleet'. They believed that mathematical symmetry was the only way to stabilize the Fold. Their ships are characterized by white and cyan materials, balanced geometries, and high-energy manifolds. In the modern age, they exist only as digital echoes within the Fold, their consciousness uploaded into the very Gate systems that eventually failed.",
    motto: "Symmetry in all Shards.",
    imagePath: "/images/lore/aligned_faction_citadel.png"
  },
  {
    id: "void_siphons",
    name: "Void Siphons",
    era: "drift",
    description: "Scavengers who harvest spatial echoes from the edges of the Great Fracture.",
    longDescription: "Formed in the aftermath of the cataclysm, the Void Siphons are the lifeblood of the Drift Era. They specialize in harvesting 'Echo Matter'—raw spatial energy that leaks from the edges of the Great Fracture. Their ships are rugged, industrial hulks, often literal 'flying scrapheaps' that are somehow held together by sheer engineering will and salvaged Architect tech.",
    motto: "Whatever the Void Spits Out.",
    imagePath: "/images/lore/drift_era_station.png"
  },
  {
    id: "shard_crawlers",
    name: "Shard Crawlers",
    era: "fracture",
    description: "Traders and nomadic fleets who wander the Shards during the peak of the instability.",
    longDescription: "The Shard Crawlers were the first to master the art of 'Shard-Hopping'—the dangerous procedure of jumping between isolated pockets of reality. Their vessels are jagged and asymmetric, designed to 'cut' through the spatial static that defines the Fracture Era. They are nomads by necessity, constantly moving to stay ahead of the drifting static clouds.",
    motto: "Fracture or Thrive.",
    imagePath: "/images/lore/great_fracture.png"
  }
];

export const TECH: LoreEntry[] = [
  {
    id: "neural-link",
    name: "Neural Link",
    description: "A biological-digital bridge used to interface with the Fold's neural fragments.",
    longDescription: "The Neural Link is the core technology used by Baselab archivists. It creates a localized spatial fold within the human consciousness, allowing the mind to perceive the digital echoes of lost ship designs. Without the Link, the Fold appears as nothing more than background radiation; with it, a vast graveyard of history is revealed.",
    imagePath: "/images/lore/neural_link_interface.png",
    relatedIds: ["baselab", "the-fold"]
  },
  {
    id: "zenith-gate",
    name: "The Zenith Gate",
    description: "The massive spatial folding structure whose collapse triggered the Great Fracture.",
    longDescription: "Once the centerpiece of the Architects' interstellar empire, the Zenith Gate was designed to hold the Fold open permanently. At exactly 14:02 on Point Zero, a calculation error involving a Prime Shard caused the Gate's energy manifold to invert. The resulting implosion didn't just destroy the Gate—it shattered the very dimension it was meant to stabilize.",
    imagePath: "/images/lore/great_fracture.png",
    relatedIds: ["the-fold", "great-fracture"]
  }
];

export const EVENTS: LoreEntry[] = [
  {
    id: "great-fracture",
    name: "The Great Fracture",
    description: "The cataclysmic event that shattered the Fold into thousands of shards.",
    longDescription: "The Great Fracture was not a single explosion, but a cascading failure of spatial constants. Across the span of three seconds, the 'Eternal Highway' of the Fold was torn into fragments. Planetary systems were displaced, entire fleets were lost in the static, and the once-continuous dimension became a series of isolated bubbles known as Shards.",
    imagePath: "/images/lore/great_fracture.png",
    relatedIds: ["zenith-gate", "the-fold"]
  },
  {
    id: "first-reconstruction",
    name: "The First Reconstruction",
    description: "The founding moment of Baselab and the dawn of the Archival Age.",
    longDescription: "Fourteen years after the Fracture, a rogue engineer named Silas Vane discovered a stable neural bridge in the Vertex Shard. Using a prototype Neural Link, he successfully materialized a small 'Zenith' scout hull. This was the first time an object from the pre-fracture world had been reconstructed. This moment marked the end of the Desperation Era and the beginning of the Archival Age.",
    imagePath: "/images/lore/neural_link_interface.png",
    relatedIds: ["neural-link", "zenith"]
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
