import React, { Component } from 'react';

import Button from './components/Button';
import Moles from './components/Moles';
import Counters from './components/Counters';

class Whackamole extends Component {
  state = {
    time: 0,
    whacks: 0,
    gameActive: false,
    highScore: 0,
    moles: [false, false, false, false] // false --> not whackable
  }
  
  startRound = () => {
    this.setState({
      time: 20,
      whacks: 0,
      gameActive: true,
      moles: [false, false, false, false]
    }, () => {
      this.startTimer();
      this.startMoles();
    });
  }
  
  endRound = () => {
    const { whacks, highScore } = this.state;
    this.stopTimer();
    this.stopMoles();
    this.deactivateAllMoles();
    this.setState({
      highScore: Math.max(whacks, highScore)
    });
  }
  
  startTimer = () => {
    this.timerInterval = setInterval(this.decrementTime, 1000);
  }

  stopTimer = () => {
    clearInterval(this.timerInterval);
  }

  startMoles = () => {
    this.moleInterval = setInterval(this.activateRandomMole, 500);
  }

  stopMoles = () => {
    clearInterval(this.moleInterval);
  }
  
  decrementTime = () => {
    this.setState({
      time: this.state.time - 1
    }, () => {
      if (this.state.time === 0) {
        this.endRound();
      }
    });
  }

  incrementWhacks = (moleId) => {
    const moles = this.state.moles.slice();
    moles[moleId] = false;
    this.setState({
      whacks: this.state.whacks + 1,
      moles,
    });
  }

  activateRandomMole = () => {
    // First chose to do random index for only moles that are inactive.
    // but this turned out to be overwhelming.
    const randomMoleIndex = Math.floor(Math.random() * this.state.moles.length);
    if (!this.state.moles[randomMoleIndex]) {
      this.activateMole(randomMoleIndex);
    }
  }

  activateMole = (id) => {
    const moles = this.state.moles.slice();
    moles[id] = true;
    this.setState({ moles });
    setTimeout(() => this.deactivateMole(id), 1500);
  }
  
  deactivateMole = (id) => {
    const moles = this.state.moles.slice();
    moles[id] = false;
    this.setState({ moles });
  }
  
  deactivateAllMoles = () => {
    this.setState({
      moles: this.state.moles.map(() => false),
    });
  }

  render() {
    return (
      <div className="whackamole">
        <h1 className="logo">
          Whack-a-mole!
        </h1>
        <Button
          className="start-game"
          text="Start Round"
          onClick={this.startRound}
        />
        <div className="counters-container">
        </div>
        <Counters
          whackCount={this.state.whacks}
          time={this.state.time}
          highScore={this.state.highScore}
        />
        <Moles
          gameActive={this.state.gameActive}
          moles={this.state.moles} 
          onWhack={this.incrementWhacks}
        />
      </div>
    );
  }
}

export default Whackamole;
