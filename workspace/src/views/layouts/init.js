import React , { Component } from 'react' ; 
import PropTypes from 'prop-types' ; 

class DefaultLayout extends Component {
	constructor ( props ) {
		super( props ) ; 

		console.log( 'this props : ' , props ) ; 

		/**
		서버에서 layout 용으로 작업된 React 파일입니다. 
		서버에서 문자열로 변환되어 전달되기에 최초 세팅은 가능하나 
		이벤트는 실행되지 않습니다. 
		**/
	}

	render() {
		return (
			<html>
				<head>
					<meta charSet="UTF-8" />
					<meta name="description" content="개자이너 블로그 입니다. 공부한것들을 공유하기위해 만들었습니다." />
					<title>cc { this.props.title } </title>
					<link rel="stylesheet" href={ this.props.css } />
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
				</body>
			</html>
		) ; 
	}
}

module.exports = DefaultLayout ; 