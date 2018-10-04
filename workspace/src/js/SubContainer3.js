import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import Top from './include/Top' ; 

class IndexContainer extends Component {
	render () {
		return ([
			<Top key="Top" /> , 
			<div>IndexContainer In</div> , 
		]) ; 
	}
}

// export default IndexContainer ; 

window.addEventListener( 'load' , () => {
	let elem_blogContainer = document.createElement( 'div' ) ; 
	elem_blogContainer.classList.add( 'wrapBox') ; 
	render( <IndexContainer /> , elem_blogContainer ) ; 
	document.body.appendChild( elem_blogContainer ) ; 
}) ; 