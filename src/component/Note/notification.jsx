import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import NotesDataService from "../../services/NotesDataService";
class notification extends Component {
  constructor() {
    super();
    this.state = {
      notification: [],
      message: ""
    };
  }

  componentDidMount() {
    const uname = localStorage.getItem("localstorageusername");
    NotesDataService.getNotification(uname).then(response => {
      console.log(response.data);
      this.setState({ notification: response.data });
    });
  }
  render() {
    console.log(this.state.notification);
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col-2"></div>
          <div className="col-8 text-center">
            <ul class="list-group mt-1">
              {this.state.notification.map(m => {
                return (
                  <Link
                    to={{
                      pathname: "/viewnoti",
                      state: {
                        id: m.title,
                        username: m.username
                      }
                    }}
                  >
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-6 text-danger">{m.username}</div>
                        <div className="col-6">
                          <h6>{m.title}</h6>
                        </div>
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(notification);
