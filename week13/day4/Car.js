import React from "react";
import Garage from "./Garage";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue", // Initial color value
    };
  }

  render() {
    const { model } = this.props;
    const { color } = this.state;

    return (
      <div>
        <h1>
          This car is {color} {model}
        </h1>
        <Garage size="small" />
      </div>
    );
  }
}

export default Car;
