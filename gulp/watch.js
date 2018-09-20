import gulp from 'gulp' ; 
/*const watch = () => {
	console.log( '\n\n[ watch ]' ) ; 
} ; */

import scss from './watch/scss' ; 

const watch = gulp.series( scss ) ; 

export default watch ; 