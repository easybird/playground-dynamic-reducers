import React from "react";
import { connect } from "react-redux";
import "../styles.css";
import syntaxHighlight from "../syntaxHighlighting";
import Devices from "./Devices";
import randomNameGenerator from "../randomNameGenerator";

function App({ reduxState, addDevice, removeDevices }) {
  return (
    <div className="App">
      <span>
        <button
          onClick={() => {
            const deviceId = new Date().getTime();
            addDevice(deviceId, randomNameGenerator());
          }}
        >
          🎩ADD DEVICE🎩
        </button>
      </span>
      <span>
        <button onClick={removeDevices}>🎩REMOVE DEVICES🎩</button>
      </span>
      <hr />
      <Devices />
      <hr />
      <div>
        <p>Redux state</p>
        <pre
          dangerouslySetInnerHTML={{ __html: syntaxHighlight(reduxState) }}
        />
      </div>
    </div>
  );
}
const mapStateToProps = state => ({ reduxState: state });

export default connect(
  mapStateToProps,
  {
    addDevice: (deviceId, name) => ({
      payload: {
        deviceId,
        name
      },
      type: "ADD_DEVICE"
    }),
    removeDevices: () => ({
      type: "REMOVE_DEVICES"
    })
  }
)(App);
