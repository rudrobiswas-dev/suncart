// import { betterAuth } from "better-auth";
// import { nextCookies } from "better-auth/next-js";
// import Database from "better-sqlite3";

// export const auth = betterAuth({
//   database: new Database(process.env.SQLITE_DB_PATH || "./sqlite.db"),
//   secret: process.env.BETTER_AUTH_SECRET,
//   baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
//   emailAndPassword: {
//     enabled: true,
//   },
//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENT_ID || "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
//     },
//   },
//   plugins: [nextCookies()],
// });



// import { betterAuth } from "better-auth";
// import { nextCookies } from "better-auth/next-js";
// import clientPromise from "./db";

// export const auth = betterAuth({
//   database: clientPromise,

//   secret: process.env.BETTER_AUTH_SECRET,
//   baseURL: process.env.BETTER_AUTH_URL,

//   emailAndPassword: {
//     enabled: true,
//   },

//   plugins: [nextCookies()],
// });


// import "dotenv/config";
// import { betterAuth } from "better-auth";
// import { nextCookies } from "better-auth/next-js";

// export const auth = betterAuth({
//   database: process.env.DATABASE_URL,

//   secret: process.env.BETTER_AUTH_SECRET,
//   baseURL: process.env.BETTER_AUTH_URL,

//   emailAndPassword: {
//     enabled: true,
//   },

//   plugins: [nextCookies()],
// });

// import { betterAuth } from "better-auth";
// import { nextCookies } from "better-auth/next-js";
// import { Pool } from "pg";
// import { Kysely, PostgresDialect } from "kysely";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// const db = new Kysely({
//   dialect: new PostgresDialect({
//     pool,
//   }),
// });

// export const auth = betterAuth({
//   database: db, // ✅ THIS IS THE CORRECT FORM

//   secret: process.env.BETTER_AUTH_SECRET,
//   baseURL: process.env.BETTER_AUTH_URL,

//   emailAndPassword: {
//     enabled: true,
//   },

//   plugins: [nextCookies()],
// });



// import { betterAuth } from "better-auth";
// import { nextCookies } from "better-auth/next-js";
// import { neon } from "@neondatabase/serverless";

// const sql = neon(process.env.DATABASE_URL);

// export const auth = betterAuth({
//   database: sql, // ✅ THIS IS THE CORRECT NEON MODE

//   secret: process.env.BETTER_AUTH_SECRET,
//   baseURL: process.env.BETTER_AUTH_URL,

//   emailAndPassword: {
//     enabled: true,
//   },

//   plugins: [nextCookies()],
// });


import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const auth = betterAuth({
  database: pool, // ✅ correct for pg driver

  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,

  emailAndPassword: {
    enabled: true,
  },

  plugins: [nextCookies()],
});