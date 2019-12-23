import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import NotesDataService from "../../services/NotesDataService";
class updateNote extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  state = {
    note: [],
    message: "",
    id: "",
    username: "",
    title: "",
    content: ""
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { location } = this.props;
    const res = location.state.data;
    console.log(res);
    this.setState({ note: res });
  }
  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  addNote = () => {
    console.log(this.state.note);
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.id + " ID VALUE");
    console.log(this.state);
    NotesDataService.updateNote(this.state).then(response => {});
  };
  render() {
    const data = this.state.note.length ? (
      this.state.note.map(m => {
        this.state.id = m.id;
        this.state.username = m.username;
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Update Note </h5>
              <div className="input-field">
                <label htmlFor="Title">Title</label>
                <input
                  type="text"
                  placeholder={m.title}
                  id="title"
                  onChange={this.handelChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="Content">Project Content</label>
                <textarea
                  id="content"
                  className="materialize-textarea"
                  placeholder={m.content}
                  onChange={this.handelChange}
                  required
                ></textarea>
              </div>
              <div className="input-field">
                <button
                  className="btn pink lighten-1 z-depth-0"
                  onClick={this.addNote}
                >
                  Update Note
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
      })
    ) : (
      <div>Loading..</div>
    );
    return <div>{data}</div>;
  }
}

export default withRouter(updateNote);
