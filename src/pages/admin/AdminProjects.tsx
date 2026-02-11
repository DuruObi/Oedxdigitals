import { useEffect,useState } from "react";
import { supabase } from "../../services/supabase";

export default function AdminProjects(){
 const [projects,setProjects]=useState([]);

 useEffect(()=>{
  supabase.from("projects").select("*")
   .then(r=>setProjects(r.data||[]));
 },[]);

 const updateStatus=(id:string,status:string)=>{
  supabase.from("projects")
   .update({status})
   .eq("id",id);
 };

 return(
 <div>
  <h2>All Projects</h2>
  {projects.map((p:any)=>(
   <div key={p.id}>
    <h3>{p.title}</h3>
    <select onChange={e=>updateStatus(p.id,e.target.value)}>
      <option>pending</option>
      <option>in-progress</option>
      <option>completed</option>
    </select>
   </div>
  ))}
 </div>
 )
}
