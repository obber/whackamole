import React, { Component } from 'react';

import './Mole.css';

// props = active, id, onWhack
class Mole extends Component {

  shouldComponentUpdate(nextProps) {
    if (nextProps.active !== this.props.active) {
      return true;
    }

    return false;
  }

  setContainerClassName() {
    const { active } = this.props;
    return `mole-container ${active ? "active" : "inactive"}`;
  }

  handleClick = () => {
    const { active } = this.props;
    if (active) {
      this.props.onWhack(this.props.id);
    }
  }

  render() {
    let containerClassName = this.setContainerClassName();
    
    return (
      <div className={containerClassName} >
        <div className="mole-image-container">
          <img 
            className="mole" 
            src="https://res.michaelwhyte.ca/mole.png"
            onClick={this.handleClick}
            alt="mole"
          />
        </div>
        <img 
          className="dirt"
          src="https://res.michaelwhyte.ca/dirt.svg"
          alt="mole dirt"
        />
      </div>
    );
  }
}

export default Mole;
