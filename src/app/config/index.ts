import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  db_url: process.env.DB_URL,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  bcrypt_salt:process.env.BCRYPT_SALT
};
