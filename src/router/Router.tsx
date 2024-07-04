import { HashRouter, Routes, Route } from "react-router-dom";
import { _routes } from "./_routes";
import "react-lazy-load-image-component/src/effects/opacity.css";
import PrivateRoute from "./PrivateRoute";
import { Footer, Navbar } from "../layouts";
import { useEffect } from "react";

const Router = () => {
  useEffect(() => {
    // @ts-ignore
    const tg = window.Telegram.WebApp;
    tg.ready();
    document.documentElement.style.setProperty("--background-color", "white");
    document.documentElement.style.setProperty("--text-color", "black");

    return () => {
      tg.offEvent("themeChanged");
    };
  }, []);
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Routes>
          {_routes?.map(({ path, element: Component }, idx) => (
            <Route
              key={idx}
              path={path}
              element={<PrivateRoute child={<Component />} />}
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default Router;
