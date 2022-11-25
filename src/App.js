import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navBar";
import { Search } from "./components/users/Search";
import Users from "./components/users/Users";
export class App extends Component {
  state = {
    usersData: [],
    searchText: "",
  };

  // componentDidMount() {
  //   axios.get("https://api.github.com/users").then((response) => {
  //     console.log(response.data);
  //     this.setState({ usersData: response.data });
  //   });
  // }

 searchUsers = async (text) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    console.log("🚀 ~ file: App.js ~ line 24 ~ App ~ searchUsers= ~ response", response)
    this.setState({
      usersData: response.data.items,
    });
  };
  clearUsers = () => {
    this.setState({
      usersData: [],
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
           <Search clearUsers={this.clearUsers} searchUsers={this.searchUsers} />
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}
export default App;