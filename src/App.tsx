import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes/index";
import LayoutWrapper from "@/components/LayoutWrapper";
import LoginPage from "@/pages/Login";
import { ThemeProvider } from "@/components/theme-provider";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          {/* here we will put the logic of authentication */}
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="*"
            element={
              <LayoutWrapper>
                <AppRoutes />
              </LayoutWrapper>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
