import fs from 'fs' ; 
import gulp from 'gulp' ; 
import PATH from 'Dir' ; 
import babel from 'gulp-babel' ; 
import webpackCompile from 'gulp_setting/webpackCompile' ; 
import browserSync from 'browser-sync' ; 
import { server } from 'gulp_setting/watch/server' ; 

const js = () => {
	console.log( '\n\n[ watch js ]' ) ; 
	gulp.watch( `${ PATH.appRoot }\\${ PATH.SRC.JS }\\**\\*.js` ).on( 'all' , ( evt , path , stats ) => {

		// fs.readdir( `${ PATH.appRoot }/${ PATH.SRC.JS }` , ( err , files ) => {
			// files.forEach( file => {
				// if ( fs.lstatSync( `${ PATH.appRoot }\\${ PATH.SRC.JS }/${ file }` ).isDirectory() ) return ; 

				console.log( 'evt : ' , evt ) ; 
				console.log( 'path : ' , path ) ; 
				let destPath = path.substr( 0 , path.lastIndexOf( '\\' ) ) ; 
				destPath = destPath.replace( 'workspace\\src' , 'workspace\\build' ) ; 
				// console.log( 'destPath : ' , destPath ) ; 

				gulp.src( path )
					.pipe( babel({
						"presets" : ['es2015', 'es2017', 'stage-3' , 'react'],
						"plugins" : [
							'transform-decorators-legacy', 
							'transform-class-properties' ,
							'transform-async-to-generator' , 
							'transform-object-assign' , 
							'transform-regenerator' , 
							["transform-runtime", {
								"helpers": false, // defaults to true 
								"polyfill": false, // defaults to true 
								"regenerator": true, // defaults to true 
								"moduleName": "babel-runtime" // defaults to "babel-runtime" 
							}]
						],
					}))
					.pipe( gulp.dest( destPath ) )
					.on( 'finish' , () => {
						async function tmp () {
							await server( `${ PATH.appRoot }/${ PATH.SRC.SERVER }/app.js` ) ; 
							browserSync.reload() ; 
						}
						tmp() ; 
					}) ; 

			// }) ; // end of forEach

		// }) ; // end of fs.readdir

	}) ; // end of gulp.watch 
} ; 

export default js ; 