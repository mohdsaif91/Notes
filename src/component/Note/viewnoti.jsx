import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import PropsType from "prop-types";
import Button from "@material-ui/core/Button";
import NotesDataService from "../../services/NotesDataService";
import UpdateIcon from "@material-ui/icons/Update";
import VisibilityIcon from "@material-ui/icons/Visibility";
class viewnoti extends Component {
  static propstype = {
    location: PropsType.object.isRequired
  };
  state = {
    viewNote: [],
    ogid: "",
    ogusername: ""
  };
  componentDidMount() {
    const { location } = this.props;
    const id = location.state.id;
    const username = location.state.username;
    NotesDataService.getViewNoti(id, username).then(response => {
      console.log(response.data);
      this.setState({ viewNote: [] });
      this.setState({ viewNote: response.data });
    });
  }
  render() {
    return (
      <div>
        {this.state.viewNote.map(m => {
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
                <button className="btn btn ">
                  <Link
                    to={{
                      pathname: "/updatenote",
                      state: {
                        data: this.state.viewNote
                      }
                    }}
                  >
                    Update
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(viewnoti);
