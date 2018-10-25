import React , { Component } from 'react' ; 
import PropTypes from 'prop-types' ; 
import serialize from 'serialize-javascript' ; 

class DefaultLayout extends Component {
	constructor ( props ) {
		super( props ) ; 
		/**
		서버에서 layout 용으로 작업된 React 파일입니다. 
		서버에서 문자열로 변환되어 전달되기에 최초 세팅은 가능하나 
		이벤트는 실행되지 않습니다. 
		**/
	}

	makeLib = () => {
		switch ( typeof this.props.lib ) {
			case 'string' : 
				return <script src={ this.props.lib }></script>
				break ; 
			default : 
				return this.props.lib.map(( jsfile , idx ) => <script key={ `jsfile${ idx }` } src={ jsfile }></script> ) ; 
		}
	}

	componentWillMount () {
		console.log( 'start' ) ; 
	}

	render() {
		console.log( 'middle' ) ; 
		return (
			<html>
				<head>
					<meta charSet="UTF-8" />
					<meta name="description" content="개자이너 블로그 입니다. 공부한것들을 공유하기위해 만들었습니다." />
					<meta property="og:type" content="Website" />
					<meta property="og:title" content="개자이너 블로그" />
					<meta property="og:description" content={ this.props.description != undefined ? this.props.description : 'aaaaaa' } />
					<meta property="og:image" content="http://www.gaesignerblog.com/images/gaesigner_400x400.jpg" />
					<meta property="og:url" content="http://www.gaesignerblog.com/post/3" />	
					<title>{ this.props.title != undefined ? this.props.title : 'Welcome to the Gaesigner Blog' }</title>
					{ this.props.css != undefined && <link rel="stylesheet" href={ this.props.css } /> }
					<script id="preloadedState" 
					dangerouslySetInnerHTML={{
						__html: `
							console.log("hello world");
							window.__INIT__ = ${  serialize( { sampleData : 'preloaded state 정보를 만들어서 넘길 수 있습니다.' } , { isJSON : true }) } ; 
						` 
						, 
					}}/>
					<script src={ this.props.js }></script>
				</head>
				<body>
					<div id="wrapBox"></div>
					{ this.props.lib != undefined && this.makeLib() }
				</body>
			</html>
		) ; 
	}
}

module.exports = DefaultLayout ; 