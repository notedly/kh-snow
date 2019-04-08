import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import SnowContainer from './snow/SnowContainer' ;

console.log( 'SnowContainer :', SnowContainer ) ;

class WrapContainer extends Component {
	constructor ( props ) {
		super( props ) ; 
	}
	render () {
		return ([
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
		]) ; 
	}
}

window.addEventListener( 'load' , () => {
	render( <WrapContainer /> , document.body.querySelector( '#wrapBox' ) ) ; 

	let winterSnow = new SnowContainer ;
	winterSnow.add(document.body);
	winterSnow.make();

	document.querySelector(".startBtn").addEventListener("click", () => {
		winterSnow.draw();
	});
	
	document.querySelector(".stopBtn").addEventListener("click", () => {
		winterSnow.stop();
	});
	
	document.querySelector(".clearBtn").addEventListener("click", () => {
		winterSnow.clear();
	});
	
	document.querySelector(".deleteBtn").addEventListener("click", () => {
		winterSnow.delete();
	});
	
	document.querySelector(".addBtn").addEventListener("click", () => {
		winterSnow.addSnow(500);
	});
	
	document.querySelector(".variance").addEventListener("input", e => {
		winterSnow.changeValue("windVariance", e.target.value);		
	});
	
	document.querySelector(".speed").addEventListener("input", e => {
		winterSnow.changeValue("speed", e.target.value);
	});

	
	// document.querySelector( '.startBtn' ).addEventListener( 'click' , () => {
	// 	console.log( 'click in' ) ;
	// 	winterSnow.start() ;
	// }) ;

	// document.querySelector( '.variance' ).addEventListener( 'input' , ( e ) => {
	// 	winterSnow.change( e.target.value , 'wind' ) ;
	// }) ;

	// document.querySelector( '.speed' ).addEventListener( 'input' , ( e ) => {
	// 	winterSnow.change( e.target.value , 'speed' ) ;
	// }) ;

	// document.querySelector( '.stopBtn' ).addEventListener( 'click' , () => {
	// 	winterSnow.stop() ;
	// }) ;

	// document.querySelector( '.clearBtn' ).addEventListener( 'click' , () => {
	// 	winterSnow.clear() ;
	// }) ;

}) ; 