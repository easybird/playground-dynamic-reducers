import React from "react";
import { connect } from "react-redux";
import randomNameGenerator from "../randomNameGenerator";

const Device = ({
  deviceId,
  deviceData,
  powerState,
  temperature,
  switchOnOff,
  warmer,
  colder,
  changeName
}) => {
  return (
    <div>
      <h4>{`Device with id: ${deviceId}`}</h4>
      <h4>{`Device with name: ${deviceData && deviceData.name}`}</h4>
      <h4>{`Device is: ${powerState && powerState.on ? "on" : "off"}`}</h4>
      <h4>{`Device temperature is: ${temperature &&
        temperature.temperature}`}</h4>
      <button onClick={() => switchOnOff(deviceId)}>🎩SWITCH ON/OFF🎩</button>
      <button onClick={() => warmer(deviceId)}>⏫WARMER⏫</button>
      <button onClick={() => colder(deviceId)}>⏬COLDER⏬</button>
      <button onClick={() => changeName(deviceId, randomNameGenerator())}>
        🎄CHANGE NAME🎄
      </button>
    </div>
  );
};

const mapStateToProps = ({ devices }, { deviceId }) => ({
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
    }),
    changeName: (deviceId, name) => ({
      type: "CHANGE_NAME",
      payload: { deviceId, name }
    })
  }
)(Device);
