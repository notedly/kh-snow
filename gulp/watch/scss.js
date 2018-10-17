import gulp from 'gulp' ; 
import sass from 'gulp-sass' ; 
import Cache from 'gulp-file-cache' ; 
import cleanCSS from 'gulp-clean-css' ; 
import PATH from 'Dir' ; 
import browserSync from 'browser-sync' ; 

const scss = () => {
	console.log( '\n\n[ scss ]' ) ; 
	gulp.watch( `${ PATH.appRoot }\\${ PATH.SRC.SCSS }\\**\\*.scss` ).on( 'all' , ( evt , path , stats ) => {
		const cache = new Cache ; 
		const sassSet = () => {
			console.log( '\n\n[ cssSet ]\n[ sassSet ]' ) ; 
			return new Promise( resolve => {
				gulp.src( `${ PATH.appRoot }/${ PATH.SRC.SCSS }/*.scss` )
					.pipe( cache.filter() )
					.pipe( sass() )
					.pipe( cache.cache() )
					.pipe( gulp.dest( `${ PATH.appRoot }/${ PATH.SRC.CSS }` ) )
					.on( 'finish' , () => {
						resolve() ; 
					} ) ; 
			}) ; 
		} ; 
		const css = () => {
			console.log( '\n\n[ css ]' ) ; 
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