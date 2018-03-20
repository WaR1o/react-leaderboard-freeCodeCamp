import React, { Component } from "react";
import axios from "axios";
import { USERS } from "../mock-data";
import User from "./User";
import "./Leaderboard.css";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.handlePointsClick = this.handlePointsClick.bind(this);
  }
  state = {
    users: USERS,
    sort: "alltime"
  };
  componentDidMount() {
    this.handlePointsClick("recent");
  }
  handlePointsClick(param) {
    axios
      .get(`https://fcctop100.herokuapp.com/api/fccusers/top/${param}`)
      .then(response => {
        this.setState({ users: response.data, sort: param });
      });
  }
  render() {
    let usersComponent = <p>No users found</p>;
    if (this.state.users.length) {
      usersComponent = this.state.users
        .sort(
          (a, b) => parseInt(b[this.state.sort]) - parseInt(a[this.state.sort])
        )
        .map((user, i) => (
          <User key={user.username} user={user} position={i + 1} />
        ));
    }

    return (
      <div>
        <div className="leaderboard__columns">
          <h1 className="leaderboard__header">Leaderboard</h1>
          <div className="leaderboard__position" />
          <div className="leaderboard__name">Username</div>
          <div
            onClick={() => this.handlePointsClick("recent")}
            className="leaderboard__points--recent clickable"
          >
            Last month points {this.state.sort === "recent" ? "\u2BC6" : ""}
          </div>
          <div
            onClick={() => this.handlePointsClick("alltime")}
            className="leaderboard__points--alltime clickable"
          >
            All time points {this.state.sort === "alltime" ? "\u2BC6" : ""}
          </div>
        </div>
        {usersComponent}
      </div>
    );
  }
}

export default Leaderboard;
