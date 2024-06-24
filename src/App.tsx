import "./App.css";
import { initApp } from "./helpers/api";
import { ConfigProvider } from "antd";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";
import "react-lazy-load-image-component/src/effects/opacity.css";
import Router from "./router/Router";
import "./assets/scss/_app.scss";

function App() {
  initApp();
  return (
    <I18nextProvider i18n={i18n}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#082567",
          },
          components: {Modal: {}}
        }}
      >
        <Router />
      </ConfigProvider>
    </I18nextProvider>
  );
}

export default App;
