import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col size-full min-h-[500px] my-20 bg-gray-200 container mx-auto ">
      <div className="bg-teal-500 flex justify-center p-20 items-center relative size-full h-[200px] rounded-b-3xl ">
        <div className="size-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
