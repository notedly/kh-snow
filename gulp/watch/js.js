import fs from 'fs' ; 
import gulp from 'gulp' ; 
import PATH from 'Dir' ; 
import babel from 'gulp-babel' ; 
import webpackCompile from 'gulp_setting/webpackCompile' ; 
import browserSync from 'browser-sync' ; 
import { server } from 'gulp_setting/watch/server' ; 
import chkEvtFunc from 'gulp_setting/template/chkEvtFunc' ; 
import getFiles from 'gulp_setting/template/getFiles' ; 
import webpackCompFunc from 'gulp_setting/template/webpackFunc' ; 

const jsSet = ( chkInfo ) => {
	console.log( '\n\n[ watch jsSet ]' ) ; 
	return new Promise( resolve => {
		// console.log( 'chkInfo.path : ' , chkInfo.path ) ; 
		// console.log( 'PATH : ' , PATH.DIR.SRC ) ; 
		/**
		@evtPathArr - Array : 저장된 파일을 담고있는 현재의 파일경로
		@fileName - String : 저장된 파일명
		**/

		let evtPathArr = chkInfo.path.split( `${ PATH.DIR.SRC }/` )[1].split( '/' ) ; 
		let fileName = evtPathArr.pop().replace( /\.js$/ , '' ) ; 
		let path = `${ PATH.appRoot }/${ PATH.SRC.JS }/` ; 

		switch( !0 ) {
			case evtPathArr.length == 1 : 
				console.log( 'depth 0') ; 
				/*파일경로를 담고 있는 배열의 길이가 1개일 경우를 최상위 
				경로로 인지합니다. 최상위인 경우라면 현재 저장된 파일 하나만을 
				새로 번들링 하여 줍니다.*/

				( async () => {
					await webpackCompFunc( fileName ) ; 
					browserSync.reload() ; 
				})() ; 
				
				break ; 
			case evtPathArr[1] == 'include' : 
				console.log( 'depth 1 - include') ; 
				/*파일경로를 담고 있는 배열의 1번째 배열이 include 를 담고있다면 
				공용으로 사용되는 파일을 선택한 것으로 간주합니다. 공용파일이기에 
				최상위파일들중에 공용파일을 사용하고 있는 모든 js 파일들을 모두 새로 
				번들링하여 줍니다.*/

				function compileFunc ( filePathArr ) {
					let proms = [] ; 
					filePathArr.map( fileName => {
						proms.push( webpackCompFunc( fileName.replace( '.js' , '' ) ) ) ; 
					}) ; 

					Promise.all( proms ).then( result => {
						browserSync.reload() ; 
					}) ; 
				}

				getFiles( path ).then( result => {
					let filesArr = [] ; 
					result.map( ( fileName , idx ) => {
						fs.readFile( `${ path }${fileName}` , 'utf8' , ( err , fileData ) => {
							let re = new RegExp( `^import.*\/include/` , 'gm' ) ; 
							let findStr = re.exec( fileData ) ; 

							if ( findStr != null ) {
								filesArr.push( fileName ) ; 
							}

							if ( idx == result.length -1 ) {
								compileFunc( filesArr ) ; 
							}
						}) ; 
					}) ; 
				}) ; 

				break ; 
			default : 
				console.log( 'default ') ; 
				/*파일경로가 공용이나 메인파일들이 아닌겨우에 집인을 허가합니다. 
				이파일들의 폴더내의 깊이가 얼마가 되든지 간에 서브 파일들을 담아두는 
				폴더명은 항상 배열의 1번째가 되기에 1번 배열의 폴더명을 가진 최상위 파일이 무엇인지를 찾아냅니다. 
				찾아낸 파일은 새로 번들링하여 줍니다. */
				getFiles( path ).then( result => {
					let filesArr = [] ; 
					result.map( ( fileName , idx ) => {
						fs.readFile( `${ path }${fileName}` , 'utf8' , ( err , fileData ) => {
							let re = new RegExp( `^import.*\/${evtPathArr[1]}` , 'gm' ) ; 
							let findStr = re.exec( fileData ) ; 

							if ( findStr != null ) {
								filesArr.push( fileName ) ; 
							}

							if ( idx == result.length -1 ) {
								let rslt = filesArr.filter( f => f != null )[0]; 
								if ( rslt != null ) {
									( async () => {
										await webpackCompFunc( rslt.replace( '.js' , '' ) ) ; 
										browserSync.reload() ; 
									})() ; 
									
								} else {
									console.log( 'import된 상위 js파일이 존재하지 않습니다. import 하고싶은 파일을 설정하여주십시오.' ) ; 
								}
							}
						}) ; 
					}) ; 
				}) ; 
		} // end of switch 
	}) ; 
} ; 

const js = () => {
	console.log( '\n\n[ watch js ]' ) ; 
	gulp.watch( `${ PATH.appRoot }\\${ PATH.SRC.JS }\\**\\*.js` ).on( 'all' , ( evt , path , stats ) => {
		let chkInfo = chkEvtFunc( evt , path ) ; 
		if ( !chkInfo.bln ) return ; // 현재 감지된 파일이 존재하지 않으면( bln == false ) 작업을 멈춥니다.

		(async () => {
			await jsSet( chkInfo ) ; 
			await server( `${ PATH.appRoot }\\${ PATH.SRC.SERVER }/app.js` ) ; 
			browserSync.reload() ; 
		})() ; 
	}) ; 
} ; 

export default js ; 