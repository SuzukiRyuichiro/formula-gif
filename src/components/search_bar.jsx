import React, { Component } from 'react';

class SearchBar extends Component {
  search = (event) => {
    console.log(event.target.value);
  }

  render () {
    return (
      <input type="text" className="form-search form-control"
      onChange={this.search} />
    )
  }
}

export default SearchBar;
