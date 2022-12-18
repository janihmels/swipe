import { useEffect, useState } from "react";
import logo from "Media/logo.png";

import "Styles/bulma.min.css";
import "Styles/css.css";

import Loader from "Screens/Loader";
import Pickup from "Screens/Pickup";
import Online from "Screens/Online";
import Settings from "Screens/Settings";
import Explainer from "Screens/Explainer";
import { config } from "System/config";

const modes = {
  loader: Loader,
  online: Online,
  pickup: Pickup,
  settings: Settings,
  explainer: Explainer
};
//const refPrice = 96.99;
const App = () => {
  const [items, setItems] = useState(null);
  const [refPrice, setRefPrice] = useState(null);
  const [mode, setMode] = useState("loader");
  useEffect( () => {
    if(config.dev) {
      setTimeout( () => {
        setItems([{
          "id": 293322139,
          "price": 199,
          type: "walmart"
        }]);
        setMode("online");
      }, 90)
      return;
    }
    window.chrome.storage.local.get(["data"], (result) => {
      console.log("Storage response is", result)
      setTimeout( () => {
        setItems(result.data.items);
        setRefPrice(result.data.refPrice);
        setMode("online");
      }, 700)
    })

  }, []);

  const Center = modes[mode];
  return (
    <div className="wrapper">
      <NavBar mode={mode} setMode={setMode} />
      <Center items = { items } refPrice = { refPrice }/>
      <Footer mode={mode} setMode={setMode} />
    </div>
  );
};

export default App;

const NavBar = ({ mode, setMode }) => {
  return (
    <div className="top-line-wrapper">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className={`tabs is-boxed ${mode === "loader" || mode === "explainer" ? "is-hidden" : ""}`}>
        <ul>
          <li className={mode === "pickup" ? "is-active" : ""}>
            <a onClick={() => setMode("pickup")}>
              <span>Store Pickup</span>
            </a>
          </li>
          <li className={mode === "online" ? "is-active" : ""}>
            <a onClick={() => setMode("online")}>
              <span>Online</span>
            </a>
          </li>
        </ul>
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
