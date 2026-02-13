import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";
import { useAuth } from "../../context/AuthContext";

interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
}

export default function Projects() {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);

  // Fetch user's projects
  const fetchProjects = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from<Project>("projects")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) console.error("Error fetching projects:", error);
    else setProjects(data || []);
  };

  useEffect(() => {
    fetchProjects();
  }, [user]);

  // Submit new project
  const submitProject = async () => {
    if (!user) return;

    const { error } = await supabase.from("projects").insert({
      title,
      description,
      user_id: user.id,
    });

    if (error) console.error("Error submitting project:", error);
    else {
      setTitle("");
      setDescription("");
      fetchProjects(); // refresh list
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Submit New Project</h2>
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "300px" }}
      />
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "300px", height: "80px" }}
      />
      <button onClick={submitProject}>Submit</button>

      <h3 style={{ marginTop: "30px" }}>My Projects</h3>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> - {p.status} <br />
            {p.description} <br />
            <em>Created at: {new Date(p.created_at).toLocaleString()}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

