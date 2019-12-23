import React, { Component, useCallback } from "react";
import NotesDataService from "../../services/NotesDataService";
import PropsType from "prop-types";
class shareNote extends Component {
  static propstype = {
    location: PropsType.object.isRequired
  };
  state = {
    UserNames: [],
    selectUserName: [],
    ogusername: "jack",
    ogid: "",
    message: "",
    title: "",
    username: "",
    message: ""
  };
  selectName = e => {
    var name = e.target.value;
    console.log(name);
    this.state.selectUserName.push(name);
    console.log(this.state.selectUserName);
  };
  componentDidMount() {
    const { location } = this.props;
    const id = location.state.id;
    const title = location.state.title;
    const uname = location.state.uname;
    console.log(id);
    this.setState({
      ogid: id,
      title: title,
      username: uname
    });
    NotesDataService.getAllUserFroshare().then(response => {
      console.log(response.data);
      this.setState({ UserNames: response.data });
      console.log(this.state.UserNames);
    });
  }
  sendsharedata = () => {
    let data = this.state.selectUserName;
    let id = this.state.ogid;
    let title = this.state.title;
    let uname = this.state.username;
    NotesDataService.sendsharedata(data, title, id, uname).then(response => {
      this.setState({ message: response.data });
    });
  };
  clearstate = () => {
    this.setState({ selectUserName: [] });
  };
  render() {
    const data = this.state.UserNames.length ? (
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">{this.state.message}</div>
          <div className="col-6 text-center">
            <b>Selected Users Names</b>
            <div className="row mt-2">
              <div className="col-6">
                <div className="btn btn-danger" onClick={this.sendsharedata}>
                  Share
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
                <ul class="list-group">
                  {this.state.selectUserName.map(m => {
                    return (
                      <li className="list-group-item">
                        <b>{m}</b>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="text-center">
              <b>List Of user for Sharing Notes</b>
            </div>
            <ul class="list-group mt-1">
              {this.state.UserNames.map(m => {
                return (
                  <li
                    key={m.username}
                    class="list-group-item "
                    onClick={() => {
                      this.setState({
                        ogusername: m.username
                      });
                      this.state.selectUserName.push(m.username);
                      console.log(this.state.selectUserName);
                      //   this.callmethod();
                    }}
                    value={m.username}
                  >
                    {m.username}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    ) : (
      <div>No data</div>
    );
    return <div>{data}</div>;
  }
}

export default shareNote;
