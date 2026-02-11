import { useState } from "react";
import { supabase } from "../services/supabase";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitProject = async () => {

    const { data: { user } } = await supabase.auth.getUser();

    await supabase.from("projects").insert({
      title: title,
      description: description,
      user_id: user?.id
    });

    alert("Project submitted!");
  };

  return (
    <div>
      <h1>Submit Project</h1>

      <input
        placeholder="Project Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={submitProject}>
        Submit
      </button>
    </div>
  );
}
