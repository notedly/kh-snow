import gulp from 'gulp' ; 
import PATH from 'Dir' ; 

const js = () => {
	console.log( '\n\n[ js ]' ) ; 
	gulp.watch( `${ PATH.appRoot }\\${ PATH.SRC.JS }\\**\\*.js` ).on( 'all' , ( evt , path , stats ) => {
		console.log( 'evt' , evt ) ; 
		console.log( 'path' , path ) ; 
	}) ; 
} ; 

export default js ; 