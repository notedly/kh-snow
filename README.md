# Gulp Default

Gulp 디폴트 세팅 V 2.01 : 

gulp의 기본세팅 저장소 입니다. 해당 gulp는 버전 3.x로 제작되어있습니다. 
ES5, ES6, ES7 을 사용하기 위해 babel 로 세팅되어있습니다. 이 세팅은 기본적으로 
프론트엔드단의 자동화를 담당하고있습니다. 

____
###### 업데이트 방법

> - 저장소를 클론하신후 culp의 업데이트가 필요합니다.
> - 기존의 gulp 버전과 gulp-cli 버전을 업데이트 하여주십시오.


    # first uninstall gulp globally
    npm uninstall gulp -g
    
    # uninstall from your project directory, or delete node_modules if you need a coffee break
    npm uninstall gulp
    
    # install the latest Gulp 4 CLI tools globally
    npm install gulpjs/gulp-cli -g
____


#자동 컴파일 목록
1. html (EJS) 
2. css (SASS) 
3. img 스프라이트 자동 컴파일 (png) 
4. js 


## 기본 파일 및 폴더

[file]: 
.babelrc
.gitignore
dir.js
gulpfile.babel.js
package.json

[folder]
server
html
template


## 작업 폴더 구조.

    html
    └ css
    └ images
      └ sprite
    └ js
      └ 'Any Custom Folder & File'
      └ include // 공통으로 사용할 모듈 폴더
    └ lib 
    └ scss
      └ ui
      └ 'Any Custom Folder & File'


## 폴더 설명
html : 
작업자가 작업하기 위한 최상위 폴더명입니다.

css : 
SASS 로 제작된 파일의 최종본이 컴파일 되어 저장되는 임시 폴더 입니다.

images : 
이미지들을 저장해두는 폴더 입니다.

images > sprite : 
폴더내에 원하는 이름대로 폴더를 새롭게 생성시킬 수 있습니다. 생성된 폴더에 확장자 png 이미지들을 
저장해두면 컴파일시 생성해두었던 폴더명으로 sprite 이미지를 생성하여 줍니다. 

js : 
Javascript 파일들을 담아둡니다. 

js > 사용자정의 생성폴더 : 
원하는 이름대로 폴더를 생성하여 js 파일을 생성할 수 있습니다. 자신의 상위 폴더인 ui 에서 js 파일을 
import 시 상위폴더에 속해있는 파일을 포함하고 있는 최상위 파일을 찾아내어 자동으로 컴파일 하여 줍니다. 
컴파일이 완료되면 반영을 위해 웹페이지를 자동으로 새로고침 합니다.

____

## 업데이트 상황

### 2018-06-12

> [ JS ]
>   
> * 자바스크립트 컴파일 속도개선이 있었습니다. 기존 컴파일 방식이 js 파일이 많아질수록 느려지는 코드로직이 변경되었습니다. 
> * 자바스크립트 예제를 확인할 수 있도록 예시 폴더와 파일들이 추가되었습니다.
> 
> [ Gulpfile ]
>  
> * gulp 전용 폴더가 추가되었습니다. 하나의 파일로 코딩되어있던 gulpfile.bable.js 의 코드들을 모듈별로 분류하여 수정, 확인이 쉽도록 변경하였습니다. 이제 개인 작업을 시작시 자신에게 필요한 모듈만을 추가 혹은 삭제해서 사용할 수 있습니다. 
> * 각 모듈별 코드 로직을 개선하여 속도를 향상 시켰습니다. 
>   

### 2018-02-07

###### 자동 컴파일 기능 업그레이드

> * 기존 ver 1.04 의 컴파일기능과 같이 자동으로 파일들을 컴파일하여 브라우저에 반영하여 줍니다. 이전 1버전인 때의 오류점인 브라우저가 실행중일때 파일 또는 폴더를 생성/삭제할경우 permision 문제로 gulp가 다운되는것을 방지하였습니다. 실시간으로 파일 또는 폴더를 생성하여 수정하거나 삭제하여도 다운되지 않으며 자동으로 작성코드들을 컴파일하여 브라우저에 반영합니다.
 
###### 서버 셧다운

> * gulp가 강제로 셧다운 되었을경우 기존 port가 살아있어 다시 gulp를 구동하였을때 기존 port의 캐시 때문에 추가되는 파일들이 정상적으로 적용되지 않던 오류를 수정하였습니다. 셧다운 되었을경우 이제 셧다운시에도 gulp를 실행하여 주시면 정상적으로 서버가 동작됩니다. 
> * 만약 캐시가 남아있을경우 처리를 원하신다면 root폴더에 존재하는 `Shutdown_continue.bat` 파일을 실행하여 주십시오. 
  

### ~ 2018-01-26

###### ver 1.04 완료

> * ver1 보러가기 - [https://jjackkun@bitbucket.org/inreverse8/gulp-default.git](https://jjackkun@bitbucket.org/inreverse8/gulp-default.git "gulp-default version 1")
