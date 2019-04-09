import { LinkedList, Node } from "../common/LinkedList";
import { Comn } from "../common/Comn";
import { Particle } from "./particle";
import { Controller } from "./controller";

class SnowContainer extends Controller{
	constructor() {
		super();
		let ctx = document.createElement("canvas").getContext("2d");
		let { canvas } = ctx;
		let windVariance = 0;

		this.bln = false;
		this.stopBln = false;

		this.props = {
			type : null ,
			ctx : ctx ,
			len : 10 ,
			speed : 1 ,
			w : canvas.width = window.innerWidth ,
			h : canvas.height = window.innerHeight ,
			windVariance : null ,
			wind : null ,
			particles: new LinkedList()
		};

      window.addEventListener( 'resize', this.resize ) ;
      
      console.log( this.props ) ;

	} // end of constructor

  init = ( args ) => {

		let { type, target , len, speed, wind } = args
		,   { props } = this ;

		target.appendChild( props.ctx.canvas ) ;

		props.type = type || 'snow' ;
		props.len = len || 100 ;
		props.speed = speed || 1 ;
		props.windVariance = wind === undefined ? 0 : wind ;
		props.wind = props.ctx.canvas.height * props.windVariance / 2 ;

		document.querySelector('.speed').value = props.speed;
		document.querySelector('.variance').value = props.windVariance;

		this.make() ;
	}	// end of init

	resize = () => {
		let { props } = this
		,   { canvas } = props.ctx ;
		props.w = canvas.width = window.innerWidth ;
		props.h = canvas.height = window.innerHeight ;
	};  // end of resize

	make = () => {
		let { props } = this
		,   i = 0
		,   len = props.len ;
		for (; i < len; i += 1) {
			props.particles.addToHead(new Particle(i, props));
		}
   };  // end of make

}

export default SnowContainer ;