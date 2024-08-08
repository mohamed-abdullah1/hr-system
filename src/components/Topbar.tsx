import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  ChevronDown,
  Globe,
  LogOut,
  Mail,
  MenuIcon,
  MessageSquare,
  MoonStar,
  PlusCircle,
  SunMoon,
  User,
  UserPlus,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "./theme-provider";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/store/slices/sidebarSlice";
import { RootState } from "@/store/store";

const Topbar = () => {
  const { setTheme } = useTheme();
  const dispatch = useDispatch();
  const isCollapsed = useSelector<RootState>((s) => s.sidebar.isCollapsed);
  const handleCollapse = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div
      className={`max-h-[75px] fixed ${
        isCollapsed ? "w-full lg:w-[calc(100vw-90px)]" : "w-[calc(100vw-300px)]"
      } border bg-secondary   z-50`}
    >
      <div className="flex w-full max-h-[75px]  justify-between items-center px-2 py-4 z-50 ">
        {/* COLLAPSE BTN FOR SIDE BAR */}
        <Button variant={"ghost"} onClick={handleCollapse}>
          <MenuIcon size={20} />
        </Button>
        {/* USER & NOTIFICATION SEC */}
        <div className="flex items-center gap-10  min-w-[60px]  lg:p-2 lg:mr-6 cursor-pointer">
          <div className="lg:flex gap-2 hidden ">
            {/* dark & light */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <SunMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* lang */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <p>Language</p>
                  <Globe /> <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  className="flex justify-between"
                  onClick={() => setTheme("light")}
                >
                  <p>English</p>
                  <p>🏴󠁧󠁢󠁥󠁮󠁧󠁿</p>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex justify-between"
                  onClick={() => setTheme("dark")}
                >
                  <p>Arabic</p>
                  <p>🇸🇦</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* USER */}
          {/* AVATAR */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                className={`flex lg:flex gap-2 items-center ${
                  !isCollapsed && "hidden lg:flex"
                }`}
              >
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback className="border p-4">ME</AvatarFallback>
                </Avatar>
                {/* name , title */}
                <div className="flex flex-col gap-[-10px]">
                  <p className="text-sm lg:text-lg font-bold">Mohamed</p>
                  <p className="text-sm lg:text-lg ">Admin, Company 1</p>
                </div>
                <ChevronDown className="text-gray-500" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] ">
              <DropdownMenuItem
                className="cursor-pointer "
                onClick={() => console.log("🔥✨ ")}
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              {/* LANGUAGE IN MOBILE VIEW */}
              <div className="block lg:hidden">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Globe className="mr-2 h-4 w-4" />
                    <span>Language</span>
                    <span className="sr-only">Toggle language</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        <span className="mr-2 text-lg">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                        <span>English</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        <span className="mr-2 text-lg">🇸🇦</span>
                        <span>Arabic</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </div>

              {/* DARK IN MOBILE VIEW */}
              <div className="block lg:hidden">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <SunMoon className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 mr-2 h-4 w-4" />
                    <MoonStar className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 mr-2 h-4 w-4" />
                    <span>Toggle theme</span>
                    <span className="sr-only">Toggle theme</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => console.log("🔥✨ ")}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
