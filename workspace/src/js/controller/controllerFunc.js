import { Comn } from "../common/Comn";
import { LinkedList, Node } from "../common/LinkedList";
import { Particle } from "../snow/snowParticle";

class ControllerFunc {
	
	constructor(){
		this.bln = false ;
      this.stopBln = false ;
	}
	
	start = () => {
		if( this.bln ) return ;
		console.log( 'start' ) ;
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
               if( snow.windVariance > 0 ) {
                  snow.x = Comn.rdm( -Math.abs(snow.wind), snow.w );	
               } else if( snow.windVariance < 0 ){
                  snow.x = Comn.rdm(0, snow.w + Math.abs(snow.wind));
               } else {
                  snow.x = Comn.rdm(-Math.abs(snow.wind), snow.w + Math.abs(snow.wind));
               }
					let map = new Map();
					map.set("fallingDown", snow.idx);
					snow.update(map);
				}
			}		

			// delete 시 서서히 사라지는 효과 적용
			if( snow.del ) {
				snow.alpha -= 0.01 ;
				if( snow.alpha < 0 ) {
					snow.alpha = 0 ;
					setTimeout(() => {
						snow.particles.removeHead();
					}, 10) ;
				}
			}

			snow.draw();

			crntSnow = crntSnow.next;
		}
		if (this.bln) {
			requestAnimationFrame(this.move);
		}
	}	// end of move

	stop = () => {
		// this.bln = false ;
		this.stopBln = true;
		console.log( 'stop' ) ;
	}	// end of stop

	clear = () => {
		let { props } = this ;
		this.bln = false ;
		this.stopBln = false ;
		
		setTimeout(() => {
			props.ctx.clearRect( 0, 0, props.w , props.h ) ;
		}, 10 ) ;
	}	// end of clear

	change = ( valueName, num ) => {     
      let { props } = this;      
		if( valueName === 'windVariance' ){
         props.windVariance = +num ;
         props.wind = (props.ctx.canvas.height * +num) / 2;
      } else {
         props[valueName] = num ;
      }
		let crntSnow = props.particles.head;
		while (crntSnow.next !== null) {
			let snow = crntSnow.value;
			let map = new Map();
			map.set(valueName, +num);
			snow.update(map);
			crntSnow = crntSnow.next;
		}
	}	// end of update
	
	add = num => {
      let { props } = this
		,	 i = props.len
		,	 len = props.len + num;
		for ( ; i < len; i += 1 ) {
			props.particles.addToHead(new Particle(i, props));
		}
		props.len = props.len + num;
	}	// end of add

	delete = deleteNum => {
      let { props } = this
		,	 { particles } = props
		,	 crntSnow = particles.head
		,	 count = 0 ;
		while (crntSnow.next !== null && count < deleteNum ) {
			crntSnow.value.del = true ;
			// particles.removeHead();
			crntSnow = crntSnow.next;
			count += 1; 
		}
		props.len = props.len - deleteNum ;
	}	// end of delete

}	// end of ControllerFunc

export { ControllerFunc };