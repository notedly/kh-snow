import gulp from 'gulp' ; 
import wait from 'gulp-wait' ; 
import sass from 'gulp-sass' ; 
import Cache from 'gulp-file-cache' ; 
import cleanCSS from 'gulp-clean-css' ; 
import PATH from 'Dir' ; 
import browserSync from 'browser-sync' ; 

const scss = () => {
	console.log( '\n\n[ scss in]' ) ; 

	let scss =  gulp.watch( `${ PATH.appRoot.replace( /\\/g , '/' ) }/src/scss/**/*.*` ) ; 
	console.log( scss.on ) ; 
	scss.on('all', function( evt , path, stats) {
		console.log( 'aaaaaa' , path ) ; 

		const cache = new Cache ; 

		const sassSet = () => {
			console.log( 'sassSet : in ' ) ; 
			return new Promise ( resolve => {
				gulp.src( `${ PATH.appRoot }/${ PATH.SRC.SCSS }/*.scss` )
					.pipe( cache.filter() )
					.pipe(wait(200))
					.pipe( sass.sync().on( 'error' , sass.logError ) )
					// .pipe( sass() )
					.pipe( cache.cache() )
					.pipe( gulp.dest( `${ PATH.appRoot }/${ PATH.SRC.CSS }` ) )
					.on( 'finish' , () => {
						resolve() ; 
					}) ; 
			}) ; 
		} ; 

		const css = () => {
			console.log( 'css : in ' ) ; 
			return new Promise( resolve => {
				gulp.src( `${ PATH.appRoot }/${ PATH.SRC.CSS }/*.css` )
					.pipe( cache.filter() )
					.pipe( cleanCSS({ compatibility : 'ie8' }) )
					.pipe( cache.cache() )
					.pipe( gulp.dest( `${ PATH.appRoot }/${ PATH.DEST.CSS }` ) )
					.on( 'finish' , resolve ) ; 
			}) ; 
		} ; 

		async function tmp () {
			await sassSet() ; 
			await css() ; 
			browserSync.reload() ; 
		}
		tmp() ; 
	}) ; 
} ; 

export default scss ; 