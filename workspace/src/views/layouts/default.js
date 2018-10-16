import React , { Component , createContext } from 'react' ; 
import PropTypes from 'prop-types' ; 

/*const Context = createContext({
	info 
}) ; */

class DefaultLayout extends Component {
	constructor ( props ) {
		super( props ) ; 
		console.log( 'zzzzzzzzzzzzzzzzzzzzzzzz' , this.props  ) ; 
	}

	render() {
		return (
			<html>
				<head>
					<meta charSet="UTF-8" />
					<meta name="description" content="개자이너 블로그 입니다. 공부한것들을 공유하기위해 만들었습니다." />
					<title>{ this.props.title }</title>
					<link rel="stylesheet" href={ this.props.css } />
					<script
					dangerouslySetInnerHTML={{
						__html: `
						// This is making use of ES6 template strings, which allow for
						// multiline strings. We specified "{jsx: {harmony: true}}" when
						// creating the engine in app.js to get this feature.
						console.log("hello world");
						`,
					}}
					/>
					<script src={ this.props.js }></script>
				</head>
				<body>
					<div id="wrapBox">
					</div>
					{/*this.props.children*/}
				</body>
			</html>
		) ; 
	}
}

DefaultLayout.propTypes = {
	title : PropTypes.string , 
} ; 

// module.exports = { DefaultLayout : DefaultLayout }; 
module.exports = DefaultLayout ; 