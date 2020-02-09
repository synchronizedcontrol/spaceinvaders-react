import React, { Component } from 'react';
import './Bullet.css';

class Bullet extends Component {
  constructor (props) {
  	super(props);
  	this.state = {bulletPositionTop: props.top};
  	this.moveBullet = this.moveBullet.bind(this);
  	this.stepsTaken = 0;
  	this.setIntervalTime = 100;
  }

  componentDidMount () {
  	this.startBulletLoop();
  }

  componentUnMount() {
  	clearInterval(this.interval);
  }

  startBulletLoop () {
  	this.interval = setInterval(this.moveBullet, this.setIntervalTime);
  }

  moveBullet () {
  	this.setState({bulletPositionTop:this.state.bulletPositionTop - 40});

	this.stepsTaken += 1;
 
  	if(this.stepsTaken > 12) {
  		clearInterval(this.interval);
  		this.destroyBullet();
  	}
  }

  destroyBullet() {
  	clearInterval(this.interval);
  	this.props.unmountMe(this.props.index);
  }

  render() {
    return (
      <div place={this.props.index} className="Bullet" style={{
			top: `${this.state.bulletPositionTop}px`,
			left: `${this.props.left + 42}px`
		}}>
        
      </div>
    );
  }
}

export default Bullet;