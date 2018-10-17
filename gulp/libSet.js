import gulp from 'gulp' ; 
import fs from 'fs' ; 
import babel from 'gulp-babel' ; 
import webpackCompFunc from 'gulp_setting/template/webpackFunc' ; 
import getFiles from 'gulp_setting/template/getFiles' ; 
import PATH from 'Dir' ; 

const libSet = () => {
	console.log( '\n\n[ libSet ]' ) ; 
	return new Promise( ( resolve , reject ) => {
		let path = `${ PATH.appRoot }/${ PATH.SRC.LIB }/` ; 

		fs.readdir( path , ( err , fls ) => {
			// console.log( 'err : ' , err ) ; 
			// console.log( 'fls : ' , fls ) ; 

			let proms = [] ; 
			(async () => {
				await getFiles( path ).then( result => {
					result.map( fileName => {
						proms.push( webpackCompFunc( fileName.replace( '.js' , '' ) , {
							src : `${ PATH.appRoot }/${ PATH.SRC.LIB }` , 
							dest : `${ PATH.appRoot }/${ PATH.DEST.LIB }` 
						} )) ; 
					}) ; 
				}) ; 

				Promise.all( proms ).then( result => resolve() ) ; 
			})() ; 

		}) ; 
	}) ; 
}

export default libSet ; 