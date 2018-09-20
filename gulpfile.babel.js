import gulp from  'gulp' ; 

import child_process from 'child_process' ; 

import cleanSet from 'gulp_setting/cleanSet' ; 
import dirSet from 'gulp_setting/dirSet' ; 
import jsSet from 'gulp_setting/jsSet' ; 
import cssSet from 'gulp_setting/cssSet' ; 
import imgSet from 'gulp_setting/imgSet' ; 
import ejsSet from 'gulp_setting/ejsSet' ; 
import serverSet from 'gulp_setting/serverSet' ; 
import browserSyncSet from 'gulp_setting/browserSyncSet' ; 
import watch from 'gulp_setting/watch' ; 

gulp.task( 'default' , gulp.series( 
	cleanSet , 
	dirSet , 
	jsSet , 
	cssSet , 
	imgSet , 
	ejsSet , 
	serverSet , 
	browserSyncSet , 
	watch , 
)) ; 

gulp.task( 'watch' , watch ) ; 