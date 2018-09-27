import fs from 'fs' ; 
import gulp from 'gulp' ; 
import PATH from 'Dir' ; 
import webpackCompile from 'gulp_setting/webpackCompile' ; 
import browserSync from 'browser-sync' ; 

const js = () => {
	console.log( '\n\n[ js ]' ) ; 
	gulp.watch( `${ PATH.appRoot }\\${ PATH.SRC.JS }\\**\\*.js` ).on( 'all' , ( evt , path , stats ) => {
		console.log( 'evt' , evt ) ; 
		console.log( 'path' , path ) ; 

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

				webpackCompile( evt , () => {
					browserSync.reload() ; 
				}) ; 
			}) ; 
		}) ; 

	}) ; 
} ; 

export default js ; 