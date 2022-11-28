import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === "") {
      alert("Input must not be empty ...");
      return;
    }
    this.props.searchUsers(this.state.text);
    this.setState({
      text: "",
    });
    };
   handleClear = (event) => {
    event.preventDefault();
    this.props.clearUsers();
  };
  render() {
    return (
      <div>
        <form className="form">
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            className=""
            type="text"
          />
          <input
            onClick={this.handleSubmit}
            className="btn btn-dark btn-block"
            type="submit"
            
                />
                <button
                    className="btn btn-primary btn-block"
            onClick={this.handleClear}
            type="button"
        >Reset</button>        
        
        </form>
      </div>
    );
  }
}

export default Search;