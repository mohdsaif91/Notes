import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../Note/projectlist";
import NotesDataService from "../../services/NotesDataService";
class dashboard extends Component {
  state = {
    note: [],
    name: ""
  };
  componentDidMount() {
    const uname = localStorage.getItem("localstorageusername");
    this.setState({
      name: uname
    });
    console.log(this.state.name);
  }

  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList />
          </div>
          <div className="col s12 m2 offset-m1"></div>
        </div>
      </div>
    );
  }
}

export default dashboard;
