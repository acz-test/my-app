import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let gentlelaborer = require('./mp3/gentlelaborer.mp3');
let mayonnaise = require('./mp3/mayonnaise.mp3');
let heartman = require('./mp3/heartman.mp3');
let imagination = require('./mp3/imagination.mp3');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sequence: []
    }
    this.addSound = this.addSound.bind(this);
    this.play = this.play.bind(this);
    this.reset = this.reset.bind(this);
    this.removeSound = this.removeSound.bind(this);
  }

  addSound(event) {
    this.setState({
      sequence: this.state.sequence.concat(event.target.id)
    });
  }

  reset() {
    this.setState({
      sequence: []
    });
  }

  play() {
    var i = 1;
    var length = this.state.sequence.length;
    var arr = this.state.sequence.slice();
    const getFile = this.getFile;
    if (length > 0) {
      var audio = new Audio(getFile(arr[0]));
      audio.play();

      audio.onended = function() {
        if (i < length) {
          console.log(this);
          audio.src = getFile(arr[i]);
          audio.play();
          i++;
        }
      };
    }
  }

  getFile(num) {
    switch(num) {
      case "1":
        return gentlelaborer;
      case "2":
        return mayonnaise;
      case "3":
        return heartman;
      case "4":
        return imagination;
      default:
        console.log("default");
    }
  }

  removeSound(event) {
    var index = parseInt(event.target.id.slice(4));
    var seq = this.state.sequence.slice();
    this.setState({
      sequence: seq.slice(0,index).concat(seq.slice(index+1))
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Spongebob Soundboard</h2>
            <div>
              <button id="1" className="board" onClick={this.addSound}>1</button>
              <button id="2" className="board" onClick={this.addSound}>2</button>
            </div>
            <div>
              <button id="3" className="board" onClick={this.addSound}>3</button>
              <button id="4" className="board" onClick={this.addSound}>4</button>
              <div id="sequence">{this.state.sequence.map((i,j) => {
                return (
                  <button className="list" id={"list" + j} key={j} onClick={this.removeSound}>{i}</button>
                  //i + " "
                )
              })}
              </div>
              <div>
                <button id="play" className="bottom" onClick={this.play}>Play</button>
                <button id="reset" className="bottom" onClick={this.reset}>Reset</button>
              </div>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
