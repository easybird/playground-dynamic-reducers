import React from "react";
import { connect } from "react-redux";
import "../styles.css";
import syntaxHighlight from "../syntaxHighlighting";
import { addDeviceReducer, removeDeviceReducers } from "../reducers";
import Devices from "./Devices";
import randomNameGenerator from "../randomNameGenerator";

function App({ reduxState, addDevice, removeDevices }) {
  return (
    <div className="App">
      <span>
        <button
          onClick={() => {
            const deviceId = new Date().getTime();
            addDeviceReducer(deviceId);
            addDevice(deviceId);
          }}
        >
          🎩ADD DEVICE🎩
        </button>
      </span>
      <span>
        <button
          onClick={() => {
            removeDeviceReducers();
            removeDevices();
          }}
        >
          🎩REMOVE DEVICES🎩
        </button>
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
    addDevice: id => ({
      type: "ADD_DEVICE",
      payload: { name: randomNameGenerator(), deviceId: id }
    }),
    removeDevices: () => ({
      type: "REMOVE_DEVICES"
    }),
    inception: () => ({
      type: "INCEPTION"
    })
  }
)(App);
