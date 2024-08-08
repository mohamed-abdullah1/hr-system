import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes/index";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { ThemeProvider } from "@/components/theme-provider";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

const App: React.FC = () => {
  const isCollapsed = useSelector<RootState>((s) => s.sidebar.isCollapsed);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        {/* TopBar */}
        <div className="h-full w-full flex overflow-scroll">
          {/* Side bar */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              isCollapsed ? "hidden lg:block lg:min-w-[90px]" : "min-w-[300px]"
            } z-50`}
          >
            <Sidebar />
          </div>
          <main className="flex flex-col gap-4 h-full w-full">
            {/* TOPBAR */}
            <div className="min-h-[75px] ">
              <Topbar />
            </div>
            {/* content */}
            <div
              className={`${
                isCollapsed
                  ? "w-100vw lg:w-[calc(100vw-90px)]"
                  : "lg:w-[calc(100vw-300px)]"
              } p-4`}
            >
              <AppRoutes />
            </div>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
