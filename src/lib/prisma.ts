import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  // Return a dummy client if DATABASE_URL is not set so Next.js doesn't crash during static builds or initial dev load
  if (!process.env.DATABASE_URL) {
    console.warn("⚠️ DATABASE_URL is not set. Prisma will not be able to connect to the database.");
    // This allows the server to start, but queries will fail.
    return new PrismaClient(); 
  }

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
