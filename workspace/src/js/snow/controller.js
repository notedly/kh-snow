import { Comn } from "../common/Comn";
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
   
   // get 

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
			snow.draw();
			crntSnow = crntSnow.next;
		}
		if (this.bln) {
			requestAnimationFrame(this.move);
		}
	}	// end of move

	stop = () => {
		this.stopBln = true;
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

	delete = deleteNum => {
      
		let { particles } = this.props;
      let crntSnow = particles.head;

      let point = Math.floor( this.props.len / deleteNum );
      // console.log( 'deleteNum :', deleteNum , 'point :', point ) ;

      let count = 0 ;
      // let i = 0, len = this.props.len ;

      // for( ; i<len; i+=1 ){
      //    if( len % point === 0 ) {
      //       count ++ ;
      //    }
      //    if( count > deleteNum ) break ;
      //    console.log( 'count :', count ) ;

      // }

		while (crntSnow.next !== null) {
			if ( crntSnow.value.idx % point === 0 ) {
            console.log( count ) ;
				particles.removeAt(crntSnow.value);
         }
         count += 1; 
			crntSnow = crntSnow.next;
      }
      
	}	// end of delete
	
	add = num => {
      let { props } = this;
		let i = props.len + 1,
		len = props.len + num;
		for (; i < len; i += 1) {
			if( i % 200 == 0 ){
			}
			props.particles.addToHead(new Particle(i, props));
		}
		props.len = props.len + num;
	}	// end of add

}	// end of Controller

export { Controller };