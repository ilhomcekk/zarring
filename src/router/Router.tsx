import { HashRouter, Routes, Route } from "react-router-dom";
import { _routes } from "./_routes";
import "react-lazy-load-image-component/src/effects/opacity.css";
import PrivateRoute from "./PrivateRoute";
import { Footer, Navbar } from "../layouts";

const Router = () => {
  return (
    <HashRouter>
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
    </HashRouter>
  );
};

export default Router;
