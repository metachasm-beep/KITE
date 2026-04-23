const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const artifacts = await prisma.artifact.findMany({ take: 1 });
    console.log('✅ Connection successful. Found artifacts:', artifacts.length);
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
