import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col items-center relative max-w-[500px]  my-20 bg-gray-200 container mx-auto">
      <div className="bg-primary-100 items-center  size-full h-[200px] rounded-b-3xl " />
      <div className="absolute mt-32 w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
