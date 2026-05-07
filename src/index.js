import "./instrument.mjs";
import "dotenv/config";
import express from "express";
import * as Sentry from "@sentry/node";
import usersRouter from "./routes/users.js";
import eventsRouter from "./routes/events.js";
import categoriesRouter from "./routes/categories.js";
import loginRouter from "./routes/login.js";
import logMiddleware from "./middleware/logMiddleware.js";
import errorHandler from "./middleware/errorHandler.js";
import authMiddleware from "./middleware/auth.js";
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());
app.use(logMiddleware);

app.use("/users", usersRouter);
app.use("/events", eventsRouter);
app.use("/categories", categoriesRouter);
app.use("/login", loginRouter);
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.get("/", (req, res) => {
  res.json({
    name: "Events API",
    status: "running",
    version: "1.0.0",
    description:
      "Backend API for managing events, categories, users, and authentication.",
    documentation: "https://github.com/JQnetherlands/events-back-end",
    baseUrl: "https://your-render-url.onrender.com",
    endpoints: {
      auth: "/login",
      users: "/users",
      events: "/events",
      categories: "/categories",
    },
    healthCheck: "/",
  });
});
app.get("/test-env", authMiddleware, (req, res) => {
  res.json({
    secretFromEnv: process.env.AUTH_SECRET_KEY,
  });
});

Sentry.setupExpressErrorHandler(app);

app.use(errorHandler);
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
