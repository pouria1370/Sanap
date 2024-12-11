import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col relative items-center relative size-full min-h-[500px] my-20 bg-gray-200 container mx-auto">
      <div className="bg-primary-100 items-center relative size-full h-[200px] rounded-b-3xl " />
      <div className="absolute mt-32 w-[60%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
