import fs from 'fs' ; 
import client from './client' ; 
import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import express , { Router } from 'express'; 
import ReactDOMServer , { renderToString } from 'react-dom/server';
import ejs from 'ejs' ; 

const Index = Router() ; 

Index.get( '/' , ( req , res ) => {
	res.render( 'default' , { init : {
		title : 'index - Welcome to the Gaesigner Blog' , 
		description : '메인페이지 - 개발지식을 공유하고싶어요' , 
		css : '/css/index.css' , 
		js : '/js/IndexContainer.js' , 
		lib : '/lib/tmp_lib1.js' , // 라이브러리를 추가할 수 있습니다. 
		// lib : [ 'lib/tmp_lib1.js' , 'lib/tmp_lib2.js' ] , // 배열형태로 여러개의 라이브러리를 추가할 수 도 있습니다. 
	}}) ; 
}) ; 

export default Index ; 