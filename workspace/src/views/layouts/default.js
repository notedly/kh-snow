// import React , { Component , createContext } from 'react' ; 
import React , { Component } from 'react' ; 
import PropTypes from 'prop-types' ; 
import { PostData } from './Context' ; 

/*const AppContext = createContext() ; 
class ContextProvider extends Component {
	state = {
		number : 10 , 
	}

	render () {
		console.log( '====> this.state : ' , this.state ) ; 
		return <AppContext.Provider value={ this.state }>
			{this.props.children}
		</AppContext.Provider>
	}
}*/

class DefaultLayout extends Component {
	constructor ( props ) {
		super( props ) ; 
		// console.log( '===> this.props : ' , this.props  ) ; 
		console.log( '===> this.props : ' , Object.keys( this.props )  ) ; 

		PostData.update( this.props.info ) ; 
		// console.log( '=>>' , PostData.info )
	}

	render() {
		// console.log( '////////////////' , this.props.children.category ) ; 
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
					<div id="wrapBox"></div>
				</body>
			</html>
		) ; 
	}
}

DefaultLayout.propTypes = {
	title : PropTypes.string , 
} ; 

// module.exports = { DefaultLayout : DefaultLayout }; 
/*module.exports = {
	AppContext : AppContext , 
	ContextProvider : ContextProvider , 
	default : DefaultLayout , 
} ; */
module.exports = DefaultLayout ; 