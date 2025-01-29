import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { RoleBasedViews } from "../../pages/view";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  console.log("GOT THE USER: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  try {
    return RoleBasedViews["patient"].routes[location.pathname].component;
  } catch (error) {
    console.error("Error in ProtectedRoute:", error);
    return <Navigate to="/403" />;
  }
};

export { ProtectedRoute };
