import { HashRouter, Routes, Route } from "react-router-dom";
import { _routes } from "./_routes";
import "react-lazy-load-image-component/src/effects/opacity.css";
import PrivateRoute from "./PrivateRoute";
import { Footer, Navbar } from "../layouts";
import { useEffect, useState } from "react";

const Router = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // @ts-ignore
    const tg = window.Telegram.WebApp;
    setTheme(tg.colorScheme);

    tg.onEvent("themeChanged", () => {
      setTheme(tg.colorScheme);
    });
    tg.offEvent("themeChanged");

    return () => {
      tg.offEvent("themeChanged");
    };
  }, []);

  return (
    <HashRouter>
      <div className={theme}>
        <Navbar />
        <div className="max-md:pt-12">
          <Routes>
            {_routes?.map(({ path, element: Component }, idx) => (
              <Route
                key={idx}
                path={path}
                element={<PrivateRoute child={<Component />} />}
              />
            ))}
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default Router;
