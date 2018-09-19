import gulp from  'gulp' ; 

import cleanSet from 'gulp_setting/cleanSet' ; 
import dirSet from 'gulp_setting/dirSet' ; 
import jsSet from 'gulp_setting/jsSet' ; 
import serverSet from 'gulp_setting/serverSet' ; 

gulp.task( 'default' , gulp.series( 
	cleanSet , 
	dirSet , 
	jsSet , 
	serverSet , 
)) ; 