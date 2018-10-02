import React , { Component } from 'react' ; 
import Top from './include/Top' ; 

class IndexContainer extends Component {
	consrurctor () {}
	render () {
		return ([
			<Top key="Top" /> , 
			<div>IndexContainer In</div> , 
		]) ; 
	}
}

export default IndexContainer ; 