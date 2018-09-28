import gulp from 'gulp' ; 
import webpack from 'gulp-webpack' ; 
import babel from 'gulp-babel' ; 

const webpackCompile = ( evt , resolve ) => {
	// console.log( 'evt : ' , evt ) ; 

	gulp.src( `${ evt.path }${ evt.fileName }` )
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
		.pipe( gulp.dest( evt.dest ) )
		.on( 'finish' , resolve ) ; 
} ; 

export default webpackCompile ; 