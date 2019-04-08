import { Common } from "../common/common";
import { LinkedList, Node } from "../common/LinkedList";
import { Particle } from "./particle";

class Controller {
	
	constructor(){
		this.bln = false ;
		this.stopBln = false ;
	}
	
	start = () => {
		if( this.bln ) return ;
		this.bln = true ;
		this.stopBln = false;
		this.move() ;
	}	// end of start

	move = () => {
		let { props } = this;
		props.ctx.clearRect(0, 0, props.w, props.h);
	
		let crntSnow = props.particles.head;
	
		while (crntSnow.next !== null) {
		  let snow = crntSnow.value;
		  snow.rotate += Math.random() * 0.045;
		  snow.x += snow.size * 0.1 * snow.duration + snow.windVariance;
		  snow.y += snow.size * snow.duration;
	
		  if (snow.y > props.h) {
			if (!this.stopBln) {
			  snow.x = Common.rdm(
				-Math.abs(snow.wind),
				snow.w + Math.abs(snow.wind)
			  );
			  let map = new Map();
			  map.set("fallingDown", snow.idx);
			  snow.update(map);
			}
		  }
		  snow.draw();
		  crntSnow = crntSnow.next;
		}
		if (this.bln) {
		  requestAnimationFrame(this.move);
		}
	};

	stop = () => {
		this.stopBln = true;
	}	// end of stop

	clear = () => {
		let { props } = this ;
		this.bln = false ;
		this.stopBln = false ;

		setTimeout(() => {
			props.ctx.clearRect( 0, 0, props.w , props.h ) ;
		}, 10) ;
	}	// end of clear

	change = ( valueName, num ) => {
		let { props } = this;
		let crntSnow = props.particles.head;
		while (crntSnow.next !== null) {
			let snow = crntSnow.value;
			let map = new Map();
			map.set(valueName, +num);
			snow.update(map);
			crntSnow = crntSnow.next;
		}
	}	// end of update

	delete = () => {
		let { particles } = this.props;
		let crntSnow = particles.head;
		while (crntSnow.next !== null) {
			if (crntSnow.value.idx % 2 === 0) {
				// 2-> 정적인 것을 동적으로 변경
				particles.removeAt(crntSnow.value);
			}
			crntSnow = crntSnow.next;
		}
	  }; // end of delete
	
	  addSnow = num => {
		let { props } = this;
		let i = props.len + 1,
		len = props.len + num;
		for (; i < len; i += 1) {
			console.log( props ) ;
			props.particles.addToHead(new Particle(i, props));
		}
		props.len = props.len + num;
	  }; // end of addSnow

}	// end of Controller


export { Controller };
