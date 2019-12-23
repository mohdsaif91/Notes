import React, { Component } from "react";
import NotesDataService from "../../services/NotesDataService";

export class createnote extends Component {
  constructor() {
    super();
    this.addNote = this.addNote.bind(this);
  }

  state = {
    title: "",
    content: "",
    username: "",
    message: ""
  };
  componentWillMount() {
    this.state.username = localStorage.getItem("localstorageusername");
  }
  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    let data = {
      title: this.state.title,
      content: this.state.content,
      username: this.state.username
    };
    e.preventDefault();
    console.log(this.state);
    NotesDataService.createNote(data).then(response => {
      this.setState({ message: response.data });
    });
  };
  addNote = () => {};
  render() {
    let { note, id, username } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Note </h5>
          <div className="input-field">
            <label htmlFor="Title">Title</label>
            <input type="text" id="title" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handelChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button
              className="btn pink lighten-1 z-depth-0"
              onClick={this.addNote}
            >
              Create Note
            </button>
            <div className="cart-title">
              <label htmlFor="Title" style={{ color: "red" }}>
                <h5>{this.state.message}</h5>
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default createnote;
