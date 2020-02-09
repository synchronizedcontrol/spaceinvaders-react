import React, { Component } from 'react';
import './PlayerOne.css';
import Bullet from './Bullet';

class PlayerOne extends Component {
	constructor (props) {
		super(props);
		this.state = {playerPosition: { top: 510, left: 380 }, bulletArray: []};
		this.playerStyling = {
			top: `${this.state.playerPosition.top}px`,
			left: `${this.state.playerPosition.left}px`
		}
		this.handleBulletUnmount = this.handleBulletUnmount.bind(this);
	}

	componentDidMount () {
		document.onkeydown = (e) => {
			// Move left
			if (e.code  === 'ArrowLeft') {
				if(this.state.playerPosition.left > -20) {
					this.setState({playerPosition: {...this.state.playerPosition, left: this.state.playerPosition.left - 10}});
				}
	            
	        }
	        // Move right
	        if (e.code  === 'ArrowRight') {
	        	if(this.state.playerPosition.left < 730) {
		            this.setState({playerPosition: {...this.state.playerPosition, left: this.state.playerPosition.left + 10}});
		        }
	        }
	        // Fire bullet (space)
	        if (e.code  === 'Space') {
	           this.fire();
	        }
	    }
	}

	fire() {
		this.setState({bulletArray: [...this.state.bulletArray, {...this.state.playerPosition, show: true} ]})
	}

	handleBulletUnmount(id) {
		this.setState({bulletArray: [...this.state.bulletArray.splice(0, id), null, ...this.state.bulletArray.splice(id+1)] });
	}

	  //Template page for Space invaders
	  render() {
	    return (
	    	<div ref="PlayerOne" >
	      <div className="PlayerOne" style={{
			top: `${this.state.playerPosition.top}px`,
			left: `${this.state.playerPosition.left}px`
		   }}>
	      </div>
	      {
		   	this.state.bulletArray.map((bullet, index) => {
		   		return (bullet ? <Bullet key={index} index={index} top={bullet.top} left={bullet.left} unmountMe={this.handleBulletUnmount} /> : null) 	   		
		   	})
		   }
		   </div>
	    );
  }
}

export default PlayerOne;
