import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import "./style/fonts.scss";
import "./style/reset.scss";
import "./style/global.scss";

import Home from "@/page/Home";
import Career from "@/page/Career";
import Etc from "@/page/Etc";
import Header from "@/components/Header/Header";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/etc" element={<Etc />} />
      </Route>
      <Route path="/career" element={<Career />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function PortfolioLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
