import React from "react";
import { connect } from "react-redux";
import "../styles.css";
import syntaxHighlight from "../syntaxHighlighting";
import { addDeviceReducer, removeDeviceReducers } from "../reducers";
import Devices from "./Devices";
import randomNameGenerator from "../randomNameGenerator";

function App({ reduxState }) {
  return (
    <div className="App">
      <span>
        <button
          onClick={() => {
            const deviceId = new Date().getTime();
            addDeviceReducer(deviceId, randomNameGenerator());
          }}
        >
          🎩ADD DEVICE🎩
        </button>
      </span>
      <span>
        <button onClick={removeDeviceReducers}>🎩REMOVE DEVICES🎩</button>
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
  null
)(App);
