import React from "react";
import { connect } from "react-redux";
import Device from "./Device";

const Devices = ({ deviceList = [] }) => (
  <div>
    <h3>The list of devices</h3>
    {deviceList.map(({ deviceId }) => (
      <div
        key={deviceId}
        style={{ minHeight: "50px", width: "100vw", borderStyle: "groove" }}
      >
        <Device deviceId={deviceId} />
      </div>
    ))}
  </div>
);

const mapStateToProps = ({ devices }) => ({
  deviceList: Object.values(devices.deviceList)
});

export default connect(
  mapStateToProps,
  {
    switchOnOff: switchOnOff => ({
      type: "SWITCH_ON_OFF",
      payload: { switchOnOff }
    })
  }
)(Devices);
