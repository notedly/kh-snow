import { LinkedList, Node } from "../common/LinkedList";
import { Comn } from "../common/Comn";
import { Particle } from "../snow/snowParticle";
import { ControllerFunc } from "../controller/controllerFunc";

class SnowWrapper extends ControllerFunc{
	constructor() {
		super();
		let ctx = document.createElement("canvas").getContext("2d");
		let { canvas } = ctx;
		let windVariance = 0;

		this.bln = false;
		this.stopBln = false;

		this.props = {
			ctx : ctx ,
			w : canvas.width = window.innerWidth ,
			h : canvas.height = window.innerHeight ,
			len : null ,
			speed : null ,
			windVariance : null ,
			wind : null ,
			props : null ,
			del : false ,
			particles: new LinkedList()
		};     
	} // end of constructor

 	init = ( args ) => {

		let { type, target , len, speed, wind, size } = args
		,   { props } = this ;
		
		// 전달받은 옵션 세팅
		props.type = type || 'snow' ;
		props.len = len || 100 ;
		props.speed = speed || 1 ;
		props.windVariance = wind === undefined ? 0 : wind ;
		props.wind = props.ctx.canvas.height * props.windVariance / 2 ;
		props.size = size || 1 ;
		
		let controlSpeed = document.querySelector('.speed') 
		,	controlWind = document.querySelector('.variance') ;
		
		if( controlSpeed ) {
			controlSpeed.value = props.speed;
		}
		if( controlWind ) {
			controlWind.value = props.windVariance;
		}
		
		// 캔버스 적용
		target.appendChild( props.ctx.canvas ) ;
		
		// 눈 생성
		this.make() ;
		
		window.addEventListener( 'resize', this.resize ) ;

		// let Setting = new Setting ; 
		// Setting.name()
		// Setting.addNtm()
		// Setting.addRange( -100 , 100 , 1 , controller.wind )
		// Setting.addRange( -100 , 100 , 1 , controller.speed )
		// Setting.addRange( -100 , 100 , 1 , controller.size )

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
		for ( ; i < len; i += 1) {
			props.particles.addToHead(new Particle(i, props));
		}
   };  // end of make

}

export default SnowWrapper ;