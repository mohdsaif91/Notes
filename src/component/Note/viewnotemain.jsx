import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import PropsType from "prop-types";
import NotesDataService from "../../services/NotesDataService";
class viewnotemain extends Component {
  static propstype = {
    location: PropsType.object.isRequired
  };
  state = {
    viewNote: [],
    ogid: "",
    ogusername: "",
    canupdate: "d-none"
  };
  componentDidMount() {
    const { location } = this.props;
    const id = location.state.id;
    const username = location.state.username;
    const ogusername = localStorage.getItem("localstorageusername");
    NotesDataService.getViewNoti(id, username,ogusername).then(response => {
      console.log(response.data);

      this.setState({
        viewNote: response.data
        // canupdate: response.data.canupdate
      });
    });
  }
  render() {
    this.state.viewNote.map(m => {
      this.state.canupdate = m.canupdate;
    });
    return (
      <div>
        {this.state.viewNote.map(m => {
          console.log(this.state.viewNote.length + " Length");
          return (
            <div>
              <div className="project-list section" key={m.id}>
                <div className="card z-depth-0 project-summary">
                  <div className="card-content grey-text">
                    <span className="card-title text-center">
                      <b>Title :- {m.title}</b>
                    </span>
                    <p className="text-danger">
                      <h4>
                        <b>UserName:-{m.username}</b>
                      </h4>
                    </p>
                    <h5 className="mt-2">Content:-{m.content}</h5>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  direction: "col",
                  justifyContent: "center"
                }}
              >
                <Link
                  className={this.state.canupdate}
                  to={{
                    pathname: "/updatenotemain",
                    state: {
                      data: this.state.viewNote
                    }
                  }}
                >
                  <button className="btn btn">Update</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  //   getDisplay = () => {
  //     let classes = "d-none";
  //     console.log;
  //   };
}

export default withRouter(viewnotemain);
