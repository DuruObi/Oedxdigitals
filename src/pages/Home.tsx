import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to OEDX DIGITALS</h1>
      <p>Your full-stack development and software services</p>

      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}
