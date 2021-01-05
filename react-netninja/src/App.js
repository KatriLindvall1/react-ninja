import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Mia", age: 20, belt: "green", id: 2 },
      { name: "Juha", age: 25, belt: "pink", id: 3 },
    ],
  };
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas,
    });
  };
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas,
    });
  };
  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component updated");
    console.log(prevProps);
    console.log(prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>React app!</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
