import fs from 'fs' ; 
import gulp from 'gulp' ; 
import PATH from 'Dir' ; 
import babel from 'gulp-babel' ; 
import webpackCompile from 'gulp_setting/webpackCompile' ; 
import browserSync from 'browser-sync' ; 
import { server } from 'gulp_setting/watch/server' ; 
import chkEvtFunc from 'gulp_setting/template/chkEvtFunc' ; 
import getFiles from 'gulp_setting/template/getFiles' ; 
import webpackCompFunc from 'gulp_setting/webpackFunc' ; 

const jsSet = ( chkInfo ) => {
	console.log( '\n\n[ watch jsSet ]' ) ; 
	return new Promise( resolve => {
		// console.log( 'chkInfo.path : ' , chkInfo.path ) ; 
		// console.log( 'PATH : ' , PATH.DIR.SRC ) ; 

		let evtPath = chkInfo.path.split( `${ PATH.DIR.SRC }/` )[1].split( '/' ) ; 
		console.log( 'evtPath : ' , evtPath ) ; 
		let fileName = evtPath.pop().replace( /\.js$/ , '' ) ; 

		console.log( 'evtPath : ' , evtPath ) ; 
		console.log( 'fileName : ' , fileName ) ; 

		/*switch( !0 ) {
		} // end of switch */
	}) ; 
} ; 

const js = () => {
	console.log( '\n\n[ watch js ]' ) ; 
	gulp.watch( `${ PATH.appRoot }\\${ PATH.SRC.JS }\\**\\*.js` ).on( 'all' , ( evt , path , stats ) => {
		// console.log( 'path' , path ) ; 
		let chkInfo = chkEvtFunc( evt , path ) ; 
		// console.log( 'chkInfo : ' , chkInfo ) ; 
		if ( !chkInfo.bln ) return ; // 현재 감지된 파일이 존재하지 않으면( bln == false ) 작업을 멈춥니다.

		async function tmp () {
			await jsSet( chkInfo ) ; 
			console.log( `-----------> ${ PATH.appRoot }\\${ PATH.SRC.SERVER }/app.js` ) ; 
			await server( `${ PATH.appRoot }\\${ PATH.SRC.SERVER }/app.js` ) ; 
			browserSync.reload() ; 
		}
		tmp() ; 
	}) ; 
} ; 

export default js ; 