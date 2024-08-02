import { RouteObject } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/components/NotFound";
import { ReactNode } from "react";
import IconsRoutes from "./IconsRoutes";
import Attendance from "@/pages/Attendance";
import Empoloyee from "@/pages/Employee";
import EmployeeAdd from "@/pages/Employee/add";

export type RoutesProps = RouteObject & {
  title?: string;
  Icon?: ReactNode;
  ignoreInSideBar?: boolean;
  children?: RoutesProps[];
};

const routes: RoutesProps[] = [
  {
    path: "/",
    element: <Dashboard />,
    title: "Dashboard",
    Icon: IconsRoutes["Dashboard"],
  },
  {
    path: "/attendance",
    element: <Attendance />,
    title: "Attendance",
    Icon: IconsRoutes["Attendance"],
  },
  {
    path: "/award",
    element: <Attendance />,
    title: "Award",
    Icon: IconsRoutes["Award"],
  },
  {
    path: "/department",
    element: <Attendance />,
    title: "Department",
    Icon: IconsRoutes["Department"],
  },
  {
    path: "/employee",
    element: <Empoloyee />,
    title: "Employee",
    Icon: IconsRoutes["Employee"],
  },
  {
    path: "/employee/new",
    element: <EmployeeAdd />,
    title: "Add Employee",
    Icon: IconsRoutes["Employee"],
    ignoreInSideBar: true,
  },
  {
    path: "/leave",
    element: <Attendance />,
    title: "Leave",
    Icon: IconsRoutes["Leave"],
  },
  {
    path: "/loan",
    element: <Attendance />,
    title: "Loan",
    Icon: IconsRoutes["Loan"],
  },
  {
    path: "/notification",
    element: <Attendance />,
    title: "Notification",
    Icon: IconsRoutes["Notification"],
  },
  {
    path: "/reports",
    element: <Attendance />,
    title: "Reports",
    Icon: IconsRoutes["Reports"],
  },
  {
    path: "/settings",
    element: <Attendance />,
    title: "Settings",
    Icon: IconsRoutes["Settings"],
  },

  {
    path: "*",
    element: NotFound(),
    ignoreInSideBar: true,
  },
];

export default routes;
