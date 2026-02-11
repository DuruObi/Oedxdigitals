import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useAuth } from "../context/AuthContext";

export default function useRole(){
 const { user } = useAuth();
 const [role,setRole]=useState(null);

 useEffect(()=>{
  if(!user) return;
  supabase.from("profiles")
   .select("role")
   .eq("id",user.id)
   .single()
   .then(r=>setRole(r.data?.role));
 },[user]);

 return role;
}
