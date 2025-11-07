const pool = require('../config/dbConnection');
const fs = require('fs');
const path = require('path');

async function runMigration() {
  try {
    console.log('Running migration...');

    // Read the SQL file
    const sqlFilePath = path.join(__dirname, 'createUsersTable.sql');
    const sql = fs.readFileSync(sqlFilePath, 'utf8');

    // Execute the SQL
    await pool.query(sql);

    console.log('Migration completed successfully!');
  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    // Close the pool
    await pool.end();
  }
}

runMigration();
