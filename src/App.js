import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let gentlelaborer = require('./mp3/gentlelaborer.mp3');
let mayonnaise = require('./mp3/mayonnaise.mp3');
let heartman = require('./mp3/heartman.mp3');
let imagination = require('./mp3/imagination.mp3');
let boldandbrash = require('./mp3/boldandbrash.mp3');
let finland = require('./mp3/finland.mp3');
let hatsir = require('./mp3/hatsir.mp3');
let hewasnumberone = require('./mp3/hewasnumberone.mp3');
let namesnotrick = require('./mp3/namesnotrick.mp3');
let onlyfood = require('./mp3/onlyfood.mp3');
let uglybarnacle = require('./mp3/uglybarnacle.mp3');
let dirtydan = require('./mp3/dirtydan.mp3');
let rickroll = require('./mp3/rickroll.mp3');

var audio = new Audio();

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
    this.stop = this.stop.bind(this);
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
      audio.src = getFile(arr[0]);
      //var audio = new Audio(getFile(arr[0]));
      audio.play();

      audio.onended = function() {
        if (i < length) {
          console.log(this);
          audio.src = getFile(arr[i]);
          audio.play();
          i++;
        }
      };
    } else if (length == 0) {
      audio.pause();
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
      case "5":
        return boldandbrash;
      case "6":
        return finland;
      case "7":
        return hatsir;
      case "8":
        return hewasnumberone;
      case "9":
        return namesnotrick;
      case "10":
        return onlyfood;
      case "11":
        return uglybarnacle;
      case "12":
        return dirtydan;
      case "13":
        return rickroll;
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

  stop() {
    console.log("a");
    audio.pause();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Spongebob Soundboard</h2>
            <div>
              <button id="1" className="board" onClick={this.addSound}>1</button>
              <button id="2" className="board" onClick={this.addSound}>2</button>
              <button id="3" className="board" onClick={this.addSound}>3</button>
              <button id="4" className="board" onClick={this.addSound}>4</button>
            </div>
            <div>
              <button id="5" className="board" onClick={this.addSound}>5</button>
              <button id="6" className="board" onClick={this.addSound}>6</button>
              <button id="7" className="board" onClick={this.addSound}>7</button>
              <button id="8" className="board" onClick={this.addSound}>8</button>
            </div>
            <div>
              <button id="9" className="board" onClick={this.addSound}>9</button>
              <button id="10" className="board" onClick={this.addSound}>10</button>
              <button id="11" className="board" onClick={this.addSound}>11</button>
              <button id="12" className="board" onClick={this.addSound}>12</button>
            </div>
            <div>
              <button id="13" className="board" onClick={this.addSound}>13</button>
            </div>

            <div>
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
              <div>
                <button id="stop" className="bottom" onClick={this.stop}>Stop</button>
              </div>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
