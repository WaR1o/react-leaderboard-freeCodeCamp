import React from "react";
import "./User.css";

const User = props => (
  <div className="user__row">
    <div className="user__position">{props.position}</div>
    <div className="user__info">
      <img className="user__photo" src={props.user.img} alt="user avatar" />
      <a
        href={`https://www.freecodecamp.org/${props.user.username}`}
        target="_blank"
        className="user__name clickable"
      >
        {props.user.username}
      </a>
    </div>
    <div className="user__points--recent">{props.user.recent}</div>
    <div className="user__points--alltime">{props.user.alltime}</div>
  </div>
);

export default User;
