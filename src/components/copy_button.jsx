import React, { Component } from 'react';

class CopyButton extends Component{
  copyGif = () => {
    navigator.clipboard.writeText(`https://media.giphy.com/media/${this.props.id}/giphy.gif`);
  }

  render () {
    return (
      <button type="button" className="btn btn-danger copy-button" onClick={this.copyGif}>Copy GIF link</button>
    )
  }
}

export default CopyButton;
