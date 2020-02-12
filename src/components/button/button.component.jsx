import React from "react";
import "./button.style.scss";

import ArrowRight from "../../assets/White_Arrow.svg";

const icon = { "arrow-right": ArrowRight };

const CustomButton = ({ children, iconRight }) => {
  return (
    <button className="btn">
      {children}
      {iconRight ? (
        <img className="btn-icon-right" src={icon[iconRight]} alt={iconRight} />
      ) : null}
    </button>
  );
};

export default CustomButton;
