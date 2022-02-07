import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  handleSearchChange(newStr) {
    this.setState({ searchString: newStr });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchString } = this.state;
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          handleChange={this.handleSearchChange.bind(this)}
          placeholder="Search Monsters"
        />
        <CardList
          monsters={monsters.filter((monster) => {
            return monster.name
              .toLowerCase()
              .includes(searchString.toLowerCase());
          })}
        />
      </div>
    );
  }
}

export default App;
