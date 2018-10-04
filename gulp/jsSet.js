import gulp from 'gulp' ; 
import fs from 'fs' ; 
import babel from 'gulp-babel' ; 
import PATH from 'Dir' ; 

const jsSet = () => {
	console.log( '\n\n[ jsSet ]' ) ; 
	return new Promise( resolve => {

		gulp.src( `${ PATH.appRoot }/${ PATH.SRC.JS }/**/*.js` )
			.pipe( babel({
				"presets" : ['es2015', 'es2017', 'stage-0', 'stage-3' , 'react'],
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
			.pipe( gulp.dest( `${ PATH.appRoot }/${ PATH.DEST.JS }` ) )
			.on( 'finish' , resolve ) ; 
	}) ; 
}

export default jsSet ; 