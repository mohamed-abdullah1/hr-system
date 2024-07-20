import routes from "@/routes";
import SidebarItem from "./SidebarItem";
import { Accordion } from "./ui/accordion";
import { Input } from "./ui/input";
import { useState } from "react";
import logo from "../../public/logo.svg";
const Sidebar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="px-4 py-2 fixed min-w-[300px] w-[300px] min-h-screen border bg-secondary">
      <div className=" p-2 h-[70px] flex justify-center ">
        <img src={logo} className="h-[50px]" />
      </div>
      <Input
        type="text"
        placeholder="Search for a Page"
        className="mb-6"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-col h-full w-full gap-2">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-2"
        >
          {routes
            .filter((r) => r.title?.toLocaleLowerCase().includes(search))
            .filter((r) => r.path !== "*")
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
