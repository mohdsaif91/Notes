import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import NotesDataService from "../../services/NotesDataService";

class NoteSummary extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = { note: [], message: "" };
  }

  componentDidMount() {
    const { location, history, match } = this.props;
    const id = location.state.ogid;
    console.log(id);
    NotesDataService.searchById(id).then(response => {
      console.log(response);
      this.setState({ note: response.data });
      console.log(this.state.note);
    });
  }
  render() {
    return (
      <div style={{ textAlign: "center", justifyContent: "center" }}>
        <div
          className="card z-depth-0 project-summary"
          key={this.state.note.id}
        >
          <div className="card-content grey-text">
            <span className="card-title">{this.state.note.userNameOwner}</span>
            <p>{this.state.note.note}</p>
          </div>
          <div className="row">
            <div className="col-3 ">
              <button className="btn btn-warning">Update</button>
            </div>
            <div className="col-1"></div>
            <div className="col-3">
              <button className="btn btn-danger">Delete</button>
            </div>
            <div className="col-1"></div>
            <div className="col-3 ">
              <button className="btn btn-sucess">Share</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NoteSummary);
