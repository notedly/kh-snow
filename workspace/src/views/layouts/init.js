import React , { Component } from 'react' ; 
import PropTypes from 'prop-types' ; 

class DefaultLayout extends Component {
	constructor ( props ) {
		super( props ) ; 

		console.log( 'this props : ' , props ) ; 

		console.log( typeof this.props.lib ) ; 

		/**
		서버에서 layout 용으로 작업된 React 파일입니다. 
		서버에서 문자열로 변환되어 전달되기에 최초 세팅은 가능하나 
		이벤트는 실행되지 않습니다. 
		**/
	}

	makeLib = () => {
		switch ( typeof this.props.lib ) {
			case 'string' : 
				console.log('a'); 
				return <script src={ this.props.lib }></script>

				break ; 
			default : 
				console.log('b'); 
				return this.props.lib.map(( jsfile , idx ) => <script key={ `jsfile${ idx }` } src={ jsfile }></script> ) ; 
		}
	}

	render() {
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
					<script
					dangerouslySetInnerHTML={{
						__html: `
							// console.log("hello world");
						`,
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