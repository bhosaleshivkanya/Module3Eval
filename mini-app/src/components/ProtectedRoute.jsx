import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, roleRequired }) => {
  const { isAuth, role: userRole } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  if (role !== roleRequired) {
    alert("Access denied");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;