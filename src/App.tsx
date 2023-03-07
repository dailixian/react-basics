import { Component } from "react";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Names from "./components/Names";

export class App extends Component {
  render() {
    return (
      <>
        <Header
          title="Hello from react"
          subtitle="lixian dai."
          fontsize={230}
        ></Header>
        <Counter></Counter>
        <hr></hr>
        <Names></Names>
        <Footer year={2023} company="Aptos"></Footer>
      </>
    );
  }
}

export default App;
