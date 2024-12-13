import Layout from "@components/Molecules/OtpForms/Layout/Layout";
import { useAuth } from "@store/Auth/useAuth";
import { Navigate, useLocation } from "react-router";

const OtpFormsViewer = () => {
  const token = useAuth();
  const location = useLocation();
  return !token.token ? (
    <Layout />
  ) : (
    <Navigate to="/welcome" state={{ from: location }} replace />
  );
};

export default OtpFormsViewer;
