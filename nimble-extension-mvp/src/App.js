import { useEffect, useState } from "react";
import logo from "Media/logo.png";

import "Styles/bulma.min.css";
import "Styles/css.css";

import Main from "Screens/Main";
import { config } from "System/config";

const modes = {
  main: Main
};

const App = () => {

  const [snippet, setSnippet] = useState(null);
  const [mode, setMode] = useState("main");

  useEffect( () => {
    if(config.dev) {
      setTimeout( () => {
        setSnippet({ text: "The big brown dog jumped over the lazy fox." });
        setMode("main");
      }, 90)
      return;
    }
    window.chrome.storage.local.get(["snippet"], (result) => {
      console.log("Result is", result);
      setSnippet(result.snippet);
    });

  }, []);

  const Center = modes[mode];
  console.log("In Render", snippet);
  return (
    <div className="wrapper">
      <Header />
      <Center snippet = { snippet } />
      <Footer mode={mode} setMode={setMode} />
    </div>
  );
};

export default App;

const Header = ({ mode, setMode }) => {
  return (
    <div className="top-line-wrapper">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

const Footer = ({ mode, setMode }) => {
  const linkClass = `footer-link ${
    ["settings", "loader", "explainer"].includes(mode) ? "in-settings" : ""
  }`;
  return (
    <div className="swoop-footer">
      <a className={linkClass} onClick={() => setMode("settings")}>
        Settings
      </a>
      <div className="version-container">V{config.version}</div>
    </div>
  );
};
