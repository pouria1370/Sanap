import { useAuth } from "@store/Auth/useAuth";
import useLogout from "@apis/Auth/Hooks/useLogout";
import { useNavigate } from "react-router";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { useMemo } from "react";

const Layout = () => {
  const existToken = useMemo(
    () => JSON.parse(localStorage.getItem("Auth") as string)?.state?.token,
    []
  );
  const ctx = useAuth();
  const mutate = useLogout();
  const navigate = useNavigate();

  const logoutHandler = () => {
    mutate.mutate();
    navigate("/login");
  };
  console.log(existToken);
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center relative min-w-[400px] h-[75%] max-w-[500px] my-10 bg-gray-200 container mx-auto">
        <div className="bg-primary-100 items-center  size-full h-[200px] rounded-b-3xl " />
        <div className="absolute mt-20  w-[80%]">
          {existToken ? (
            <h1 onClick={() => logoutHandler()} className="text-red-700">
              خروج
            </h1>
          ) : null}
          {ctx.currentForm === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
