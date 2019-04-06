import React, { Component } from 'react';
import './animate.css';

import Splash from './components/Splash'
import Game from './components/Game'

const images = [{ name: "Anger", url: "./img/anger.jpg" },
{ name: "Resist", url: "./img/resist.jpg" }, 
{ name: "Talent", url: "./img/talent.png" }, 
{ name: "Wisdom", url: "./img/wisdom.jpg" } ]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // 0 = Splash Screen
      // 1 = Game
      view: 0
    }
  }

  handleView = target => {
    switch (target) {
      // Render Splash Screen
      case 0:
        this.setState({ view: 0 });
        break;
      // Render Game
      case 1:
        this.setState({ view: 1 });
        break;
      // :(
      default:
        console.log(":(");
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.view === 0 && <Splash handleView={this.handleView} />}
        {this.state.view === 1 && <Game handleView={this.handleView} images={images} />}
      </div>
    );
  }
}

export default App;
