import fs from 'fs' ; 
import PATH from 'Dir' ; 
import webpackCompile from 'gulp_setting/webpackCompile' ; 

const jsSet = () => {
	console.log( '\n\n[ jsSet ]' ) ; 
	return new Promise( resolve => {
		// resolve( del.sync( `${ PATH.appRoot }/${ PATH.DIR.DEST }` ) ) ; 
		fs.readdir( `${ PATH.appRoot }/${ PATH.SRC.JS }` , ( err , files ) => {
			// console.log( 'err : ' , err ) ; 
			// console.log( 'files : ' , files ) ; 
			files.forEach( file => {
				if ( fs.lstatSync( `${ PATH.appRoot }\\${ PATH.SRC.JS }/${ file }` ).isDirectory() ) return ; 
				console.log( file ) ; 

				let evt = {
					path : `${ PATH.appRoot }\\${ PATH.SRC.JS }\\` , 
					fileName : file , 
					dest : `${ PATH.appRoot }/${ PATH.DEST.JS }` , 
				} ; 

				webpackCompile( evt , resolve ) ; 
			}) ; 
		}) ; 
	}) ; 
}

export default jsSet ; 