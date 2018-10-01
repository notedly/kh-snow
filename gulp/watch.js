import gulp from 'gulp' ; 

import scss from './watch/scss' ; 
import js from './watch/js' ; 
import serverSet from './watch/server' ; 
import ejs from './watch/ejs' ; 

const watch = gulp.parallel( scss , js , ejs , serverSet  ) ; 

export default watch ; 