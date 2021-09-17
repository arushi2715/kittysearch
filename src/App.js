import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component.js";

import { SearchBox } from "./components/search-box/search-box.component.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kitties: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ kitties: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { kitties, searchField } = this.state;
    const filteredKitties = kitties.filter((kitty) =>
      kitty.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h2>KITTY SEARCH</h2>
        <SearchBox
          placeholder="SEARCH KITTY"
          handleChange={this.handleChange}
        />
        <CardList kitties={filteredKitties} />
      </div>
    );
  }
}

export default App;
