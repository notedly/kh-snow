import gulp from 'gulp' ; 
import fs from 'fs' ; 
import babel from 'gulp-babel' ; 
import webpackCompFunc from './webpackFunc' ; 
import PATH from 'Dir' ; 

const jsSet = () => {
	console.log( '\n\n[ jsSet ]' ) ; 
	return new Promise( ( resolve , reject ) => {
		fs.readdir( `${ PATH.appRoot }/${ PATH.SRC.JS }/` , ( err , fls ) => {
			console.log( 'err : ' , err ) ; 
			let arr = [] ; 
			fls.forEach(( file ) => {
				if ( file.indexOf( '.js' ) > -1 ) {
					file = file.replace( '.js' , '' ) ; 
					webpackCompFunc( file ) ; 
				}
			}) ;  
		}) ; 
		resolve() ; 
	}) ; 
}

export default jsSet ; 