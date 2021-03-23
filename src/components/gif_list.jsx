import React, { Component } from 'react';
import Gif from './gif.jsx'

class GifList extends Component{
  render () {
    return (
      <div className="gif-list">
        <Gif />
      </div>
    )
  }
}

export default GifList;
