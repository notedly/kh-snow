import gulp from 'gulp' ; 

import scss from './watch/scss' ; 
import js from './watch/js' ; 

const watch = gulp.parallel( scss , js ) ; 

export default watch ; 