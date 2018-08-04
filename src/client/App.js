import React, { Component } from "react";
import Card from './components/Card'
require('./styles/styles.scss')

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {  };
  }

  render() {
    return (
      <div>
        <Card/>
      </div>
    );
  }
}
