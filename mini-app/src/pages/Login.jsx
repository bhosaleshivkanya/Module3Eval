import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login</h2>

      <button
        onClick={() => {
          login("admin");
          navigate("/admin/dashboard");
        }}
      >
        Login as Admin
      </button>

      <button
        onClick={() => {
          login("customer");
          navigate("/customers/dashboard");
        }}
      >
        Login as Customer
      </button>
    </div>
  );
}

export default Login;