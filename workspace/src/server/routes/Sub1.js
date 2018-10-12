import fs from 'fs' ; 
import client from './client' ; 
import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import express , { Router } from 'express'; 
import ReactDOMServer , { renderToString } from 'react-dom/server';
import ejs from 'ejs' ; 

const Sub1 = Router() ; 

Sub1.get( '/' , ( req , res ) => {
	res.render( 'default' , {
		title : 'sub1 - Welcome to the Gaesigner Blog' , 
		description : '서베페이지 - 개발지식을 공유하고싶어요.' , 
		css : 'css/sub1.css' , 
		js : 'js/SubContainer1.js' , 
		lib : 'lib/tmp_lib1.js' , 
	}) ; 
}) ; 

export default Sub1 ; 