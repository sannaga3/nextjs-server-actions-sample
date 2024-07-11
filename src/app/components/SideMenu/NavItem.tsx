"use client";

import { NavItemType } from "@/app/types/common";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const NavItem: FC<NavItemType> = ({ label, link }) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`w-full flex items-center p-4 space-x-3 hover:bg-gray-600 font-medium ${
        pathname === link ? "bg-gray-900 border-r-4 border-r-blue-400" : ""
      }`}
    >
      <div>{label}</div>
    </Link>
  );
};

export default NavItem;
