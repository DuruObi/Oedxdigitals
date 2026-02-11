import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";

export default function AdminRoute({children}:any){
 const role = useRole();

 if(role===null) return <div>Loading...</div>;
 if(role!=="admin") return <Navigate to="/dashboard"/>;

 return children;
}
