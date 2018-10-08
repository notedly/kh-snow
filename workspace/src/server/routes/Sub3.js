import fs from 'fs' ; 
import client from './client' ; 
import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import express , { Router } from 'express'; 
import ReactDOMServer , { renderToString } from 'react-dom/server';
import ejs from 'ejs' ; 

const Sub3 = Router() ; 

Sub3.get( '/' , ( req , res ) => {
	res.render( 'default' , {
		title : 'sub3 - Welcome to the Gaesigner Blog' , 
		description : '서베페이지 - 개발지식을 공유하고싶어요.' , 
		css : 'css/sub3.css' , 
		js : 'js/SubContainer3.js' , 
		body : 'sub3 페이지 입니다.' , 
	}) ; 
}) ; 

export default Sub3 ; 