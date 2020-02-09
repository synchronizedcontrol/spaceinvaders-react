import React, { Component } from 'react';
import './Enemy.css';

class Enemy extends Component {
	constructor (props) {
		super(props);
		this.state = {
			enemyPosition: { top: props.top, left: props.left },
			stepsTaken:0,
			setIntervalTime:200
		};
		this.stepWidth = 10;
		this.stepsTaken = 0;
		this.setIntervalTime = 100;
  		this.moveEnemy = this.moveEnemy.bind(this);
  		this.numberOfSteps = Math.floor(215/this.stepWidth);
  		this.whenYourDead = 450;
  		this.checkIfDead = props.areYouDead;
	}

	prepare = () => {
		this.stepwidth = 10;
	}
  //Template page for Space invaders
  render() {
    return (
      <div place={this.props.index} className="Enemy" style={{
			top: `${this.state.enemyPosition.top}px`,
			left: `${this.state.enemyPosition.left}px`,
			padding:`${this.stepwidth}px`
		}}>
      </div>
    );
  }

  componentDidMount () {
	this.startGameLoop();
  }

  componentWillUnmount() {
  	clearInterval(this.interval);
  }

  startGameLoop () {
  	this.interval = setInterval(this.moveEnemy, this.setIntervalTime);
  }

  moveEnemy (val) {
  	if(this.state.enemyPosition.top === 50){
  		this.checkIfDead();
  	}
  	if(this.props.isDead) {
  		clearInterval(this.interval);
  	}

  	if(this.stepsTaken < this.numberOfSteps ) {
  		this.setState({enemyPosition: {...this.state.enemyPosition, left: this.state.enemyPosition.left + this.stepWidth}});
  	} else if(this.stepsTaken === this.numberOfSteps) {
		this.setState({enemyPosition: {...this.state.enemyPosition, top: this.state.enemyPosition.top + this.stepWidth}});
		this.setIntervalTime -= 50;
  	} else if (this.stepsTaken > this.numberOfSteps && this.stepsTaken < ((this.numberOfSteps * 2) + 1)) {
  		this.setState({enemyPosition: {...this.state.enemyPosition, left: this.state.enemyPosition.left - this.stepWidth}});
  	} else if (this.stepsTaken === (this.numberOfSteps * 2) + 1) {
  		this.setState({enemyPosition: {...this.state.enemyPosition, top: this.state.enemyPosition.top + this.stepWidth}});
		this.setIntervalTime -= 50;
  	}

	this.stepsTaken += 1;
 
  	if(this.stepsTaken > (this.numberOfSteps * 2) + 1) {
  		this.stepsTaken = 0;
  	}
  }
}

export default Enemy;