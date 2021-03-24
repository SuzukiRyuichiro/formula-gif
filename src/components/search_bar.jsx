import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    if (event.target.value !== "") {
      console.log('f1' + event.target.value);
      this.props.search('f1 ' + event.target.value);
    } else {
      this.props.search("Formula 1");
    }
  }

  render () {
    return (
      <input type="text" className="form-search form-control" placeholder="George Russell, Alex Albon, Lewis Hamilton...."
      onChange={this.handleChange} />
    )
  }
}

export default SearchBar;
