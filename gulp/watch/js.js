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
		/**
		@evtPath - Array : 저장된 파일을 담고있는 현재의 파일경로
		@fileName - String : 저장된 파일명
		**/

		let evtPath = chkInfo.path.split( `${ PATH.DIR.SRC }/` )[1].split( '/' ) ; 
		let fileName = evtPath.pop().replace( /\.js$/ , '' ) ; 

		console.log( 'evtPath : ' , evtPath ) ; 
		console.log( 'fileName : ' , fileName ) ; 

		switch( !0 ) {
			case evtPath.length == 1 : 
				/*파일경로를 담고 있는 배열의 길이가 1개일 경우를 최상위 
				경로로 인지합니다. 최상위인 경우라면 현재 저장된 파일 하나만을 
				새로 번들링 하여 줍니다. */

				
				break ; 
			default : 
		} // end of switch 
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