import React from "react";
import * as Heroicons from "react-icons/hi";

export const SidebarData = [
  {
    title: "Logo",
    path: "/",
    icon: <Heroicons.HiLightningBolt size={32} />,
    cName: "sidebar-text",
  },

  {
    title: "Home",
    path: "/home",
    icon: <Heroicons.HiOutlineHome size={22} />,
    cName: "sidebar-text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <Heroicons.HiOutlineSearch size={22} />,
    cName: "sidebar-text",
  },
  {
    title: "View Schedule",
    path: "/schedule",
    icon: <Heroicons.HiOutlineCalendar size={22} />,
    cName: "sidebar-text",
  },
  {
    title: "Notes",
    path: "/notes",
    icon: <Heroicons.HiOutlineDocumentAdd size={22} />,
    cName: "sidebar-text",
  },
];
