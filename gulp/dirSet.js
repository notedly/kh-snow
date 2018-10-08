import fs from 'fs' ; 
import gulp from 'gulp' ; 
import PATH from 'Dir' ; 

const dirSet = () => {
	console.log( '\n\n[ dirSet ]' ) ; 
	return new Promise( resolve => {
		fs.readdir( `${ PATH.appRoot }/` , ( err , files ) => {
			files.forEach( file => {
				if ( fs.lstatSync( `${ PATH.appRoot }/${ file }` ).isDirectory() ) return ; 

				if ( file == 'Dir.js' ) {
					gulp.src( `${ PATH.appRoot }/${ file }` )
						.pipe( gulp.dest( `${ PATH.appRoot}/${ PATH.SRC.SERVER }` ) )
						.on( 'finish' , resolve ) ; 
				}
			}) ; 
		}) ; 
	}) ; 
}

export default dirSet ; 