import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import Top from './include/Top' ; 
import Btm from './include/Btm' ; 
import index_sub from './index/index_sub' ; 

console.log( 'index_sub : ' , index_sub ) ; 

class IndexContainer extends Component {
	render () {
		return ([
			<Top key="Top" /> , 
			<div key="IndexContainer">IndexContainer In</div> , 
		]) ; 
	}
}

window.addEventListener( 'load' , () => {
	let elem_blogContainer = document.createElement( 'div' ) ; 
	elem_blogContainer.classList.add( 'wrapBox') ; 
	render( <IndexContainer /> , elem_blogContainer ) ; 
	document.body.querySelector( '#content' ).appendChild( elem_blogContainer ) ; 
}) ; 