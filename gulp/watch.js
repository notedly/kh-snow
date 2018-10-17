import gulp from 'gulp' ; 

import scss from './watch/scss' ; 
import js from './watch/js' ; 
import lib from './watch/lib' ; 
import serverSet from './watch/server' ; 
import ejs from './watch/ejs' ; 

const watch = gulp.parallel( scss , js , lib , ejs , serverSet  ) ; 

export default watch ; 