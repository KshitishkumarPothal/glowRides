// import { defineConfig } from "drizzle-kit";

export default {
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: 'postgresql://neondb_owner:van5P1sNXQDh@ep-wispy-lake-a5cobytb.us-east-2.aws.neon.tech/glow_rides?sslmode=require'
  }
};
