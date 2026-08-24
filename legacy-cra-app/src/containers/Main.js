import React, { Component } from "react";
import SinglePage from "./SinglePage";

export default class Main extends Component {
  render() {
    return <SinglePage theme={this.props.theme} />;
  }
}
