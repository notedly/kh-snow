import gulp from 'gulp' ; 
import spritesmith from 'gulp.spritesmith' ; 
import mergeStream from 'merge-stream' ; 
import mustache from 'mustache' ; 
import fs from 'fs' ; 
import PATH from 'Dir' ; 

const copy = () => {
	console.log( '\n\n[ in imgSet ]\n[img copy]' ) ; 
		return new Promise( resolve => {
			/*
				옮겨질 이미지 경로를 설정합니다. 
				gulp.src가 배열을 받을 수 있기 떄문에 
				옮겨지면 안되는 폴더도 추가하여 줍니다. 

				이미지 경로를 \\ 가 아닌 / 로 수정한것은 
				\\ 일경우에 gulp.dest 가 파일이 존재하는 위치부터가 아닌
				파일을 존재하는 최상위 부모까지의 폴더구조를 복사하여 옮겨주기 떄문에 
				불필요한 폴더들과 폴더구조가 생성됩니다. 
				그렇기에 정확히 필요한 폴더만 복사하기 위해 / 를 사용하여줍니다. 

				처리가 완전히 끝났다는것을 다음 task에 알려주기 위해 
				비동기 리스너 on 을 사용하여 Promise가 성공했다는 것을 알려줍니다. 
			*/

			gulp.src([ `${ PATH.appRoot}/${ PATH.DIR.SRC }/images/*` , `!${ PATH.appRoot}\\${ PATH.SRC.IMAGES }\\sprite` ])
				.pipe( gulp.dest( `${ PATH.appRoot}/${ PATH.DIR.DEST }/images` ) )
				.on( 'finish' , resolve ) ; 
		}) ; 
} ; 

const sprite = () => {
	console.log( '\n\n[ img sprite ]' ) ; 
	const createSpriteOption = ( dirName ) => {
		let mustacheTemplate = './template/sp-mosaic.mustache' ; 
		let spriteOptions = {
			cssOpts : {
				zerounit : function () {
					return function ( text , render ) {
						let value = render(text) ; 
						return '0px' === value ? '0' : value ; 
					}
				}
			} , 
			padding : 4 , 
			algorithm : 'binary-tree' , 
			cssTemplate : function ( params ) {
				let template = fs.readFileSync( mustacheTemplate , { encoding : "utf-8" });
				return mustache.render( template , params ) ; 
			} , 
			imgPath : '../images/sprite' + '/sp-' + dirName + '.png' , 
			imgName : 'sp-' + dirName + '.png' , 
			cssName : 'sp-' + dirName + '.scss' , 
			cssSpritesheetName : 'sp-' + dirName  
		} ; 
		return spriteOptions ; 
	} ; 

	return new Promise( resolve => {
		let path = `${ PATH.appRoot }\\${ PATH.SRC.IMAGES}\\sprite\\` ; 

		fs.readdir( path , ( err , files ) => {
			files.forEach( dirName => {
				/*색출된 이름들이 폴더가 아니라면 진입을 불허합니다.*/
				if ( !fs.lstatSync( `${ path }${ dirName }` ).isDirectory() ) return ; 

				/**
				@spriteData : spritesmith 를 사용하여 만들어낸 데이터를 담습니다. 
				@imgStream : 이미지 데이터를 담습니다. 
				@cssStream : CSS 데이터를 담습니다. 
				**/
				
				let spriteData = gulp.src( `${ path }\\${ dirName }\\*.png` )
					.pipe( spritesmith( createSpriteOption( dirName )) ) ; 

				let imgStream = spriteData.img
					.pipe( gulp.dest( `${ PATH.appRoot }/${ PATH.DEST.IMAGES }\\sprite` ) ) ; 

				let cssStream = spriteData.css
					.pipe( gulp.dest( `${ PATH.appRoot }/${ PATH.SRC.SCSS }\\ui\\sprite` ) ) ; 

				resolve( mergeStream( imgStream , cssStream ) ) ; 
			}) ; 

		}) ; 
	}) ; 
} ; 

const imgSet = gulp.series( copy , sprite ) ; 

export default imgSet ; 