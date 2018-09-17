import React from "react";
import { render } from "react-dom";

var newData = {
  data: "Data from HOC..."
};

const MyHOC = WrappedComponent => {
  class ComposedComponent extends React.Component {
    componentDidMount() {
      this.setState({
        data: newData.data
      });
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  }

  return ComposedComponent;
};

const MyComponent = props => (
  <div>
    <h1>{props.data}</h1>
  </div>
);

const HOC = MyHOC(MyComponent);
render(<HOC />, document.getElementById("root"));

export default HOC;
