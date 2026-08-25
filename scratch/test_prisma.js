const { PrismaClient } = require('@prisma/client');
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
const path = require('path');

const dbPath = path.resolve(process.cwd(), 'dev.db');
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

prisma.project.count()
  .then(c => { 
    console.log('SUCCESS! Project count:', c); 
    return prisma.$disconnect(); 
  })
  .catch(e => { 
    console.error('Error:', e.message); 
  });
