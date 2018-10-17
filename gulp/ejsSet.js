import gulp from 'gulp' ; 
import PATH from 'Dir' ; 
import babel from 'gulp-babel' ; 

const ejsSet_old = () => {
	console.log( '\n\n[ ejsSet ]' ) ; 
	return new Promise( resolve => {
	gulp.src( `${ PATH.appRoot }/${ PATH.SRC.EJS }/**/*.ejs` )
		.pipe( gulp.dest( `${ PATH.appRoot }/${ PATH.DEST.EJS }`) )
		.on( 'finish' , resolve ) ; 
	}) ; 
} ; 

const ejsSet = () => {	
	console.log( '\n\n[ ejsSet ]' ) ; 
	return new Promise( ( resolve , reject ) => {
		gulp.src([
			`${ PATH.appRoot }/${ PATH.SRC.EJS }/**/*.js` , 
			`!${ PATH.appRoot }/${ PATH.SRC.EJS }/{template,template/**}` 
			])
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
			.pipe( gulp.dest( `${ PATH.appRoot }/${ PATH.DEST.EJS }` ) )
			.on( 'finish' , resolve ) ; 
	}) ;
} ; 

export default ejsSet ; 