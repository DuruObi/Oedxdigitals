import { PaystackButton } from "react-paystack";
import { useAuth } from "../../context/AuthContext";

export default function PayButton(){
 const { user } = useAuth();

 if(!user) return null;

 return(
  <PaystackButton
   email={user.email}
   amount={500000}
   publicKey={import.meta.env.VITE_PAYSTACK_PUBLIC_KEY}
   text="Pay Invoice"
  />
 )
}

