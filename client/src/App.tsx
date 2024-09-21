import { useEffect, useState } from "react";
import { api } from "./lib/api";
import { type Workout } from "../../server/routes/workouts";

function App() {
  const [expanses, setExpanses] = useState<Workout[] | undefined>();
  useEffect(() => {
    async function getData() {
      const res = await api.workouts.$get();
      const data = await res.json();
      setExpanses(data.workouts);
    }
    getData();
  }, []);
  console.log(expanses);
  return (
    <>
      {expanses?.length &&
        expanses.map((expanse: Workout, index: number) => {
          return <div key={index}>{expanse.name}</div>;
        })}
    </>
  );
}

export default App;
