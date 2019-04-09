import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import SnowContainer from './snow/SnowContainer' ;

class WrapContainer extends Component {
	constructor ( props ) {
		super( props ) ; 
	}
	render () {
		return (
			<div className="opt">
				<button className="startBtn">start</button>
				<button className="stopBtn">stop</button>
				<button className="clearBtn">clear</button>
				<button className="deleteBtn">delete</button>
				<button className="addBtn">add</button>
				<h1>variance</h1>
				<input
					className="variance"
					type="range"
					min="-5"
					max="5"
					step="0.1"
					defaultValue="1.5"
				/>
				<h1>speed</h1>
				<input
					className="speed"
					type="range"
					min="-1"
					max="1"
					step="0.01"
					defaultValue="1"
				/>
			</div>
		) ; 
	}
}

window.addEventListener( 'load' , () => {
	render( <WrapContainer /> , document.body.querySelector( '#wrapBox' ) ) ; 

	let winterSnow = new SnowContainer ;
	
	winterSnow.init({ 
		target : document.body , 
		len : 100 ,
		wind : 1 ,
		speed : 0.3 ,
	}) ;

	document.querySelector(".startBtn").addEventListener("click", () => {
		winterSnow.start();
	});
	
	document.querySelector(".stopBtn").addEventListener("click", () => {
		winterSnow.stop();
	});
	
	document.querySelector(".clearBtn").addEventListener("click", () => {
		winterSnow.clear();
	});
	
	document.querySelector(".deleteBtn").addEventListener("click", () => {
		winterSnow.delete( 2 );
	});
	
	document.querySelector(".addBtn").addEventListener("click", () => {
		winterSnow.add( 500 );
	});
	
	document.querySelector(".variance").addEventListener("input", e => {
		winterSnow.change("windVariance", e.target.value);		
	});
	
	document.querySelector(".speed").addEventListener("input", e => {
		winterSnow.change("speed", e.target.value);
	});

}) ; 