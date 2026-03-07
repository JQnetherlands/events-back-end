import "dotenv/config";
import * as Sentry from "@sentry/node";
// Ensure to call this before importing any other modules!
console.log("SENTRY_DSN", process.env.SENTRY_DSN);
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
