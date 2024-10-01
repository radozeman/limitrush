import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@tanstack/react-form";
const CreateWorkout = () => {
  const form = useForm({
    defaultValues: {
      fullName: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });
  return (
    <>
      <form>
        <Label htmlFor="title">Title</Label>
        <Input type="text" name="title" />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default CreateWorkout;
