import useLogout from "@apis/Auth/Hooks/useLogout";
import { useAuth } from "@store/Auth/useAuth";
import { ReactNode, useMemo } from "react";
import { useNavigate } from "react-router";

const UserLayout = ({ children }: { children: ReactNode }) => {
  const existToken = useMemo(
    () => JSON.parse(localStorage.getItem("Auth") as string)?.state?.token,
    []
  );
  const mutate = useLogout();
  const navigate = useNavigate();
  const auth = useAuth();
  const logoutHandler = () => {
    mutate.mutate();
    auth.removeRegisterId();
    auth.removeToken();
    navigate("/login");
  };
  return (
    <div>
      <div className="flex flex-row ">
        {existToken ? (
          <h1 onClick={() => logoutHandler()} className="text-red-700">
            خروج
          </h1>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default UserLayout;
