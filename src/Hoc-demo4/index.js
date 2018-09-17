import React from "react"
import { render } from "react-dom";

const hoc = WrappedComponent => props => {
  return (
    <div>
      <WrappedComponent {...props}>
        {props.children.toUpperCase()}
      </WrappedComponent>
    </div>
  );
};

const Username = props => <div>{props.children}</div>;

const UpperCaseUsername = hoc(Username);

const App = () => (
  <div>
    <UpperCaseUsername>Kingsley</UpperCaseUsername>
    <UpperCaseUsername>abc</UpperCaseUsername>
    <UpperCaseUsername>xyz</UpperCaseUsername>
  </div>
);

render(<App />, document.getElementById("root"));
