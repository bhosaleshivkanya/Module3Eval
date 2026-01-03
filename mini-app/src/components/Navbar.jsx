import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: "10px", background: "#eee" }}>
      <Link to="/login">Login</Link> |{" "}
      <Link to="/admin/dashboard">Admin</Link> |{" "}
      <Link to="/customers/dashboard">Customer</Link>
    </div>
  );
}

export default Navbar;