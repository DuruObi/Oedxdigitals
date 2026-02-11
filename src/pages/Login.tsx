import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
 const { login } = useAuth();
 const nav = useNavigate();

 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const handleLogin = async ()=>{
  await login(email,password);
  nav("/dashboard");
 };

 return(
 <div>
   <h2>Login</h2>
   <input onChange={e=>setEmail(e.target.value)} placeholder="email"/>
   <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="password"/>
   <button onClick={handleLogin}>Login</button>
 </div>
 )
}

import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Register(){
 const { register } = useAuth();
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 return(
 <div>
   <input onChange={e=>setEmail(e.target.value)}/>
   <input type="password" onChange={e=>setPassword(e.target.value)}/>
   <button onClick={()=>register(email,password)}>Register</button>
 </div>
 )
}

create table projects (
 id uuid primary key default uuid_generate_v4(),
 user_id uuid references auth.users(id),
 title text,
 description text,
 status text default 'pending',
 created_at timestamp default now()
);
