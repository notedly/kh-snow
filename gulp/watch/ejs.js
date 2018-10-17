import gulp from 'gulp' ; 
import babel from 'gulp-babel' ; 
import PATH from 'Dir' ; 
import { server } from 'gulp_setting/watch/server' ; 
import browserSync from 'browser-sync' ; 

const ejs_old = () => {
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

const ejsCompile = ( path ) => {	
	console.log( '\n\n[ watch server ]' ) ; 
	return new Promise( ( resolve , reject ) => {
		let compilePath = path || [
			`${ PATH.appRoot }/${ PATH.SRC.EJS }/**/*.js` , 
			`!${ PATH.appRoot }/${ PATH.SRC.EJS }/{template,template/**}` 
		] ; 

		path = path.replace( /\//g , '\\' ) ; 
		let destPath = path.substr( 0 , path.lastIndexOf( '\\' ) ) ; 
		destPath = destPath.replace( 'workspace\\src' , 'workspace/build' ) ; 

		gulp.src( compilePath )
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
			.on( 'finish' , resolve ) ; 
	}) ;
} ; 

const ejs = () => {
	console.log( '\n\n[ watch ejs ]' ) ; 
	gulp.watch( `${ PATH.appRoot }/${ PATH.SRC.EJS }/**/*` ).on( 'all' , ( evt , path , stats ) => {
		async function tmp () {
			await ejsCompile( path ) ; 
			await server( `${ PATH.appRoot }\\${ PATH.SRC.SERVER }/app.js` ) ; 
			browserSync.reload() ; 
		}
		tmp() ; 
	}) ; 
} ; 

export default ejs ; 