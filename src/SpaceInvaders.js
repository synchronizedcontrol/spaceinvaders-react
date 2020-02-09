import React, { Component } from 'react';
import './SpaceInvaders.css';
import SpaceInvadersBoard from './SpaceInvadersBoard';
import moment from 'moment';

class SpaceInvaders extends Component {
  constructor () {
    super();
    console.log(moment.now());
  }

  render() {
    return (
      <div className="SpaceInvaders">
        <SpaceInvadersBoard />
      </div>
    );
  }
}

export default SpaceInvaders;
