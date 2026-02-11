import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useAuth } from "../../context/AuthContext";

export default function Projects(){
 const { user } = useAuth();
 const [title,setTitle]=useState("");
 const [description,setDescription]=useState("");

 const submitProject=async()=>{
  await supabase.from("projects").insert({
   title,
   description,
   user_id:user.id
  })
 };

 return(
 <div>
   <h2>Submit Project</h2>
   <input onChange={e=>setTitle(e.target.value)}/>
   <textarea onChange={e=>setDescription(e.target.value)}/>
   <button onClick={submitProject}>Submit</button>
 </div>
 )
}

import { PaystackButton } from "react-paystack";
import { useAuth } from "../context/AuthContext";

export default function Pay(){
 const { user } = useAuth();

 return(
  <PaystackButton
   email={user.email}
   amount={500000}
   publicKey={import.meta.env.VITE_PAYSTACK_PUBLIC_KEY}
  />
 )
}
