import fs from 'fs';

export default function dbFileCheck() {
  if (!fs.existsSync('db.json')) {
    console.log('Database is Empty. Create some data!');
    process.exit(1);
  }
}
