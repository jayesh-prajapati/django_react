import React, { Component, Fragment } from "react";
import Form from "./Form";
import Leads from "./Leads";

export class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Leads />
        <Form />
      </Fragment>
    );
  }
}

export default Dashboard;
