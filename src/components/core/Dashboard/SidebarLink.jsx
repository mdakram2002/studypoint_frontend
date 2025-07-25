
import React from "react";
import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { matchPath, NavLink, useLocation } from "react-router-dom";

export const SidebarLink = ({ link, iconName }) => {
  const Icon = Icons[iconName];
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath(route, location.pathname);
  };

  return (
    <NavLink
      to={link.path}
      className={`relative flex w-full px-8 py-2 text-sm font-medium items-center gap-x-2 transition-all duration-200 ${
        matchRoute(link.path)
          ? "bg-yellow-800 text-yellow-50"
          : "bg-opacity-0 text-richblack-50"
      }`}
    >
      <span
        className={`absolute left-0 top-0 h-full w-[0.25rem] bg-yellow-50 ${
          matchRoute(link.path) ? "opacity-100" : "opacity-0"
        }`}
      />
      <Icon className="text-lg" />
      <span>{link.name}</span>
    </NavLink>
  );
};
