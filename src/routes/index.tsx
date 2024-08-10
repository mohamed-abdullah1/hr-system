import { RouteObject } from "react-router-dom";
import Dashboard from "@/pages/Dashboard.page";
import NotFound from "@/components/NotFound";
import { ReactNode } from "react";
import IconsRoutes from "./IconsRoutes";
import Empoloyee from "@/pages/Employee";
import EmployeeAdd from "@/pages/Employee/add";
import Settings from "@/pages/Settings.page";

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
    ignoreInSideBar: false,
  },
  {
    path: "/attendance",
    element: <Empoloyee />,
    title: "Attendance",
    Icon: IconsRoutes["Attendance"],
    ignoreInSideBar: false,
  },
  {
    path: "/award",
    element: <Empoloyee />,
    title: "Award",
    Icon: IconsRoutes["Award"],
    ignoreInSideBar: false,
  },
  {
    path: "/department",
    element: <Empoloyee />,
    title: "Department",
    Icon: IconsRoutes["Department"],
    ignoreInSideBar: false,
  },
  {
    path: "/employee",
    element: <Empoloyee />,
    title: "Employee",
    Icon: IconsRoutes["Employee"],
    ignoreInSideBar: false,
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
    element: <Empoloyee />,
    title: "Leave",
    Icon: IconsRoutes["Leave"],
    ignoreInSideBar: false,
  },
  {
    path: "/loan",
    element: <Empoloyee />,
    title: "Loan",
    Icon: IconsRoutes["Loan"],
    ignoreInSideBar: false,
  },
  {
    path: "/notification",
    element: <Empoloyee />,
    title: "Notification",
    Icon: IconsRoutes["Notification"],
    ignoreInSideBar: false,
  },
  {
    path: "/reports",
    element: <Empoloyee />,
    title: "Reports",
    Icon: IconsRoutes["Reports"],
    ignoreInSideBar: false,
  },
  {
    path: "/settings",
    element: <Settings />,
    title: "Settings",
    Icon: IconsRoutes["Settings"],
    ignoreInSideBar: false,
  },

  {
    path: "*",
    element: NotFound(),
    ignoreInSideBar: true,
  },
];

export default routes;
