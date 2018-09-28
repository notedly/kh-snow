import gulp from 'gulp' ; 
import webpack from 'gulp-webpack' ; 

const webpackCompile = ( evt , resolve ) => {
	console.log( 'evt : ' , evt ) ; 

	webpack({
		entry : { entryName : `${ evt.path }${ evt.fileName }` } , 
		output : { filename : evt.fileName } , 
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
/*				{
					test: /\.scss$/ , 
					loaders : [
						"style-loader" 
						, "css-loader" 
						, "sass-loader" 
					]
				}*/
			]   
		} 
	}).pipe( gulp.dest( evt.dest  ) )
	.on( 'finish' , resolve ) ; 
} ; 

export default webpackCompile ; 