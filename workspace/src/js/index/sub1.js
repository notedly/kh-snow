import React , { Component } from 'react' ; 

console.log( 'in index sub1' ) ; 
const sub1 = 'index sub1' ; 

class Sub1 extends Component {
	constructor ( props ) {
		super( props ) ; 
	}

	render () {
		return (
			<div>sub1</div>
		) ; 
	}
}
export default Sub1 ; 