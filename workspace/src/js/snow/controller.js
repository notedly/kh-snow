import { Common } from "../common/common";

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
		let { props } = this ;
		props.ctx.clearRect( 0, 0, props.w, props.h ) ;
		let i = 0, len = props.len ;
		for( ; i < len ; i += 1 ) {
			let snow = props.particles[i] ;
			snow.rotate += Math.random() * 0.045 ;
			snow.x += ( snow.size * 0.1 ) * snow.duration + snow.windVariance ;
			snow.y += snow.size * snow.duration ;
			if( snow.y > props.h ) {
				if( !this.stopBln ){
					snow.x = rdm( -Math.abs(snow.wind) , snow.w + Math.abs( snow.wind) ) ;
					let map = new Map ;
					map.set( 'fallingDown', snow.idx ) ;
					snow.update( map ) ;
				}
			}
			snow.draw() ;
		}
		if( this.bln ) {
			requestAnimationFrame( this.move ) ;
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
		}, 10) ;
	}	// end of clear

	change = ( num, name ) => {
		let { props } = this
		,	type = name
		,	i = 0
		, 	len = props.len ;

		for( ; i < len ; i += 1 ) {
			let map = new Map ;
			map.set( type , +num ) ;
			props.particles[i].update( map ) ;
		}
	}	// end of update

}	// end of Controller


export { Controller };
