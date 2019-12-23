import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import NotesDataService from "../../services/NotesDataService";
import { ToastContainer, toast } from "react-toastify";

class mynote extends Component {
  constructor() {
    super();
  }
  state = {
    notes: [],
    message: "",
    deleteId: "",
    deleteUsername: ""
  };
  notify = () => {
    toast.info("Deleted Note !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };

  getit = () => {
    var id = this.state.deleteId;
    var username = this.state.deleteUsername;
    NotesDataService.deleteNotesinService(id, username).then(response => {
      {
        this.notify();
      }
    });
  };

  componentWillMount() {
    var username = localStorage.getItem("localstorageusername");
    NotesDataService.retriveAllNotes(username).then(response => {
      console.log(response.data);
      this.setState({ notes: response.data });
    });
  }
  render() {
    console.log(this.state.notes);
    const data = this.state.notes.length ? (
      this.state.notes.map(m => {
        return (
          <div className="project-list section" key={m.id}>
            <div
              className="card z-depth-0 project-summary"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <div className="card-content grey-text">
                <span className="card-title">{m.title}</span>
                <p>{m.content}</p>
              </div>
              <div className="row text-center">
                <div className="col-3">
                  <button
                    className="btn bt-warning"
                    onClick={() => {
                      this.state.deleteId = m.id;
                      this.state.deleteUsername = m.username;
                      console.log(this.state.deleteId);
                      this.getit();
                    }}
                  >
                    Delete
                  </button>
                </div>
                <div className="col-3">
                  <Link
                    to={{
                      pathname: "/updatenote",
                      state: {
                        data: this.state.notes
                      }
                    }}
                  >
                    <button className="btn btn-primary">Update</button>
                  </Link>
                </div>
                <div className="col-3">
                  <Link
                    to={{
                      pathname: "/sharnote",
                      state: {
                        id: m.id,
                        title: m.title,
                        uname: m.username
                      }
                    }}
                  >
                    <button className="btn btn-danger">Share</button>
                  </Link>
                </div>
                <div className="col-3">
                  <Link
                    to={{
                      pathname: "/assignecontribution",
                      state: {
                        id: m.id,
                        title: m.title,
                        uname: m.username
                      }
                    }}
                  >
                    <button className="btn btn-secondary">
                      Assigne Contributor
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div
        className="mt-5"
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        <b>No Data</b>
      </div>
    );
    console.log("second");
    return (
      <div>
        <div>{data}</div>
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default withRouter(mynote);
