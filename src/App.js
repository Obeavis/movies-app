import React from "react";
import { useSelector } from "react-redux";
import Routes from "./utils/Routes";
import Loader from "components/Loader";
import { IntlProvider } from "react-intl";
import "./assets/css/main.css";
import messages from "assets/i18n";

function App() {
  const { loading, language } = useSelector((state) => state.basicState);
  return (
    <div className="App">
      <IntlProvider locale={language} messages={messages[language]}>
        <Routes />
        {loading && <Loader />}
      </IntlProvider>
    </div>
  );
}

export default App;
