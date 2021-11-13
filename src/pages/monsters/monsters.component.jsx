import React from "react";
import axios from "axios";
import { SearchBox } from "../../components/search-box/search-box.component";
import { CardList } from "../../components/card-list/card-list.component";

import './monsters.styles.scss';

class Monsters extends React.Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
          }
    }


  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      <div className="monsters">
          <h1>Monsters Rolodex</h1>

        <SearchBox placeholder="Search Monsters" handleChange={ this.handleChange }/>
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default Monsters;