import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, roleRequired }) => {
  const { isAuth, role } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  if (role !== roleRequired) {
    alert("Access denied");
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;