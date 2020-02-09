import React, { Component } from 'react';
import Enemy from './Enemy';

class EnemiesCollection extends Component {
  constructor (props) {
  	super(props);
  	this.enemies = [
  		{ left: 0, top: 20 },
        { left: 100, top: 20 },
        { left: 200, top: 20 },
        { left: 300, top: 20 },
        { left: 400, top: 20 },
        { left: 500, top: 20 },
        { left: 0, top: 100 },
        { left: 100, top: 100 },
        { left: 200, top: 100 },
        { left: 300, top: 100 },
        { left: 400, top: 100 },
        { left: 500, top: 100 }
  	];

  	this.state = {isDead: false}
  	this.areYouDead = this.areYouDead.bind(this);
  }

  areYouDead () {
  	this.setState({isDead: true});
  }

  componentDidMount () {
  	//this.startGameLoop();
  }

  shouldComponentUpdate (nextProps, nextState) {
  	console.log(nextProps.removeEnemy)
  	if(nextProps.removeEnemy)
  		this.enemies = [...this.enemies.slice(0, nextProps.removeEnemy), undefined, ...this.enemies.slice(nextProps.removeEnemy + 1)];
  	return true 
  }

  //Template page for Space invaders
  render() {
    return (
      <div>
        {this.enemies.map((enemy, index) => {
        	return(enemy ? <Enemy ref="Enemy" key={index} index={index} top={enemy.top} left={enemy.left} isDead={this.state.isDead} areYouDead={this.areYouDead}/> : null)
        })}
      </div>
    );
  }
}
export default EnemiesCollection;
