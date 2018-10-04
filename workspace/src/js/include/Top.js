import React , { Component } from 'react' ; 
import TopNav from './top/TopNav' ; 
import { Option , GnbContext } from './top/Option' ; 

class Top extends Component {
	constructor ( props ) {
		super( props ) ; 

		this.state = {
			search : false , 
		} ; 
	}

	toggleSearch = () => {
		console.log( 'yyy' ) ; 
	}

	render () {
		let TopNavProps = {
			categoryItems : this.props.categoryItems , 
		} 
		; 
		return (
			<header id="header">
				<h1 className="logo">
					<a href="/">&lt; /&gt; Gaesigners<em>Beta</em></a>
				</h1>
				<TopNav />
				<GnbContext.Provider value={{ toggleSearch : this.toggleSearch , bln : this.state.search }}>
					<Option />
				</GnbContext.Provider>
			</header>
		) ; 
	}
}

export default Top ; 