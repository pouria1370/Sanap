import { useAuth } from "@store/Auth/useAuth";
import { Navigate, Outlet, useLocation } from "react-router";

const RequireAuth = () => {
  const token = useAuth();
  const location = useLocation();
  return token.token ? (
    <Outlet />
  ) : (
    <Navigate to="/otp" state={{ from: location }} replace />
  );
};
export default RequireAuth;
