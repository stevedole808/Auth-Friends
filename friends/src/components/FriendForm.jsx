import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Friend extends React.Component {
  state = {
    credentials: {
      name: "",
      age: "",
      email: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", this.state.credentials)
      .then(res => (this.props.parent.setState({friendsList: res.data})))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.credentials.name}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <input
            type="age"
            name="age"
            value={this.state.credentials.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <input
            type="email"
            name="email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <button>Add Friend!</button>
        </form>
      </div>
    );
  }
}

export default Friend;
