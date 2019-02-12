import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sequence: []
    }
    this.addSound = this.addSound.bind(this);
    this.play = this.play.bind(this);
  }

  addSound(event) {
    console.log(event.target.id);
    this.setState({
      sequence: this.state.sequence.concat(event.target.id)
    });
  }

  play() {
    for (var i = 0; i < this.state.sequence.length; i++) {
      switch(this.state.sequence[i]) {
        case "1":
          var audio = new Audio('gentlelaborer.mp3');
          audio.play()
        case "2":
        case "3":
        case "4":
        default:
          console.log("default");
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Test App</h2>
            <source src="mp3/mayonnaise.mp3" type="audio/mpeg" />
            <div>
              <button id="1" onClick={this.addSound}>1</button>
              <button id="2" onClick={this.addSound}>2</button>
            </div>
            <div>
              <button id="3" onClick={this.addSound}>3</button>
              <button id="4" onClick={this.addSound}>4</button>
              <div id="sequence">{this.state.sequence.map((i,j) => {
                return (
                  i + " "
                )
              })}
              </div>
              <div>
                <button id="play" onClick={this.play}>Play</button>
              </div>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
