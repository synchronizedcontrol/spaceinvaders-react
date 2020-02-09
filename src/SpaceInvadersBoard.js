import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SpaceInvadersBoard.css';
import PlayerOne from './PlayerOne';
import EnemiesCollection from './EnemiesCollection';

class SpaceInvadersBoard extends Component {
	constructor () {
		super();
		this.positionInterval = this.positionInterval.bind(this);
		this.state = {removeEnemy:null}
	}

	componentDidMount () {
		this.interval = setInterval(this.positionInterval, 100);
	}

	positionInterval () {
		//steps = 43
		let enemies = [...ReactDOM.findDOMNode(this).getElementsByClassName('Enemy')];
		let bullets = [...ReactDOM.findDOMNode(this).getElementsByClassName('Bullet')];
		enemies = enemies.map(item => {
			return {
				left:item.getBoundingClientRect()['left'], 
				top:item.getBoundingClientRect()['top'],
				id: parseInt(item.getAttribute('place')) 
			}
		});

		bullets = bullets.map(item => {
			return {
				left:item.getBoundingClientRect()['left'], 
				top:item.getBoundingClientRect()['top'],
				id: parseInt(item.getAttribute('place')) 
			}
		});

		for (let i = 0; i < enemies.length; i++) {
			let enemy = enemies[i];
			for(let x = 0; x < bullets.length; x++) {
				let bullet = bullets[x]
				if (bullet.left >= (enemy.left + 15) && bullet.left <= (enemy.left + 60) && bullet.top <= (enemy.top + 50) && bullet.top >= (enemy.top - 15)) {
					console.log(bullet.left, enemy.left, bullet.top, enemy.top)
					this.setState({removeEnemy:enemy.id})
                    // enemies.splice(i, 1);
                    // bullets.splice(x , 1);
                    // console.log(enemies, bullets)
                }
			}
		}
	}

  //Template page for Space invaders
  render() {
    return (
      <div ref="test" className="Board">
      	{/*<div class="stars"></div>
		<div class="stars"></div>
		<div class="stars"></div>
		<div class="stars"></div>
		<div class="stars"></div>*/}
      	<EnemiesCollection removeEnemy={this.state.removeEnemy}/>
        <PlayerOne />

      </div>
    );
  }
}

export default SpaceInvadersBoard;