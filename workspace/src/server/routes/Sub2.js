import fs from 'fs' ; 
import client from './client' ; 
import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import express , { Router } from 'express'; 
import ReactDOMServer , { renderToString } from 'react-dom/server';
import ejs from 'ejs' ; 

const Sub2 = Router() ; 

Sub2.get( '/' , ( req , res ) => {
	res.render( 'default' , {
		title : 'sub2 - Welcome to the Gaesigner Blog' , 
		description : '서베페이지 - 개발지식을 공유하고싶어요.' , 
		css : 'css/sub2.css' , 
		js : 'js/SubContainer2.js' , 
		body : 'sub2 페이지 입니다.' , 
	}) ; 
}) ; 

export default Sub2 ; 