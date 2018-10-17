import React , { Component , createContext } from 'react' ; 

const AppContext = createContext({
	yaho : 'aaaa' , 
}) ; 
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
}

const PostData = (() => {
	class PostData {
		constructor () {
			this.data = {} ; 
		}

		update = ( optionsData ) => {
			for ( let key in optionsData ) {
				this.data[ key ] = optionsData[ key ] ; 
			}

			// console.log( 'this.data : ' , this.data ) ; 
		}

		get info () {
			return this.data ; 
		}
	}

	return new PostData ; 
})() ; 

export { PostData } ; 
export { AppContext } ; 
export default ContextProvider ; 
