import gulp from 'gulp' ; 

import scss from './watch/scss' ; 
import js from './watch/js' ; 
import lib from './watch/lib' ; 
import serverSet from './watch/server' ; 
import view from './watch/view' ; 

// const watch = gulp.parallel( scss , js , lib , view , serverSet  ) ; 
const watch = gulp.series( scss ) ; 

export default watch ; 