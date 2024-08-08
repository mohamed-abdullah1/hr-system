import routes from "@/routes";
import SidebarItem from "./SidebarItem";
import { Accordion } from "./ui/accordion";
import { Input } from "./ui/input";
import { useState } from "react";
import logo from "../../public/logo.svg";
import logoIcon from "../../public/logo-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toggleSidebar } from "@/store/slices/sidebarSlice";
const Sidebar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCollapsed = useSelector<RootState>(
    (state) => state.sidebar.isCollapsed
  );
  console.log("🔥✨ ", { isCollapsed });

  return (
    <div
      className={`px-4 py-2 fixed animate-width  ${
        isCollapsed
          ? "hidden lg:block lg:min-w-[90px] w-[90px]"
          : "min-w-[300px] w-[300px]"
      }  min-h-screen border bg-secondary`}
    >
      <div
        className=" p-2 h-[70px] flex justify-center cursor-pointer"
        onClick={() => {
          navigate("/");
          dispatch(toggleSidebar());
        }}
      >
        <img src={isCollapsed ? logoIcon : logo} className="h-[50px]" />
      </div>
      {!isCollapsed && (
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for a Page"
            className="mb-6 pl-10 pr-4 py-2"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
      )}
      <div className="flex flex-col h-full w-full gap-2">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-2"
        >
          {routes

            .filter((r) => r.title?.toLocaleLowerCase().includes(search))
            .filter((r) => !r.ignoreInSideBar)
            .map((route) => (
              <SidebarItem
                Icon={route.Icon}
                title={route?.title}
                path={route.path}
                key={route.path}
                route={route}
              />
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
