import EditWorkout from "@/components/pages/edit-page/EditWorkout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/edit")({
  component: EditWorkout,
});
