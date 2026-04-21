import mysql from 'mysql2/promise';
import fs from 'fs';

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  console.error('DATABASE_URL not set');
  process.exit(1);
}

const url = new URL(dbUrl);
const config = {
  host: url.hostname,
  port: parseInt(url.port) || 3306,
  user: url.username,
  password: url.password,
  database: url.pathname.slice(1),
  ssl: 'amazon',  // Enable SSL for TiDB
};

console.log(`Connecting to ${config.host}:${config.port}/${config.database}...`);

try {
  const connection = await mysql.createConnection(config);
  console.log('✓ Connected');

  const migrations = [
    'drizzle/0002_certain_dagger.sql',
    'drizzle/0003_groovy_psylocke.sql'
  ];

  for (const migrationFile of migrations) {
    if (!fs.existsSync(migrationFile)) continue;
    
    const sql = fs.readFileSync(migrationFile, 'utf8');
    const statements = sql.split(';').filter(s => s.trim());
    
    console.log(`\nRunning ${migrationFile}...`);
    for (const stmt of statements) {
      if (stmt.trim()) {
        try {
          await connection.execute(stmt);
          console.log('✓', stmt.substring(0, 50) + '...');
        } catch (err) {
          if (err.code === 'ER_TABLE_EXISTS_ERROR') {
            console.log('✓ Table exists');
          } else {
            throw err;
          }
        }
      }
    }
  }

  console.log('\n✓ Migration completed');
  await connection.end();
} catch (error) {
  console.error('✗ Migration failed:', error.message);
  process.exit(1);
}
