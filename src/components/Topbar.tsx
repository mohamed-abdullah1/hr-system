import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";
import { MenuIcon, User } from "lucide-react";

const Topbar = () => {
  return (
    <div className="max-h-[75px] fixed w-[calc(100vw-300px)] border bg-secondary   px-4">
      <div className="flex w-full max-h-[75px]  justify-between items-center p-4 z-50 ">
        {/* COLLAPSE BTN FOR SIDE BAR */}
        <Button variant={"ghost"}>
          <MenuIcon size={20} />
        </Button>
        {/* USER & NOTIFICATION SEC */}
        <div className="flex items-center gap-4 border  min-w-[60px]  rounded-xl  p-2 ">
          {/* USER */}
          {/* AVATAR */}
          <Avatar>
            <User />
          </Avatar>
          {/* name , title */}
          <div>
            <p>Name</p>
            <p>Admin , Demo Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
