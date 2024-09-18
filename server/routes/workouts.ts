import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const workoutSechema = z.object({
  id: z.number().min(1).int().positive(),
  name: z.string().min(3).max(20),
});

const createPostSchema = workoutSechema.omit({ id: true });
type Workout = z.infer<typeof workoutSechema>;

const dbWorkouts: Workout[] = [
  {
    id: 1,
    name: "fullbody A",
  },
  {
    id: 2,
    name: "fullbody B",
  },
  {
    id: 3,
    name: "fullbody A",
  },
];

export const workoutsRoute = new Hono()
  .get("/", (c) => {
    return c.json({ workouts: dbWorkouts });
  })
  .post("/", zValidator("json", createPostSchema), async (c) => {
    const workout = await c.req.valid("json");
    dbWorkouts.push({ ...workout, id: dbWorkouts.length + 1 });
    c.status(201);
    return c.json(workout);
  })
  .get("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const workout = dbWorkouts.find((workout) => workout.id === id);
    if (!workout) {
      return c.notFound();
    }
    return c.json({ workout });
  })
  .delete("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const workout = dbWorkouts.find((workout) => workout.id === id);
    if (!workout) {
      return c.notFound();
    }
    const workoutIndex = dbWorkouts.indexOf(workout);
    dbWorkouts.splice(workoutIndex, 1);
    return c.json({ workout });
  });
//   .put();
