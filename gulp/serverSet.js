import gulp from 'gulp' ; 
import fs from 'fs' ; 
import babel from 'gulp-babel' ; 
import nodemon from 'gulp-nodemon' ; 
import PATH from 'Dir' ; 

const server = () => {	
	console.log( '\n\n[ server ]' ) ; 
	return new Promise( ( resolve , reject ) => {
		gulp.src( `${ PATH.appRoot }/${ PATH.SRC.SERVER }/**/*.js` )
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
			.pipe( gulp.dest( `${ PATH.appRoot }/${ PATH.DEST.SERVER }` ) ) ; 
			resolve () ; 
	}) ;
} ; 

const nodemonSet = () => {	
	return new Promise( ( resolve , reject ) => {
		console.log( '\n\n[ nodemonSet ]' ) ; 
		console.log( PATH.appRoot + '\\build\\server\\' + 'app.js' ) ; 
		nodemon({
			script : PATH.appRoot + '\\build\\server\\' + 'app.js' , 
			watch : PATH.appRoot + '\\build\\server' 
		}) ; 

		resolve () ; 
	}) ;
} ;

const serverSet = gulp.series( server , nodemonSet ) ; 

export default serverSet ;  