import React, { Component } from 'react';
import axios from 'axios';
import TvShow from './TvShow';

class App extends Component {

  state = {
    tvShows : [],
    channels : ['LRT1', 'LRT PLUS', 'LRT LITHUANICA', 'LRT RADIJAS', 'LRT KLASIKA', 'LRT OPUS']
  };


  componentWillMount(){
      axios.get('http://localhost:8080/lrt/gyvai').then((result)=>{
          this.setState({
            tvShows : result.data.onAir
          });      })
  }

  render() {

    const shows = this.state.tvShows.map((element, index)=>{
      return (<TvShow key={index} show={element.showName} channel={this.state.channels[index]}/>)
    });

    return (
      <div>
            {shows}
      </div>
    );
  }
}

export default App;
