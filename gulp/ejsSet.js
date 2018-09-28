import gulp from 'gulp' ; 
import PATH from 'Dir' ; 

const ejsSet = () => {
	console.log( '\n\n[ ejsSet ]' ) ; 
	return new Promise( resolve => {
	gulp.src( `${ PATH.appRoot }/${ PATH.SRC.EJS }/*.ejs` )
		.pipe( gulp.dest( `${ PATH.appRoot }/${ PATH.DEST.EJS }`) )
		.on( 'finish' , resolve ) ; 
	}) ; 
} ; 

export default ejsSet ; 