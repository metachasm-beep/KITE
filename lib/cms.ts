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
  status: "AVAILABLE" | "SOLD_OUT" | "ARCHIVED";
};

const MOCK_CATALOG: Artifact[] = [
  {
    id: "A001",
    slug: "void-figure-01",
    title: "VOID FIGURE 01",
    series: "SERIES 01 // ORIGIN",
    description: "The foundational piece of the VOIDLAB speculative design catalog. Engineered with precise tolerances and coated in light-absorbing matte black finishing.",
    price: "₹1,999",
    status: "AVAILABLE",
    specs: [
      { label: "MATERIAL", value: "PLA COMPOSITE" },
      { label: "FINISH", value: "MATTE BLACK #000" },
      { label: "DIMENSIONS", value: "120 x 40 x 40 mm" },
      { label: "EDITION", value: "OPEN" },
    ],
  },
  {
    id: "N012",
    slug: "neuroform-cube",
    title: "NEUROFORM CUBE",
    series: "SERIES 02 // LOGIC",
    description: "A solid-state geometric artifact representing data pathways. Features intersecting structural nodes and a hefty synthetic weight.",
    price: "₹2,499",
    status: "SOLD_OUT",
    specs: [
      { label: "MATERIAL", value: "HEAVY-DENSITY RESIN" },
      { label: "FINISH", value: "SATIN BLACK" },
      { label: "DIMENSIONS", value: "80 x 80 x 80 mm" },
      { label: "EDITION", value: "LIMITED [500]" },
    ],
  },
  {
    id: "S992",
    slug: "synth-protocol",
    title: "SYNTH_PROTOCOL",
    series: "ARCHIVE // PROTOTYPE",
    description: "An early experimental build exploring negative space. Discontinued from primary manufacturing lines.",
    price: "₹999",
    status: "ARCHIVED",
    specs: [
      { label: "MATERIAL", value: "STANDARD PLA" },
      { label: "FINISH", value: "RAW EXTRUSION" },
      { label: "DIMENSIONS", value: "100 x 30 x 10 mm" },
      { label: "EDITION", value: "ARCHIVED" },
    ],
  },
];

/**
 * Fetches all artifacts from the headless CMS.
 * Simulating a network delay to test Suspense/loading states eventually.
 */
export async function getArtifacts(): Promise<Artifact[]> {
  // Simulate CMS latency
  return new Promise((resolve) => setTimeout(() => resolve(MOCK_CATALOG), 300));
}

/**
 * Retrieves a single artifact by its URL slug.
 */
export async function getArtifactBySlug(slug: string): Promise<Artifact | null> {
  const artifact = MOCK_CATALOG.find((a) => a.slug === slug);
  return new Promise((resolve) => setTimeout(() => resolve(artifact || null), 200));
}
