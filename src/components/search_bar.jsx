import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    this.props.search(event.target.value);
  }

  render () {
    return (
      <input type="text" className="form-search form-control" placeholder="George Russell, Alex Albon, Lewis Hamilton...."
      onChange={this.handleChange} />
    )
  }
}

export default SearchBar;
