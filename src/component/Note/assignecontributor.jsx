import React, { Component } from "react";
import PropType from "prop-types";
import { withRouter } from "react-router-dom";
import NotesDataService from "../../services/NotesDataService";
class assigncontributor extends Component {
  static propstype = {
    location: PropType.object.isRequired
  };
  state = {
    userName: [],
    Selectedusername: [],
    ogid: "",
    ogtitle: "",
    oguname: "",
    ogcontent: "",
    ogusername: "",
    backendMessage: ""
  };
  componentDidMount() {
    const { location } = this.props;
    const id = location.state.id;
    const title = location.state.title;
    const uname = location.state.uname;
    NotesDataService.getAllUserFroshare().then(response => {
      this.setState({ userName: response.data });
    });

    this.setState({
      ogid: id,
      ogtitle: title,
      oguname: uname
    });
  }
  sendsharedata = () => {
    const data = this.state.Selectedusername;
    const noteid = this.state.ogid;
    const uname = this.state.oguname;
    NotesDataService.updateContribution(data, noteid, uname).then(res => {
      this.setState({
        backendMessage: res.data
      });
    });
  };
  clearstate = () => {
    this.setState({
      Selectedusername: []
    });
  };
  render() {
    console.log(this.state.Selectedusername);
    const data = this.state.Selectedusername.length ? (
      this.state.Selectedusername.map(m => {
        return <li className="list-group-item">{m}</li>;
      })
    ) : (
      <div>
        <b>No Data !</b>
      </div>
    );
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">{this.state.backendMessage}</div>
          <div className="col-6 text-center">
            <b>Selected Users Names</b>
            <div className="row mt-2">
              <div className="col-6">
                <div className="btn btn-danger" onClick={this.sendsharedata}>
                  Create Contributor
                </div>
              </div>
              <div className="col-6">
                <div className="btn btn-warning" onClick={this.clearstate}>
                  Clear
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12 text-center">
                <ul class="list-group">{data}</ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="text-center">
              <b>List Of user for Sharing Notes</b>
            </div>
            <ul class="list-group mt-1">
              {this.state.userName.map(m => {
                return (
                  <li
                    class="list-group-item"
                    onClick={() => {
                      this.setState({
                        ogusername: m.username
                      });
                      this.state.Selectedusername.push(m.username);
                    }}
                  >
                    {m.username}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(assigncontributor);
