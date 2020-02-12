import React from "react";
import UserForm from "../../components/user-form/user-form.component";
import RobotLogo from "../../components/robot-logo/robot-logo.component";
import "./form.style.scss";

const FormView = () => (
  <div className="form-page">
    <div className="message-container">
      <div className="message">
        <RobotLogo />
        <h1>Welcome</h1>
        <p className="font-light">
          Please tell us a bit about yourself to get started.
        </p>
      </div>
    </div>
    <div className="form-container">
      <UserForm />
    </div>
  </div>
);

export default FormView;
