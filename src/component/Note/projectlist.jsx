import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import ProjectSummary from "./NoteSummary";
import NotesDataService from "../../services/NotesDataService";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import VisibilityIcon from "@material-ui/icons/Visibility";

class Projectlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      message: null
    };
    this.refreshNotes = this.refreshNotes.bind(this);
    this.deleteNotes = this.deleteNotes.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
  }
  componentDidMount() {
    NotesDataService.getAllNotes().then(res => {
      console.log(res.data);
      this.setState({
        notes: res.data
      });
    });
  }
  refreshNotes() {}
  deleteNotes = id => {
    var con = "INSTRUCTOR";
    NotesDataService.deleteNotesinService(con, id).then(response => {
      this.setState({ message: `Delete Of Note ${id} Sucessfull` });
      this.refreshNotes();
    });
  };
  updateNotes = id => {
    this.props.history.push(`/notes/${id}`);
  };

  render() {
    const data = this.state.notes.length ? (
      this.state.notes.map(m => {
        console.log(m.userNameOwner);
        return (
          <div className="project-list section" key={m.id}>
            <div className="card z-depth-0 project-summary">
              <div className="card-content grey-text">
                <span className="card-title">
                  <b>Title-{m.title}</b>
                </span>
                <p className="text-danger">Content-{m.content}</p>
                <p className="text-primary">UserName-{m.username}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  direction: "col",
                  justifyContent: "center"
                }}
              >
                <button className="btn btn-warning">
                  <Link
                    to={{
                      pathname: "/viewnotimain",
                      state: {
                        id: m.id,
                        username: m.username
                      }
                    }}
                  >
                    <i>
                      <VisibilityIcon />
                    </i>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>Loading......</div>
    );

    return <div style={{ backgroundColor: "#95E8F3" }}>{data}</div>;
  }
}

export default withRouter(Projectlist);
