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
				<nav>
					<a href="/">home</a>
					<a href="/sub1">sub1 page</a>
					<a href="/sub2">sub2 page</a>
					<a href="/sub3">sub3 page</a>
					<a href="/sub4">sub4 page</a>
				</nav>
			</header>
		) ; 
	}
}

export default Top ; 