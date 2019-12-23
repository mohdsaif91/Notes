import React from "react";
import { NavLink } from "react-router-dom";
const signedinLink = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/note">Notes</NavLink>
      </li>
      <li>
        <NavLink to="/mynote">My Notes</NavLink>
      </li>
      <li>
        <NavLink to="/create">New Note</NavLink>
      </li>
      <li>
        <NavLink to="/notification">Notification</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Log Out</NavLink>
      </li>
    </ul>
  );
};

export default signedinLink;
