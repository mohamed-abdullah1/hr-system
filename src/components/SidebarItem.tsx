import { RouteObject, useLocation, useNavigate } from "react-router-dom";
import { FC, ReactNode } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { RoutesProps } from "@/routes";
import { toggleSidebar } from "@/store/slices/sidebarSlice";

type Props = {
  Icon: React.ReactNode;
  title?: string;
  path?: string;
  route: RouteObject & {
    title?: string;
    Icon?: ReactNode;
  };
};

const SidebarItem: FC<Props> = ({ Icon, title, path, route }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isCollapsed = useSelector<RootState>((s) => s.sidebar.isCollapsed);
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate(path || "/");
    if (!isCollapsed) {
      dispatch(toggleSidebar());
    }
  };
  const childrenCount = route.children?.length ?? 0;
  return (
    <div>
      {/* ICON */}
      {/* NAME */}
      <AccordionItem key={title} value={title || "title"}>
        <AccordionTrigger
          handleClick={handleClick}
          path={path}
          location={location}
          Icon={Icon}
          title={title}
          includeChildren={childrenCount > 0}
          isCollapsed={isCollapsed}
        ></AccordionTrigger>
        {childrenCount > 0 && (
          <AccordionContent className="p-2">
            {childrenCount > 0 &&
              route.children?.map((child: RoutesProps) => (
                <SidebarItem
                  Icon={child.Icon}
                  title={isCollapsed ? "" : child?.title}
                  path={child.path}
                  key={child.path}
                  route={child}
                />
              ))}
          </AccordionContent>
        )}
      </AccordionItem>
    </div>
  );
};

export default SidebarItem;
