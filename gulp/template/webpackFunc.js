import gulp from 'gulp' ; 
import webpack from 'gulp-webpack' ; 
import PATH from 'Dir' ; 

const webpackCompFunc = ( jsName , path ) => {

	let pathSRC = null 
	,	pathDEST = null ; 

	if ( path == undefined ) {
		pathSRC = `${ PATH.appRoot }/${ PATH.SRC.JS }/${jsName}.js` ; 
		pathDEST = `${ PATH.appRoot }/${ PATH.DEST.JS }` ; 
	} else {
		pathSRC = `${ path.src }/${jsName}.js` ; 
		pathDEST = path.dest ; 
	}

	return new Promise( resolve => {
		new Promise( resolveSub => {
			webpack({
				entry : {
					entryName : `${ pathSRC }`
				} , 
				output : {
					filename : `${jsName}.js`
				} , 
				module : {
					loaders : [
						{
							test : /\.js$/ , 
							loader : 'babel-loader' , 
							exclude : '/node_modules/' , 
							query : {
								cacheDirectory : true , 
								"presets" : ['es2015', 'es2017', 'stage-3', 'react'],
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
							}
						} , 
						{
							test: /\.scss$/,
							loaders: [
								"style-loader" // creates style nodes from JS strings
								, "css-loader" // translates CSS into CommonJS
								, "sass-loader" // compiles Sass to CSS
							]
						}
					]   
				} 
			}).pipe( gulp.dest( `${ pathDEST }` )  )
			.on( 'finish' , () => {
				resolveSub() ; 
			}) ; 
		}).then( result => {
			resolve() ; 
		}) ; 

	}) ; 
}

export default webpackCompFunc ;  