import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await register(email, password);
    nav("/dashboard");
  };

  return (
    <div>
      <h2>Register</h2>
      <input onChange={e => setEmail(e.target.value)} placeholder="email" />
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
