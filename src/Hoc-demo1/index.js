import React, { Component } from "react";
import { render } from "react-dom";

// 1. HoC Toggle Wrapper Component Factory
const withToggle = WrappedComponent => {
  class Toggle extends Component {
    constructor(props) {
      super(props);
      this.state = { isActive: false };
      this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
      this.setState({
        isActive: !this.state.isActive
      });
    }
    render() {
      return (
        <WrappedComponent
          isActive={this.state.isActive}
          onToggle={this.onToggle}
        />
      );
    }
  }

  Toggle.displayName =
    (WrappedComponent.displayName || WrappedComponent.name) + "WithToggle";

  return Toggle;
};

// 2. Content helper Component
const Title = ({ onClick }) => <h2 onClick={onClick}>Click me</h2>;

// 3. Content helper Component
const Content = () => <p>Random Content</p>;

// 4. The Component We Are going To Wrap
const ToggleContent = ({ isActive, onToggle }) => (
  <div>
    <Title onClick={onToggle} />
    <p>Foo Desc</p>
    {isActive && <Content />}
  </div>
);

// 5. Wrapped Comopnent (the one we would like to use)
const ToggleComponent = withToggle(ToggleContent);

// It could be also written like this so we can merge thr 4th and 5th components in one

// const ToggleComponent = withToggle(({ isActive, onToggle }) => (
//   <div>
//     <Title onClick={onToggle} />
//     <p>Foo Desc</p>
//     { isActive && <Content /> }
//   </div>
// ));

render(<ToggleComponent />, document.getElementById("root"));
