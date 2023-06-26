// Exercise 2

import React from "react";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render() {
    const { isToggleOn } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>{isToggleOn ? "ON" : "OFF"}</button>
      </div>
    );
  }
}

export default Events;
