import React, { Component } from 'react';
import giphy from 'giphy-api';
// Components
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'
import SearchBar from './search_bar.jsx'
import CopyButton from './copy_button.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "mI5iY1NWUXaLolhxIQ"
    }
    this.search('Funny Formula 1');
  }

  search = (query) => {
    giphy('Fw5CmD3tNzQtabybd5mvQg3gOa8t0OdK').search({
      q: query,
      rating: 'g',
      limit: 20
    }, (err, result) => {
      this.setState({
        gifs: result.data
      })
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <CopyButton id={this.state.selectedGifId}/>
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App
