import React from "react";
import { connect } from "react-redux";

const Device = ({
  deviceId,
  device,
  powerState,
  temperature,
  switchOnOff,
  warmer,
  colder
}) => {
  return (
    <div>
      <h4>{`Device with id: ${deviceId}`}</h4>
      <h4>{`Device with name: ${device && device.name}`}</h4>
      <h4>{`Device is: ${powerState && powerState.on ? "on" : "off"}`}</h4>
      <h4>{`Device temperature is: ${temperature &&
        temperature.temperature}`}</h4>
      <button onClick={() => switchOnOff(deviceId)}>🎩SWITCH ON/OFF🎩</button>
      <button onClick={() => warmer(deviceId)}>⏫WARMER⏫</button>
      <button onClick={() => colder(deviceId)}>⏬COLDER⏬</button>
    </div>
  );
};

const mapStateToProps = ({ devices }, { deviceId }) => ({
  device: devices.deviceList[deviceId],
  ...devices[deviceId]
});

export default connect(
  mapStateToProps,
  {
    switchOnOff: deviceId => ({
      type: "SWITCH_ON_OFF",
      payload: { deviceId }
    }),
    warmer: deviceId => ({
      type: "TEMP_UP",
      payload: { deviceId }
    }),
    colder: deviceId => ({
      type: "TEMP_DOWN",
      payload: { deviceId }
    })
  }
)(Device);
