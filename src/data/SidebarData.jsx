import React from "react";
import * as Heroicons from "react-icons/hi";

import { BsFillCalendarMonthFill } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Logo",
    path: "/",
    icon: <Heroicons.HiLightningBolt size={32} />,
    cName: "sidebar-text",
  },

  {
    title: "Home",
    path: "/dashboard",
    icon: <Heroicons.HiHome size={22} />,
    cName: "sidebar-text",
  },

  {
    title: "View Schedule",
    path: "/schedule",
    icon: <BsFillCalendarMonthFill size={22} />,
    cName: "sidebar-text",
  },
  {
    title: "Notes",
    path: "/notes",
    icon: <Heroicons.HiDocumentText size={22} />,
    cName: "sidebar-text",
  },
];
