import gulp from 'gulp' ; 
import fs from 'fs' ; 
import babel from 'gulp-babel' ; 
import webpackCompFunc from 'gulp_setting/template/webpackFunc' ; 
import getFiles from 'gulp_setting/template/getFiles' ; 
import PATH from 'Dir' ; 

const jsSet = () => {
	console.log( '\n\n[ jsSet ]' ) ; 
	return new Promise( ( resolve , reject ) => {
		let path = `${ PATH.appRoot }/${ PATH.SRC.JS }/` ; 

		fs.readdir( path , ( err , fls ) => {
			let proms = [] ; 
			(async () => {
				await getFiles( path ).then( result => {
					let tmp = result.filter( fileName => fileName.match( /.js$/g ) ) ; 
					tmp.map( fileName => {
						proms.push( webpackCompFunc( fileName.replace( '.js' , '' ) ) ) ; 
					}) ; 
				}) ; 

				Promise.all( proms ).then( result => resolve() ) ; 
			})() ; 

		}) ; 
	}) ; 
}

export default jsSet ; 