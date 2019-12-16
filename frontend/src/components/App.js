import React, { Component } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Dashboard from "./leads/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
