## src

#### css 폴더
기본적으로는 생성되지 않는 폴더입니다. scss 폴더내의 파일들이 컴파일되면서 생성되는 폴더입니다. 이 폴더의 내용은 복제되어 build 폴더에 동일한 경로로 옮겨져 사용됩니다.

#### images 폴더
이미지들을 담당합니다.
 
- svg 이미지
- 일반 이미지
- 스프라이트 이미지 



> 스프라이트이미지는 폴더내에 자신이 원하는 폴더명을 추가하여 스프라이트로 사용하고싶은 이미지를 추가할 수 있습니다. 추가된 이미지들은 컴파일되며 build 폴더에 동일한 경로로 옮겨져 사용됩니다. 스프라이트로 생성된 이미지는 스프라이트가 담긴 폴더명으로 sass 파일이 만들어지며 sass 파일내에서 각각의 이미지명으로 변수처리되어 사용이 가능합니다. 

#### js 폴더
es6 이상으로 작업이 가능하며 작성된 파일은 서브폴더에서 작성된 js 파일들을 import 할 수 있습니다. 예약어로 만들어진 include 폴더명은 삭제 또는 수정이 불가능합니다. 그외의 모든 파일이나 폴더는 사용자가 직접 추가하거나 수정할 수 있습니다. js폴더에서 생성된 파일은 하위 폴더의 파일들을 import 할 수 있으며 import 된 파일들은 갯수에 상관없이 컴파일시 상위파일내부에 삽입되어 하나의 파일로 완성됩니다. 이 완성된 파일은 build 폴더에 동일한 경로로 옮겨져 사용됩니다. 
이곳에서 작성된 파일은 express 세팅시 route 에 추가할 수 있습니다.   

    // 코드예시
	Index.get( '/' , ( req , res ) => {
    	res.render( 'default' , {
    		title : 'index - Welcome to the Gaesigner Blog' , 
    		description : '메인페이지 - 개발지식을 공유하고싶어요' , 
    		css : 'css/index.css' , 
    		js : 'js/IndexContainer.js' , // 추가하고 싶은 js파일을 js의 value 에 추가할 수 있습니다.  
    	}) ; 
    }) ; 

#### lib 폴더
es6 이상으로 작업이 가능하며 작성된 파일은 build 폴더에 동일한 경로로 옮겨져 사용됩니다. lib폴더에서 생성된 파일은 개별적으로 움직일 수 있으며 import 가 아닌 `<script src="">` 의 src 경로에 추가됩니다. 완성된 파일은 build 폴더에 동일한 경로로 옮겨져 사용됩니다. 이곳에서 작성된 파일은 express 세팅시 route 에 추가할 수 있습니다.


    // 코드예시
	Index.get( '/' , ( req , res ) => {
    	res.render( 'default' , {
    		title : 'index - Welcome to the Gaesigner Blog' , 
    		description : '메인페이지 - 개발지식을 공유하고싶어요' , 
    		css : 'css/index.css' , 
    		js : 'js/IndexContainer.js' , // 추가하고 싶은 js파일을 js의 value 에 추가할 수 있습니다.   
			lib : 'lib/tmp_lib1.js' , 
			// lib : [ 'lib/tmp_lib1.js' ] , 배열형태로 여러개의 라이브러리를 추가할 수 도 있습니다. 
    	}) ; 
    }) ;

#### scss 폴더
SASS 파일 작성할 수 있습니다. 완성된 scss 파일은 컴파일시 동일한 폴더위치에 있는 css 폴더에 옮겨집니다. 이 컴파일된 css 파일은 build 폴더로 자동으로 복제됩니다. 

#### server 폴더
서버 환경을 작성할 수 있습니다. NodeJS의 express를 사용하고 있으며 route를 추가하여 페이지를 구성할 수 있습니다. 
예약포로더로 routes를 가지고 있으며 client.js 에서  데이터베이스에 접속할 수 있습니다. 

#### views 폴더
웹페이지의 템플릿을 작성할 수 있습니다. 기본적으로 default 파일을 가지고있으며 JSX 템플릿을 사용합니다. 여기서 작성된 파일은 server/app.js 내부에서 사용됩니다.