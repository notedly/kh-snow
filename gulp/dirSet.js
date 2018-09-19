import fs from 'fs' ; 
import gulp from 'gulp' ; 
import PATH from 'Dir' ; 
import webpackCompile from 'gulp_setting/webpackCompile' ; 

const dirSet = () => {
	console.log( '\n\n[ dirSet ]' ) ; 
	return new Promise( resolve => {
		// resolve( del.sync( `${ PATH.appRoot }/${ PATH.DIR.DEST }` ) ) ; 
		fs.readdir( `${ PATH.appRoot }/` , ( err , files ) => {
			console.log( 'err : ' , err ) ; 
			console.log( 'files : ' , files ) ; 
			files.forEach( file => {
				if ( fs.lstatSync( `${ PATH.appRoot }/${ file }` ).isDirectory() ) return ; 
				console.log( file ) ; 

				if ( file == 'Dir.js' ) {
					let evt = {
						path : `${ PATH.appRoot }\\` , 
						fileName : file , 
						dest : `${ PATH.appRoot }/${ PATH.DEST.SERVER }` , 
					} ; 

					gulp.src( `${ PATH.appRoot }/${ file }` )
						.pipe( gulp.dest( `${ PATH.appRoot}/${ PATH.DIR.SRC }` ) ) ; 

					webpackCompile( evt , resolve ) ; 
				}
			}) ; 
		}) ; 
	}) ; 
}

export default dirSet ; 