import gulp from 'gulp' ; 
import PATH from 'Dir' ; 
import babel from 'gulp-babel' ; 

const viewSet = () => {	
	console.log( '\n\n[ viewSet ]' ) ; 
	return new Promise( ( resolve , reject ) => {
		gulp.src([
			`${ PATH.appRoot }/${ PATH.SRC.VIEW }/**/*.js` , 
			`!${ PATH.appRoot }/${ PATH.SRC.VIEW }/{template,template/**}` 
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
			.pipe( gulp.dest( `${ PATH.appRoot }/${ PATH.DEST.VIEW }` ) )
			.on( 'finish' , resolve ) ; 
	}) ;
} ; 

export default viewSet ; 