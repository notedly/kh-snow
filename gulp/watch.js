import gulp from 'gulp' ; 

import scss from './watch/scss' ; 
import js from './watch/js' ; 
import serverSet from './watch/server' ; 

const watch = gulp.parallel( scss , js , serverSet ) ; 

export default watch ; 