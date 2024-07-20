import { RouteObject } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/components/NotFound";
import { ReactNode } from "react";
import IconsRoutes from "./IconsRoutes";
import Attendance from "@/pages/Attendance";

export type RoutesProps = RouteObject & {
  title?: string;
  Icon?: ReactNode;
  children?: RoutesProps[];
};

const routes: RoutesProps[] = [
  {
    path: "/",
    element: Dashboard(),
    title: "Dashboard",
    Icon: IconsRoutes["Dashboard"],
  },
  {
    path: "/attendance",
    element: Attendance(),
    title: "Attendance",
    Icon: IconsRoutes["Attendance"],
    children: [
      {
        path: "/attendance/users",
        element: Attendance(),
        title: "Users",
        Icon: IconsRoutes["Attendance"],
      },
    ],
  },
  {
    path: "/award",
    element: Attendance(),
    title: "Award",
    Icon: IconsRoutes["Award"],
  },
  {
    path: "/department",
    element: Attendance(),
    title: "Department",
    Icon: IconsRoutes["Department"],
  },
  {
    path: "/employee",
    element: Attendance(),
    title: "Employee",
    Icon: IconsRoutes["Employee"],
  },
  {
    path: "/leave",
    element: Attendance(),
    title: "Leave",
    Icon: IconsRoutes["Leave"],
  },
  {
    path: "/loan",
    element: Attendance(),
    title: "Loan",
    Icon: IconsRoutes["Loan"],
  },
  {
    path: "/notification",
    element: Attendance(),
    title: "Notification",
    Icon: IconsRoutes["Notification"],
  },
  {
    path: "/reports",
    element: Attendance(),
    title: "Reports",
    Icon: IconsRoutes["Reports"],
  },
  {
    path: "/settings",
    element: Attendance(),
    title: "Settings",
    Icon: IconsRoutes["Settings"],
  },

  {
    path: "*",
    element: NotFound(),
  },
];

export default routes;
