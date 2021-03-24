import React, { Component } from 'react';

class Gif extends Component{
  render () {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} id={this.props.id} alt="f1Gif" className="gif" />
    )
  }
}

export default Gif;
