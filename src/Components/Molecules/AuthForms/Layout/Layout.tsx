import { useAuth } from "@store/Auth/useAuth";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

const Layout = () => {
  const ctx = useAuth();

  return (
    <div className="h-screen">
      <div className="flex flex-col items-center relative min-w-[400px] h-[75%] max-w-[500px] my-10 bg-gray-200 container mx-auto">
        <div className="bg-primary-100 items-center  size-full h-[200px] rounded-b-3xl " />
        <div className="absolute mt-20  w-[80%]">
          {ctx.currentForm === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
