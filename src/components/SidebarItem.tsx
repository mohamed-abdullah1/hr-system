import {
  RouteObject,
  RoutesProps,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FC, ReactNode } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

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

  const handleClick = () => {
    navigate(path || "/");
  };

  return (
    <div>
      {/* ICON */}
      {/* NAME */}
      <AccordionItem value={title || "title"}>
        <AccordionTrigger
          handleClick={handleClick}
          path={path}
          location={location}
          Icon={Icon}
          title={title}
          includeChildren={route.children?.length > 0}
        ></AccordionTrigger>
        {route?.children?.length > 0 && (
          <AccordionContent className="p-2">
            {route.children?.length > 0 &&
              route.children?.map((child) => (
                <SidebarItem
                  Icon={child.Icon}
                  title={child?.title}
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
