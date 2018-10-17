import React from 'react' ; 
import DefaultLayout from './layouts/init' ; 

class HelloMessage extends React.Component {
	constructor ( props ) {
		super( props ) ; 
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