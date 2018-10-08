import gulp from 'gulp' ; 
import PATH from 'Dir' ; 
import browserSync from 'browser-sync' ; 

const ejs = () => {
	return new Promise( ( resolve , reject ) => {
		console.log( '\n\n[ watch ejs ]' ) ; 
		gulp.watch( `${ PATH.appRoot }\\${ PATH.SRC.EJS }\\**\\*.ejs` ).on( 'all' , ( evt , path , stats ) => {
			path = path.replace( /\//g , '\\' ) ; 
			let destPath = path.substr( 0 , path.lastIndexOf( '\\') ) ; 
			destPath = destPath.replace( 'workspace\\src' , 'workspace\\build' ) ; 

			gulp.src( path )
				.pipe( gulp.dest( destPath ) )
				.on( 'finish' , () => {
					browserSync.reload() ; 
				}) ; 
		}) ; // end of gulp.watch 
	}) ; 
} ; 

export default ejs ; 