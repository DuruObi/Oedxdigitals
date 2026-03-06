import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useAuth } from "../../context/AuthContext";
import { PaystackButton } from "react-paystack";

export default function Projects() {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitProject = async () => {
    await supabase.from("projects").insert({
      title,
      description,
      user_id: user.id,
    });
  };

  return (
    <div>
      <h2>Submit Project</h2>

      <input
        placeholder="Project Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Project Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={submitProject}>Submit</button>

      <h3>Pay Project Fee</h3>

      <PaystackButton
        email={user.email}
        amount={500000}
        publicKey={import.meta.env.VITE_PAYSTACK_PUBLIC_KEY}
        text="Pay with Paystack"
      />
    </div>
  );
}
