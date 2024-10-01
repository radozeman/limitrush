import CreateWorkout from "@/components/pages/create-page/CreateWorkout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/create")({
  component: CreateWorkout,
});
