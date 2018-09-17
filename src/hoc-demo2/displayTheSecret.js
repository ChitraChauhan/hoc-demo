import React from "react";
import { render } from "react-dom";
import withSecretToLife from "./withSecretToLife";

const DisplayTheSecret = props => (
  <div>The secret to life is {props.secretToLife}.</div>
);

const WrappedComponent = withSecretToLife(DisplayTheSecret);
render(<WrappedComponent />, document.getElementById("root"));
export default WrappedComponent;
