import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import Top from './include/Top' ; 
import Btm from './include/Btm' ; 
import index_sub from './index/index_sub' ; 
import './tmpscss.scss' ; // js 파일내에서도 css 를 불러오는것이 가능합니다. 

class WrapContainer extends Component {
	constructor ( props ) {
		super( props ) ; 

		console.log( window.__INIT__ ) ; 
		this.state = window.__INIT__ ; 
		delete window.__INIT__ ; 
		document.querySelector( '#preloadedState' ).parentNode.removeChild( document.querySelector( '#preloadedState' ) ) ; 
	}

	clickHandler = () => {
		console.log( 'sample clicked' ) ; 
	}
	
	render () {
		return ([
			<Top key="Top" /> , 
			<div key="WrapContainer" id="container">
				WrapContainer In
				<div className="innerSCSSWrap" key="tmpScss" onClick={ this.clickHandler }>
					js 에서 직접 sass 파일 임포트가 가능합니다.<br />
					{ this.state.sampleData }
				</div>
			</div> , 
			<Btm key="Btm" /> , 
		]) ; 
	}
}

window.addEventListener( 'load' , () => {
	let wrapBox = document.body.querySelector( '#wrapBox' ) ; 
	render( <WrapContainer yaho={ wrapBox.dataset.react } /> , document.body.querySelector( '#wrapBox' ) ) ; 
}) ; 