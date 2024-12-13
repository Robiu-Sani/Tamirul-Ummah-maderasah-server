import dotenv from 'dotenv';
import Path from 'path';

dotenv.config({ path: Path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DB_URL,
};
