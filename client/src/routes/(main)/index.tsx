import { createFileRoute } from "@tanstack/react-router";
import { api } from "../../lib/api";
import { type Workout } from "../../../../server/routes/workouts";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/(main)/")({
  component: Index,
});

async function getWorkouts() {
  const res = await api.workouts.$get();
  if (!res.ok) {
    throw new Error("Server error!");
  }
  const data = await res.json();
  return data;
}

function Index() {
  const { isPending, error, data } = useQuery({
    queryKey: ["workouts"],
    queryFn: getWorkouts,
  });
  console.log(data, "data");
  if (error) {
    console.log(error);
    return "Error check console.";
  }
  return (
    <>
      {isPending
        ? "Loading..."
        : data?.length &&
          data.map((expanse: Workout, index: number) => {
            return <div key={index}>{expanse.name}</div>;
          })}
    </>
  );
}
