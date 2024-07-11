import { FC } from "react";
import NavList from "./NavList";

const SideMenu: FC = () => {
  return (
    <div>
      <h1 className="px-4 text-2xl font-bold">Next Task</h1>
      <NavList />
    </div>
  );
};

export default SideMenu;
