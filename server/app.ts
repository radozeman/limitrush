import { Hono } from "hono";
import { logger } from "hono/logger";
import { workoutsRoute } from "./routes/workouts";
const app = new Hono();

app.use("*", logger());

app.get("/", (c) => {
  return c.json({ message: "Hello from Hono" });
});

app.route("/api/workouts", workoutsRoute);

export default app;
