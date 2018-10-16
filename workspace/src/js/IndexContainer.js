import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import Top from './include/Top' ; 
import Btm from './include/Btm' ; 
import index_sub from './index/index_sub' ; 
import './tmpscss.scss' ; // js 파일내에서도 css 를 불러오는것이 가능합니다. 

console.log( 'index_sub : ' , index_sub ) ; 

class WrapContainer extends Component {
	constructor ( props ) {
		super( props ) ; 
	}

	clickHandler = () => {
		console.log( 'aaaaaaaaaaaaaavvvvv' ) ; 
	}
	
	render () {
		console.log( this.props ) ; 
		window.app = this ; 
		return ([
			<Top key="Top" /> , 
			<div key="WrapContainer" id="container">
				WrapContainer In
				<div className="innerSCSSWrap" key="tmpScss" onClick={ this.clickHandler }>
					js 에서 직접 sass 파일 임포트가 가능합니다.s
				</div>
			</div> , 
			<Btm key="Btm" /> , 
		]) ; 
	}
}

window.addEventListener( 'load' , () => {
	render( <WrapContainer /> , document.body.querySelector( '#wrapBox' ) ) ; 
}) ; 