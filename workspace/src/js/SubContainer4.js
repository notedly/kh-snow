import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import Top from './include/Top' ; 
import Btm from './include/Btm' ; 

class WrapContainer extends Component {
	render () {
		return ([
			<Top key="Top" /> , 
			<div key="WrapContainer" id="container">WrapContainer In</div> , 
			<Btm key="Btm" /> , 
		]) ; 
	}
}

window.addEventListener( 'load' , () => {
	render( <WrapContainer /> , document.body.querySelector( '#wrapBox' ) ) ; 
}) ; 