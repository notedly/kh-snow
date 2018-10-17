import gulp from 'gulp' ; 
import PATH from 'Dir' ; 
import chkEvtFunc from 'gulp_setting/template/chkEvtFunc' ; 
import browserSync from 'browser-sync' ; 
import { server } from 'gulp_setting/watch/server' ; 
import webpackCompFunc from 'gulp_setting/template/webpackFunc' ; 

const lib = () => {
	console.log( '\n\n[ watch lib ]' ) ; 
	gulp.watch( `${ PATH.appRoot }\\${ PATH.SRC.LIB }\\**\\*.js` ).on( 'all' , ( evt , path , stats ) => {
		console.log( evt , path ) ; 
		let chkInfo = chkEvtFunc( evt , path ) ; 
		if ( !chkInfo.bln ) return ; // 현재 감지된 파일이 존재하지 않으면( bln == false ) 작업을 멈춥니다.

		path = path.replace( /\//g , '\\' ) ; 
		let fileName = path.substr( path.lastIndexOf( '\\' ) + 1 , path.length ) ; 
		let destPath = path.substr( 0 , path.lastIndexOf( '\\') ) ; 
		destPath = destPath.replace( 'workspace\\src' , 'workspace\\build' ) ; 

		(async () => {
			await webpackCompFunc( fileName.replace( '.js' , '' ) , {
				src : `${ PATH.appRoot }/${ PATH.SRC.LIB }` , 
				dest : `${ PATH.appRoot }/${ PATH.DEST.LIB }` 
			}) ; 
			await server( `${ PATH.appRoot }\\${ PATH.SRC.SERVER }/app.js` ) ; 
			browserSync.reload() ; 
		})() ; 
	}) ; 
}
export default lib ; 