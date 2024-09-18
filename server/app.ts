import { Hono } from "hono";
import { logger } from "hono/logger";
import { workoutsRoute } from "./routes/workouts";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("*", logger());

app.get("/", (c) => {
  return c.json({ message: "Hello from Hono" });
});

app.route("/api/workouts", workoutsRoute);

app.use("*", serveStatic({ root: "./client/dist" }));
app.get("*", serveStatic({ path: "./client/dist/index.html" }));

export default app;
