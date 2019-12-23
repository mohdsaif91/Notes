import React, { Component } from "react";
import NotesDataService from "../../services/NotesDataService";
import { PropTypes } from "prop-types";

export class signin extends Component {
  // static PropTypes = {
  //   history: PropTypes.object.isRequired
  // };
  state = {
    username: "",
    password: ""
  };
  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    console.log(username + "-1-" + password);
    NotesDataService.signin(username, password).then(response => {
      if (response.data === "auth") {
        localStorage.setItem("localstorageusername", username);
        console.log("auth=" + response);
        this.props.history.push("/notes");
      }
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign IN</h5>
          <div className="input-field">
            <label htmlFor="email">UserName</label>
            <input type="text" id="username" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Password">Password</label>
            <input type="Password" id="password" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default signin;
