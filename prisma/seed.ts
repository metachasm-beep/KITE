import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding artifacts...");

  const artifacts = [
    {
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
  ];

  for (const a of artifacts) {
    await prisma.artifact.upsert({
      where: { slug: a.slug },
      update: {},
      create: {
        slug: a.slug,
        title: a.title,
        series: a.series,
        description: a.description,
        price: a.price,
        status: a.status,
        specs: {
          create: a.specs,
        },
      },
    });
  }

  console.log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
