import fs from 'fs' ; 
import client from './client' ; 
import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import express , { Router } from 'express'; 
import ReactDOMServer , { renderToString } from 'react-dom/server';
import ejs from 'ejs' ; 

const Index = Router() ; 

Index.get( '/' , ( req , res ) => {
	res.render( 'default' , {
		title : 'index - Welcome to the Gaesigner Blog' , 
		description : '메인페이지 - 개발지식을 공유하고싶어요' , 
		css : 'css/index.css' , 
		js : 'js/IndexContainer.js' , 
	}) ; 
}) ; 

export default Index ; 