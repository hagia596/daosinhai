async function runMigration() {
  const mysql = require('mysql2/promise');
  const fs = require('fs');

  // Parse DATABASE_URL
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
  };

  console.log(`Connecting to database: ${config.host}:${config.port}/${config.database}`);

  try {
    const connection = await mysql.createConnection(config);
    console.log('✓ Connected to database');

    // Read and execute migration
    const migrationSql = fs.readFileSync('./drizzle/0002_certain_dagger.sql', 'utf8');
    
    // Split by semicolon and execute each statement
    const statements = migrationSql.split(';').filter((s: string) => s.trim());
    
    for (const statement of statements) {
      if (statement.trim()) {
        console.log('Executing:', statement.substring(0, 50) + '...');
        try {
          await connection.execute(statement);
          console.log('✓ Statement executed');
        } catch (error: any) {
          if (error.code === 'ER_TABLE_EXISTS_ERROR') {
            console.log('✓ Table already exists');
          } else {
            throw error;
          }
        }
      }
    }

    console.log('✓ Migration completed successfully');
    await connection.end();
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigration();
