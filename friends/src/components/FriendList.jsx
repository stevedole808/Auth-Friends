import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";

class FriendList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        this.setState({
          friendsList: res.data
        });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() { 
    return (
      <div>
        <h1>This is my Friendlist</h1>
        {this.state.friendsList.map(friend => (
          <p>
            Name: {friend.name} , Age: {friend.age} , Email: {friend.email}
          </p>
        ))}
        <h1>Add A Friend! 😃</h1>
        <FriendForm friendsList={this.state.friendsList}/>
      </div>
    );
  }
}

export default FriendList;