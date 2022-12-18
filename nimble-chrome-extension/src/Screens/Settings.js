import { useState } from "react";
import Switch from "react-switch";

const Settings = () => {

  const [madeChange, setMadeChange] = useState(false);
  const [settings, setSettings] = useState({
    zip: "94117",
    radius: 50,
    checked: true,
  });


  const onChange = evt => {
    setSettings({
     ...settings,
      [evt.target.id]: evt.target.value
    });
    setMadeChange(true);
  }

  return (
    <div className="swoop-center">
      <div className="headline">
        <h4 className="title is-4 narrower">Settings</h4>
        <div className="settings-wrapper">
          <table className="settings-table">
            <tbody>
              <tr>
                <td vAlign="center">Your&nbsp;ZIP&nbsp;code:</td>
                <td>
                  <input id = "zip" className="input" type="text" onChange = {onChange} value = { settings.zip}/>
                </td>
              </tr>
              <tr>
                <td colSpan="2">&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td>Max.&nbsp;Miles:</td>
                <td>
                  <input id = "radius" onChange = {onChange} className="input" type="number" value = {settings.radius}/>
                </td>
              </tr>
              <tr>
                <td colSpan="2">&nbsp;&nbsp;</td>
              </tr>

              <tr>
                <td>Automatic&nbsp;Search</td>
                <td>
                  <div className="switch-wrapper">
                    <Switch
                      onChange={(checked) => {
                        setSettings({ ...settings, checked });
                        setMadeChange(true);
                      }}
                      checked={settings.checked}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="buttons has-addons is-right">
            <button className="button is-primary is-right" disabled = {!madeChange}>
              Update Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
