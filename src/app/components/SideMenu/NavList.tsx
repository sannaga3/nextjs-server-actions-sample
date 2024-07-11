import { NavItemType } from "@/app/types/common";
import { FC } from "react";
import NavItem from "./NavItem";

const navList: NavItemType[] = [
  {
    label: "All",
    link: "/tasks",
  },
  {
    label: "Completed",
    link: "/tasks/completed",
  },
  {
    label: "UnCompleted",
    link: "/tasks/un_completed",
  },
];

const NavList: FC = () => {
  return (
    <div className="mt-24">
      {navList.map((item) => (
        <NavItem key={item.link} label={item.label} link={item.link} />
      ))}
    </div>
  );
};

export default NavList;
