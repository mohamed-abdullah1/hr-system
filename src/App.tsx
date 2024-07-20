import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

const App: React.FC = () => {
  return (
    <Router>
      {/* TopBar */}
      <div className="h-full w-full flex ">
        {/* Side bar */}
        <div className="min-w-[300px]">
          <Sidebar />
        </div>
        <main className="flex flex-col gap-4 h-full w-full">
          {/* TOPBAR */}
          <div className="min-h-[75px] ">
            <Topbar />
          </div>
          {/* content */}
          <div className="bg-green-300 p-4">
            <AppRoutes />
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
