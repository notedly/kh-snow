import gulp from  'gulp' ; 
import cleanSet from 'gulp_setting/cleanSet' ; 
import dirSet from 'gulp_setting/dirSet' ; 
import jsSet from 'gulp_setting/jsSet' ; 
import libSet from 'gulp_setting/libSet' ; 
import cssSet from 'gulp_setting/cssSet' ; 
import imgSet from 'gulp_setting/imgSet' ; 
import viewSet from 'gulp_setting/viewSet' ; 
import serverSet from 'gulp_setting/serverSet' ; 
import browserSyncSet from 'gulp_setting/browserSyncSet' ; 
import watch from 'gulp_setting/watch' ; 

gulp.task( 'default' , gulp.series( 
	cleanSet , 
	dirSet , 
	jsSet , 
	libSet , 
	cssSet , 
	imgSet , 
	viewSet , 
	serverSet , 
	browserSyncSet , 
	watch , 
)) ; 

gulp.task( 'watch' , watch ) ; 