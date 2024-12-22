import { useAuth } from "@store/Auth/useAuth";
import { Navigate, Outlet, useLocation } from "react-router";

const RequireAuth = () => {
  const token = useAuth();
  const location = useLocation();
  return token.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default RequireAuth;
