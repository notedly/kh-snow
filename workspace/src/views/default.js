import React from 'react' ; 
import DefaultLayout from './layouts/init' ; 

// console.log( 'ContextProvider : ' , ContextProvider ) ; 
// console.log( 'DefaultLayout : ' , Object.keys( DefaultLayout ) ; 

class HelloMessage extends React.Component {
	constructor ( props ) {
		super( props ) ; 
		// console.log( '======>' , this.props.default ) ; 
		// console.log( '===//===>' , this.props.info ) ; 
	}

	render() {
		return (
			<DefaultLayout  { ...this.props.init }>
				<div>안녕 세상아!</div>
			</DefaultLayout>
		);
	}
}

module.exports = HelloMessage; 