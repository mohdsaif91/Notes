import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class logout extends Component {
  state = {};
  componentDidMount() {
    localStorage.removeItem("localstorageusername");
    this.props.history.push("/signin");
  }
  render() {
    return <div></div>;
  }
}

export default withRouter(logout);
