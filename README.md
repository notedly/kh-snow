# Gulp Default

Gulp 디폴트 세팅 Version 3.01 : 

gulp의 기본세팅 저장소 입니다. 
ES5, ES6, ES7 을 사용하기 위해 babel 로 세팅되어있습니다. 이 세팅은 기본적으로 프론트엔드단의 자동화를 담당하고있습니다.  

____
#자동 컴파일 목록
1. html (JSX) 
2. css (SASS) 
3. img 스프라이트 자동 컴파일 (png) 
4. js ( Server ) 
5. js ( Client )


## 작업 폴더 구조.

	
> 작업 폴더내에 파일을 생성하면 실시간으로 감지하여 컴파일 됩니다.

    workspce 
    |- src
    |-- css : sass파일이 컴파일되며 생성되는 폴더. 이 폴더는 컴파일 실행전에는 생성되지 않습니다.
    |-- scss : sass 파일 폴더.  
    |-- js : script 태그에 사용되는 파일 폴더. 
    |-- server : 서버실행에 필요한 파일 폴더. 
    |-- views : 기본 뷰(HTML)를 담당할 파일(템플릿 jsx 사용) 폴더.
	└ build : 빌드완성 폴더. src 폴더내의 파일들을 감지하여 로컬서버에서 동작할 수 있도록 파일들을 재배치 및 컴파일 하여줍니다.

## 폴더 설명

> - 가용자는 각 폴더내에 파일 및 서브폴더를 생성할 수 있습니다. 생성된 파일 및 폴더는 모두 실시간으로 감지되며 Gulp를 
> 다시 실행하지 않아도 바로 실행된 사이트에 적용됩니다. ( 단 images 폴더는 제외. 추후 진행할 예정입니다. ) 
>
> - 각 폴더에 예약어가 준비되어있어 변경하면 안되는 폴더명들이 존재합니다.
>
> **[ 변경하면 안되는 폴더이름 ]**
>    
> - images 폴더 : sprite
> - images 폴더 : include
> - scss 폴더 : common , ui
> - server 폴더 : routes
> - views 폴더 : parital
> 
> 위에 작성된 폴더를 제외하고 사용자 임의대로 추가 또는 삭제를 할 수 있습니다.

## 실행 방법
 
> gulpfile.babel.js 이 준비된 폴더에서 터미널을 실행하여 `gulp` 를 입력한 후 엔터를 치면 시작됩니다.

## Dir.js 
> - 위치 : workspace/Dir.js
> - 작업에 필요한 경로들을 담고있는 파일입니다. ( 일부 다른 정보들도 담고있습니다. )
> key , value 값의 오브젝트로 정리되어있으며 기본적으로 사용하거나 사용자가 value 값을 변경하여 사용해도 무방합니다.
> 
  
    const DIR = {
    	SRC : 'src' , // 실제 작업이 진행되는 폴더명  
    	DEST : 'build' , // 컴파일 되는 폴더명
    } ; 
    
    const PATH = {
    	appRoot : __dirname , // 작업폴더의 절대경로 
    	PORT : 8005 , // 로컬서버가 실행될 포트번호 
    	DIR : DIR , // PATH 오브젝트가 내보내지기에 DIR const를 PATH 내에 대입합니다.   
    	SRC : {
    		JS : `${ DIR.SRC }/js` , // js 파일 폴더명 
    		SERVER : `${ DIR.SRC }/server` , // 서버 폴더명
    		IMAGES : `${ DIR.SRC }/images` , // 이미지 폴더명
    		CSS : `${ DIR.SRC }/css` , // sass 파일이 컴파일되어 생성되는 css 폴더명
    		SCSS : `${ DIR.SRC }/scss` , // sass 파일 폴더명 
    		VIEW : `${ DIR.SRC }/views` , // view 파일 폴더명
    	} , 
    	DEST : {
    		JS : `${ DIR.DEST }/js` , 
    		SERVER : `${ DIR.DEST }/server` , 
    		IMAGES : `${ DIR.DEST }/images` , 
    		CSS : `${ DIR.DEST }/css` , 
    		VIEW : `${ DIR.DEST }/views` , 
    	}
    } ; 
    
    export default PATH ; 


## Gulp Default 2x 에서 크게 달라진점
> - 웹사이트에서 보여질 뷰페이지를 물리적으로 생성할 필요가 없어졌습니다. 
> Route 에서 논리적으로 생성된 템플릿을 활용하여 페이지가 만들어집니다.

	// /server/app.js 내용중 일부
	.
	..
	...
    app.set( 'views' , `${ absolutePath }views` ) ; 
    app.set('view engine', 'js');
    app.engine('js', reactViews.createEngine());
    app.use( '/' , express.static( `${ absolutePath }/` )) ; 
	...
	..
	. 

>views 폴더에 존재하는 default.js 파일을 활용하여 기본적인 레이아웃을 생성합니다. 이 views 를 활용하는 방법은 
샘플 페이지들을 확인하여 주십시오. ( server/routes/ 내의 파일들과 , js/ 내의 파일들에서 확인하실 수 있습니다. ) 
각 샘플들은 확인하시 쉽도록  `gulp` 실행 후 열리는 웹페이지에 준비되어있습니다. 


## 서버 실행 캐시 오류시 해결 방법

	Error: listen EADDRINUSE :::8005 // 포트번호는 Dir.js 파일에서 확인 및 변경하실 수 있습니다. 
    at Object.exports._errnoException (util.js:1018:11)
    at exports._exceptionWithHostPort (util.js:1041:20)
    at Server._listen2 (net.js:1262:14)
    at listen (net.js:1298:10)
    at Server.listen (net.js:1394:5)
> 서버가 비정상적으로 종료되었거나 터미널을 재실행할 경우 이전 서버 포트의 캐시가 남아있을경우 루트폴더(/)에있는 파일
> `Shutdown.bat` 파일이나 `Shutdown_continue.bat` 파일을 실행하여 이전에 남아있는 캐시 포트를 삭제 후 `gulp`를 
> 재실행 해주시면 해결이 가능합니다. 
>
> 만약 자주 서버포트오류가 발생되면 터미널에서 수동입력(`gulp`)이 아닌 `start.sh` 파일을 더블클릭하여 
> 자동으로 서버를 실행하여주십시오.  


## Gulp Default 버전별 링크
> * ver2 보러가기 - [https://jjackkun@bitbucket.org/inreverse8/gulp-default.git](https://jjackkun@bitbucket.org/inreverse8/gulp-default.git "gulp-default version 1")
> * ver1 보러가기 - [https://jjackkun@bitbucket.org/inreverse8/gulp-default.git](https://jjackkun@bitbucket.org/inreverse8/gulp-default.git "gulp-default version 1")


## 업데이트 현황

#### 2018-10-17
###### 자동 컴파일 기능 업그레이드
> - Gulp Default 3.1 기본 기능이 완성되었습니다.