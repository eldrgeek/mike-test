import React, { Component } from "react";

import { ColoredHeadingOne, ColoredHeadingTwo } from "mike-test";

export default class App extends Component {
  render() {
    return (
      <div>
        <ColoredHeadingOne
          text="Colored heading one is working"
          color={"red"}
        />

        {/* Our other component */}
        <ColoredHeadingTwo
          text="Colored heading two is working"
          color={"blue"}
        />
      </div>
    );
  }
}