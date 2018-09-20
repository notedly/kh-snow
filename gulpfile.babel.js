import gulp from  'gulp' ; 

import cleanSet from 'gulp_setting/cleanSet' ; 
import dirSet from 'gulp_setting/dirSet' ; 
import jsSet from 'gulp_setting/jsSet' ; 
import imgSet from 'gulp_setting/imgSet' ; 
import serverSet from 'gulp_setting/serverSet' ; 

gulp.task( 'default' , gulp.series( 
	cleanSet , 
	dirSet , 
	jsSet , 
	imgSet , 
	serverSet , 
)) ; 