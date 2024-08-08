import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  SIDEBAR_COLLAPSED_WIDTH,
  SIDEBAR_EXPANDED_WIDTH,
  TOP_BAR_HEIGHT,
} from "@/lib/consts";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isCollapsed = useSelector<RootState>((s) => s.sidebar.isCollapsed);

  return (
    <div className="h-full w-full flex overflow-scroll">
      {/* Side bar */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isCollapsed
            ? `hidden lg:block lg:min-w-[${SIDEBAR_COLLAPSED_WIDTH}]`
            : `min-w-[${SIDEBAR_EXPANDED_WIDTH}]`
        } z-50`}
      >
        <Sidebar />
      </div>
      <main className="flex flex-col gap-4 h-full w-full">
        {/* TOP_BAR */}
        <div className={`min-h-[${TOP_BAR_HEIGHT}]`}>
          <Topbar />
        </div>
        {/* CONTENT */}
        <div
          className={`${
            isCollapsed
              ? `w-100vw lg:w-[calc(100vw-${SIDEBAR_COLLAPSED_WIDTH})]`
              : `lg:w-[calc(100vw-${SIDEBAR_EXPANDED_WIDTH})]`
          } p-4`}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default LayoutWrapper;
