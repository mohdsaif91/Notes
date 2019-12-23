import React, { Component } from "react";
import NotesDataService from "../../services/NotesDataService";

export class Signup extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: ""
  };
  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    let user = {
      userName: this.state.userName,
      password: this.state.password,
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email
    };
    NotesDataService.signup(user)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="First Name">First Name</label>
            <input type="text" id="firstName" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="LastName">LastName</label>
            <input type="text" id="lastName" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="LastName">User Name</label>
            <input type="text" id="userName" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Password">Password</label>
            <input type="Password" id="password" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
