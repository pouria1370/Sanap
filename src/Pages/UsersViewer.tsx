import UserLayout from "@components/Molecules/Users/Layout/UserLayout";
import { Outlet } from "react-router";

const UsersViewer = () => {
  return (
    <UserLayout>
      <Outlet />
    </UserLayout>
  );
};

export default UsersViewer;
