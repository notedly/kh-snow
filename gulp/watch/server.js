import 'babel-polyfill';
import gulp from 'gulp' ; 
import Cache from 'gulp-file-cache' ; 
import babel from 'gulp-babel' ; 
import PATH from 'Dir' ; 
import browserSync from 'browser-sync' ; 

const server = ( path ) => {	
	console.log( '\n\n[ watch server ]' ) ; 
	return new Promise( ( resolve , reject ) => {
		let compilePath = path || [
			`${ PATH.appRoot }/${ PATH.SRC.SERVER }/**/*.js` , 
			`!${ PATH.appRoot }/${ PATH.SRC.SERVER }/{template,template/**}` 
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

const serverSet = () => {
	console.log( '\n\n[ watch serverSet ]' ) ; 
	gulp.watch( `${ PATH.appRoot.replace( /\\/g , '/' ) }/${ PATH.SRC.SERVER }/**/*` ).on( 'all' , ( evt , path , stats ) => {
		async function tmp () {
			await server( path ) ; 
			browserSync.reload() ; 
		}
		tmp() ; 
	}) ; 
} ; 

export default serverSet  ; 
export { server } ; 