import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { RoleBasedViews } from "../../pages/view";
import { useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user || !user.role) {
    return <Navigate to="/" />;
  }
  try {
    return RoleBasedViews[user.role].routes[location.pathname].component;
  } catch (error) {
    console.error("Error in ProtectedRoute:", error);
    return <Navigate to="/403" />;
  }
};

export { ProtectedRoute };
