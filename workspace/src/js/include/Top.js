import React , { Component } from 'react' ; 

class Top extends Component {
	constructor ( props ) {
		super( props ) ; 
	}

	render () {
		return (
			<header id="header">
				<h1 className="logo">
					<a href="/">&lt; /&gt; Gaesigners<em>Beta</em></a>
				</h1>
			</header>
		) ; 
	}
}

export default Top ; 