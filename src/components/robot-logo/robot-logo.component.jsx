import React from "react";
import RobotLogo from "../../assets/GiantRobotLTD_Logo.svg";

import "./robot-logo.style.scss";

const RobotLogoComponent = () => {
  return <img className="robo-logo" src={RobotLogo} alt="robot logo" />;
};

export default RobotLogoComponent;
