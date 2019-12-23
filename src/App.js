import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./component/layout/NavBar";
import DashBoard from "./component/dashboard/dashboard";
// import ProjectDetials from "./component/Note/projectdetials";
import Signin from "./component/auth/signin";
import Signup from "./component/auth/signup";
import CreateNote from "./component/Note/createnote";
import NoteSummary from "./component/Note/NoteSummary";
import Mynote from "./component/Note/mynote";
import UpdateNote from "./component/Note/updateNote";
import shareNote from "./component/Note/shareNote";
import Notification from "./component/Note/notification";
import Viewnoti from "./component/Note/viewnoti";
import Assignecontribution from "./component/Note/assignecontributor";
import Viewnotemain from "./component/Note/viewnotemain";
import Updatenotemain from "./component/Note/updatenotemain";
import Logout from "./component/auth/logout";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ backgroundColor: "#95E8F3" }}>
        <Switch>
          <Route path="/notes" component={DashBoard} />
          <Route exact path="/" component={DashBoard} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={CreateNote} />
          <Route path="/myNotes" component={Mynote} />
          <Route path="/get" component={NoteSummary} />
          <Route path="/mynote" component={Mynote} />
          <Route path="/updatenote" component={UpdateNote} />
          <Route path="/sharnote" component={shareNote} />
          <Route path="/notification" component={Notification} />
          <Route path="/viewnoti" component={Viewnoti} />
          <Route path="/assignecontribution" component={Assignecontribution} />
          <Route path="/viewnotimain" component={Viewnotemain} />
          <Route path="/updatenotemain" component={Updatenotemain} />
          <Route path="/note" component={DashBoard} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
