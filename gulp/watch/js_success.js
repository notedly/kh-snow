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

		console.log( 'chkInfo.path : ' , chkInfo.path ) ; 
		chkInfo.path = chkInfo.path.split( '/workspace/' )[1] ;
		console.log( '--chkInfo.path : ' , chkInfo.path ) ; 

		let evtPath = chkInfo.path , 
			originalPath = chkInfo.path , 
			pathArr = originalPath.split( '/' ) , 
			fileName = pathArr.pop().replace( /\.js$/ , '' ) , 
			crntData = null , 
			pathStr = '' ; 

		pathArr.shift() ; 

		crntData = {
			originalPath : originalPath , 
			fileName : fileName , 
			pathArr : pathArr , 
		} ; 

		console.log( 'pathArr : ' , pathArr ) ; 

		switch ( !0 ) {
			case crntData.pathArr[1] == 'include' : 
				/*공통사용 js 파일인 경우 진입*/
				console.log( 'common in' ) ; 
				getFiles( `${ PATH.appRoot }/${ PATH.SRC.JS }/` ).then( result => {
					result.map( fileName => {
						webpackCompFunc( fileName.replace( '.js' , '' ) , () => {
							resolve() ; 
						}) ; 
					}) ; 
				}) ; 
				break ; 

			case crntData.pathArr.length == 1 : 
				/*디렉토리 레벨이 0인 경우 진입*/
				console.log( 'depth 0 in' ) ; 
				pathStr = `/${crntData.pathArr.join( '/' )}/` ; 
				webpackCompFunc( crntData.fileName , () => {
					resolve() ; 
				}) ; 
				break ; 

			default : 
				/*디렉토리 레벨이 0이 아닌경우*/
				console.log( 'yeah' , crntData.pathArr ) ; 
				getFiles( `${ PATH.appRoot }/${ PATH.SRC.JS }/` ).then( result => {
					let rsltFileNames = [] ; 
					result.map( fileName => {
						console.log( 'crntData.pathArr[1] : ' , crntData.pathArr[1] ) ; 
						console.log( 'fileName : ' , fileName ) ; 
						fs.readFile( `html/js/${fileName}` , 'utf8' , ( err , fileData ) => {
							let re = new RegExp( `^import.*\/${crntData.pathArr[1]}` , 'gm' ) ; 
							let findStr = re.exec( fileData ) ; 

							// console.log( findStr ) ; 

							if ( findStr != null ) {
								rsltFileNames.push( fileName ) ; 
							} else {
								rsltFileNames.push( null ) ; 
							}

							if ( rsltFileNames.length == result.length ) {
								let rslt = rsltFileNames.filter( f => f != null )[0]; 
								if ( rslt != null ) {
									webpackCompFunc( rslt.replace( '.js' , '' ) , () => {
										resolve() ; 
									}) ; 
								} else {
									console.log( 'import된 상위 js파일이 존재하지 않습니다. import 하고싶은 파일을 설정하여주십시오.' ) ; 
								}
							}
						}) ; 
					}) ; 
				}) ; 
			break ; 
		} // end of switch 

	}) ; 
} ; 

const js = () => {
	console.log( '\n\n[ watch js ]' ) ; 
	gulp.watch( `${ PATH.appRoot }\\${ PATH.SRC.JS }\\**\\*.js` ).on( 'all' , ( evt , path , stats ) => {
		console.log( 'path' , path ) ; 
		let chkInfo = chkEvtFunc( evt , path ) ; 
		console.log( 'chkInfo : ' , chkInfo ) ; 
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